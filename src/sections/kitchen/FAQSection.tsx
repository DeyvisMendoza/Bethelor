// src/components/FAQSection.tsx

import React, { useState } from 'react';
import './FAQSection.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How Much Does a Kitchen Remodel Cost in Maryland?',
      answer: 'Kitchen remodeling costs in Maryland range from $12,000 to $50,000, depending on the size, materials, layout changes, and finishes. We offer free quotes tailored to your space and needs.',
    },
    {
      question: 'Can You Remove Walls or Create an Open Concept Layout?',
      answer: 'Absolutely. We specialize in open concept kitchen remodeling, including wall removal, space reconfiguration, and structural adjustments.',
    },
    {
      question: 'How Long Does a Full Kitchen Remodel Take?',
      answer: 'The duration of a full kitchen remodel varies based on complexity and scope, typically ranging from 4 to 12 weeks from design to completion.',
    },
    {
      question: 'Do You Offer Custom Cabinets or Only Prefab Options?',
      answer: 'We offer both custom-built cabinetry tailored to your specifications and high-quality prefabricated options to fit various styles and budgets.',
    },
    {
      question: 'Can I Use My Kitchen During the Remodel?',
      answer: 'While we strive to minimize disruption, it\'s generally not recommended to use your kitchen during major demolition and installation phases. We will discuss temporary solutions with you.',
    },
    {
      question: 'Do You Provide Financing or Payment Plans?',
      answer: 'Yes, we partner with reputable financing companies to offer flexible payment plans and options to help make your dream kitchen a reality. Contact us for more details.',
    },
    {
      question: 'What\'s Included in Your Kitchen Remodeling Services?',
      answer: 'Our services include everything from initial design and planning to final installation, covering custom cabinetry, countertops, plumbing, electrical work, flooring, painting, and more.',
    },
    {
      question: 'Will You Handle Permits and Inspections?',
      answer: 'Yes, we handle all necessary permits and inspections for your kitchen remodeling project to ensure compliance with local building codes and regulations.',
    },
    {
      question: 'Do You Help With Kitchen Design and Material Selection?',
      answer: 'Absolutely. Our experienced design team will guide you through every step, from conceptual design to material selection, ensuring your vision comes to life.',
    },
    {
      question: 'Is Your Work Covered by a Warranty?',
      answer: 'Yes, all our remodeling work comes with a comprehensive warranty covering craftsmanship and materials, providing you with peace of mind.',
    },
  ];

  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section-container">
      <div className="faq-header">
        <div className="faq-header-left">
          <p className="faq-subtitle">WHY USE OUR SERVICE?</p>
          <h2 className="faq-title">
            Frequently Asked Questions <br /> About Kitchen Remodeling in Maryland
          </h2>
        </div>
        
        {/* El párrafo que se mueve al lado del título */}
        <div className="faq-intro-text-right"> {/* Nueva clase para este párrafo */}
          <p>
            Planning a kitchen remodel in Maryland? You're not alone. We've answered the
            most common questions homeowners ask — from costs and permits to layouts
            and materials — so you can feel confident before starting your project.
          </p>
        </div>
      </div>

      {/* Ahora el wrapper de contenido solo tendrá las dos columnas de acordeones */}
      <div className="faq-accordions-wrapper"> {/* Renombrado para mayor claridad */}
        <div className="faq-accordions-column">
          {faqItems.slice(0, 5).map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question-button" 
                onClick={() => handleAccordionClick(index)}
                aria-expanded={openIndex === index ? 'true' : 'false'}
              >
                <span className="question-text">{item.question}</span>
                <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-panel" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-accordions-column">
          {faqItems.slice(5, 10).map((item, index) => (
            <div key={index + 5} className={`faq-item ${openIndex === index + 5 ? 'open' : ''}`}>
              <button 
                className="faq-question-button" 
                onClick={() => handleAccordionClick(index + 5)}
                aria-expanded={openIndex === index + 5 ? 'true' : 'false'}
              >
                <span className="question-text">{item.question}</span>
                <span className="toggle-icon">{openIndex === index + 5 ? '-' : '+'}</span>
              </button>
              <div className="faq-answer-panel" style={{ maxHeight: openIndex === index + 5 ? '200px' : '0' }}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;