import classNames from "classnames/bind";
// import styles from "./adminPage.module.scss";
import "./adminPage.scss";
import '../GlobalStyles/GlobalStyles.scss'
import "~/components/Header/index"
import {useState, useEffect} from 'react'
import Button from "../Button";
import { ProSidebar, Menu, MenuItem, SubMenu, Sidebar, useProSidebar, sidebarClasses  } from 'react-pro-sidebar';
import {Link, BrowserRouter } from 'react-router-dom'
import HeaderContent from "./HeaderAdmin/headerContent";

import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {TbDiscount2} from "react-icons/tb"
import {HiGlobeAlt} from "react-icons/hi"
import {BsCurrencyDollar} from "react-icons/bs"


function AdminPage() {
    const { collapseSidebar } = useProSidebar();
    const [name, getName] = useState("Đơn hàng");

    const [value, setValue] = useState({
        name: '',
        id_type: '',
        unit_price: '',
        stock: '',
        image:'',
        unit: '',
        description: '',
    })


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValue({
          ...value,
          [name]: value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = JSON.stringify(value);
        console.log(formData);
      };


    
    return (
        
       
        <div></div>
    )
}

export default AdminPage;