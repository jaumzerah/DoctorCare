import React from "react";
import Data from "./data";

function Services() {
  return (
    <section id="services">
    <div className="wrapper">
      <header>
        <h4>Serviços</h4>
        <h2>Como podemos ajudá-lo a se sentir melhor?</h2>
      </header>

      <div className="content">
        {Data.map(data => {
          return (
            <div key={data.id} className="cards">
              <div className="card">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#DCE9E2" />
                  <path
                    d="M17.091 8.18182L10.091 15.1818L6.90918 12"
                    stroke="#00856F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3>{data.h3}</h3>
                <p>{data.p}</p>
              </div>
            </div>
              )
        })}

      </div>
      
    </div>
    </section>
  )
}

export default Services;