import React, {forwardRef, useRef, useState ,useEffect} from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const NavbarLi = (props,ref) => {
    const hy = () => {
        console.log("hdkjf")
    }
    useEffect(() => {
      return () => {
          if (props.action === false) {
              console.log("hello rida");
              vertIcon.current.classList.add("hidden");
              setMorevertChild(true);
          }
      };
    }, [props.action]);

    const vertIcon = useRef("");
    const [morevertChild, setMorevertChild] = useState(true);
    const clickMoreVertIcon = () => {
        if (morevertChild === true) {
            vertIcon.current.classList.remove("hidden");
            setMorevertChild(false);
        }

    }
    return (
        <>
            <li className="bg-[#ebf6ff] flex items-center justify-start gap-[8px] p-[10px] my-[2px] rounded-[8px] border-b-2 border-b-[#f0f0f0]">
                <a className="w-[100%] flex gap-[12px]">
                    <div className="w-[80px] flex items-center justify-start gap-0">
                        <img src="https://mironmahmud.com/hotash/images/product/07.webp"
                             className="w-[40px] h-[40px] border-2 rounded-full border-[rgb(8, 88, 247)]"/>
                        <img src="https://mironmahmud.com/hotash/images/product/08.webp"
                             className="w-[40px] h-[40px] border-2 rounded-full border-[rgb(8, 88, 247)] ml-[-20px]"/>
                        <span
                            className="bg-[#ffffff] text-xs font-medium text-center leading-[35px] w-[40px] h-[40px] border-2 rounded-full border-[rgb(8, 88, 247)] ml-[-20px]">+3</span>
                    </div>
                    <div className="w-[140px] ">
                        <h4 className="flex items-center justify-start gap-0 mb-[3px]"><span
                            className="font-bold text-[13px] mr-[1px]">Miron Mahmud </span>
                            <span className="text-[11px] font-medium"> ~ Now</span>
                        </h4>
                        <p className="text-[#0858f7] text-xs font-bold">($289) Total Price</p>
                    </div>
                </a>
                <div className="text-sm relative" onClick={props.clickMoreVertIcon}><MoreVertIcon onClick={clickMoreVertIcon}/>
                    <div className="hidden overflow-visible z-50 absolute cursor-pointer bg-[#ffffff] text-[#5e5d72] shadow-lg right-[1px] top-[7px] mt-[30px] p-[10px] rounded-[8px] border border-[2px] border-[#f0f0f0] w-[175px] text-[14px]" ref={vertIcon}>
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><AccountCircleIcon/></div>
                            <span className="pl-1">View Profile</span></button>
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><MarkunreadIcon/></div>
                            <span className="pl-1">Mark As Unread</span></button>
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><DeleteIcon/></div>
                            <span className="pl-1">Delete Order</span></button>
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><RemoveCircleIcon/></div>
                            <span className="pl-1">Block Order</span></button>
                    </div>
                </div>



            </li>

        </>
    );
};

export default forwardRef(NavbarLi);
