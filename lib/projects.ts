import fs from "fs";
import path from "path";

export interface Project {
  titulo: string;
  cliente: string;
  periodo: string;
  estado: string;
  rol: string;
  stack: string[];
  descripcion: string;
  impacto: string;
  mostrarEnPortfolio: boolean;
  notas: string;
}

const PROJECTS_FILE = path.join(process.cwd(), "content", "projects.md");

/**
 * Minimal parser for content/projects.md.
 *
 * Format: blocks separated by a line containing only "---". Each block
 * starts with a "## Heading" and contains "- key: value" lines. Values
 * can span multiple lines using YAML-ish ">" (folded) or "|" (literal)
 * block scalars with indentation.
 *
 * This is intentionally dependency-free (no gray-matter/yaml) so it
 * works without an `npm install` step.
 */
export function getAllProjects(): Project[] {
  let raw: string;
  try {
    raw = fs.readFileSync(PROJECTS_FILE, "utf-8");
  } catch {
    return [];
  }

  const blocks = raw.split(/\n-{3,}\n/g);

  const projects: Project[] = [];

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed.startsWith("##")) continue; // skip intro / template / commented blocks
    if (trimmed.includes("<!--")) continue; // skip commented-out template

    const lines = trimmed.split("\n");
    const fields: Record<string, string> = {};
    let currentKey: string | null = null;
    let currentLines: string[] = [];
    let blockMode: ">" | "|" | null = null;

    const flush = () => {
      if (!currentKey) return;
      if (blockMode) {
        const text = currentLines.join(blockMode === ">" ? " " : "\n").trim();
        fields[currentKey] = text;
      }
      currentKey = null;
      currentLines = [];
      blockMode = null;
    };

    for (const line of lines.slice(1)) {
      const fieldMatch = line.match(/^- ([a-zA-Z_]+):\s?(.*)$/);
      if (fieldMatch) {
        flush();
        const [, key, value] = fieldMatch;
        if (value === ">" || value === "|") {
          currentKey = key;
          blockMode = value as ">" | "|";
          currentLines = [];
        } else {
          fields[key] = value.trim();
        }
        continue;
      }

      if (blockMode && /^\s+/.test(line)) {
        currentLines.push(line.trim());
      } else if (blockMode && line.trim() === "") {
        currentLines.push("");
      } else {
        flush();
      }
    }
    flush();

    if (fields.mostrar_en_portfolio?.toLowerCase() !== "si") continue;

    projects.push({
      titulo: fields.titulo ?? "",
      cliente: fields.cliente ?? "",
      periodo: fields.periodo ?? "",
      estado: fields.estado ?? "",
      rol: fields.rol ?? "",
      stack: (fields.stack ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      descripcion: fields.descripcion ?? "",
      impacto: fields.impacto ?? "",
      mostrarEnPortfolio: true,
      notas: fields.notas ?? "",
    });
  }

  return projects;
}
