import React from 'react';
import Link from 'next/link';
import PaymentIcons from '../PaymentIcons';
//import MiniCart from "../MiniCart";

//import { useStateContext } from "../../../context/StateContext";

import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  //const { showCart } = useStateContext();

  return (
    <>
      <div className='footer-container'>
        <div className='footer-content'>
          <div>
            <Link href='/delivery'>Delivery</Link>
            <Link href='/privacy'>Privacy</Link>
            <Link href='/terms'>Terms and Conditions of Sale</Link>
            <Link href='/contact'>Contact Us</Link>
          </div>
          <div>Contact: hello@macaronmagic.com</div>
          {/*<MiniCart />*/}
        </div>
      </div>
    </>
  );
};
