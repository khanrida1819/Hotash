import React, {useState, useRef} from 'react';
import styles from '../Navbar.module.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import NavbarLi from "./NavbarLi";
import NavbarLiHeading from "./NavbarLiHeading";



const Navbar = () => {
    const language = useRef("");
    const overAll = useRef("");
    const vertIcon = useRef("");
    const vertIconTras = useRef("");
    const shoppingCart = useRef("");
    const minOverAll = useRef("");
    const settingIcon = useRef("");
    const [checkLanguage, setCheckLanguage] = useState(true);
    const [setting, setSetting] = useState(true);
    const [checkShoppingCart, setShoppingCart] = useState(true);
    const [morevert, setMorevert] = useState(true);
    const [isOpened, setIsOpened] = useState(true);
    const toggle = () => setIsOpened(!isOpened);
    const clickLanguage = () => {
        if (checkLanguage === true) {
            language.current.classList.remove("hidden");
            overAll.current.classList.remove("hidden");
            setCheckLanguage(false);
        }
    }
    const clickShoppingCart = () => {
        if (checkShoppingCart === true) {
            shoppingCart.current.classList.remove("hidden");
            overAll.current.classList.remove("hidden");
            setShoppingCart(false);
        }
    }
    const clickOverall = () => {
        if (checkLanguage === false) {
            language.current.classList.add("hidden");
            overAll.current.classList.add("hidden");
            setCheckLanguage(true);
        }
        if (checkShoppingCart === false) {
            if (morevert === false) {
                // vertIcon.current.classList.add("hidden");
                minOverAll.current.classList.add("hidden");
                setMorevert(true);
            }if (setting === false) {
                settingIcon.current.classList.add("hidden");
                minOverAll.current.classList.add("hidden");
                setSetting(true);
            }
            shoppingCart.current.classList.add("hidden");
            overAll.current.classList.add("hidden");
            setShoppingCart(true);
        }
    }
    const clickMoreVertIcon = () => {
        if (morevert === true) {
            // vertIcon.current.classList.remove("hidden");
            minOverAll.current.classList.remove("hidden");
            setMorevert(false);
        }
    }
    const clickMinOverAll = () => {
        if (morevert === false) {
            // vertIcon.current.classList.add("hidden");
            minOverAll.current.classList.add("hidden");
            setMorevert(true);
        }if (setting === false) {
            settingIcon.current.classList.add("hidden");
            minOverAll.current.classList.add("hidden");
            setSetting(true);
        }
    }
    const clickSetting = () => {
        if (setting === true) {
            settingIcon.current.classList.remove("hidden");
            minOverAll.current.classList.remove("hidden");
            setSetting(false);
        }
    }

    return (<>
            <div className=" hidden absolute top-0 left-0 bg-transparent w-[98vw] h-[100vh] z-10" ref={overAll}
                 onClick={clickOverall}></div>
            <header className="pt-[15px] pl-[20px] flex items-center justify-start z-[5] gap-0">
                <a className="mr-[105px] w-fit flex items-center justify-start gap-y-[2px] gap-x-0" href="#/ecommerce">
                    <img className="h-[45px]" src="https://mironmahmud.com/hotash/images/logo.webp" alt="blue"/><span
                    className="text-[24px] font-black text-[#403e57]">HOTASH</span>
                </a>
                <div className="flex items-center justify-between gap-[18px] grow">
                    <div className="flex items-center justify-start gap-[18px]">
                        <div onClick={toggle}
                             className="text-[#5e5d72] mr-[32px] cursor-pointer text-[18px] bg-gray-100 w-[37px] h-[37px] rounded-full flex items-center justify-center hover:text-blue-500">
                            {isOpened ? <MenuOpenIcon/> : <MenuIcon/>}
                        </div>
                        <div className="">
                            <form
                                className="w-[280px] h-[40px] flex items-center justify-start bg-gray-100 rounded-[8px] gap-0 p-3">
                                <div className="text-[#5e5d72] cursor-pointer text-[18px] hover:text-blue-500">
                                    <SearchIcon/></div>
                                <input className="w-[90%] h-[100%] px-[12px] bg-gray-100 text-[14px] outline-none"
                                       type="search" placeholder="Quick finding..."/>
                            </form>
                        </div>
                    </div>


                    <div className="flex items-center justify-end gap-x-[18px] mr-3">
                        <button type="button"
                                className="text-[18px] flex items-center justify-center w-[37px] h-[37px] rounded-full text-[#5e5d72] bg-gray-100 hover:text-blue-500">
                            <LightModeIcon/>
                        </button>

                        <div className="relative">
                            <button type="button" onClick={clickLanguage}
                                    className={`text-[18px] flex items-center justify-center w-[37px] h-[37px] rounded-full text-[#5e5d72] bg-gray-100 `}>
                                <LanguageIcon className="hover:text-blue-500"/>
                            </button>

                            <div
                                className="hidden z-10 cursor-pointer bg-[#ffffff] text-[#5e5d72] shadow-lg absolute top-[60%] right-[5px] mt-[30px] p-[10px] rounded-[8px] border border-[2px] border-[#f0f0f0] w-[200px] font-medium text-[14px]"
                                ref={language}>
                                <button
                                    className="flex items-center justify-start w-[100%] p-2 bg-[#ebf6ff] rounded-[8px]">
                                    <img className="w-[20px] h-[20px] rounded-full"
                                         src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"/>
                                    <span className="px-3 text-[#0858f7] pr-10">Pakistan</span><CheckIcon
                                    className="text-[#0858f7]"/></button>
                                <button
                                    className="flex items-center justify-start w-[100%] p-2 hover:bg-[#f8f8f8] rounded-[8px]">
                                    <img className="w-[20px] h-[20px] rounded-full"
                                         src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"/>
                                    <span className="px-3">India</span></button>
                                <button
                                    className="flex items-center justify-start w-[100%] p-2 hover:bg-[#f8f8f8] rounded-[8px]">
                                    <img className="w-[20px] h-[20px] rounded-full"
                                         src="https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg"/>
                                    <span className="px-3">Arabic</span></button>
                                <button
                                    className="flex items-center justify-start w-[100%] p-2 hover:bg-[#f8f8f8] rounded-[8px]">
                                    <img className="w-[20px] h-[20px] rounded-full"
                                         src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"/>
                                    <span className="px-3">English</span></button>
                                <button
                                    className="flex items-center justify-start w-[100%] p-2 hover:bg-[#f8f8f8] rounded-[8px]">
                                    <img className="w-[20px] h-[20px] rounded-full"
                                         src="https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg"/>
                                    <span className="px-3">African</span></button>
                            </div>
                        </div>


                        <div className="relative">
                            <button type="button"
                                    className={`text-[18px] flex items-center justify-center w-[37px] h-[37px] rounded-full text-[#5e5d72] bg-gray-100 `}
                                    onClick={clickShoppingCart}>
                                <ShoppingCartIcon className="hover:text-blue-500"/>
                            </button>

                            <div
                                className="hidden z-20 bg-transparent absolute top-[60%] right-[5px] mt-[30px] p-[10px] w-[299px] h-[363px]"
                                ref={minOverAll} onClick={clickMinOverAll}></div>
                            <div
                                className="hidden cursor-pointer bg-[#ffffff] text-[#5e5d72] shadow-lg absolute top-[60%] right-[5px] mt-[30px] p-[10px] rounded-[8px] border border-[2px] border-[#f0f0f0]  font-medium text-[14px] z-10"
                                ref={shoppingCart}>
                                <NavbarLiHeading clickSetting={clickSetting} ref={settingIcon} name="Orders (02)"/>
                                <ul className="h-[300px] ">
                                    <NavbarLi clickMoreVertIcon={clickMoreVertIcon} ref={vertIcon} action={morevert}/>
                                    <NavbarLi clickMoreVertIcon={clickMoreVertIcon} ref={vertIcon} action={morevert}/>
                                    <NavbarLi clickMoreVertIcon={clickMoreVertIcon} ref={vertIcon} action={morevert}/>
                                </ul>
                            </div>

                        </div>


                        <button type="button"
                                className="text-[18px] flex items-center justify-center w-[37px] h-[37px] rounded-full text-[#5e5d72] bg-gray-100 hover:text-blue-500">
                            <LightModeIcon/>
                        </button>
                    </div>


                </div>
            </header>
        </>);
};

export default Navbar;
