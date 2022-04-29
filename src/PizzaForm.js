export default function PizzaForm(props) {

  const {
          formValues,
          setFormValues,
          formErrors,
          setFormErrors,
          disabled,
          onChange,
          onSubmit,
        } = props;

  return (
      <div className='pizza-form-container'>
        <div className='errors'>
          <p>{ formErrors.name }</p>
          <p>{ formErrors.size }</p>
        </div>
        <form id='pizza-form' onSubmit={onSubmit} >
          <label>
            Last Name:
            <input 
              type='text' 
              id='name-input' 
              name='name' 
              value={formValues.name}
              onChange={onChange}
            />
          </label>
          <label>
            What size pizza would you like?
            <select 
              id='size-dropdown'
              name='size'
              onChange={onChange}  
            >
              <option value='small'>Small [8-inch]</option>
              <option value='medium'>Medium [10-inch]</option>
              <option value='large'>Large [12-inch]</option>
            </select>
          </label>
          <div className="toppings">
            <label>
              Pepperoni
              <input 
                type='checkbox' 
                name='pepperoni' 
                value='pepperoni'
                checked={formValues.pepperoni}
                onChange={onChange}
              />
            </label>
            <label>
              Sausage
              <input 
                type='checkbox' 
                name='sausage' 
                value='sausage'
                checked={formValues.sausage}
                onChange={onChange} 
              />
            </label>
            <label>
              Olives
              <input 
                type='checkbox' 
                name='olives' 
                value='olives'
                checked={formValues.olives}
                onChange={onChange}
              />
            </label>
            <label>
              Onions
              <input 
                type='checkbox' 
                name='onions' 
                value='onions'
                checked={formValues.onions}
                onChange={onChange} 
              />
            </label>
            <label>
              Pineapple
              <input 
                type='checkbox' 
                name='pineapple' 
                value='pineapple'
                checked={formValues.pineapple}
                onChange={onChange}
              />
            </label>
            <label>
              Peppers
              <input 
                type='checkbox' 
                name='peppers' 
                value='peppers'
                checked={formValues.peppers}
                onChange={onChange}
              />
            </label>
          </div>
          <label>
            Special Instructions:
            <input 
              type='text' 
              name='special' 
              id='special-text'
              checked={formValues.special}
              onChange={onChange}
          />
          </label>
          <button 
            type='submit' 
            id='order-button'
            disabled={disabled}
          >
            Add To Order
          </button>
        </form>
      </div>
    )
}
