import SideBar from "~/components/adminPage/SideBar/SideBar"

import HeaderContent from "~/components/adminPage/HeaderAdmin/headerContent"

const NoneLayout = ({children}) => {
    return <div className="layout-container">
                {children}
                <SideBar /> 
        </div>
}

export default NoneLayout