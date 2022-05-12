import React from "react";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="col-a">
          <header>
            <h4>Sobre nós</h4>
            <h2>Entenda quem somos e por que existimos</h2>
          </header>

          <div className="content">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>

        <div className="col-b">
          <img
            src="doutor-feliz-segurando-prancheta-com-pacientes.png"
            alt="Doutor feliz segurando prancheta com pacientes"
          />
        </div>
      </div>
    </section>
  )
}

export default About;