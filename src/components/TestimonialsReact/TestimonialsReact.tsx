import React, { useRef, useEffect, useState } from "react";
import "./TestimonialsReact.css";

const testimonials = [
  {
    img: "public/testimonial/testimonial1.png",
    name: "Lisa Thompson",
    location: "Bathroom Remodel - Essex, MD",
    text: `“I only needed a small bathroom repair, but Anthony and Valerie made
            it feel like a full renovation. They fixed the plumbing, replaced
            the vanity and toilet, and gave everything a clean, fresh look. I
            never expected such care for a small job. Affordable, on time, and
            truly professional—I absolutely recommend Bethelor for anyone in
            Maryland looking for bathroom remodeling.”`,
  },
  {
    img: "public/testimonial/testimonial2.png",
    name: "Michael Rivera",
    location: "Interior & Exterior Painting - Dundalk, MD",
    text: `“Bethelor painted my entire home inside and out, and the difference
            is unbelievable. Anthony and Valerie were so respectful and
            detail-focused. They repaired the window and door frames before
            painting, and it shows—they didn’t cut corners. The results feel
            like a new house. If you’re looking for quality house painting in
            Maryland that’s on time and affordable, this is the team to call.”`,
  },
  {
    img: "public/testimonial/testimonial3.png",
    name: "Jasmine Brooks",
    location: "Kitchen Remodeling - Towson, MD",
    text: `“I couldn’t believe how beautiful my kitchen turned out. From the 3D
            render to the blue cabinets, everything matched perfectly. Valerie
            kept me updated and finished the project on time. If you’re planning
            a kitchen remodel in Maryland, trust Bethelor. Great results, fair
            price, and a team that truly cares.”`,
  },
  {
    img: "public/testimonial/testimonial4.png",
    name: "Daniel Morgan",
    location: "Small Bathroom Refresh - Glen Burnie, MD",
    text: `“My bathroom had water damage and looked outdated. Anthony and Valerie stepped in and made it feel brand new. They fixed the plumbing, painted, and installed a new toilet—fast and clean. Even though it was a small bathroom remodel, they treated it like a big project. Honest, affordable, and truly professional.”`,
  },
  {
    img: "public/testimonial/testimonial5.png",
    name: "Karen White",
    location: "Full Exterior Paint & Repairs - Bethesda, MD",
    text: `“My home looked tired, but Bethelor brought it back to life. They painted the exterior and interior, and repaired the window and door trim. Anthony and Valerie were kind, punctual, and detailed. If you need exterior house painting in Bethesda at a fair price, this is your team.”`,
  },
  {
    img: "public/testimonial/testimonial6.png",
    name: "Brian Carter",
    location: "Kitchen Remodel - Gaithersburg, MD",
    text: `"I dreamed of a modern kitchen, and Bethelor made it real. Anthony's 3D design gave me confidence, and the blue cabinets look stunning. They handled everything—from permits to the final touch—on time and stress-free. If you're remodeling a kitchen in Maryland, call them."`,
  },
];

const Testimonials: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const [imageWidth, setImageWidth] = useState(0);

  const slides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  useEffect(() => {
    if (trackRef.current) {
      const firstImg = trackRef.current.querySelector(
        ".testimonials-slider-img"
      ) as HTMLDivElement;
      if (firstImg) {
        setImageWidth(firstImg.clientWidth + 10);
      }
    }
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${
        current * imageWidth
      }px)`;
    }
  }, [imageWidth]);

  const updateSlider = (newCurrent: number, animate = true) => {
    if (trackRef.current) {
      if (!animate) {
        trackRef.current.style.transition = "none";
      } else {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
      }
      trackRef.current.style.transform = `translateX(-${
        newCurrent * imageWidth
      }px)`;
    }
  };

  const handleRight = () => {
    if (current >= slides.length - 1) return;
    const next = current + 1;
    setCurrent(next);
    updateSlider(next);
  };

  const handleLeft = () => {
    if (current <= 0) return;
    const prev = current - 1;
    setCurrent(prev);
    updateSlider(prev);
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const handleTransitionEnd = () => {
      if (current === slides.length - 1) {
        setCurrent(1);
        updateSlider(1, false);
      } else if (current === 0) {
        setCurrent(slides.length - 2);
        updateSlider(slides.length - 2, false);
      }
    };
    const node = trackRef.current;
    node.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      node.removeEventListener("transitionend", handleTransitionEnd);
    };
    // eslint-disable-next-line
  }, [current, imageWidth]);

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-slider-container">
        <div className="testimonials-slider-track" ref={trackRef}>
          {slides.map((t, idx) => (
            <div className="testimonials-slider-img" key={idx}>
              <div className="testimonial-image">
                <img src={t.img} alt="" />
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-location">{t.location}</p>
              </div>
              <div className="testimonial-text">
                <p>{t.text}</p>
              </div>
              <div className="testimonial-pagination">
                {idx === 0 || idx === slides.length - 1 ? (
                  <span>
                    {idx === 0 ? testimonials.length : 1}/{testimonials.length}
                  </span>
                ) : (
                  <span>
                    {idx}/{testimonials.length}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-slider-controls">
          <img
            src="public/project/boton-left.png"
            className="testimonials-slider-btn testimonials-left"
            onClick={handleLeft}
            style={{ cursor: "pointer" }}
            alt="Previous"
          />
          <img
            src="public/project/boton-rigth-white.png"
            className="testimonials-slider-btn testimonials-right"
            onClick={handleRight}
            style={{ cursor: "pointer" }}
            alt="Next"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
