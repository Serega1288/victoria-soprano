import { createGlobalStyle } from 'styled-components';
import bolkit from '../assets/fonts/bolkit/bolkit.woff2';
import bolkitBold from '../assets/fonts/bolkit/bolkit-bold.woff2';


import sfPro from '../assets/fonts/SFProDisplay/sf-regular.woff2';
import sfProBold from '../assets/fonts/SFProDisplay/sf-bold.woff2';




// font-family: 'Bolkit';
// font-family: 'SF Pro Display';

const GlobalStyles = createGlobalStyle` 

@font-face {
    font-family: 'sfPro';
    font-style: normal;
    font-weight: 400; 
    src: url("${sfPro}") format("woff2");
}
@font-face {
    font-family: 'sfPro';
    font-style: normal;
    font-weight: 4700; 
    src: url("${sfProBold}") format("woff2");
}



@font-face {
    font-family: 'Bolkit';
    font-style: normal;
    font-weight: 400; 
    src: url("${bolkit}") format("woff2");
}
@font-face {
    font-family: 'Bolkit';
    font-style: normal;
    font-weight: 700; 
    src: url("${bolkitBold}") format("woff2");
}


h1, h2, h3, h4, .WrapMenu {
   font-family: 'Bolkit';
}

/* width */
::-webkit-scrollbar {
  width: 2px;
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
 
.pos {
    position: relative;
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

 

 
 
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    font-size: 62.5%;
    --bs-gutter-x: 1.6rem;
    @media (min-width:576px) {
        font-size: 35%;
    }
    
    @media (min-width:768px) {
        
    }
    
    @media (min-width:992px) {
        font-size: 55%;
    }
    
    @media (min-width:1200px) {
        
    }
    
    @media (min-width:1400px) {
        font-size: 62.5%;
    }
}
 
body { 
    height: 100vh;
    background-color: #f7f4ed; 
    margin: 0;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #1a0f07;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding-top: 13.4rem;
    @media (max-width: 565px) {
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
 

.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl {
    width:100%;
    padding-right:var(--bs-gutter-x,.75rem);
    padding-left:var(--bs-gutter-x,.75rem);
    margin-right:auto; 
    margin-left:auto
} 

@media (min-width:576px) {
    .container,.container-sm {
        max-width:540px
    }
}

@media (min-width:768px) {
    .container,.container-md,.container-sm {
        max-width:720px
    }
}

@media (min-width:992px) {
    .container,.container-lg,.container-md,.container-sm {
        max-width:960px
    }
}

@media (min-width:1200px) {
    .container,.container-lg,.container-md,.container-sm,.container-xl {
        max-width:1140px
    }
}

@media (min-width:1400px) {
    .container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl {
        max-width:1320px
    }
}

.row {
    --bs-gutter-x:1.5rem;
    --bs-gutter-y:0;
    display:flex;
    flex-wrap:wrap;
    margin-top:calc(-1 * var(--bs-gutter-y));
    margin-right:calc(-.5 * var(--bs-gutter-x));
    margin-left:calc(-.5 * var(--bs-gutter-x))
}

.row>* {
    box-sizing:border-box;
    flex-shrink:0;
    width:100%;
    max-width:100%;
    padding-right:calc(var(--bs-gutter-x) * .5);
    padding-left:calc(var(--bs-gutter-x) * .5);
    margin-top:var(--bs-gutter-y)
}

.col{flex:1 0 0}
.row-cols-auto>*{flex:0 0 auto;width:auto}
.row-cols-1>*{flex:0 0 auto;width:100%}
.row-cols-2>*{flex:0 0 auto;width:50%}
.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}
.row-cols-4>*{flex:0 0 auto;width:25%}
.row-cols-5>*{flex:0 0 auto;width:20%}
.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}
.col-auto{flex:0 0 auto;width:auto}
.col-1{flex:0 0 auto;width:8.33333333%}
.col-2{flex:0 0 auto;width:16.66666667%}
.col-3{flex:0 0 auto;width:25%}
.col-4{flex:0 0 auto;width:33.33333333%}
.col-5{flex:0 0 auto;width:41.66666667%}
.col-6{flex:0 0 auto;width:50%}
.col-7{flex:0 0 auto;width:58.33333333%}
.col-8{flex:0 0 auto;width:66.66666667%}
.col-9{flex:0 0 auto;width:75%}
.col-10{flex:0 0 auto;width:83.33333333%}
.col-11{flex:0 0 auto;width:91.66666667%}
.col-12{flex:0 0 auto;width:100%}
.offset-1{margin-left:8.33333333%}
.offset-2{margin-left:16.66666667%}
.offset-3{margin-left:25%}
.offset-4{margin-left:33.33333333%}
.offset-5{margin-left:41.66666667%}
.offset-6{margin-left:50%}
.offset-7{margin-left:58.33333333%}
.offset-8{margin-left:66.66666667%}
.offset-9{margin-left:75%}
.offset-10{margin-left:83.33333333%}
.offset-11{margin-left:91.66666667%}
@media (min-width:576px) {
    .col-sm{flex:1 0 0}
    .row-cols-sm-auto>*{flex:0 0 auto;width:auto}
    .row-cols-sm-1>*{flex:0 0 auto;width:100%}
    .row-cols-sm-2>*{flex:0 0 auto;width:50%}
    .row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}
    .row-cols-sm-4>*{flex:0 0 auto;width:25%}
    .row-cols-sm-5>*{flex:0 0 auto;width:20%}
    .row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}
    .col-sm-auto{flex:0 0 auto;width:auto}
    .col-sm-1{flex:0 0 auto;width:8.33333333%}
    .col-sm-2{flex:0 0 auto;width:16.66666667%}
    .col-sm-3{flex:0 0 auto;width:25%}
    .col-sm-4{flex:0 0 auto;width:33.33333333%}
    .col-sm-5{flex:0 0 auto;width:41.66666667%}
    .col-sm-6{flex:0 0 auto;width:50%}
    .col-sm-7{flex:0 0 auto;width:58.33333333%}
    .col-sm-8{flex:0 0 auto;width:66.66666667%}
    .col-sm-9{flex:0 0 auto;width:75%}
    .col-sm-10{flex:0 0 auto;width:83.33333333%}
    .col-sm-11{flex:0 0 auto;width:91.66666667%}
    .col-sm-12{flex:0 0 auto;width:100%}
    .offset-sm-0{margin-left:0}
    .offset-sm-1{margin-left:8.33333333%}
    .offset-sm-2{margin-left:16.66666667%}
    .offset-sm-3{margin-left:25%}
    .offset-sm-4{margin-left:33.33333333%}
    .offset-sm-5{margin-left:41.66666667%}
    .offset-sm-6{margin-left:50%}
    .offset-sm-7{margin-left:58.33333333%}
    .offset-sm-8{margin-left:66.66666667%}
    .offset-sm-9{margin-left:75%}
    .offset-sm-10{margin-left:83.33333333%}
    .offset-sm-11{margin-left:91.66666667%}
}
@media (min-width:768px) {
    .col-md{flex:1 0 0}
    .row-cols-md-auto>*{flex:0 0 auto;width:auto}
    .row-cols-md-1>*{flex:0 0 auto;width:100%}
    .row-cols-md-2>*{flex:0 0 auto;width:50%}
    .row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}
    .row-cols-md-4>*{flex:0 0 auto;width:25%}
    .row-cols-md-5>*{flex:0 0 auto;width:20%}
    .row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}
    .col-md-auto{flex:0 0 auto;width:auto}
    .col-md-1{flex:0 0 auto;width:8.33333333%}
    .col-md-2{flex:0 0 auto;width:16.66666667%}
    .col-md-3{flex:0 0 auto;width:25%}
    .col-md-4{flex:0 0 auto;width:33.33333333%}
    .col-md-5{flex:0 0 auto;width:41.66666667%}
    .col-md-6{flex:0 0 auto;width:50%}
    .col-md-7{flex:0 0 auto;width:58.33333333%}
    .col-md-8{flex:0 0 auto;width:66.66666667%}
    .col-md-9{flex:0 0 auto;width:75%}
    .col-md-10{flex:0 0 auto;width:83.33333333%}
    .col-md-11{flex:0 0 auto;width:91.66666667%}
    .col-md-12{flex:0 0 auto;width:100%}
    .offset-md-0{margin-left:0}
    .offset-md-1{margin-left:8.33333333%}
    .offset-md-2{margin-left:16.66666667%}
    .offset-md-3{margin-left:25%}
    .offset-md-4{margin-left:33.33333333%}
    .offset-md-5{margin-left:41.66666667%}
    .offset-md-6{margin-left:50%}
    .offset-md-7{margin-left:58.33333333%}
    .offset-md-8{margin-left:66.66666667%}
    .offset-md-9{margin-left:75%}
    .offset-md-10{margin-left:83.33333333%}
    .offset-md-11{margin-left:91.66666667%}
}
@media (min-width:992px) {
    .col-lg{flex:1 0 0}
    .row-cols-lg-auto>*{flex:0 0 auto;width:auto}
    .row-cols-lg-1>*{flex:0 0 auto;width:100%}
    .row-cols-lg-2>*{flex:0 0 auto;width:50%}
    .row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}
    .row-cols-lg-4>*{flex:0 0 auto;width:25%}
    .row-cols-lg-5>*{flex:0 0 auto;width:20%}
    .row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}
    .col-lg-auto{flex:0 0 auto;width:auto}
    .col-lg-1{flex:0 0 auto;width:8.33333333%}
    .col-lg-2{flex:0 0 auto;width:16.66666667%}
    .col-lg-3{flex:0 0 auto;width:25%}
    .col-lg-4{flex:0 0 auto;width:33.33333333%}
    .col-lg-5{flex:0 0 auto;width:41.66666667%}
    .col-lg-6{flex:0 0 auto;width:50%}
    .col-lg-7{flex:0 0 auto;width:58.33333333%}
    .col-lg-8{flex:0 0 auto;width:66.66666667%}
    .col-lg-9{flex:0 0 auto;width:75%}
    .col-lg-10{flex:0 0 auto;width:83.33333333%}
    .col-lg-11{flex:0 0 auto;width:91.66666667%}
    .col-lg-12{flex:0 0 auto;width:100%}
    .offset-lg-0{margin-left:0}
    .offset-lg-1{margin-left:8.33333333%}
    .offset-lg-2{margin-left:16.66666667%}
    .offset-lg-3{margin-left:25%}
    .offset-lg-4{margin-left:33.33333333%}
    .offset-lg-5{margin-left:41.66666667%}
    .offset-lg-6{margin-left:50%}
    .offset-lg-7{margin-left:58.33333333%}
    .offset-lg-8{margin-left:66.66666667%}
    .offset-lg-9{margin-left:75%}
    .offset-lg-10{margin-left:83.33333333%}
    .offset-lg-11{margin-left:91.66666667%}
}

@media (min-width:1200px) {
    .col-xl{flex:1 0 0}
    .row-cols-xl-auto>*{flex:0 0 auto;width:auto}
    .row-cols-xl-1>*{flex:0 0 auto;width:100%}
    .row-cols-xl-2>*{flex:0 0 auto;width:50%}
    .row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}
    .row-cols-xl-4>*{flex:0 0 auto;width:25%}
    .row-cols-xl-5>*{flex:0 0 auto;width:20%}
    .row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}
    .col-xl-auto{flex:0 0 auto;width:auto}
    .col-xl-1{flex:0 0 auto;width:8.33333333%}
    .col-xl-2{flex:0 0 auto;width:16.66666667%}
    .col-xl-3{flex:0 0 auto;width:25%}
    .col-xl-4{flex:0 0 auto;width:33.33333333%}
    .col-xl-5{flex:0 0 auto;width:41.66666667%}
    .col-xl-6{flex:0 0 auto;width:50%}
    .col-xl-7{flex:0 0 auto;width:58.33333333%}
    .col-xl-8{flex:0 0 auto;width:66.66666667%}
    .col-xl-9{flex:0 0 auto;width:75%}
    .col-xl-10{flex:0 0 auto;width:83.33333333%}
    .col-xl-11{flex:0 0 auto;width:91.66666667%}
    .col-xl-12{flex:0 0 auto;width:100%}
    .offset-xl-0{margin-left:0}
    .offset-xl-1{margin-left:8.33333333%}
    .offset-xl-2{margin-left:16.66666667%}
    .offset-xl-3{margin-left:25%}
    .offset-xl-4{margin-left:33.33333333%}
    .offset-xl-5{margin-left:41.66666667%}
    .offset-xl-6{margin-left:50%}
    .offset-xl-7{margin-left:58.33333333%}
    .offset-xl-8{margin-left:66.66666667%}
    .offset-xl-9{margin-left:75%}
    .offset-xl-10{margin-left:83.33333333%}
    .offset-xl-11{margin-left:91.66666667%}
}

@media (min-width:1400px) {
    .col-xxl{flex:1 0 0}
    .row-cols-xxl-auto>*{flex:0 0 auto;width:auto}
    .row-cols-xxl-1>*{flex:0 0 auto;width:100%}
    .row-cols-xxl-2>*{flex:0 0 auto;width:50%}
    .row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}
    .row-cols-xxl-4>*{flex:0 0 auto;width:25%}
    .row-cols-xxl-5>*{flex:0 0 auto;width:20%}
    .row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}
    .col-xxl-auto{flex:0 0 auto;width:auto}
    .col-xxl-1{flex:0 0 auto;width:8.33333333%}
    .col-xxl-2{flex:0 0 auto;width:16.66666667%}
    .col-xxl-3{flex:0 0 auto;width:25%}
    .col-xxl-4{flex:0 0 auto;width:33.33333333%}
    .col-xxl-5{flex:0 0 auto;width:41.66666667%}
    .col-xxl-6{flex:0 0 auto;width:50%}
    .col-xxl-7{flex:0 0 auto;width:58.33333333%}
    .col-xxl-8{flex:0 0 auto;width:66.66666667%}
    .col-xxl-9{flex:0 0 auto;width:75%}
    .col-xxl-10{flex:0 0 auto;width:83.33333333%}
    .col-xxl-11{flex:0 0 auto;width:91.66666667%}
    .col-xxl-12{flex:0 0 auto;width:100%}
    .offset-xxl-0{margin-left:0}
    .offset-xxl-1{margin-left:8.33333333%}
    .offset-xxl-2{margin-left:16.66666667%}
    .offset-xxl-3{margin-left:25%}
    .offset-xxl-4{margin-left:33.33333333%}
    .offset-xxl-5{margin-left:41.66666667%}
    .offset-xxl-6{margin-left:50%}
    .offset-xxl-7{margin-left:58.33333333%}
    .offset-xxl-8{margin-left:66.66666667%}
    .offset-xxl-9{margin-left:75%}
    .offset-xxl-10{margin-left:83.33333333%}
    .offset-xxl-11{margin-left:91.66666667%}
}

.d-inline{display:inline}
.d-inline-block{display:inline-block}
.d-block{display:block}
.d-flex{display:flex}
.d-inline-flex{display:inline-flex}
.d-none{display:none}
.flex-fill{flex:1 1 auto}
.flex-row{flex-direction:row}
.flex-column{flex-direction:column}
.flex-row-reverse{flex-direction:row-reverse}
.flex-column-reverse{flex-direction:column-reverse}
.flex-grow-0{flex-grow:0}
.flex-grow-1{flex-grow:1}
.flex-shrink-0{flex-shrink:0}
.flex-shrink-1{flex-shrink:1}
.flex-wrap{flex-wrap:wrap}
.flex-nowrap{flex-wrap:nowrap}
.flex-wrap-reverse{flex-wrap:wrap-reverse}
.justify-content-start{justify-content:flex-start}
.justify-content-end{justify-content:flex-end}
.justify-content-center{justify-content:center}
.justify-content-between{justify-content:space-between}
.justify-content-around{justify-content:space-around}
.justify-content-evenly{justify-content:space-evenly}
.align-items-start{align-items:flex-start}
.align-items-end{align-items:flex-end}
.align-items-center{align-items:center}
.align-items-baseline{align-items:baseline}
.align-items-stretch{align-items:stretch}
.align-content-start{align-content:flex-start}
.align-content-end{align-content:flex-end}
.align-content-center{align-content:center}
.align-content-between{align-content:space-between}
.align-content-around{align-content:space-around}
.align-content-stretch{align-content:stretch}
.align-self-auto{align-self:auto}
.align-self-start{align-self:flex-start}
.align-self-end{align-self:flex-end}
.align-self-center{align-self:center}
.align-self-baseline{align-self:baseline}
.align-self-stretch{align-self:stretch}
.order-first{order:-1}
.order-0{order:0}
.order-1{order:1}
.order-2{order:2}
.order-3{order:3}
.order-4{order:4}
.order-5{order:5}
.order-last{order:6}

@media (min-width:576px) {
    .d-sm-inline{display:inline}
    .d-sm-inline-block{display:inline-block}
    .d-sm-block{display:block}
    .d-sm-flex{display:flex}
    .d-sm-inline-flex{display:inline-flex}
    .d-sm-none{display:none}
    .flex-sm-fill{flex:1 1 auto}
    .flex-sm-row{flex-direction:row}
    .flex-sm-column{flex-direction:column}
    .flex-sm-row-reverse{flex-direction:row-reverse}
    .flex-sm-column-reverse{flex-direction:column-reverse}
    .flex-sm-grow-0{flex-grow:0}
    .flex-sm-grow-1{flex-grow:1}
    .flex-sm-shrink-0{flex-shrink:0}
    .flex-sm-shrink-1{flex-shrink:1}
    .flex-sm-wrap{flex-wrap:wrap}
    .flex-sm-nowrap{flex-wrap:nowrap}
    .flex-sm-wrap-reverse{flex-wrap:wrap-reverse}
    .justify-content-sm-start{justify-content:flex-start}
    .justify-content-sm-end{justify-content:flex-end}
    .justify-content-sm-center{justify-content:center}
    .justify-content-sm-between{justify-content:space-between}
    .justify-content-sm-around{justify-content:space-around}
    .justify-content-sm-evenly{justify-content:space-evenly}
    .align-items-sm-start{align-items:flex-start}
    .align-items-sm-end{align-items:flex-end}
    .align-items-sm-center{align-items:center}
    .align-items-sm-baseline{align-items:baseline}
    .align-items-sm-stretch{align-items:stretch}
    .align-content-sm-start{align-content:flex-start}
    .align-content-sm-end{align-content:flex-end}
    .align-content-sm-center{align-content:center}
    .align-content-sm-between{align-content:space-between}
    .align-content-sm-around{align-content:space-around}
    .align-content-sm-stretch{align-content:stretch}
    .align-self-sm-auto{align-self:auto}
    .align-self-sm-start{align-self:flex-start}
    .align-self-sm-end{align-self:flex-end}
    .align-self-sm-center{align-self:center}
    .align-self-sm-baseline{align-self:baseline}
    .align-self-sm-stretch{align-self:stretch}
    .order-sm-first{order:-1}
    .order-sm-0{order:0}
    .order-sm-1{order:1}
    .order-sm-2{order:2}
    .order-sm-3{order:3}
    .order-sm-4{order:4}
    .order-sm-5{order:5}
    .order-sm-last{order:6}
}
@media (min-width:768px) {
    .d-md-inline{display:inline}
    .d-md-inline-block{display:inline-block}
    .d-md-block{display:block}
    .d-md-flex{display:flex}
    .d-md-inline-flex{display:inline-flex}
    .d-md-none{display:none}
    .flex-md-fill{flex:1 1 auto}
    .flex-md-row{flex-direction:row}
    .flex-md-column{flex-direction:column}
    .flex-md-row-reverse{flex-direction:row-reverse}
    .flex-md-column-reverse{flex-direction:column-reverse}
    .flex-md-grow-0{flex-grow:0}
    .flex-md-grow-1{flex-grow:1}
    .flex-md-shrink-0{flex-shrink:0}
    .flex-md-shrink-1{flex-shrink:1}
    .flex-md-wrap{flex-wrap:wrap}
    .flex-md-nowrap{flex-wrap:nowrap}
    .flex-md-wrap-reverse{flex-wrap:wrap-reverse}
    .justify-content-md-start{justify-content:flex-start}
    .justify-content-md-end{justify-content:flex-end}
    .justify-content-md-center{justify-content:center}
    .justify-content-md-between{justify-content:space-between}
    .justify-content-md-around{justify-content:space-around}
    .justify-content-md-evenly{justify-content:space-evenly}
    .align-items-md-start{align-items:flex-start}
    .align-items-md-end{align-items:flex-end}
    .align-items-md-center{align-items:center}
    .align-items-md-baseline{align-items:baseline}
    .align-items-md-stretch{align-items:stretch}
    .align-content-md-start{align-content:flex-start}
    .align-content-md-end{align-content:flex-end}
    .align-content-md-center{align-content:center}
    .align-content-md-between{align-content:space-between}
    .align-content-md-around{align-content:space-around}
    .align-content-md-stretch{align-content:stretch}
    .align-self-md-auto{align-self:auto}
    .align-self-md-start{align-self:flex-start}
    .align-self-md-end{align-self:flex-end}
    .align-self-md-center{align-self:center}
    .align-self-md-baseline{align-self:baseline}
    .align-self-md-stretch{align-self:stretch}
    .order-md-first{order:-1}
    .order-md-0{order:0}
    .order-md-1{order:1}
    .order-md-2{order:2}
    .order-md-3{order:3}
    .order-md-4{order:4}
    .order-md-5{order:5}
    .order-md-last{order:6}
}
@media (min-width:992px) {
    .d-lg-inline{display:inline}
    .d-lg-inline-block{display:inline-block}
    .d-lg-block{display:block}
    .d-lg-flex{display:flex}
    .d-lg-inline-flex{display:inline-flex}
    .d-lg-none{display:none}
    .flex-lg-fill{flex:1 1 auto}
    .flex-lg-row{flex-direction:row}
    .flex-lg-column{flex-direction:column}
    .flex-lg-row-reverse{flex-direction:row-reverse}
    .flex-lg-column-reverse{flex-direction:column-reverse}
    .flex-lg-grow-0{flex-grow:0}
    .flex-lg-grow-1{flex-grow:1}
    .flex-lg-shrink-0{flex-shrink:0}
    .flex-lg-shrink-1{flex-shrink:1}
    .flex-lg-wrap{flex-wrap:wrap}
    .flex-lg-nowrap{flex-wrap:nowrap}
    .flex-lg-wrap-reverse{flex-wrap:wrap-reverse}
    .justify-content-lg-start{justify-content:flex-start}
    .justify-content-lg-end{justify-content:flex-end}
    .justify-content-lg-center{justify-content:center}
    .justify-content-lg-between{justify-content:space-between}
    .justify-content-lg-around{justify-content:space-around}
    .justify-content-lg-evenly{justify-content:space-evenly}
    .align-items-lg-start{align-items:flex-start}
    .align-items-lg-end{align-items:flex-end}
    .align-items-lg-center{align-items:center}
    .align-items-lg-baseline{align-items:baseline}
    .align-items-lg-stretch{align-items:stretch}
    .align-content-lg-start{align-content:flex-start}
    .align-content-lg-end{align-content:flex-end}
    .align-content-lg-center{align-content:center}
    .align-content-lg-between{align-content:space-between}
    .align-content-lg-around{align-content:space-around}
    .align-content-lg-stretch{align-content:stretch}
    .align-self-lg-auto{align-self:auto}
    .align-self-lg-start{align-self:flex-start}
    .align-self-lg-end{align-self:flex-end}
    .align-self-lg-center{align-self:center}
    .align-self-lg-baseline{align-self:baseline}
    .align-self-lg-stretch{align-self:stretch}
    .order-lg-first{order:-1}
    .order-lg-0{order:0}
    .order-lg-1{order:1}
    .order-lg-2{order:2}
    .order-lg-3{order:3}
    .order-lg-4{order:4}
    .order-lg-5{order:5}
    .order-lg-last{order:6}
}
@media (min-width:1200px) {
    .d-xl-inline{display:inline}
    .d-xl-inline-block{display:inline-block}
    .d-xl-block{display:block}
    .d-xl-flex{display:flex}
    .d-xl-inline-flex{display:inline-flex}
    .d-xl-none{display:none}
    .flex-xl-fill{flex:1 1 auto}
    .flex-xl-row{flex-direction:row}
    .flex-xl-column{flex-direction:column}
    .flex-xl-row-reverse{flex-direction:row-reverse}
    .flex-xl-column-reverse{flex-direction:column-reverse}
    .flex-xl-grow-0{flex-grow:0}
    .flex-xl-grow-1{flex-grow:1}
    .flex-xl-shrink-0{flex-shrink:0}
    .flex-xl-shrink-1{flex-shrink:1}
    .flex-xl-wrap{flex-wrap:wrap}
    .flex-xl-nowrap{flex-wrap:nowrap}
    .flex-xl-wrap-reverse{flex-wrap:wrap-reverse}
    .justify-content-xl-start{justify-content:flex-start}
    .justify-content-xl-end{justify-content:flex-end}
    .justify-content-xl-center{justify-content:center}
    .justify-content-xl-between{justify-content:space-between}
    .justify-content-xl-around{justify-content:space-around}
    .justify-content-xl-evenly{justify-content:space-evenly}
    .align-items-xl-start{align-items:flex-start}
    .align-items-xl-end{align-items:flex-end}
    .align-items-xl-center{align-items:center}
    .align-items-xl-baseline{align-items:baseline}
    .align-items-xl-stretch{align-items:stretch}
    .align-content-xl-start{align-content:flex-start}
    .align-content-xl-end{align-content:flex-end}
    .align-content-xl-center{align-content:center}
    .align-content-xl-between{align-content:space-between}
    .align-content-xl-around{align-content:space-around}
    .align-content-xl-stretch{align-content:stretch}
    .align-self-xl-auto{align-self:auto}
    .align-self-xl-start{align-self:flex-start}
    .align-self-xl-end{align-self:flex-end}
    .align-self-xl-center{align-self:center}
    .align-self-xl-baseline{align-self:baseline}
    .align-self-xl-stretch{align-self:stretch}
    .order-xl-first{order:-1}
    .order-xl-0{order:0}
    .order-xl-1{order:1}
    .order-xl-2{order:2}
    .order-xl-3{order:3}
    .order-xl-4{order:4}
    .order-xl-5{order:5}
    .order-xl-last{order:6}
}
@media (min-width:1400px) {
    .d-xxl-inline{display:inline}
    .d-xxl-inline-block{display:inline-block}
    .d-xxl-block{display:block}
    .d-xxl-flex{display:flex}
    .d-xxl-inline-flex{display:inline-flex}
    .d-xxl-none{display:none}
    .flex-xxl-fill{flex:1 1 auto}
    .flex-xxl-row{flex-direction:row}
    .flex-xxl-column{flex-direction:column}
    .flex-xxl-row-reverse{flex-direction:row-reverse}
    .flex-xxl-column-reverse{flex-direction:column-reverse}
    .flex-xxl-grow-0{flex-grow:0}
    .flex-xxl-grow-1{flex-grow:1}
    .flex-xxl-shrink-0{flex-shrink:0}
    .flex-xxl-shrink-1{flex-shrink:1}
    .flex-xxl-wrap{flex-wrap:wrap}
    .flex-xxl-nowrap{flex-wrap:nowrap}
    .flex-xxl-wrap-reverse{flex-wrap:wrap-reverse}
    .justify-content-xxl-start{justify-content:flex-start}
    .justify-content-xxl-end{justify-content:flex-end}
    .justify-content-xxl-center{justify-content:center}
    .justify-content-xxl-between{justify-content:space-between}
    .justify-content-xxl-around{justify-content:space-around}
    .justify-content-xxl-evenly{justify-content:space-evenly}
    .align-items-xxl-start{align-items:flex-start}
    .align-items-xxl-end{align-items:flex-end}
    .align-items-xxl-center{align-items:center}
    .align-items-xxl-baseline{align-items:baseline}
    .align-items-xxl-stretch{align-items:stretch}
    .align-content-xxl-start{align-content:flex-start}
    .align-content-xxl-end{align-content:flex-end}
    .align-content-xxl-center{align-content:center}
    .align-content-xxl-between{align-content:space-between}
    .align-content-xxl-around{align-content:space-around}
    .align-content-xxl-stretch{align-content:stretch}
    .align-self-xxl-auto{align-self:auto}
    .align-self-xxl-start{align-self:flex-start}
    .align-self-xxl-end{align-self:flex-end}
    .align-self-xxl-center{align-self:center}
    .align-self-xxl-baseline{align-self:baseline}
    .align-self-xxl-stretch{align-self:stretch}
    .order-xxl-first{order:-1}
    .order-xxl-0{order:0}
    .order-xxl-1{order:1}
    .order-xxl-2{order:2}
    .order-xxl-3{order:3}
    .order-xxl-4{order:4}
    .order-xxl-5{order:5}
    .order-xxl-last{order:6}
}

.anim {
    transition: all 0.5s ease;
}
.WrapMenu {
    position: fixed;
    bottom:100%;
    height: calc(100vh - 13.4rem);  
    @media (max-width: 565px) { 
        height: calc(100vh - 8.8rem);   
    }
    left: 0;
    right: 0;
    transition: all 1s ease;
    opacity: 1; 
    z-index: 99;
    background-color: #f7f4ed; 
    border: 1px solid #000;
    border-top: 0;
    &.open {
        bottom:0;
    }
}
`;

export default GlobalStyles;
