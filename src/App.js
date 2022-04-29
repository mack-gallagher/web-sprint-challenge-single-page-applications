import './App.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
import PizzaForm from './PizzaForm.js';

/* VALIDATION */
import * as yup from 'yup';
import schema from './validation/schema.js';
/* ********** */

/* API CALL */
import axios from 'axios';
/* ******* */

const App = () => {

  const initialFormValues = {
                              name: '',
                              size: '',
                              pepperoni: false,
                              sausage: false,
                              olives: false,
                              onions: false,
                              pineapple: false,
                              peppers: false,
                              special: '',
                            };
  
  const initialFormErrors = {
                              name: '',
                              size: '',
                              pepperoni: '', 
                              sausage: '',
                              olives: '',
                              onions: '',
                              pineapple: '',
                              peppers: '',
                              special: '',
                            };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(res => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    validate(name,value);
    setFormValues({ ...formValues, [name]: value });
  }

  const onSubmit = evt => {
    evt.preventDefault();
    const newOrder = {
                       name: formValues.name,
                       size: formValues.size, 
                       toppings: [
                                   "pepperoni",
                                   "sausage",
                                   "olives",
                                   "onions",
                                   "pineapple",
                                   "peppers",
                                 ]
                                   .filter(topping => !!formValues[topping]),
                        special: formValues.special,
                      };
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
  }

  useEffect(() => {
    schema
      .isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <NavLink 
          exact to='/' 
          className='nav-link'
        >
          Home
        </NavLink>
        <NavLink 
          to='/pizza' 
          id='order-pizza'
          className='nav-link'
        >
          Order
        </NavLink>
      </div>

      <Route exact path='/'>
        <img className='pizza-img' src={require('./Assets/Pizza.jpg')} />
      </Route>
     
      <Route path='/pizza'>
        <PizzaForm
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          disabled={disabled}
          onChange={onChange}
          onSubmit={onSubmit}
         />
      </Route>
    </div>
  );
};
export default App;
