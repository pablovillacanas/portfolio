import React from "react";
import { useTheme } from "styled-components";
import { CustomTheme } from "./App";

const HomeContent = () => {
  const theme = useTheme() as CustomTheme;
  return (
    <div style={{ color: theme.colors.text }}>
      <p>
        After four years studying Psychology at the University of Santiago de
        Compostela and successfully graduating, I decided to reorient my
        professional career towards my true passion: software development.
      </p>
      <p>
        It was not the first time that I was faced with a source code. Since I
        was young, I stood out in technology subjects and specifically in those
        that had to do with programming. After a career that did not give me
        professional opportunities, but that served me for many other things
        (group work, research, etc.) I decided to try my luck with an extensive
        Java course.
      </p>
      <p>
        After a couple of years studying in a self-taught way, I decided to take
        a specialization course in multiplatform application development, which
        I managed to obtain with honors. Since then I have been researching and
        perfecting my skills inversting hundredS of hours in what I love the
        most: do software engineering.
      </p>
      <p>
        My first job was in Situm, a reaally cool startup that provides indoor
        positioning. In that company I've specialized in the frontend side,
        where I made a full high-performant and fully customizable realtime
        tracking panel. However I was also in touch with other technologies at
        the same time. From CI/CD and Kubernetes to async messaging queues with
        rabbitmq.
      </p>
      <p>
        Right now I'm working in Shell (one of the biggest companies in the
        world) as one of the frontend leads in my team delivering a portal from
        which traders can make their markets decissions. In my spare time I also
        work as freelancer.
      </p>
    </div>
  );
};

export default HomeContent;
