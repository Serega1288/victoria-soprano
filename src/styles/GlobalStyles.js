import { createGlobalStyle } from 'styled-components';
import {minCol, maxCol} from "../function/SizeCol";


const GlobalStyles = createGlobalStyle` 



h1, h2, h3, h4, .WrapMenu {
   font-family: 'Bolkit';
}
.ovh {
    overflow: hidden;
}
img { 
    max-width: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}
// #86644B
/* Track */
::-webkit-scrollbar-track {
  background-color: #f7f4ed; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #86644B;
}

.grey { 
    //filter: grayscale(100%);
}
.grey_off { 
    filter: none;
}
 
.pos {
    position: relative;
}
.z-in-1 {
    z-index: 1;
}
.z-in-2 {
    z-index: 2;
}
.h100 {
    height: 100%;
} 
.w100 {
    width: 100%;
}

.ul-clear {
    margin: 0;
    padding: 0;   
}
.ul-clear li::marker {
   font-size: 0;
}

.p-0 {
    padding:0;
}
.m-0 {
    margin:0;
}

.text-center {
    text-align: center;
}

.body {
    overflow: hidden;   
}
 
p { 
    margin: 0 0 2rem;
    @media (max-width: ${maxCol.sm} ) {
        margin: 0 0 1rem;
    }
} 

html {
    font-size: 62.5%;
    --bs-gutter-x: 1.6rem;
    @media (min-width: ${minCol.sm} ) {
        font-size: 35%;
    }
    
    @media (min-width: ${minCol.md} ) {
        
    }
    
    @media (min-width: ${minCol.lg} ) {
        font-size: 55%;
    }
    
    @media (min-width: ${minCol.xl}) {
        
    }
     
    @media (min-width: ${minCol.xxl}) {
        font-size: 62.5%;
    } 
}
 
body {
    background-color: #f7f4ed; 
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.45;
    font-family: 'sfPro';
    color: #1a0f07;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding-top: 13.4rem;
    @media (max-width: ${maxCol.sm}) {
        padding-top: 8.8rem;    
    }
} 
a {
    color: #86644b;
}
ul {
    a {
        color: #1a0f07;
        &:hover {
            color: #86644b; 
        }
    }
}
.status-anim + * {
    opacity: 0 !important;
}
.status-anim.active-block + * {
    opacity: 1 !important;
}
.anim, a, .btn, input, a:after, a:before, a div {
    transition: all 0.5s ease;  
}
.WrapMenu {
    position: fixed;
    height: 100%;
    // height: calc(100vh - 13.4rem);  
    // @media (max-width: ${maxCol.md}) { 
    //     height: calc(100vh - 8.8rem);   
    // } 
    padding-top: 13.4rem;
    @media (max-width: ${maxCol.md}) { 
       padding-top: 0;  
    } 
    left: 0;
    right: 0; 
    transition: all 1s ease-in-out;
    opacity: 1; 
    z-index: 99;
    background-color: #f7f4ed; 
    border: 1px solid #000;
    border-top: 0;
    bottom: 100%;
    &.open {
        bottom:0;
    }
} 
 
.btn {
    cursor: pointer; 
    display: inline-block;
    text-transform: uppercase;
    &.style-1 {
        font-size: 1.8rem;
        border: none;
        padding: 1rem 3.3rem;
        background-color: #1a0f07;
        color: #86644b;
        text-decoration: none;
        &:hover, &:focus { 
            background-color: #86644b;
            color: #fff;
        }
    }
    &.style-2 {
        color: #1a0f07;
        font-size: 2.2rem;
        line-height: 1;
        text-decoration: none;
        background-color: rgba(0,0,0,0);
        padding: 0.6rem 2.8rem;
        position: relative;
        &:before { 
            content: '';
            position: absolute;
            top: calc(100% - 1px);
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            display: block;
            background-color: #1a0f07;
        } 
        &:hover, &:focus { 
            color: #fff; 
            &:before { 
                background-color: #86644b;
                top: 0;
            }
        }
        @media(max-width: ${maxCol.sm}) {
            font-size: 1.6rem;
            line-height: 1.92rem;
            min-width: 10rem;
        }
    }
    
    &.style-3 {
        font-size: 1.8rem;
        border: none;
        padding: 1rem 3.3rem;
        background-color: #86644b;
        color: #fff;
        text-decoration: none;
        text-align: center;
        &:hover, &:focus { 
            background-color: #1a0f07;
        }
         @media(max-width: ${maxCol.sm}) {
            display: block;
        }
    }
} 

.wrap-table {
    overflow: scroll;
    table {
        width: 100% !important;
        min-width: 80rem;
    }
    margin-bottom: 2rem;
    td {
        padding: 0.5rem 1rem;
    }
    td {
        p:last-child {
            margin-bottom:0;
        }
    }
    tbody {
        background: #c4c4c4;
        background: #ffe4d0;
        //color: #fff
    }
}
 
 
.section {
        margin-top: 5rem;
        margin-bottom: 5rem; 
        @media(min-width: ${minCol.sm}) {   
            // margin-top: 20rem;  
            // margin-bottom: 20rem;
            margin-top: 10rem;   
            margin-bottom: 10rem;
        }
        .box-title ~ .section-box {
            padding-top: 5rem;
            @media(min-width: ${minCol.sm}) {
                padding-top: 10rem; 
                //padding-top: 20rem; 
            }
        }
        .section-box {
             
        }
}      

.block-title {
    color: #1a0f07;
    font-family: 'sfPro';
    font-weight: 400;
    font-size: 1.5rem;
    padding-bottom:1rem;
    position: relative;
    text-transform: uppercase;
    margin-bottom: 0;
    @media(min-width: ${minCol.sm}) {    
        font-size: 3rem;
        padding-bottom:2.6rem; 
    }        
    &:before {
         content: '';
         height: 1px; 
         background-color: #000;
         left: -1000px;
         right: -1000px;
         position: absolute;
         bottom: 0;
         z-index: 1;
    }
}  

.exit {
    position: absolute;
    top: 1rem;
    right: 1rem;
    @media(min-width: ${minCol.sm}) {  
        top: 2rem;
        right: 2rem;
    }
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: #f7f4ed; 
    z-index: 15;
    &:before, &:after {
        content: '';
        position: absolute;
        width: 60%;
        height: 2px;
        background: #1a0f07;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: rotate(45deg);
        margin: auto;
    }
    &:after {
        transform: rotate(-45deg);
    }
} 

.box-img {  
    img {
        transform: translateZ(0) scale3d(1, 1, 1);
        transition: all 0.3s;
    }
    &:hover {
        img {
            transform: translateZ(0) scale3d(1.1, 1.1, 1);
            transition: all 3.5s;
        }
    }
}

`;

export default GlobalStyles;
