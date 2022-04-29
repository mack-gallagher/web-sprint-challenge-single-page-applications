import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza'>Order</Link>

        <Route path='/'>
        </Route>
       
        <Route path='/pizza'>
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default App;
