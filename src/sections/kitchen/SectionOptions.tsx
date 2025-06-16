import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./SectionOptions.css";

export const SectionOptions = () => {
  // Datos de los servicios para facilitar la renderización
  const services = [
    {
      title: "CUSTOM CABINETS INSTALLATION",
      description:
        "Built-in storage tailored to your kitchen layout and style – maximizing space, functionality, and design appeal.",
    },
    {
      title: "PLUMBING & SINK UPGRADES",
      description:
        "Install modern sinks, faucets, pot fillers, and relocate plumbing as needed to match the new design.",
    },
    {
      title: "COUNTERTOP REPLACEMENT",
      description:
        "Precision installation of granite, quartz, butcher block, or laminate countertops for durability, beauty, and ease of use.",
    },
    {
      title: "ELECTRICAL WORK & APPLIANCE REWIRING",
      description:
        "Move or add outlets, switches, circuits, and connect built-in appliances like ovens, cooktops, or microwaves.",
    },
    {
      title: "LIGHTING DESIGN & INSTALLATION",
      description:
        "Add recessed lights, under-cabinet LEDs, pendants, and task lighting to brighten your space and enhance ambiance.",
    },
    {
      title: "RANGE HOOD & VENTILATION SYSTEMS",
      description:
        "Proper ventilation is key. Install or upgrade your range hood to remove smoke, odors, and excess heat.",
    },
    {
      title: "LAYOUT RECONFIGURATION / OPEN CONCEPT CONVERSION",
      description:
        "Knock down walls or redesign flow for a more open, spacious kitchen connected to the dining or living area.",
    },
    {
      title: "FLOORING REPLACEMENT",
      description:
        "Install tile, luxury vinyl plank (LVP), hardwood, or waterproof laminate flooring for a long-lasting, clean look.",
    },
    {
      title: "BACKSPLASH INSTALLATION",
      description:
        "Protect your walls and add visual texture with stylish backsplashes – ceramic, glass, mosaic, or stone.",
    },
    {
      title: "PAINTING & FINAL FINISHES",
      description:
        "Complete the project with fresh wall paint, trim, and finishing touches to tie everything together.",
    },
  ];

  return (
    <section className="kitchen-features-section-container">
      <h2 className="kitchen-features-title">
        What's included in a full kitchen remodel?
      </h2>

      <div className="features-grid">
        {services.map((service, index) => (
          <div key={index} className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <div className="feature-content">
              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
