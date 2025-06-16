import "./SectionCustom.css";

export const SectionCustom = () => {
  return (
    <>
      <section className="kitchen-remodeling-section-container">
        <div className="kitchen-remodeling-content-wrapper">
          {/* Columna Izquierda: Contenido de texto */}
          <div className="kitchen-remodeling-text-column">
            <h1 className="kitchen-remodeling-title">
              Custom Kitchen Remodeling in <br /> Maryland
            </h1>
            <p className="kitchen-remodeling-paragraph">
              Upgrade the heart of your home with a kitchen that blends style,
              function, and lasting value.
            </p>
            <p className="kitchen-remodeling-paragraph">
              We specialize in custom kitchen remodeling across Maryland,
              transforming outdated kitchens into modern, functional, and
              beautiful spaces.
            </p>
            <p className="kitchen-remodeling-paragraph">
              Whether you're dreaming of new cabinets, quartz countertops, smart
              lighting, or a full layout transformation — we bring craftsmanship
              and care to every detail.
            </p>
            {/* Para los bullet points, podemos usar una lista no ordenada (ul) */}
            <ul className="kitchen-remodeling-list">
              <li>
                Proudly serving Rosedale, Towson, Glen Burnie, Baltimore,
                Bethesda, Gaithersburg, Germantown, and all of Montgomery
                County.
              </li>
              <li>
                Request your free quote today and let's bring your kitchen
                vision to life.
              </li>
            </ul>

            <p className="kitchen-remodeling-paragraph last-paragraph">
              Serving Montgomery County with trusted kitchen remodeling
              solutions — contact Bethelor today to get started.
            </p>

            <a href="/request-quote" className="kitchen-quote-button">
              Request your free quote <span className="arrow-right">→</span>
            </a>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="kitchen-remodeling-image-column">
            <img
              src="public/section-custom/img1.png"
              alt="Modern kitchen remodeling example"
              className="kitchen-main-image"
            />
          </div>
        </div>
      </section>

      <section className="section-color">
        <div className="ticker-text-wrapper">
          <div className="ticker-text-container">
            {/* Duplicamos el contenido para un desplazamiento continuo sin saltos */}
            <span className="ticker-item">
              AS A TOP-RATED KITCHEN REMODELING COMPANY IN MARYLAND, OUR TEAM
              KNOWS THAT EVERY SUCCESSFUL&nbsp;&nbsp;
            </span>
            <span className="ticker-item">
              AS A TOP-RATED KITCHEN REMODELING COMPANY IN MARYLAND, OUR TEAM
              KNOWS THAT EVERY SUCCESSFUL&nbsp;&nbsp;
            </span>
            <span className="ticker-item">
              AS A TOP-RATED KITCHEN REMODELING COMPANY IN MARYLAND, OUR TEAM
              KNOWS THAT EVERY SUCCESSFUL&nbsp;&nbsp;
            </span>
          </div>
        </div>

        <div className="kitchen-remodeling-info-row">
          <div className="kitchen-remodeling-info-image">
            <img
              src="public/section-custom/img2.png"
              alt="Kitchen design inspiration"
            />
          </div>
          <div className="kitchen-remodeling-info-content">
            <h2 className="kitchen-remodeling-info-title">How We Approach Kitchen Remodeling</h2>
            <p className="kitchen-remodeling-info-paragraph">
              A well-designed kitchen can elevate your entire home — blending
              beauty, comfort, and functionality in one space. That's why we
              begin every project by understanding your goals, layout needs, and
              lifestyle.
              <br /><br />
              From space planning and cabinetry to lighting, flooring, and
              appliances, we craft kitchens that are tailored to how you live
              and cook. Every detail is thoughtfully handled by our experienced
              team.
              <br /><br />
              Whether you prefer modern, transitional, or timeless designs, our
              experts bring your vision to life with high-end finishes, expert
              craftsmanship, and a smooth remodeling process from start to
              finish.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
