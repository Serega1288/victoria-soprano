import {useState} from "react";
import {localStoreService} from "./hook"
const useFormAccount = (type) => {

    const [values, setValues] = useState({
        type: 'setDataAccount',
        typeSet: type,
        ud: localStoreService.getLocal(process.env.LOCAL_TOKEN)?.split('ud=')[1],

        email: '',
        first_name: '',
        last_name: '',
        billing_company: '',

        billing_first_name: '',
        billing_last_name: '',
        billing_email: '',
        billing_country: '',
        billing_city: '',
        billing_address_1: '',
        billing_postcode: '',
    });

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

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/getSetDateAccount`, {
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
            setError('Data not saved. There were technical problems.');
        } else {
            // 3. емайл успішно відправлений
            setIsLoading(false);
            setValues({
                ...values,
                email: '',
                first_name: '',
                last_name: '',
                billing_company: '',

                billing_first_name: '',
                billing_last_name: '',
                billing_phone: '',
                billing_email: '',
                billing_country: '',
                billing_city: '',
                billing_address_1: '',
                billing_postcode: '',

            });


            // console.log('!!!>>>>>', responseText )

            if ( responseText?.result[0] + responseText?.result[1] === '1_' ) {
                setMessage('Data saved.');
                // console.log('>>>>', responseText );
            } else {
                setError('Data not saved. There were technical problems.');
                // console.log('>>>> error', responseText );
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

export default useFormAccount;