import React, { useState } from "react";
import "./style.css";
import Menu from "./manuApi";
import Navbar from "./Navbar";
import Cardmenu from "./Cardmenu";

const uniqueList = [
    ...new Set(
        Menu.map((curElem)=>{
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const Resturent = () =>{
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMunelist ] = useState(uniqueList);
    const filterItems = (category) =>{

        if(category === "All"){
            setMenuData(Menu);
            return;
        }

        const updateList = Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updateList);
    };
    return(
        <>
       <Navbar filterItems = {filterItems} menuList = {menuList} />
      <Cardmenu menuData={menuData}/>
        </>
    )
}
export default Resturent;