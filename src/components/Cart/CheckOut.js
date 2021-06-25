import { useRef, useState } from 'react';

import classes from './CheckOut.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const CheckOut = props => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const confirmHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameClassesControl = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;

  const addressClassesControl = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;

  const cityClassesControl = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  const postalCodeClassesControl = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClassesControl}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please a valid name</p>}
      </div>
      <div className={addressClassesControl}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' ref={addressInputRef} />
        {!formInputsValidity.address && <p>Please a valid address</p>}
      </div>
      <div className={cityClassesControl}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please a valid city </p>}
      </div>
      <div className={postalCodeClassesControl}>
        <label htmlFor='postalcode'>Postal Code</label>
        <input type='text' id='postalcode' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please a valid postal code (5 characters long)</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
