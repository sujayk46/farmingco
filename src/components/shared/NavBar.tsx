import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { THEME_COLORS } from '../../utils/app.constants';

const NavBar = () => {
    const onClickMenuItem = () => {
        Swal.fire({
            icon: "info",
            title: "Coming Soon!",
            text: "The  feature is coming soon. Please check back later.",
            confirmButtonColor: THEME_COLORS.primary
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight, // Scrolls to the bottom of the page
          behavior: 'smooth', // Smooth scrolling effect
        });
    };


    return (
        <>
            <nav className="lg:col-span-6 lg:order-2 mt-2" >
                <ul className="lg:flex lg:items-center lg:justify-between md:hidden hidden">
                    <li className="NavBarItems ">
                        <NavLink to={"/"}>
                           <div className='flex items-center flex-col'><HomeRoundedIcon/> <span className='text-sm'>Home</span></div>
                        </NavLink>
                    </li>
                    <li className="NavBarItems ">
                        <button
                           onClick={onClickMenuItem}>
                           <div  className='flex items-center flex-col'><ShoppingBagRoundedIcon /> <span className='text-sm'>Shop</span></div>
                        </button>
                    </li>
                    <li className="NavBarItems ">
                        <button 
                           onClick={onClickMenuItem}>
                           <div  className='flex items-center flex-col'><LocalGroceryStoreRoundedIcon/> <span className='text-sm'>Cart</span></div>
                        </button>
                    </li>
                    <li className="NavBarItems ">
                        <button
                           onClick={onClickMenuItem}>
                           <div  className='flex items-center flex-col'><ManageAccountsIcon /> <span className='text-sm'>Profile</span></div>
                        </button>
                    </li>
                    <li className="NavBarItems ">
                        <button 
                            onClick={scrollToBottom}>
                           <div  className='flex items-center flex-col'><InfoRoundedIcon /> <span className='text-sm'>About</span></div>
                        </button>
                    </li>
                </ul>
            </nav>
        </>

    )
}
export default NavBar;