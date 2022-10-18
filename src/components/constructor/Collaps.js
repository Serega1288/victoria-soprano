import React from 'react';
import styled from 'styled-components';
import {minCol, maxCol} from "../../function/SizeCol";
import CollapsList from '../constructor/CollapsList';

const Collaps = ({item} ) => {

    const Section = styled.section`
        .box-collaps-list {
            padding-bottom: 3.5rem;
            min-width: 51rem;
            @media(max-width: ${maxCol.md} ) {
                min-width: 30rem;
            }
            @media(max-width: ${maxCol.sm} ) {
                text-align: center; 
            }
        }
        .collaps-title {
            //padding-left: 3rem;
            cursor: pointer; 
            span, span:before, span:after {
                top: 0;
                bottom: 0;
                left: 0;
                display: block;
                width: 2.2rem;
                height: 2.2rem;
                @media(max-width: ${maxCol.sm}) {
                   width: 1.6rem;
                   height: 1.6rem; 
                }
                position: absolute; 
                margin: auto; 
            }
            span {
                position: relative; 
                display: inline-block;
                margin-right: 0.5rem;
            }
            span:before, span:after {
                content: ''; 
                width: 100%;
                height:  0.4rem;
                background: #86644B;
            } 
            span:after {
                transform: rotate(90deg);
            }
            &.active {
                span {
                    transform: rotate(45deg);
                }
            }
            font-weight: 700;
            font-size: 3rem;
            line-height: 3.6rem;
            //margin-bottom: 0.5rem;
            //padding-top: 1rem;
            color: #86644B;
            text-transform: uppercase;
            @media(max-width: ${maxCol.sm}) {
                font-size: 2.2rem;
                line-height: 2.6rem;
            }
        }
        .subTitle {
            font-family: 'Bolkit';
            font-weight: 700;
            font-size: 4.5rem;
            line-height: 1;
            margin-bottom: 1rem;
            margin-top: 2.8rem;
            @media(max-width: ${maxCol.sm}) {
                font-size: 2.8rem;
                line-height: 1;
            }
        }
        .editor { 
            margin-bottom: 0rem;
            p:last-child {
                margin-bottom: 0rem;
            }
            @media(max-width: ${maxCol.sm}) {
                font-size: 1.6rem;
                line-height: 130%;
            }
        }
        
    `;
// grey

    const arr = item.collapsListLeft;
    return (
        <Section className="section collaps">
            <div className="container section-box">
                <div className="row">

                    <div  className="col-12 col-sm d-none d-sm-block">
                        { arr.map( (item, index ) => {
                            return (
                                <CollapsList key={index} item={item} s={'left'} step={index+1} ev1={1} ev2={0}  />
                            )
                        })}
                    </div>

                    <div  className="col-12 col-sm-auto d-none d-sm-block">
                        { arr.map( (item, index) => {
                            return (
                                <CollapsList key={index} item={item} s={'right'} step={index+1} ev1={0} ev2={2}   />
                            )
                        })}
                    </div>

                    <div  className="col-12 d-block d-sm-none">
                        { arr.map( (item, index) => {
                            return (
                                <CollapsList key={index} item={item} s={'all'} step={index+1} ev1={1} ev2={2}   />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
};
export default Collaps;

