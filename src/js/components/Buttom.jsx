import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

let Button=({getData})=>(
    <button onClick={getData}>Load mapping</button>
);

const mapDispatchToProps = {
    getData: getData,
};

Button = connect(null,mapDispatchToProps)(Button);
export default Button;