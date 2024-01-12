import React, {useState, useEffect} from 'react';
import svgSave from '../assets/img/save.svg'
import svgSaved from '../assets/img/saved.svg'
import {localStoreService} from "./hook";

const Save = ({product}) => {



    const [ Save, SaveSet ] = useState(localStoreService.getLocal('saveProduct'));
    const [ foundItem, foundItemSet ] = useState();
    const clickSave = ( product, type ) => {

        // localStoreService.localStoreClear()

        const getSave = localStoreService.getLocal('saveProduct');
        // console.log('getSave save >>>', getSave )
        let Arr = [];

        if ( getSave == null ) {
            Arr = [
                {
                    uri : product.uri,
                    featuredImage: product.featuredImage,
                    title: product.title
                },
            ];
        } else {
            if ( type === 'add' ) {
                Arr = [
                    ...getSave,
                    {
                        uri : product.uri,
                        featuredImage : product.featuredImage,
                        title: product.title
                    },
                ];
            } else {
                Arr = [
                    ...getSave,
                    {
                        uri : product.uri,
                        featuredImage : product.featuredImage,
                        title: product.title
                    },
                ];

                const updatedArr = Arr.filter(item => item.title !== product.title );

                console.log(updatedArr);

                Arr = updatedArr;
            }

        }


        SaveSet(Arr)
        localStoreService.saveLocal('saveProduct', Arr );


        //
        // if ( activeAddSaveProduct == 1) {
        //
        // }

        console.log('product save >>>', localStoreService.getLocal('saveProduct' ) )

    }


    useEffect(() => {
        foundItemSet(Save.find(item => item.title === product.title));
        console.log('product.title >>>', foundItem?.title )
    }, [Save, SaveSet, clickSave]);

    return (
        <>
            {
                foundItem?.title === product.title ? (
                    <div onClick={()=>clickSave(product, 'remove')} className="save d-flex aligh-items-center justify-content-center">
                        <img src={svgSaved} alt=""/>
                    </div>
                ) : (
                    <div onClick={()=>clickSave(product, 'add')} className="save d-flex aligh-items-center justify-content-center">
                        <img src={svgSave} alt=""/>
                    </div>
                )
            }
        </>
    )
}
export default Save;