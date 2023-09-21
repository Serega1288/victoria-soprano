import React from "react";

class Hook {

    saveLocal = (KEY, VALUE) => {
        typeof window !== 'undefined' && localStorage.setItem(KEY, JSON.stringify(VALUE) )
    }

    getLocal = (KEY) => {
        return typeof window !== 'undefined' && JSON.parse( localStorage.getItem(KEY) )
    }

    getCountCart = () => {

        console.log('>>>>>>>>>>>>',  typeof window !== 'undefined' && JSON.parse( localStorage.getItem('CartBuy') ) )

        return typeof window !== 'undefined' && JSON.parse(
            localStorage.getItem('CartBuy').map((item, index) => (
                    item
                )
            )
        )
    }

    localStoreClear = () => {
        typeof window !== 'undefined' && localStorage.clear()
    }

    getCode = (d) => {
        if (d) {
            const ms = (Date.parse( new Date(d) )).toString()
            const m = ms[9] + ms[7] + ms[8] + ms[6]
            return m
            //console.log( ms, m )
        } else {
            const ms = (Date.parse( new Date() )).toString()
            const m = ms[9] + ms[7] + ms[8] + ms[6]
            return m
            //console.log( ms, m )
        }

    }

};
export const localStoreService = new Hook();