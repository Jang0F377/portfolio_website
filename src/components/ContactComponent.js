import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FooterComponent from "./FooterComponent";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nl8wc35",
        "template_mrl1t2k",
        form.current,
        "y3XUj2oOCpCCqvyyJ"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="h-fit lg:h-screen">
      <div className="flex flex-col px-1  lg:w-9/12 mx-auto">
        <div className="text-center mb-7 mt-10">
          <div className="text-color-light  text-lg md:text-xl">
            Get in Touch
          </div>
          <div className="text-color-primary text-2xl md:text-3xl">
            Contact Me
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mt-32">
          <div className="flex flex-col basis-1/2 place-items-center gap-y-5 lg:gap-y-0 ">
            <article className="flex flex-col mx-auto w-72 py-4 lg:py-5 px-2 mx-7 my-2 lg:m-7 bg-background-variant border border-2 border-transparent rounded-xl text-center hover:bg-transparent hover:border-color-primary-variant ">
              <div className="my-auto">
                <MdOutlineEmail className="mx-auto text-white my-0.5 " />
              </div>
              <div className="text-white my-auto">mjgarrett7092@gmail.com</div>
              <a
                href="mailto:mjgarrett7092@gmail.com"
                className="text-color-primary my-auto mt-0.5"
              >
                Send a message
              </a>
            </article>
            <article className="flex w-72 flex-col mx-auto py-4 lg:py-5 px-2 mx-7 my-2 lg:m-7 bg-background-variant border border-2 border-transparent rounded-xl text-center hover:bg-transparent hover:border-color-primary-variant">
              <div>
                <MdOutlineMessage className="mx-auto text-white my-0.5" />
              </div>
              <div className="text-white">Text</div>
              <a
                href="tel:mjgarrett7092@gmail.com"
                className="text-color-primary mt-0.5"
              >
                Send a text
              </a>
            </article>
          </div>
          <div className="flex flex-col basis-1/2 mt-7 lg:mt-0">
            <div className="flex basis-full px-3 lg:px-0">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  className="w-full p-2.5  my-1.5 lg:my-3 lg:mx-2 rounded-lg hover:placeholder:text-white hover:bg-background-variant active:bg-background-variant hover:text-white active:text-white"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  type={"text"}
                  name="name"
                  placeholder="Your Name (you can make one up)"
                />
                <input
                  className="w-full p-2.5 my-1.5 lg:my-3 lg:mx-2 rounded-lg hover:placeholder:text-white hover:bg-background-variant active:bg-background-variant hover:text-white active:text-white"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                  type={"email"}
                  name="email"
                  placeholder="Your Email"
                />
                <textarea
                  className="w-full p-2.5  my-1.5 lg:my-3 lg:mx-2 rounded-lg hover:placeholder:text-white hover:bg-background-variant active:bg-background-variant hover:text-white active:text-white"
                  onChange={(event) => setMessage(event.target.value)}
                  value={message}
                  required
                  name={"message"}
                  rows={7}
                  placeholder="Your Message"
                />
                <button
                  type={"submit"}
                  className="sm:mx-0 w-max my-2 lg:my-4 inline-block bg-color-primary py-2 px-1.5
                    rounded-lg cursor-pointer border border-color-primary
                    hover:bg-transparent hover:border-color-primary-variant hover:text-color-primary"
                >
                  Send Me a Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default ContactComponent;
