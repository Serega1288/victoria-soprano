import {useState} from "react";
import {instanceAuthService} from "./auth";
import {navigate} from "gatsby";

const useForm = () => {
    const [values, setValues] = useState({password: '', email: '', garbage: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    //console.log('values !!!', values)


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

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendLogin`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        // const resDate = await res.text();

        const responseText = JSON.parse( await res.text() );
        // const responseText = resDate;
        // const responseText = await res;

        // console.log('responseText >>>', responseText);

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


        // 2. перевіряємо відповідь від сервера
        if (res.status >= 400 && res.status < 600 ) {
            setIsLoading(false);
            setError(responseText.message);
        } else {
            // 3. емайл успішно відправлений
            setIsLoading(false);
            setValues({
                ...values,
                email: '',
                password: '',
                garbage: ''
            });
            setMessage(responseText);

            // console.log('ddd >', responseText )

            if ( responseText?.result[0] + responseText?.result[1] === '1_' ) {

                const user = responseText?.result
                instanceAuthService.saveUser(user)
                navigate('/account')

            }

        }

        //console.log(' values >>>', values);
    }

    //console.log('error', error);

    return {
        values,
        captureInput,
        submitForm,
        isLoading,
        error,
        message
    }
}

export default useForm;