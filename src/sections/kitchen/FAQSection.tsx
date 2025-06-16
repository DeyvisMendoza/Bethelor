

import React, { useState } from 'react';
import './FAQSection.css';
import {faqItems} from "../../lib/dataFAQ"


interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


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
        
       
        <div className="faq-intro-text-right"> {/* Nueva clase para este párrafo */}
          <p>
            Planning a kitchen remodel in Maryland? You're not alone. We've answered the
            most common questions homeowners ask — from costs and permits to layouts
            and materials — so you can feel confident before starting your project.
          </p>
        </div>
      </div>

      <div className="faq-accordions-wrapper"> 
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