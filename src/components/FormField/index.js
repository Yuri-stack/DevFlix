import React from 'react';

function FormField({ label, type, name, valores, onChange }){
    return(
        <div>
            <label>
                {label}
                <input 
                    type = {type}
                    value = {valores}
                    name = {name}
                    onChange = {onChange}
                />
            </label>
        </div>
    )
}

export default FormField