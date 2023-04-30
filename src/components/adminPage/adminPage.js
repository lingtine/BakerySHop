import classNames from "classnames/bind";
// import styles from "./adminPage.module.scss";
import '../GlobalStyles/GlobalStyles.scss'
import "~/components/Header/index"
import {useState, useEffect} from 'react'
import Button from "../Button";
import { ProSidebar, Menu, MenuItem, SubMenu, Sidebar, useProSidebar, sidebarClasses  } from 'react-pro-sidebar';



function AdminPage() {
    const { collapseSidebar } = useProSidebar();
    const [name, getName] = useState("Đơn hàng");

    
    return (
        
       
        <div></div>
    )
}

export default AdminPage;