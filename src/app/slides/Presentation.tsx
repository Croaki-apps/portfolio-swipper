import Image from "next/image";
import React from "react";

export default function Presentation() {
  return (
    <div className="slide-presentation slide_container">
      <div className="circle circle-top-left"></div>
      <div className="circle circle-top-right"></div>
      <div className="circle circle-bottom-left"></div>

      <section className="slide-content">
        <Image
          src={"/profile.png"}
          alt="photo de profil"
          priority
          width={400}
          height={600}
          className="profile-image"
        />
        <div className="content">
          <div className="title_container">
            <div className="qr-code-image">
              <Image
                src={"/qr-code-netflix.svg"}
                alt="QR code - Projet personnel"
                width={60}
                height={60}
              />
            </div>
            <h1 className="firstname">
              <Image
                src={"/hello.svg"}
                width={60}
                height={60}
                alt="hand waves"
                className="icon-simple"
              />
              Hello, <br /> i&apos;m Jordan
            </h1>
          </div>
          <p className="lastname">Philippot</p>

          <div className="job-title">Développeur front-end</div>
          <b className="age">29 ans</b>
          <div className="location_container">
            <b className="location-title">
              <Image
                src={"/place.svg"}
                width={18}
                height={18}
                className="icon-simple"
                alt="location"
              />
              Localisation
            </b>
            <p className="location-content">Métropole lilloise</p>
          </div>

          <div className="who-i-am_container">
            <b className="who-i-am-title">
              <Image
                src={"/user.svg"}
                width={18}
                height={18}
                alt="user"
                className="icon-simple"
              />
              Qui suis-je?
            </b>
            <p className="who-i-am-content">
              Avec 4 ans d&apos;expérience dans le développement web, j&apos;ai
              participé activement dans la création de back offices, e-commerce,
              SaaS, sites vitrines et autres solutions sur mesure.
              <br /> Je souhaite aujourd&apos;hui apporter mon expertise sur des
              projets innovants et grandir au sein d&apos;une équipe à taille
              humaine
            </p>
          </div>

          <div className="qualities_container">
            <b className="qualities_container-title">
              <Image
                src={"/qualities.svg"}
                width={18}
                height={18}
                alt="hand waves"
                className="icon-simple"
              />
              Qualités & forces
            </b>
            <p className="qualities_container-content">
              Comme tout bon développeur: communication fluide, esprit
              d&apos;analyse, créativité, résolution de problèmes, souci du
              détail, réactivité, curiosité, adaptabilité.
            </p>
          </div>
          {/* <p className="next-slide-text">Expertises -&gt;</p> */}
        </div>
      </section>
    </div>
  );
}
