"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const copyToClipboard = async ({ text }: { text: string }) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Texte copié !");
    } catch (err) {
      setCopySuccess("Échec de la copie du texte.");
    }
  };

  return (
    <div className="slide-contact slide_container">
      <div className="circle circle-top-left"></div>
      <div className="circle circle-top-right"></div>
      <div className="circle circle-bottom-left"></div>

      <section className="slide-content">
        <div className="title_container">
          <div className="qr-code-image">
            <Image
              src={"/qr-code-netflix.svg"}
              alt="QR code - Projet personnel"
              width={40}
              height={60}
            />
          </div>
          <h1>
            <Image
              src={"/doc.svg"}
              alt="Document"
              width={60}
              height={60}
              style={{
                display: "inline",
                marginRight: "10px",
                transform: "translateY(7px)",
              }}
            />
            Mon CV
          </h1>
        </div>
        <div className="contact-presentation">
          <p>
            Besoin d&apos;une idée plus concrète de mes compétences ?
            <br />
            N&apos;hésitez pas à consulter mon CV ci-dessous, promis, ça ne sera
            pas long !
            <Image
              src={"/winking-face.png"}
              width={20}
              height={20}
              alt="winking face"
              className="winking-face"
            />
            <br />
          </p>
          <div className="download-file_container">
            <a
              href="/[Resume] - Jordan fullstack.pdf"
              download="Resume - Jordan Philippot"
              className="download-file"
            >
              <Image
                src={"/AttachedFile.svg"}
                alt="Télécharger mon Cv"
                width={20}
                height={20}
              />
              Télécharger
            </a>
          </div>
        </div>

        <div className="title_container">
          <h2>
            Contact
            <Image
              src={"/contact.svg"}
              alt="contact"
              width={60}
              height={60}
              style={{
                display: "inline",
                marginLeft: "10px",
                transform: "translateY(7px)",
              }}
            />
          </h2>
        </div>

        <div className="coordinates-presentation">
          <p>
            Parce qu&apos;un échange vaut milles mot, <br />
            vous pouvez aussi me contacter par téléphone ou par mail:
            <br />
          </p>
          <p className="coordinates-item">
            07 81 19 74 38{" "}
            <Image src={"/Phone.svg"} alt="Téléphone" width={20} height={20} />
          </p>
          <p
            className="coordinates-item"
            title={"Copier"}
            onClick={() =>
              copyToClipboard({ text: "jordan.philippot.pro@gmail.com" })
            }
          >
            <Image
              src={"/Copy.svg"}
              alt="Copy"
              width={20}
              height={20}
              style={{ marginRight: "5px" }}
            />
            jordan.philippot.pro@gmail.com
            <Image src={"/Mail.svg"} alt="Téléphone" width={20} height={20} />
          </p>
          <span> {copySuccess && copySuccess}</span>
          <div className="download-file_container"></div>
        </div>
      </section>
    </div>
  );
}
