
import React, { useState } from 'react'


export const useForm =(initialState = {})=>{ //permite recibir campos de texto del formulario

    const [values, setValues] = useState(initialState);

    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange =({target})=>{
        setValues({
            ...values,
            [target.name]:target.value  //reemplza al valor anterior.
        });
    }

    return[values, handleInputChange,reset ];

}