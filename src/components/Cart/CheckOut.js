import classes from './CheckOut.module.css';

const CheckOut = props => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>
      <div className={classes.control}>
        <label htmlFor='state'>State</label>
        <input type='text' id='state' />
      </div>
    </form>
  );
};

export default CheckOut;
