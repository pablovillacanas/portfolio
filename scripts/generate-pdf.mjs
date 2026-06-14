/**
 * Genera CV-PabloVillacanas.pdf a partir de /print-cv.
 *
 * Uso: node scripts/generate-pdf.mjs [--url http://localhost:3000]
 *
 * Requisitos: puppeteer instalado (yarn add -D puppeteer).
 * El servidor debe estar arriba en la URL indicada.
 */

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { createServer } from 'net';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Parse --url flag
const urlFlag = process.argv.indexOf('--url');
const BASE_URL =
  urlFlag !== -1 ? process.argv[urlFlag + 1] : 'http://localhost:3000';

const CV_URL = `${BASE_URL}/print-cv`;
const OUTPUT = path.join(ROOT, 'public', 'CV-PabloVillacanas.pdf');

async function isPortOpen(port) {
  return new Promise((resolve) => {
    const s = createServer();
    s.once('error', () => resolve(true));
    s.once('listening', () => {
      s.close();
      resolve(false);
    });
    s.listen(port, '127.0.0.1');
  });
}

async function waitForServer(url, timeoutMs = 30_000) {
  const { default: http } = await import('http');
  const { default: https } = await import('https');
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    await new Promise((r) => setTimeout(r, 500));
    try {
      await new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, (res) => {
          res.resume();
          resolve(res.statusCode);
        });
        req.on('error', reject);
        req.setTimeout(2000, () => req.destroy());
      });
      return true;
    } catch {
      // keep waiting
    }
  }
  return false;
}

async function main() {
  const port = parseInt(new URL(BASE_URL).port || '3000', 10);
  const serverRunning = await isPortOpen(port);

  if (!serverRunning) {
    console.log(`⚠  No hay servidor en ${BASE_URL}.`);
    console.log('   Arranca el servidor con  yarn dev  y vuelve a ejecutar.');
    process.exit(1);
  }

  console.log(`🌐  Conectando a ${CV_URL} …`);

  const ready = await waitForServer(CV_URL, 10_000);
  if (!ready) {
    console.log('✗  El servidor no respondió a tiempo.');
    process.exit(1);
  }

  console.log('🚀  Lanzando Chromium …');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    await page.emulateMediaType('print');
    await page.goto(CV_URL, { waitUntil: 'networkidle0', timeout: 30_000 });

    // Wait for fonts and images
    await page.waitForFunction(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 800));

    await page.pdf({
      path: OUTPUT,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`✅  PDF generado en: ${OUTPUT}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('✗ Error:', err.message);
  process.exit(1);
});
