import {useState} from "react";
import {localStoreService} from "./hook";
import {navigate} from "gatsby";


const useCheckout = ( cart ) => {

    let ud = null;
    if ( localStoreService.getLocal(process.env.LOCAL_TOKEN) ) {
        ud = localStoreService.getLocal(process.env.LOCAL_TOKEN)?.split('ud=')[1];
    }

    const formInputs = {
        delivery: '',
        payment: '',
        cart,
        dataAccount : '',
        garbage : '',
        ud
    };
    const [values, setValues] = useState(formInputs);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);


    console.log('values !!!', values)


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

        const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendCheckout`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const responseText = JSON.parse( await res.text() );
        // const responseText = '';

        console.log('responseText >>>', responseText);

        // 2. перевіряємо відповідь від сервера
        if (res.status >= 400 && res.status < 600 ) {
            // alert('error');
            setIsLoading(false);
            setError(responseText.message);
        } else {
            // 3. емайл успішно відправлений

            setIsLoading(false);
            setValues({
                ...values,
                garbage: ''
            });


            if ( responseText.result === 'error' ) {
                setError(responseText);
            } else {

                localStoreService.saveLocal('lastOrder', responseText.result );
                localStoreService.saveLocal('CartBuy', null);

                navigate('/order-confirm/');

                // responseText.result

                //setMessage('Thank you! <br> Message sent successfully. <br> We will contact you shortly.');
                // setTimeout(function () {
                //     navigate(`#statusSend}`)
                // }, 500);

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

export default useCheckout;