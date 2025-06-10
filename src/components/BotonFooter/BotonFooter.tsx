import "./BotonFooter.css";

export const BotonFooter = () => {
  return (
    <button className="boton-footer-btn">
      <span className="boton-footer-btn-text">Let’s Plan Your Remodel</span>
      <span className="boton-footer-arrow">→</span>

      <span className="boton-footer-corner boton-footer-left"></span>
      <span className="boton-footer-corner boton-footer-right"></span>
      <span className="boton-footer-corner boton-footer-bottom"></span>
      <span className="boton-footer-corner boton-footer-top"></span>
    </button>
  );
};
