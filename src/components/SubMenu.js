import React from 'react';
import LeftArrow from './Icons/LeftArrow';
import foodImg from './Assets/food.png'

const subMenuItems = ['Alcohol', 'Beverages', 'Bread & Bakery', 'Breakfast & Cereal', 'Coffee & Tea', 'Dairy & Eggs', 'Deli', 'Frozen Foods', 'Meat & Seafood', 'Pantry', 'Snacks & Sweets'];

export default function SubMenu({ subMenuOpen, closeSubMenu }) {
    return (
        <div 
            style={{backgroundColor: "white"}} 
            className={`fixed top-0 md:left-[302px] w-screen bottom-0 bg-white z-50 md:z-40 md:w-[333px] transform ${subMenuOpen ? 'translate-x-0' : '-translate-x-[900px]'} transition-transform duration-300 ease-in-out`}
        >

            <div className="flex items-center p-4 mt-[14px] md:hidden">
                <button onClick={closeSubMenu} className="mr-4 focus:outline-none"><LeftArrow /></button>
            </div>
            

            <div className="h-full overflow-y-auto">
                <div className="w-full p-4 md:pl-[30px] md:pt-[32px] md:pr-[36px] md:pb-[12px]">
                    <img src={foodImg} alt="" className="m-x-[16px] mb-[30px] object-contain md:h-[160px] md:w-[274px]"/>
                    <div className="flex items-center justify-between"> {/* Added flex container */}
                        <span className="text-xl font-bold food-drink">Food & Drink</span>
                        <button className="px-6 py-2 text-blue-500 transition-colors duration-300 ease-in-out border-2 border-blue-500 rounded-full focus:outline-none hover:bg-blue-100 shop-all">
                            Shop all
                        </button>
                    </div>
                </div>
                <ul className='mx-[16px] md:mx-[30px] pt-[30px] border-top'> {/* No fixed height here; let it take as much space as needed */}
                    {subMenuItems.map(item => (
                        <li key={item} className="hover:bg-gray-100">
                            <a href="www.google.com" className="flex items-center justify-between block py-3">
                                <span>{item}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
