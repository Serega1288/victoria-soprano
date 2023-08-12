import React, {useState} from 'react'
import {Link} from 'gatsby'
import styled from "styled-components";

const AuthProductData = ({item}) => {
    console.log('BoxProductDesc >>>', item.ACF_product_attribute_variable );

    const  d = item.ACF_product_attribute_variable;
    const [ variableAttrColor, variableAttrColorOpen ] = useState(null);
    const [ variableAttrSize, variableAttrSizeOpen ] = useState(null);
    const [ step, stepSet ] = useState(1);

    const [ validAttrColor, validAttrColorSet ] = useState(1);
    const [ validAttrSize, validAttrSizeSet ] = useState(1);

    const clickStep = (op) => {
        if (op === 'plus') {
            stepSet(step+1)
        }
        if (op === 'min') {
            if (step > 1) {
                stepSet(step-1)
            }
        }

    };

    const clickAttrColor = (op) => {
        variableAttrColorOpen(op)
        validAttrColorSet(1)
    };

    const clickAttrSize = (op) => {
        variableAttrSizeOpen(op)
        validAttrSizeSet(1)
    };

    const ClickBuy = () => {
        if (variableAttrColor === null) { validAttrColorSet(0) };
        if (variableAttrSize === null) { validAttrSizeSet(0) }
    };

    return (
        <Section>
            <div className="price">
                {
                    d.priceSaleFront ? (
                        <>
                            <span>
                                d.priceFront + '$'
                            </span>
                            <span className='savePrice'>
                                d.priceSaleFront + '$'
                            </span>
                        </>
                    ) : (
                        d.priceFront + '$'
                    )
                }
            </div>
            <div className="attr">

                <div className="attr-item attr-color">
                    <div className="row">
                        <div className="col-4">
                            <div className={`name ${validAttrColor === 0 && 'error' }`}>COLOR:</div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <div className="values row">
                                {  item.ACF_product_attribute_variable.color.map((item, index) => (
                                    <div onClick={()=>clickAttrColor(item)} className={`value col-auto ${ item === variableAttrColor && 'active' }`}>{item}</div>
                                ) ) }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="attr-item attr-size">
                    <div className="row">
                        <div className="col-4">
                            <div className={`name ${validAttrSize === 0 && 'error' }`}>SIZE:</div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <div className="values row">
                                {  item.ACF_product_attribute_variable.size.map((item, index) => (
                                    <div onClick={()=>clickAttrSize(item)} className={`value col-auto ${ item === variableAttrSize && 'active' }`}>{item}</div>
                                ) ) }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="size-guide">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-8">
                            <Link to='/size-chart/'>Size Guide</Link>
                        </div>
                    </div>
                </div>

                <div className='wrap-buy'>
                    <div className="row">
                        <div className="col-3">
                            <div className="step">
                                <span onClick={()=>clickStep('min')} className="min">-</span>
                                <span>{step}</span>
                                <span onClick={()=>clickStep('plus')} className="plus">+</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <span  onClick={()=>ClickBuy()} className='btn style-3 w100'>
                                ADD TO BAG
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
export default AuthProductData;



const Section = styled.div`
  .wrap-buy {
    margin-top: 2.5rem;
    margin-bottom: 5rem;
  }
  .error {
    color: darkred !important;
  }
  .step {
    border: 1px solid #000;
    height: 4.5rem;
    display: flex;
    align-items: center;
    & > * {
      width: 33.33%;
      height: 100%;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .min, .plus {
      cursor: pointer;
      &:hover {
        color: #86644b;
        .anim;
      }
    }
  }
  .attr {
    .attr-item {
      margin-bottom: 1.5rem;
    }
    .name {
      color: #86644B;
      font-size: 3rem;
    }
    .values {
      color: #000;
      display: flex;
      align-items: center;
    }
    .value {
      padding: 1rem;
      margin-right: 0.4rem;
      font-size: 1.8rem;
      border-radius: 4.1rem;
      height: 4.1rem;
      min-width: 4.1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(0,0,0,0);
      &.active {
        border: 1px solid #000;
      }
    }
  }
  .price {
    font-size: 4.5rem;
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    font-family: 'Bolkit';
    font-weight: 700;
  } 
  .savePrice {
    font-size: 3.2rem;
    margin-left: 2rem;
    opacity: 0.4;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 1;
      background-color: #000;
      height: 1.5px;
    }
  }
  
  
`;
