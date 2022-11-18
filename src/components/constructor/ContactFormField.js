import React from 'react'


const Field = ( { item, i, ind, disabled, values, onChange, isLoading, cols } ) => {
    const col = 12/cols;
    return (
        <>
            <label className={`col-12 col-sm-${col} box-field-${item.type}`} htmlFor={`field-${ind+'-'+i}`}>
            { item.type === 'button' && (
                <>
                    <input
                        disabled={disabled}
                        type="garbage"
                        name="garbage"
                        className="garbage"
                        value={values.garbage}
                        onChange={onChange} />
                    <button disabled={disabled} type="submit" className="style-3 btn">
                        { isLoading ? 'Send...' :  item.label  }
                    </button>
                </>
            )}

            { item.type === 'message' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <textarea required={item.required ? 'required' : false } name={item.name}
                                  disabled={disabled}
                                  onChange={onChange}
                                  value={values[item.name]}
                        />
                    </>
            )}

                { item.type === 'text' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <input
                            required={item.required ? 'required' : false }
                            type='text' name={item.name}
                            disabled={disabled}
                            onChange={onChange}
                            value={values[item.name]}
                        />
                    </>
                )}

                { item.type === 'email' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <input
                            required={item.required ? 'required' : false }
                            type='email' name='email'
                            disabled={disabled}
                            onChange={onChange}
                            value={values.email}
                        />
                    </>
                )}
                { item.type === 'phone' && (
                    <>
                        <span>{item.label} {item.required ? '*' : '' }</span>
                        <input
                        required={item.required ? 'required' : false }
                        type='phone' name={item.name}
                        disabled={disabled}
                        onChange={onChange}
                        value={values[item.name]}
                        />
                    </>

                )}

            </label>

        </>
    )
}
export default Field;