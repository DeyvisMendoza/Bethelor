import React from "react";
import "./BotonForm.css";

const BotonForm: React.FC = () => {
  return (
    <>
      <>
        {/* <style>{`
                 .botonform-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    padding: 20px;
                    background-color: red;
                    width: 100%;
                }
            `}</style> */}

        <div className="botonform-container">
          <button className="botonform-btn">
            <span className="botonform-btn-text">Get a Free Estimate</span>
            <span className="botonform-arrow">→</span>

            <span className="botonform-corner botonform-corner-left"></span>
            <span className="botonform-corner botonform-corner-right"></span>
            <span className="botonform-corner botonform-corner-bottom"></span>
            <span className="botonform-corner botonform-corner-top"></span>
          </button>
        </div>
      </>
    </>
  );
};

export default BotonForm;
