import { useState } from "react"
import { NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


import logo from '../../assets/png/logoDark.png'
import { Drawer } from "@mui/material";
import Swal from "sweetalert2";
import { THEME_COLORS } from "../../utils/app.constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ children }: any) => {
    const [sidebar, setSidebar] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const handleClick = () => {
        (sidebar === false) ? setSidebar(true) : setSidebar(false)
    }

    const onClickMenuItem = () => {
        Swal.fire({
            icon: "info",
            title: "Coming Soon!",
            text: "The  feature is coming soon. Please check back later.",
            confirmButtonColor: THEME_COLORS.primary
        });
    };

    const scrollToBottom = () => {
        handleClick();
        window.scrollTo({
          top: document.body.scrollHeight, // Scrolls to the bottom of the page
          behavior: 'smooth', // Smooth scrolling effect
        });
    };
    return (
        <>
            <header className="scroll-smooth lg:grid md:grid lg:h-20 h-16 lg:grid-cols-12 gap-x-5  lg:px-16 md:px-16  content-center md:grid-cols-8 md:h-24 grid grid-cols-4">
                <img alt="brand logo" src={logo} className="w-20 lg:object-fill lg:col-start-1 lg:col-end-7 lg:order-1 md:order-2 md:col-start-4 md:col-end-6 md:w-24 order-2 col-start-4 col-span-2 justify-between lg:justify-self-start lg:w-24 lg:self-center" />
                {children}
                {
                    !sidebar && (<button onClick={handleClick} className="lg:hidden md:col-start-1 md:order-1  order-1 col-start-1">
                        <MenuIcon fontSize="large" />
                    </button>)
                }

            </header>
            {
                sidebar && (<Drawer open={sidebar} onClose={setSidebar} className="scroll-smooth lg:hidden z-50  absolute top-0 left-0 w-[100%] h-screen bg-base">
                    {sidebar && (<button onClick={handleClick} className="lg:hidden  md:col-start-1  md:order-1 md:top-10 md:left-16 top-3 left-10 md:text-6xl text-4xl relative">
                        <MenuOpenIcon fontSize="large" />
                    </button>)}
                    <ul className="flex items-start px-5 bg-opacity-0 bg-primary-2 flex-col  lg:hidden  mt-16">
                        <li className=" NavDrawerItems ">
                            <NavLink to={"/"}>
                                <div className='flex items-center gap-2'><HomeRoundedIcon fontSize="large" className="mb-1" />
                                    <span className='text-2xl'>Home</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className=" NavDrawerItems ">
                            <button onClick={onClickMenuItem}>
                                <div className='flex items-center gap-2'><ShoppingBagRoundedIcon fontSize="large" className="mb-1" />
                                    <span className='text-2xl'>Shop</span>
                                </div>
                            </button>
                        </li>
                        <li className=" NavDrawerItems ">
                            <button onClick={onClickMenuItem}>
                                <div className='flex items-center gap-2'><LocalGroceryStoreRoundedIcon fontSize="large" className="mb-1" />
                                    <span className='text-2xl'>Cart</span>
                                </div>
                            </button>
                        </li>
                        <li className=" NavDrawerItems ">
                            <button onClick={onClickMenuItem}>
                                <div className='flex items-center gap-2'><ManageAccountsIcon fontSize="large" className="mb-1" />
                                    <span className='text-2xl'>Profile</span>
                                </div>
                            </button>
                        </li>
                        <li className=" NavDrawerItems text-Highlight-1">
                            <button onClick={scrollToBottom}>
                                <div className='flex items-center gap-2'><InfoRoundedIcon fontSize="large" className="mb-1" />
                                    <span className='text-2xl'>About</span>
                                </div>
                            </button>
                        </li>
                    </ul>
                    <section className="w-full h-full  flex  items-center justify-center">
                      <img alt="brand logo" src={logo} className="w-28 md:hidden" />
                    </section>
                    <h1 className="mb-3 px-3 text-[9px]">© 2024 My Company. All Rights Reserved.</h1>
                </Drawer>)
            }
        </>
    )
}
export default Header;