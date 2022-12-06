import React,  {forwardRef} from 'react';
import SettingsIcon from "@mui/icons-material/Settings";
import DraftsIcon from "@mui/icons-material/Drafts";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import DeleteIcon from "@mui/icons-material/Delete";

const NavbarLiHeading = (props,ref) => {
    return (
        <>
            <div
                className="flex border-b-2 border-[#f0f0f0] pt-[5px] px-[8px] pb-[8px] bord items-center justify-between">
                <h4 className="text-base font-bold">{props.name}</h4>
                <div className="relative"
                     onClick={props.clickSetting}
                ><SettingsIcon/>
                    <div className="hidden z-20 absolute cursor-pointer bg-[#ffffff] text-[#5e5d72] shadow-lg top-[40%] right-[0px] mt-[30px] p-[10px] rounded-[8px] border border-[2px] border-[#f0f0f0] w-[195px] text-[14px]"
                         ref={ref}
                    >
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><DraftsIcon/></div>
                            <span className="pl-1">Mark All As Read</span></button>
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><MarkunreadIcon/></div>
                            <span className="pl-1">Mark All As Unread</span></button>
                        <button type="button"
                                className="w-[100%] py-[5px] px-[8px] flex items-center justify-start hover:bg-[#f8f8f8] border border-[#ffffff] rounded-[8px]">
                            <div className="text-sm"><DeleteIcon/></div>
                            <span className="pl-1">Delete All Order</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default forwardRef(NavbarLiHeading);
