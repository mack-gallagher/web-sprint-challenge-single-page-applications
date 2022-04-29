import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
          .string()
          .trim()
          .min(2,'name must be at least 2 characters'),
  size: yup
          .string()
          .oneOf(["small","medium","large"],
                  "Please select a size."),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  olives: yup.boolean(),
  onions: yup.boolean(),
  pineapple: yup.boolean(),
  peppers: yup.boolean(),
  special: yup
             .string()
             .trim(),
})


export default schema;
