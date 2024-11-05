import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MdEmail } from "react-icons/md";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

import Button from "../Button";
import Heading from "../Heading";
import Container from "../Container";

const Contact = () => {
  const { isNorwegian } = useLanguage();
  const formRef = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAIL = "kamilzaku@gmail.com";
  
  const textContent = isNorwegian
    ? {
        title: "Kontakt Meg",
        description:
          "Jeg er alltid interessert i å høre om spennende muligheter og prosjekter. Send meg gjerne en melding, så svarer jeg så fort jeg kan.",
        encouragement:
          "Enten du har et prosjekt i tankene, en jobbmulighet, eller bare vil si hei - jeg ser fram til å høre fra deg!",
        email: "Send E-post",
        formName: "Navn",
        formEmail: "E-post",
        formMessage: "Melding",
        formSubmit: "Send Melding",
        submitting: "Sender...",
        successMessage:
          "Takk for meldingen! Jeg vil svare deg så snart som mulig.",
        errorPrefix: "Beklager! ",
      }
    : {
        title: "Contact Me",
        description:
          "I'm always interested in hearing about exciting opportunities and projects. Feel free to send me a message, and I'll get back to you as soon as possible.",
        encouragement:
          "Whether you have a project in mind, a job opportunity, or just want to say hello - I'm looking forward to hearing from you!",
        email: "Send Email",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        formSubmit: "Send Message",
        submitting: "Sending...",
        successMessage:
          "Thanks for reaching out! I'll get back to you as soon as possible.",
        errorPrefix: "Sorry! ",
      };

  const handleEmailClick = async () => {
    try {
      // Try to open mailto
      window.location.href = `mailto:${EMAIL}`;

      // Also copy to clipboard as backup
      await navigator.clipboard.writeText(EMAIL);
      setShowEmailCopied(true);
      setTimeout(() => setShowEmailCopied(false), 2000);
    } catch (err) {
      console.error("Error handling email click:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = formRef.current;

    try {
      const response = await fetch("https://formspree.io/f/xpwaerya", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          setErrorMessage(
            data["errors"].map((error) => error["message"]).join(", ")
          );
        } else {
          setErrorMessage("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full 
    p-3 
    rounded-lg 
    bg-white 
    dark:bg-gray-900 
    border 
    border-gray-300 
    dark:border-gray-600 
    focus:outline-none 
    focus:ring-2 
    focus:ring-primaryLight 
    dark:focus:ring-primaryDark
    text-gray-900
    dark:text-gray-100
    placeholder-gray-500
    dark:placeholder-gray-400
    transition-colors
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  return (
    <Container id="contact" className="scroll-m-16 md:scroll-mt-0">
      <div className="mb-12">
        <div className="flex flex-col gap-12 md:flex-row items-start">
          {/* Contact Info */}
          <div className="md:w-1/2">
            <Heading heading="h2">{textContent.title}</Heading>
            <p className="leading-relaxed text-lightText dark:text-darkText mb-6">
              {textContent.description}
            </p>
            <p className="leading-relaxed text-lightText dark:text-darkText mb-8">
              {textContent.encouragement}
            </p>

            <div className="mb-8">
              <Button
                version={1}
                icon={MdEmail}
                onClick={() => (window.location.href = "mailto:kamilzaku@gmail.com")}
              >
                {textContent.email}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            {formSubmitted ? (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300">
                <FiCheckCircle className="w-5 h-5" />
                <p>{textContent.successMessage}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300">
                    <FiAlertCircle className="w-5 h-5" />
                    <p>{textContent.errorPrefix + errorMessage}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-lightText dark:text-darkText mb-2 font-medium"
                  >
                    {textContent.formName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lightText dark:text-darkText mb-2 font-medium"
                  >
                    {textContent.formEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lightText dark:text-darkText mb-2 font-medium"
                  >
                    {textContent.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                    className={inputClasses}
                  />
                </div>

                <Button version={1} type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? textContent.submitting
                    : textContent.formSubmit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
