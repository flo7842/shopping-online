import React, { Fragment, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../styles/App.css";
import { UserProfileContext } from '../../lib/UserProfileContext'
import { resetCart } from "../../lib/actions";

export const Confirm = () => {

    const userProfile = useContext(UserProfileContext)
    console.log(userProfile)
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()

    const reset = () => {
        dispatch(resetCart())
    }
    
    return (
        <Fragment>
            <div className="jumbotron text-center">
                <h1 className="display-3">Thank you {userProfile.firstName} for your order</h1>
                <hr />
                <p className="lead">
                    <strong>Your order is on its way to your home at {userProfile.address}</strong>
                    <br /> <br />
                    <Link className="btn btn-primary btn-sm" to="/" onClick={() => reset()}>
                        Continue to homepage
                    </Link>
                </p>
                <br />
            </div>
        </Fragment>
    );
}