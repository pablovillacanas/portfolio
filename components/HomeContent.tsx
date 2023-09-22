import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import Image from "next/image";

const Content = styled.div`
  height: fit-content;
  .hide {
    transition: all 0.3s ease-in-out;
  }
  .hide > p {
    max-height: 0;
    margin: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  .show > p {
    max-height: 100%;
    margin: 1em 0;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  .show {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
  button {
    transition: all 0.3s ease-in-out;
  }
`;

const HomeContent = () => {
  const [seeFullContent, setSeeFullContent] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginBottom: "3em",
      }}
    >
      <div style={{ marginTop: "2em" }}>
        <Image
          src="/profile.webp"
          alt="profile photo"
          width="250"
          height="250"
        />
      </div>
      <Content style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p>
            In the world of technology, change is constant and evolution is key.
            As a freelancer programmer, I've made it my mission to stay ahead of
            the curve and bring value.
          </p>
        </div>
        <Button
          text={!seeFullContent ? "Show more" : "Show less"}
          onClick={function (): void {
            setSeeFullContent(!seeFullContent);
          }}
        ></Button>
        <div className={`${seeFullContent ? "show" : "hide"}`}>
          <p>
            As a passionate and dedicated freelancer programmer, I have been
            honing my skills and building my experience for over five years. My
            background in psychology has helped me to approach each project with
            a unique perspective, understanding the needs of my clients and
            tailoring my solutions accordingly. My proficiency in frontend
            technologies, including JavaScript and TypeScript, has been put to
            good use in various projects. However, I also comfortable using
            backend technologies, improving CI/CD or using cloud
            infraestructures as AWS or Azure.
          </p>
          <p>
            One of the projects I'm most proud of is the creation of a real-time
            tracking panel for Situm, one of the leaders companies in indoor
            positioning, or the improvement of dashboards for one of the major
            energy industries in the world. Those high-performance and fully
            customizable solution allowed both companies to easily visualize
            complex data and make more informed decisions. I love taking on
            challenges and finding creative solutions to improve the performance
            of companies.
          </p>
          <p>
            I am a results-driven and professional programmer who always puts in
            the extra effort to make sure that projects are delivered on time
            and within budget. I am open to new opportunities and looking
            forward to working with new clients and helping them achieve their
            goals.
          </p>
          <p>
            If you're looking for a dedicated, skilled, and creative programmer
            to bring your project to the next level, I'd be happy to discuss how
            I can help. Feel free to contact me and take a look at my portfolio
            and work samples.
          </p>
        </div>
      </Content>
    </div>
  );
};

export default HomeContent;
