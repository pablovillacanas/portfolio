import { BsEnvelope, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const ContactContent = () => {
  return (
    <div>
      <p>
        Don't hesitate to get in touch!. You can mail me directly or reach me in
        my professional social networks :)
      </p>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
          margin: "1em 0em",
          cursor: "pointer",
        }}
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/pablo-villacanas/",
            "_newtab"
          );
        }}
      >
        <BsLinkedin size={32} />
        <span>Reach me on Linkedin</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
          margin: "1em 0em",
          cursor: "pointer",
        }}
        onClick={() =>
          (location.href =
            "mailto:pablo.villacanas@gmail.com" +
            "&subject=" +
            "Hi!" +
            "&body=" +
            "")
        }
      >
        <BsEnvelope size={32} />
        <span>pablo.villacanas@gmail.com</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
          margin: "1em 0em",
        }}
      >
        <BsWhatsapp size={32} />
        <span>+34 618812840</span>
      </div>
    </div>
  );
};

export default ContactContent;
