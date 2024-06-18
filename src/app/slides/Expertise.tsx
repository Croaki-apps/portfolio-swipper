import Image from "next/image";

export default function Expertise() {
  return (
    <div className="slide-expertise slide_container">
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
              src={"/qualities.svg"}
              alt="Certifications"
              width={60}
              height={60}
              style={{
                display: "inline",
                marginRight: "10px",
              }}
            />
            Expertise
          </h1>
        </div>
        <div className="expertise-presentation">
          <p>
            Spécialisé en front-end, <br /> j&apos;intégrerais vos équipes de
            manière agile sur des besoins variés :
          </p>
          <div className="projects-type">
            <div className="type">e-commerce</div>
            <div className="type">back-office</div>
            <div className="type">SaaS</div>
            <div className="type">landing page</div>
          </div>
        </div>

        <div className="tech_logo_container">
          <Image
            src={"/tools/next.jpg"}
            alt="photo de profil"
            width={120}
            height={120}
          />
          <Image
            src={"/tools/react.png"}
            alt="photo de profil"
            width={120}
            height={120}
          />
          <Image
            src={"/tools/typescript.jpg"}
            alt="photo de profil"
            width={120}
            height={120}
          />
        </div>
        <div className="tech_text_container container-blue">
          <b>NextJs - React - Typescript</b>
        </div>
      </section>
    </div>
  );
}
