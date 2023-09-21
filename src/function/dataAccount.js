import {useState} from "react";
import {localStoreService} from "./hook";
import {instanceAuthService} from "./auth";


const AccountData = () => {
    // const [dataAccountStatus, setDataAccountStatus] = useState([]);
    const [dataAccount, setDataAccount] = useState([]);
    const [isLoadingDataAccount, isLoadingSetDataAccount] = useState(true);

    // console.log('localStoreService >>> 111', localStoreService.getLocal(process.env.LOCAL_TOKEN)?.split('ud=')[1] )

        // localStoreService.getLocal(process.env.LOCAL_TOKEN)?.name?.split('ud=')[1]
    const fetchDataAccount = async () => {
        let ob = { get: `customers/${localStoreService.getLocal(process.env.LOCAL_TOKEN)?.split('ud=')[1]}`, type : `getDateAccount` };
        const response = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/getSetDateAccount`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(ob),
        });
        const d = await response.json();

        if (d) {
            setDataAccount(d);

            // console.log('Account >>>', d.result )

            if( d?.result === '') {
                // instanceAuthService.logout()
                // console.log('Account >>> not', d )
            }
            // d?.result?.meta_data?.forEach((element) => {
            //     if(element.key === 'accoont_active' ) {
            //         // console.log('Account >>> for', element.value);
            //         setDataAccountStatus( Number(element.value) );
            //     }
            // });

            isLoadingSetDataAccount(false)
        }


    };

    return {
        // dataAccountStatus,
        dataAccount,
        fetchDataAccount,
        isLoadingDataAccount
    }

}
export default AccountData;