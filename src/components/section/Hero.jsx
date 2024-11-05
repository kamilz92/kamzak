import { useLanguage } from "../../context/LanguageContext";
import { PiReadCvLogoLight } from "react-icons/pi";
import Button from "../Button";
import norwegianCV from "../../assets/pdfs/cv-norwegian.pdf";
import englishCV from "../../assets/pdfs/cv-english.pdf";
import { li } from "framer-motion/client";

const Hero = () => {
  const { isNorwegian } = useLanguage();

  const textContent = {
    title: isNorwegian ? "Hei, Jeg er Kamil! 👋" : "Hello, I'm Kamil! 👋",
    jobTitel: isNorwegian
      ? "Nyutdannet Dataingeniør"
      : "Recent Graduate in Data Engineering",
    description: isNorwegian
      ? "Jeg er på utkikk etter en spennende jobb innen IT, hvor jeg kan ta på meg nye utfordringer og utvikle meg videre. Klar for å finne den rette rollen."
      : "I'm looking for an exciting job in IT, where I can take on new challenges and continue growing. Ready to find the right role.",
    button1: isNorwegian ? "Last ned CV" : "Download CV",
    button2: isNorwegian ? "Kontakt Meg" : "Contact Me",
  };

  const handleDownloadCv = () => {
    const cv = isNorwegian ? norwegianCV : englishCV;
    const a = document.createElement("a");
    a.href = cv;
    a.download = "KamilZak_CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  };
  return (
    <section
      id="home"
      className="pt-[100px] bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-8 lg:py-24 scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6">{textContent.title}</h1>
          <span className="text-primaryLight dark:text-primaryDark uppercase my-2 tracking-widest">
            {textContent.jobTitel}
          </span>
          <p className="text-lg mb-8 max-w-[400px]">
            {textContent.description}
          </p>
          <div className="flex space-x-2 md:space-x-6">
            <Button version={1} icon={PiReadCvLogoLight} onClick={handleDownloadCv}>
              {textContent.button1}
            </Button>
            <Button version={2} href="#contact" link>
              {textContent.button2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
