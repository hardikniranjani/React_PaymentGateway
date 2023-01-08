import React from 'react'
import NavBar from '../component/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import PaymentForm from '../component/paymentForm';
const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <div>
                <NavBar />
                {
                    isAuthenticated ? (
                        <>
                            Payment GateWay
                            <PaymentForm />
                        </>
                    ) : (
                        <>
                            Want to make payment ? Please Login...
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Home;