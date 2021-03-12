import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import {Link} from "react-router-dom"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import { useHistory } from 'react-router-dom';

// Accordion
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getBasketTotal } from './reducer';
import firebase from "firebase"
import {db} from "./firebase"
  {/* id ==> unique
                                firstname ==> text
                                user ==> hidden 
                                email ==> emailfield blanktrue
                                address ==> text 
                                city ==> choice field 
                                created ==> autonowadd
                                coupon ==> blank null true 
                                discount ==> int field min 61000000 max 65999999
                                ordernotes ==> text
                                active ==> boolean */}



function Payment() {
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();

    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState(user?.email);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState();
    const [notes, setNotes] = useState('');
    const total =getBasketTotal(basket)
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState(false)
    const [formValid, setFormValid] = useState(false)

    // const [form, setForm] = useState();

    const getDate = () => {
        var today = new Date();
        var mi = String(today.getMinutes()).padStart(2, '0');
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var yyyy = today.getFullYear();

        // return today = yyyy + "/" + mm + "/" + dd + "/" + mi;
        return today = mm+dd+ mi;
    }
    const date=user?.email+getDate();
    
    const handleSubmit =  (event) => {
        event.preventDefault();


        if (phoneNumber > 61000000 && phoneNumber < 65999999) {
            setFormValid(true)
            setErrors(false)
            
        } else{
            setErrors(true)

        }
        if (formValid) {
            if (user) {
                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(date)
                .set({
                    basket:basket,
                    amount: total.toFixed(2),
                    created: firebase.firestore.FieldValue.serverTimestamp()
                })
                console.log("this is and id", date);
                // setProcessing(true);
                dispatch({
                    type:"EMPTY_BASKET"
                })  
                console.log('dispatched', basket);
                
                history.replace('/orders')
            }else {
                history.replace('/login')
            }
            

        }
        
    }
    // useEffect(() => {
    //     document.getElementById("ele").innerHTML= errors
    // }, [errors])
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items {total.toFixed(2)} TMT</Link>)
                </h1>
                <div >
                    <Accordion defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <div className="payment__title">
                                <h3>Delivery Address</h3>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                    
                            {/* {errors ? (<h1>Good</h1>) : (<h1>Error</h1>)} */}
                            <div className="payment__address">
                                <form onSubmit={handleSubmit}>
                                    <h4>Your name</h4>
                                    <Input 
                                        placeholder="batyr"
                                        autoFocus={true}
                                        className="input"
                                        required 
                                        type="text" 
                                        onChange={e => setName(e.target.value)} 
                                        value={name}
                                    /> 
                                    <h4>E-mail</h4>  
                                    <Input
                                        placeholder="betoglan041@gmail.com"
                                        // required
                                        className="input" 
                                        type="email" 
                                        onChange={e => setEmail(e.target.value)} 
                                        value={email}
                                    /> 
                                    <h4 id='ele'>Phone number</h4>
                                    <Input 
                                        error={errors}
                                        name='phone_number'
                                        required
                                        className="input"
                                        id="input-with-icon-adornment" 
                                        placeholder="61000000"  
                                        value={phoneNumber} 
                                        onChange={e => setPhoneNumber(e.target.value)} 
                                        min={61000000} 
                                        max={65999999}
                                        startAdornment={
                                            <InputAdornment position="start">
                                              +993
                                            </InputAdornment>
                                        } />
                                        
                                    <h4>Address</h4>
                                    <Input 
                                        placeholder='Cehow'
                                        className="input"
                                        required 
                                        type="text" 
                                        onChange={e => setAddress(e.target.value)} 
                                        value={address}
                                    />
                                    <h4>City</h4>
                                    <select  className="input" required value={city} onChange={e => setCity(e.target.value)} name="" id="">
                                        <option value="Ashgabat">Ashgabat</option>
                                        <option value="Mary">Mary</option>
                                        <option value="Dasoguz">Dasoguz</option>
                                        <option value="Balkan">Balkan</option>
                                        <option value="Lebap">Lebap</option>
                                    </select>
                                    
                                    <h4 >Order Notes</h4>
                                    <Input 
                                        placeholder="islan zadynyz"
                                        // multiline={true}
                                        className="input"
                                        required  
                                        value={notes} 
                                        onChange={e => setNotes(e.target.value)} 
                                        type="text"
                                    />
                                    {/* <input required  value={notes} onChange={e => setNotes(e.target.value)} type="text"/> */}
                                    <button  className="payment__button" type='submit'>Order</button>
                                </form>
       
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded={true}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <div className="payment__title">
                                <h3>Review items and delivery</h3>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="payment__items">
                                {basket.map((item) => (
                                    <CheckoutProduct image={item.image} title={item.title} id={item.id} price={item.price} rating={item.rating}/>
                                ))}
                            </div>
                            
                        </AccordionDetails>
                    </Accordion>
                    {/* <button className="payment__button">Order</button> */}

            </div>
        </div>
        </div>
    )
}

export default Payment
