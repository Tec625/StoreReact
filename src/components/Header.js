import React from "react";

function Header({titulo,numero}) {


    return(
        <h1 id="Encabezado" className="Encabezado" >{titulo} numero {numero}</h1>
    );
}

export default Header;