
import React from "react";
import "./KitchenCostSection.css";

import smallKitchenImg from "../../../public/kitchen-remodel/img1.png";
import mediumKitchenImg from "../../../public/kitchen-remodel/img2.png";
import largeKitchenImg from "../../../public/kitchen-remodel/img3.png";

const KitchenCostSection: React.FC = () => {
  const kitchenTypes = [
    {
      image: smallKitchenImg,
      title: "Small Kitchen",
      size: "Under 70 ft²",
      price: "$12,000 – $20,000*",
      features: [
        "Smart layouts like one-wall or L-shape. Ideal for apartments and older homes.",
        "Built-in compact appliances",
        "Quartz countertops & LED lighting",
        "Sleek storage solutions",
      ],
      description: "Efficient, modern upgrades for tight spaces.",
    },
    {
      image: mediumKitchenImg,
      title: "Medium Kitchen",
      size: "70 – 150 ft²",
      price: "$20,000 – $40,000*",
      features: [
        "More flexible layouts like U-shape or galley. Found in townhomes and standard homes.",
        "Custom cabinetry",
        "Quartz or granite counters",
        "Lighting upgrades",
      ],
      description: "Balanced design for everyday comfort and function.",
    },
    {
      image: largeKitchenImg,
      title: "Large Kitchen",
      size: "Over 150 ft²*",
      price: "$40,000 – $70,000+*",
      features: [
        "Spacious layouts with islands and premium finishes.",
        "Walk-in pantry & double ovens",
        "Waterfall countertops",
        "Designer lighting",
      ],
      description: "Luxury spaces for family living and entertaining.",
    },
  ];

  return (
    <section className="kitchen-cost-section-container">
      <div className="cost-header">
        <h2 className="cost-title">
          How Much Does a Kitchen <br /> Remodel Cost in Maryland?
        </h2>
        <p className="cost-intro-paragraph">
          See the average investment by kitchen size - and what's included in
          each remodel. If you're planning to remodel your kitchen in Maryland,
          it's important to understand the typical investment based on kitchen
          size. Whether you're upgrading a compact space or designing a luxury
          cooking area, this guide gives you a general price range for small,
          medium, and large kitchens - and what's usually included in each.
        </p>
        <p className="cost-disclaimer-paragraph">
          *Prices shown are estimates and may vary depending on materials,
          finishes, structural changes, and overall project complexity.
        </p>
      </div>

      <div className="kitchen-types-grid">
        {kitchenTypes.map((kitchen, index) => (
          <div key={index} className="kitchen-type-card">
            <img
              src={kitchen.image}
              alt={kitchen.title}
              className="kitchen-type-image"
            />
            <h3 className="kitchen-type-title">{kitchen.title}</h3>
            <p className="kitchen-type-size">{kitchen.size}</p>
            <p className="kitchen-type-price">{kitchen.price}</p>
            <ul className="kitchen-type-features">
              {kitchen.features.map((feature, featIndex) => (
                <li key={featIndex}>{feature}</li>
              ))}
            </ul>
            <p className="kitchen-type-description">{kitchen.description}</p>
          </div>
        ))}
      </div>

      <div className="cost-button-wrapper">
        <a href="/request-quote" className="cost-quote-button">
          Request your free quote <span className="arrow-right">→</span>
        </a>
      </div>
    </section>
  );
};

export default KitchenCostSection;
