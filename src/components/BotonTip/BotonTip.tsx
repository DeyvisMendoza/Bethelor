import React from 'react';

import './BotonTip.css';

export const BotonTip = () => {
    return (
        <>
            <style>{`
                .button-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    margin-bottom: 20px;
                    padding: 20px;
                }
            `}</style>

            <div className="button-container">
                <button className="fancy-btn">
                    <span className="btn-text">See full Blogs</span>
                    <span className="arrow">→</span>

                    {/* Líneas esquineras */}
                    <span className="corner left"></span>
                    <span className="corner right"></span>
                    <span className="corner bottom"></span>
                    <span className="corner top"></span>
                </button>
            </div>
        </>
    );
};
