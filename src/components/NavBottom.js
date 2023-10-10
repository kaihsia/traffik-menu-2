import React, { useState } from 'react';
import Account from './Icons/Account'
import Cart from './Icons/Cart'
import Near from './Icons/Near'
import Shop from './Icons/Shop'

function NavBottom() {
    const [ selected, setSelected ] = useState('Shop')

    const selectedColor = '#6252ff';
    const defaultColor = '#3E4147';

    return (
        <div className="fixed bottom-0 left-0 w-full px-6 py-4 bg-white shadow-md border-top md:hidden">
            <div className="max-w-[390px] mx-auto flex justify-between items-center">
            <div className="flex flex-col items-center" onClick={() => setSelected('Shop')}>
                    <Shop fill={selected === 'Shop' ? selectedColor : defaultColor} />
                    <span style={{color: selected === 'Shop' ? selectedColor: defaultColor}}className="mt-1 text-sm small-text">Shop</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => setSelected('Near')}>
                    <Near fill={selected === 'Near' ? selectedColor : defaultColor} />
                    <span style={{color: selected === 'Near' ? selectedColor: defaultColor}} className="mt-1 text-sm small-text">Near me</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => setSelected('Cart')}>
                    <Cart fill={selected === 'Cart' ? selectedColor : defaultColor} />
                    <span style={{color: selected === 'Cart' ? selectedColor: defaultColor}} className="mt-1 text-sm small-text">Cart</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => setSelected('Account')}>
                    <Account fill={selected === 'Account' ? selectedColor : defaultColor} />
                    <span style={{color: selected === 'Account' ? selectedColor: defaultColor}} className="mt-1 text-sm small-text">Account</span>
                </div>
            </div>
        </div>
    );
}

export default NavBottom;
