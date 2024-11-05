import { useLanguage } from "../../context/LanguageContext";
import pictureOfme from "../../assets/pictureOfme.jpg";

import { PiStudent, PiReadCvLogoLight } from "react-icons/pi";
import { CiLink } from "react-icons/ci";

import Button from "../Button";
import Heading from "../Heading";
import Container from "../Container";

import norwegianCV from "../../assets/pdfs/cv-norwegian.pdf";
import englishCV from "../../assets/pdfs/cv-english.pdf";
import cer from "../../assets/pdfs/cer.pdf";

const About = () => {
  const { isNorwegian } = useLanguage();

  const textContent = isNorwegian
    ? {
        aboutMe:
          "Jeg er en 32 år gammel mann som har bodd i Norge siden jeg var 15 år. Jeg har en stor interesse for teknologi, spesielt innen D&D, gaming og IT. Jeg er ivrig etter å komme i gang med en karriere i IT-bransjen og ser frem til å bidra med mine ferdigheter og lære mer underveis.",
        education:
          "Jeg holder på å fullføre min dataingeniørutdanning ved Høgskulen på Vestlandet, med spesialisering innen kunstig intelligens og algoritmer. Tidligere fullførte jeg et toårig studium ved Noroff med fokus på frontend-utvikling.",
        experience:
          "Jeg har gjennomført flere kurs på plattformer som Udemy, med fokus på frontend- og backend-utvikling. Min viktigste erfaring kommer fra bacheloroppgaven min, som jeg skrev for PIV (Patologi i Vestlandet).",
        link: "Lenken til artikel om min bachelor oppgave",
        certificate: "Vis vitnemål",
        cv: "Vis CV",
      }
    : {
        aboutMe:
          "I'm a 32-year-old man who has lived in Norway since I was 15. I have a strong passion for technology, especially in D&D, gaming, and IT. I'm eager to start my career in the IT industry, looking forward to applying my skills and learning along the way.",
        education:
          "I'm in the process of completing my degree in data engineering at the Western Norway University of Applied Sciences, specializing in artificial intelligence and algorithms. Before that, I completed a two-year program in frontend development at Noroff.",
        experience:
          "I’ve completed several courses on platforms like Udemy, focusing on both frontend and backend development. My most significant experience comes from my bachelor’s thesis, which I wrote for PIV (Pathology in Western Norway).",
        link: "Link to article about my bachelor thesis",
        certificate: "Show certificate",
        cv: "Show CV",
      };

  const handleShowCv = () => {
    const cv = isNorwegian ? norwegianCV : englishCV;
    window.open(cv, "_blank");
  };

  const handleShowCer = () => {
    window.open(cer, "_blank");
  }
  return (
    <Container id="about" className="scroll-m-16 md:scroll-mt-32">
      {/* About Me Section */}
      <div className="mb-12">
        <div className="flex flex-col gap-6 md:flex-row items-center mb-4">
          <div className="md:w-1/2">
            <Heading heading="h2">
              {isNorwegian ? "Om Meg" : "About Me"}
            </Heading>
            <p className="leading-relaxed text-lightText dark:text-darkText flex-grow mb-4 md:mb-10">
              {textContent.aboutMe}
            </p>
            <p className="leading-relaxed text-lightText dark:text-darkText flex-grow mb-4 md:mb-10">
              {textContent.education}
            </p>
            <p className="leading-relaxed text-lightText dark:text-darkText flex-grow mb-4">
              {textContent.experience}
            </p>
            <a
              href="https://www.helse-bergen.no/piv/sander-alina-and-kamil/"
              className="text-primaryLight dark:text-primaryDark flex gap-2"
            >
              {textContent.link} <CiLink size={25} />
            </a>
            <div className="flex space-x-2 md:space-x-6 mt-16">
              <Button version={2} icon={PiStudent} onClick={handleShowCer}>
                {textContent.certificate}
              </Button>
              <Button version={1} icon={PiReadCvLogoLight} onClick={handleShowCv}>
                {textContent.cv}
              </Button>
            </div>
          </div>
          <div className="w-1/2 hidden md:block rounded-3xl overflow-clip">
            <img
              src={pictureOfme}
              alt={isNorwegian ? "Bilde av meg" : "Picture of me"}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
