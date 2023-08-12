import React from 'react';
import styled from "styled-components";
import svgEdit from "../../assets/img/edit.svg";
import Section from "../../styles/ContactFormStyle"
import useForm from "../../function/useFormAccount";

const FormEdit = ({type, click}) => {

    const { values, captureInput, submitForm, isLoading, error, message } = useForm(type);

    return (
        <>
            <DatePerson>
                <div className="title">
                    { type === 1 && ('personal information') }
                    { type === 2 && ('My shipping information') }

                </div>
                <Section className="wrap">

                        <form onSubmit={submitForm} className='formStyle2 row'>
                            { type === 1 && (
                            <>
                                <label className="box-field-email">
                                    <span>Email *</span>
                                    <input
                                        required
                                        type="email"
                                        name='email'
                                        disabled={isLoading}
                                        value={values.email}
                                        onChange={captureInput}
                                        isLoading={isLoading}
                                    />
                                </label>
                                <label className="box-field-text">
                                    <span>First name *</span>
                                    <input
                                        required
                                        type='text'
                                        name='first_name'
                                        disabled={isLoading}
                                        value={values.first_name}
                                        onChange={captureInput}
                                        isLoading={isLoading}
                                    />
                                </label>
                                <label className="box-field-text">
                                    <span>Last name *</span>
                                    <input
                                        required
                                        type='text'
                                        name='last_name'
                                        disabled={isLoading}
                                        value={values.last_name}
                                        onChange={captureInput}
                                        isLoading={isLoading}
                                    />
                                </label>
                                <label className="box-field-text">
                                    <span>Company *</span>
                                    <input
                                        required
                                        type='text'
                                        name='billing_company'
                                        disabled={isLoading}
                                        value={values.billing_company}
                                        onChange={captureInput}
                                        isLoading={isLoading}
                                    />
                                </label>
                            </>
                            ) }

                            { type === 2 && (
                                <>
                                    <label className="box-field-text">
                                        <span>First name *</span>
                                        <input
                                            required
                                            type='text'
                                            name='billing_first_name'
                                            disabled={isLoading}
                                            value={values.billing_first_name}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-text">
                                        <span>Last name *</span>
                                        <input
                                            required
                                            type='text'
                                            name='billing_last_name'
                                            disabled={isLoading}
                                            value={values.billing_last_name}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-email">
                                        <span>Phone *</span>
                                        <input
                                            required
                                            type="text"
                                            name='billing_phone'
                                            disabled={isLoading}
                                            value={values.billing_phone}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-email">
                                        <span>Email *</span>
                                        <input
                                            required
                                            type="email"
                                            name='billing_email'
                                            disabled={isLoading}
                                            value={values.billing_email}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-text">
                                        <span>Country *</span>
                                        <input
                                            required
                                            type='text'
                                            name='billing_country'
                                            disabled={isLoading}
                                            value={values.billing_country}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-text">
                                        <span>City *</span>
                                        <input
                                            required
                                            type='text'
                                            name='billing_city'
                                            disabled={isLoading}
                                            value={values.billing_city}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-text">
                                        <span>Address *</span>
                                        <input
                                            required
                                            type='text'
                                            name='billing_address_1'
                                            disabled={isLoading}
                                            value={values.billing_address_1}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                    <label className="box-field-text">
                                        <span>Postcode *</span>
                                        <input
                                            required
                                            type='text'
                                            name='billing_postcode'
                                            disabled={isLoading}
                                            value={values.billing_postcode}
                                            onChange={captureInput}
                                            isLoading={isLoading}
                                        />
                                    </label>
                                </>
                            ) }

                            <div className="row">
                                <div className="col">
                                        <span onClick={click}  className="button d-inline-flex style-5 btn text-center">
                                            Back
                                        </span>
                                    </div>
                                <div className="col-auto">
                                        <label className="box-field-button ">
                                            <button disabled={isLoading} type="submit" className="mt-0 style-3 btn">
                                                { isLoading ? 'Saving...' :  'Save'  }
                                            </button>
                                        </label>
                                    </div>
                            </div>

                        </form>


                    <h3 className={`
                        statusInfo text-center ${error || message ?  ' active '  : ''} 
                        ${message === '01' || message === '02' || message === '03' || message === '04' ?  'error'  : 'done'} `}>
                        {error ?  error  : ''}
                        {message ? message  : ''}
                    </h3>

                </Section>
            </DatePerson>
        </>
    )
}
export default FormEdit;

const DatePerson = styled.div`
      .statusInfo {
        margin: 4rem auto;
        max-width: 60rem;
        display: none;
        padding: 2rem ;
        color: #fff;
        &.error {
          background: #ffe4d0;
          color: #1a0f07;
        }
        &.done {
          background: #1a0f07;
        }
        &.active {
          display: block;
        }
      } 
  
    .title {
      margin-bottom: 3rem;
      font-weight: 700;
      text-transform: uppercase;
      
    } 
    .list {
      border: 1px solid #000;
      padding: 2.5rem;
      position: relative;
      max-width: 53rem;
    }
    .wrap {
      margin-bottom: 9rem;
      max-width: 45rem;
    }
    .edit {
      background-size: 65% auto;
      background-image: url(${svgEdit});
      width: 3.5rem;
      height: 3.5rem;
      background-color: #86644B;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 2;
    }
`;