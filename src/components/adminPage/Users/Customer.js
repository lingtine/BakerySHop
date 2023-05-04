import { useEffect, useState } from "react";
import React from "react"
import HeaderContent from "../HeaderAdmin/headerContent";
import { AiOutlineDelete, AiOutlineArrowRight } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import './User.scss'
import TablePagination from "@mui/material/TablePagination";


function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedCustomers = customers.slice(startIndex, endIndex);
  useEffect(() => {
    const fetchCustomers = () => {
      fetch("http://localhost:81/api/customer")
        .then((res) => res.json())
        .then((data) => {
          setCustomers(data.customer);
          setLoading(false);
        });
    };
    fetchCustomers();
  }, []);
  const toggleDetails = (id) => {
    setShowDetails((prevShowDetails) =>
      prevShowDetails.includes(id)
        ? prevShowDetails.filter((staffId) => staffId !== id)
        : [...prevShowDetails, id]
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="user__container" style={{ width: "100%" }}>
      <div className="admin-content">
        <HeaderContent props="Sản phẩm" />
        <div className="admin-table">
          <div className="admin-table__container">
            <div className="admin-table__header">
              <h3 className="admin-table__title">Danh sách khách hàng</h3>
              <div className="admin-table__btn">
                <button className="admin-table__btn--show"></button>
              </div>
            </div>
            <p className="admin-table__description">Khách hàng</p>
            <div className="admin-table__info">
              <table className="admin-table__info--show">
                <thead className="admin-table__info--title">
                  <tr style={{ textAlign: "center" }}>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Email</th>
                    
                  </tr>
                </thead>

                <tbody className="admin-table__info--data">
                  { loading ? <div></div> : displayedCustomers.map((customer) => (
                    <React.Fragment key={customer.id}>
                      <tr style={{ textAlign: "center" }}>
                        <td>{customer.name}</td>
                        <td>{customer.phone_number}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        
                      </tr>
                      {/* {showDetails.includes(staff.id) && (
                        <tr>
                          <td colSpan={6}>
                           
                            <div className={`staff-info ${showDetails.includes(staff.id) ? "show" : ""}`}>
                                <div className="staff-info__detail">
                                    <p>{staff.name}:</p>
                                    <p>Tuổi: {staff.age}</p>
                                    <p>Giới tính: Nam</p>
                                    <p>SĐT: {staff.phone_number}</p>
                                    <p>Email: {staff.email}</p>
                                    <p>Địa chỉ: {staff.address}</p>
                                </div>
                                <div className="staff-info__worktime" >
                                    <tr>
                                        <td>Giờ vào làm </td>
                                        <td>Giờ tan ca</td>
                                        <td>Tổng số giờ</td>
                                    </tr>
                                    
                                        {staff.working_times.map((time, i) => (
                                            <tr>
                                                <td>{time.start_time}</td>
                                                <td>{time.end_time}</td>
                                                <td>{time.total_time}</td>
                                            </tr>
                                        ))}
                                    
                                
                                </div>
                            </div>
                          </td>
                        </tr>
                      )} */}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <TablePagination
                style={{ fontSize: "16px" }}
                component="div"
                count={customers.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
