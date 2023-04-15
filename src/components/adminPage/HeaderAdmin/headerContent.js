import { useState } from "react"
import {BiSearchAlt} from "react-icons/bi"
import {IoMdNotificationsOutline} from "react-icons/io"
import "./headerContent.scss"



function HeaderContent (name) {
const [title, setTitle] = useState(name)
    
    return (
        <div className="admin-container">
            <header className="admin-header">
                <span className="admin-title">{title.props}</span>
                <div className="admin-search">
                    <input className="admin-search__input" placeholder="Search..." type="text"/>
                    <BiSearchAlt />
                </div>
                <div className="admin-profile">
                    <div className="admin-profile__user">Admin User</div>
                    <IoMdNotificationsOutline/>
                </div>
            </header>
        </div>
    
    )
}

export default HeaderContent