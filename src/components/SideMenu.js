import React from 'react'
import LeftArrow from './Icons/LeftArrow';
import RightArrow from './Icons/RightArrow';

const categories = ['Food & Drink', 'Essentials', 'Apparel', 'Home', 'Sports & Outdoors', 'Baby & Kids', 'Pets', 'Health & Wellness', 'Personal care', 'Beauty', 'Books', 'Toys & Games', 'Electronics', 'Automotive', 'Luggage', 'Seasonal', 'Deals', 'Gifts', 'Gift cards', 'Services & Local'];

export default function SideMenu({ menuOpen, toggleMenu, openSubMenu }) {
    return (
        <div style={{backgroundColor: "white"}} className={`fixed top-0 right-0 bottom-0 left-0 md:h-full bg-white z-50 border-right w-screen md:w-[302px] transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center p-4">
                <button onClick={toggleMenu} className="mr-2 focus:outline-none"><LeftArrow /></button>
                <span className="text-xl font-bold">All Categories</span>
            </div>
            <ul className="h-full mt-2 overflow-y-auto">
                {categories.map(category => (
                    <li key={category} className="hover:bg-gray-100" onClick={openSubMenu}>
                        <a href="www.google.com" className="flex items-center justify-between block px-4 py-3">
                            <span>{category}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

