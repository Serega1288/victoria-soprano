import {useState} from "react";
// import {instanceAuthService} from "./auth";
// import {navigate} from "gatsby";

const useFormCode = (d, t) => {
    const [values, setValues] = useState({email: '', garbage: '', date: d, type: t  });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    // console.log('values.email >>>> !!!', values.email );


    const captureInput = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        // console.log('name > ', e.target.name )
        // console.log('value > ', e.target.value )
    }

    const submitForm = async e => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);
        setError(null);

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendCodeEmail`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const responseText = JSON.parse(await res.text() );

        // const handleLogin =  async () => {
        //     //request to natify
        //
        //     const user = {
        //         name: message?.result
        //     }
        //
        //     instanceAuthService.saveUser(user)
        //     navigate('/search')
        // }

        // console.log('responseText >>>', responseText );

        // 2. перевіряємо відповідь від сервера
        if (responseText) {

            if ( responseText.result >= 400 && responseText.result < 600 ) {
                setIsLoading(false);
                setError( responseText?.result?.message );
                // setMessage( responseText?.result?.message );
                // console.log('setError', responseText?.result?.message )

            } else {
                // 3. емайл успішно відправлений
                setIsLoading(false);
                setValues({
                    ...values,
                    garbage: ''
                });
                setMessage(responseText);

                // console.log('ddd', responseText.result.message )

                // if ( responseText.result[0] + responseText?.result[1] === '1_' ) {

                // const user = {
                //     name: responseText?.result
                // }
                // instanceAuthService.saveUser(user)
                // navigate(RedirectPage)

                // }


            }

        }



        //console.log(' values >>>', values);
    }

    //console.log('error', error);

    // const valuesCode = values,
    //     captureInputCode = captureInput,
    //     submitFormCode = submitForm,
    //     isLoadingCode = isLoading,
    //     errorCode = error,
    //     messageCode = message
    //
    // return {
    //     valuesCode,
    //     captureInputCode,
    //     submitFormCode,
    //     isLoadingCode,
    //     errorCode,
    //     messageCode
    // }

    return {
        values,
        captureInput,
        submitForm,
        isLoading,
        error,
        message,
        setMessage,
    }
}

export default useFormCode;