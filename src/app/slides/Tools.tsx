import Image from "next/image";

export default function Tools() {
  return (
    <div className="slide-tools slide_container">
      <div className="circle circle-top-left"></div>
      <div className="circle circle-top-right"></div>
      <div className="circle circle-bottom-left"></div>

      <section className="slide-content">
        <div className="title_container">
          <div className="qr-code-image">
            <div className="qr-code-image">
              <Image
                src={"/qr-code-netflix.svg"}
                alt="QR code - Projet personnel"
                width={40}
                height={60}
              />
            </div>
          </div>
          <h1>
            <Image
              src={"/tools.svg"}
              alt="photo de profil"
              width={60}
              height={60}
              style={{
                display: "inline",
                marginRight: "10px",
              }}
            />
            Mes Outils
          </h1>
        </div>

        <div className="tools-presentation">
          <div className="tool">Redux</div>
          <div className="tool">Jira</div>
          <div className="tool">React-Query</div>
          <div className="tool">Storybook</div>
          <div className="tool">Scss</div>
          <div className="tool">Github</div>
          <div className="tool">Stripe</div>
          <div className="tool">Sendgrid</div>
        </div>

        <div className="title_container">
          <h1>
            Projets{" "}
            <Image
              src={"/link.svg"}
              alt="photo de profil"
              width={60}
              height={60}
              style={{
                display: "inline",
                marginLeft: "10px",
                transform: "translateY(15px)",
              }}
            />
          </h1>
        </div>
        <div className="project-presentation">
          <a href="https://netflix-comedy.vercel.app" target="_blank">
            Projet personnel
          </a>
          <a href="https://jordan-philippot.herokuapp.com" target="_blank">
            Portfolio
          </a>
        </div>
      </section>
    </div>
  );
}
