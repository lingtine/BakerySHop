import './contentAdmin.scss'
import {MdOutlineCalendarViewMonth} from "react-icons/md"
import {BsCalendarWeek} from "react-icons/bs"
import HeaderContent from "../HeaderAdmin/headerContent";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import TablePagination from '@mui/material/TablePagination';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 function ContentTable() {
    const [orders, setOrders] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const startIndex = page * rowsPerPage ;
    const endIndex = startIndex + rowsPerPage;
    const displayedOrder = orders.slice(startIndex, endIndex);
    const navigate = useNavigate();

    useEffect(() => {
        const fecthOrder = () => {
            fetch("http://localhost:81/api/order-list")
            .then(res => res.json())
            .then(data => {
                setOrders(data.order)
            })
        }
        fecthOrder()
        changeState();
       console.log("thành công");
    },[])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function handleEditOrder(order) {
        const path = `/admin/carts/order/${order.id}`;
        navigate(path);
    }

    
    function changeState(state) {
        if(state == 0) {
            return false
        } else 
            return true;
    }



    return (
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
                                    <th>Mã đơn hàng</th>
                                    <th>Ngày tạo đơn</th>
                                    <th>Khách hàng</th>
                                    <th>Hình thức Thanh toán</th>
                                    <th>Tổng đơn</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>

 
                            
                            <tbody className="admin-table__info--data">
                            {
                                displayedOrder.map(order => (
                                    <tr style={{textAlign: 'center'}} key={order.id}>
                                    <Link onClick={() => handleEditOrder(order)} to={`/admin/carts/order/${order.id}`}>{order.id}</Link>
                                        <td>{order.date_order}</td>
                                        <td>{order.name}</td>
                                        <td>{order.payment}</td>
                                        <td>{order.total}</td>
                                        <td>{changeState(order.state) ? <div>Chưa hoàn tất</div> : <div>Đã hoàn tất</div>}</td>     
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <TablePagination
                            style={{fontSize: '16px'}}
                            component="div"
                            count={orders.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                     </div>
                </div>
                </div>
            </div>
       
    )
 }

 export default ContentTable;