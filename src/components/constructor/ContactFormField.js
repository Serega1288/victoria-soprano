import React from 'react'


const Field = ( { item, i, ind } ) => {
    return (
        <>
            <label className={`box-field-${item.type}`} htmlFor={`field-${ind+'-'+i}`}>
            { item.type === 'button' && (
                    <button className="style-3 btn">{item.name}</button>
            )}

            { item.type === 'message' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <textarea required={item.required ? 'required' : false } name={item.name} />
                    </>
            )}

                { item.type === 'text' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <input
                            required={item.required ? 'required' : false }
                            type='text' name={item.name}
                        />
                    </>
                )}

                { item.type === 'email' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <input
                            required={item.required ? 'required' : false }
                            type='email' name={item.name}
                        />
                    </>
                )}
                { item.type === 'phone' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <input
                        required={item.required ? 'required' : false }
                        type='phone' name={item.name}
                        />
                    </>

                )}

            </label>

        </>
    )
}
export default Field;