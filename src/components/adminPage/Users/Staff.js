import HeaderContent from "../HeaderAdmin/headerContent";

function Staff() {
    return (
        <div className="user__container" style={{width: '100%'}}>
            <div className="admin-content">
            <HeaderContent props={"Nhân viên"}/>
             <div className="admin-table">
                <div className="admin-table__container">
                    <div className="admin-table__header">
                        <h3 className="admin-table__title">Danh sách nhân viên</h3>
                    </div>
                    <p className="admin-table__description">Description</p>
                    <div className="admin-table__info">
                        <table className="admin-table__info--show">
                            <tr>
                                <th>Nhân viên</th>
                                <th>Chức vụ</th>
                                <th>Địa chỉ</th>
                                <th>Lương</th>
                                <th>Tổng giờ làm</th>
                                <th>Tổng lương</th>
                            </tr>
                        </table>
                     </div>
                </div>
            </div>
       </div>
        </div>
    )
}

export default Staff