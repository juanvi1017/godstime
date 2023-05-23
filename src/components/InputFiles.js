import React from "react";


export default function InputFile({ required = true, label, id, value }) {
    const callback = () => {
        document.getElementById(id).click();
        document.activeElement.blur();
    };
    let nombre = value ? value.split("\\").pop() : "";
    nombre = nombre ? nombre : "Ningún Archivo Seleccionado";

    return (
        <div>
            <input
                required={required}
                readOnly
                type="text"
                id={`${id}_nombre`}
                label={label}
                value={nombre}
                size="small"
                autoComplete="billing address-line1"
                onClick={callback}
            />
        </div>
    );
}