import HeaderContent from "../HeaderAdmin/headerContent";

function Customers() {
    return (
        <div className="user__container" style={{width: '100%'}}>
             <div className="admin-content">
            <HeaderContent props={"Sản phẩm"}/>
                <div className="admin-table">
                <div className="admin-table__container">
                    <div className="admin-table__header">
                        <h3 className="admin-table__title">Danh sách sản phẩm</h3>
                        <div className="admin-table__btn">
                            <button className="admin-table__btn--week"></button>
                            <button className="admin-table__btn--month"></button>
                        </div>
                    </div>
                    <p className="admin-table__description">Description</p>
                    <div className="admin-table__info">
                        <table className="admin-table__info--show">
                            <thead className="admin-table__info--title" >
                                <tr style={{textAlign: 'center'}}>
                                        <th>Khách hàng</th>
                                        <th>Địa chỉ</th>
                                        <th>Tổng đơn hàng</th>
                                        <th>Đơn hàng gần nhất</th>
                                        <th>doanh thu tổng</th>
                                </tr>
                            </thead>
                            
                            <tbody className="admin-table__info--data">
                            
                            
                            </tbody>
                        </table>
                     </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Customers

                               