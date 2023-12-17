import React from "react";

function ButtonElement ({
    className, 
    handleClick,
    handleKeyDown,
    active, titleName,
    children,
    handleChangeButton,
    notation,
    }) {
    return (
        <button 
            disabled={active}
            // showImage={showImage}
            className={className}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onChange={handleChangeButton}
            data-title={notation}
            >
            {children}
            <span className="add-name submit-name">{titleName}</span>

        </button>
    )
}

export default ButtonElement;