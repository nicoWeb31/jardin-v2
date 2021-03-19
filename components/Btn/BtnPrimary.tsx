import React from "react";

interface BtnPrimaryProps {
    children: React.ReactNode;
}

const ButtonP: React.FC<BtnPrimaryProps> = ({ children }) => {
    return <div className="btn-content">{children}</div>;
};

export default ButtonP;
