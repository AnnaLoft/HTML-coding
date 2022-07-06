import React, { useState, forwardRef } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { reduxForm } from 'redux-form'


const Inp = forwardRef((props, ref) => {

    const [value, setValue] = useState();

    const update = (e) => {
        const re = /^[A-Za-zА-Яа-я-, ]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setValue({ value: e.target.value });
            props.onChange(e);
        }
    }

    const newProps = Object.assign({}, props, {onChange: update});
    
    return <input onChange={update} {...newProps} ref={ref} />
  });

const FieldLevelValidationForm = props => {
    const [value, setValue] = useState();
    return (
        <form className="filter" onSubmit={() => false}>
            <p className="bold-txt form-header">Указать локацию вручную:</p>
            <AddressSuggestions customInput={Inp}  type="text"  className="input loaction-info__data"   token="3ec2b42c32789f092783bb2cb9f0a6d372ec29fe" value={value} onChange={setValue}></AddressSuggestions>

        </form>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation'
})(FieldLevelValidationForm)