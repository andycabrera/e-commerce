import Commerce from '@chec/commerce.js';

console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY)
export const commerce = new Commerce('pk_228683ef4b00aee91f729d7eda157dae42e2271bb0cda', true);