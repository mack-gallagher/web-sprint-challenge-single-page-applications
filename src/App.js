import './App.css'
import React, { useState } from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PizzaForm from './PizzaForm.js';

/* VALIDATION */
import * as yup from 'yup';
import schema from './validation/schema.js';
/* ********** */


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

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    validate(name,value);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(res => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza'>Order</Link>

        <Route path='/'>
        </Route>
       
        <Route path='/pizza'>
          <PizzaForm
            formValues={formValues}
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            onChange={onChange}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default App;
