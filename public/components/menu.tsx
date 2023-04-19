import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React from "react";

const Menu = (data: any) => {
  return (
    <>
      <div>
        <li className="flex flex-col ">
          <button className="flex">
            <div className="flex items-center gap-3 text-lg border-b border-gray-800">
              {/* <div>{item.isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</div> */}
            </div>
          </button>
          {/* <ul className={`${agogo ? "" : "hidden"} ml-8`}> */}
          {/* 
          <li>
            <Link href={item.submenu[0].url}>{item.submenu[0].ritmo}</Link>
          </li>
          <li>
            <Link href={item.submenu[1].url}>{item.submenu[1].ritmo}</Link>
          </li>
          <li>
            <Link href={item.submenu[2].url}>{item.submenu[2].ritmo}</Link>
          </li> */}
          {/* </ul> */}
        </li>
      </div>
    </>
  );
};

export default Menu;
