import { loadStripe } from "@stripe/stripe-js";
 
 
import { Elements } from "@stripe/react-stripe-js"; 
import useBook from "../../../hook/UseBook";
import CheckoutForm from "./CheckoutForm";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    const [book] = useBook();
    const total = book.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (

        <div className="w-full">
         
          
            <Elements stripe={stripePromise}>
                <CheckoutForm book={book} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;