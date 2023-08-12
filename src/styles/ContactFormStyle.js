import styled from "styled-components";
import {maxCol, minCol} from "../function/SizeCol";

const Section = styled.section` 
    margin-top: -1px;
 
    .wrap-tabs-contact { 
         
    }
    
    .statusSend {
        font-family: 'Bolkit';
        font-size: 3.2rem;
        @media (max-width: ${maxCol.sm}) {
            font-size: 2rem;
        }
        line-height: 1.4;
        font-weight: 700;
        text-align: center;
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        background-color: #f7f4ed;
        &.active {
            visibility: visible;
            opacity: 1;
            @media (max-width: ${maxCol.sm}) {
                min-height: 40rem;
                position: relative;
                & + form {
                    display: none; 
                }
            }
        }
    }
    .tab-item-contact {
        position: absolute;
        @media(max-width: ${maxCol.sm}) {
            position: relative;
            display: none;
        }
        opacity: 0;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        z-index: 0;
        opacity:0;
        visibility: hidden; 
        &.active {
            z-index: 1;
            opacity: 1; 
            visibility: visible;
            @media(max-width: ${maxCol.sm}) {
                display: flex;
            }
        }
    }
    .tab-item-contact:first-child {
        position: relative;
    }
    
    .tab-title {
        padding: 0 1rem;
        display: inline-block;
            cursor: pointer; 
            &:after {
                margin-top: 0.5rem;
                content:'';
                display: block;
                height: 1px;
                width: 0;
                transition: all 0.5s ease; 
                background: #000;
            }
         
        &.active {
            &:after {
               width: 100%;
            }
        }
    }
    @media (max-width: ${maxCol.sm}) {
        .box-image-content {
               border: 1px solid #1A0F07;
               border-top: none;
               padding: 0.9rem !important;
        }
        .box-tabs-title {
            border-right: 1px solid #1A0F07;
            border-left: 1px solid #1A0F07;
        }
    } 
    
    .col-right .box-content {
        @media (min-width: ${minCol.sm}) {
            padding-right: 0;
        } 
    }
    .box {
       
       @media (min-width: ${minCol.sm}) {
            border: 1px solid #1A0F07;
       }
    }
    .text {
        
    }
    .box-img {
        
    }
    .box-title {
        font-family: 'sfPro';
        padding: 2rem 6rem; 
        border-bottom: 1px solid #1A0F07;
        text-transform: uppercase;
        font-size: 2.2rem;
        line-height: 1;
        @media (max-width: ${maxCol.sm}) {
            font-size: 1.6rem;
            padding: 2rem 0.5rem;
        }
    } 
    .border-right {
        @media (min-width: ${minCol.sm}) {
            border-right: 1px solid #1A0F07;
        } 
        
    }
    .box-content {
        padding: 7rem 6rem;
        @media (max-width: ${maxCol.sm}) {
            padding: 3rem 0.9rem;
        }
    }
    
    .formStyle2 {
        width: 100%;
        label {
            margin-bottom: 2rem;
            display: block;
           
        }
        input, textarea {
            display: block;
            width:100%;
            background: rgba(0,0,0,0);
            border: 1px solid #000000;
            padding: 0 1rem;
        }
        input {
            height: 5rem;
        }
        textarea {
            height: 10rem;
            padding: 1rem;
        }
        span {
            display: block;
            margin-bottom: 0.5rem;
        }
        button, .button {
            margin-top: 2rem;
            height: 5rem;
            min-width: 100%;
            @media (min-width: ${minCol.sm}) {
                min-width: 20rem;
            }
            
        }
    }
    .box-field-button {
        text-align: center;
    }
`;
export default Section;