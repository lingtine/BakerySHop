import { useEffect, useState } from "react";
import React from "react"
import HeaderContent from "../HeaderAdmin/headerContent";
import { AiOutlineDelete, AiOutlineArrowRight } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import './User.scss'

function Customers() {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState([]);
  useEffect(() => {
    const fetchStaff = () => {
      fetch("http://localhost:81/api/employees")
        .then((res) => res.json())
        .then((data) => {
          setStaffs(data.data);
          setLoading(false);
        });
    };
    fetchStaff();
  }, []);

  function getWorkTime(employee) {
    let totalWorkTime = 0;
    employee.working_times.forEach((workingTime) => {
      const total_time = workingTime.total_time.split(":");
      const hours = parseInt(total_time[0]);
      const minutes = parseInt(total_time[1]);
      const seconds = parseInt(total_time[2]);
      const work_time = hours + minutes * 60 + seconds;
      totalWorkTime += work_time;
    });
    return totalWorkTime;
  }

  const toggleDetails = (id) => {
    setShowDetails((prevShowDetails) =>
      prevShowDetails.includes(id)
        ? prevShowDetails.filter((staffId) => staffId !== id)
        : [...prevShowDetails, id]
    );
  };

  return (
    <div className="user__container" style={{ width: "100%" }}>
      <div className="admin-content">
        <HeaderContent props="Sản phẩm" />
        <div className="admin-table">
          <div className="admin-table__container">
            <div className="admin-table__header">
              <h3 className="admin-table__title">Danh sách sản phẩm</h3>
              <div className="admin-table__btn">
                <button className="admin-table__btn--show"></button>
              </div>
            </div>
            <p className="admin-table__description">Description</p>
            <div className="admin-table__info">
              <table className="admin-table__info--show">
                <thead className="admin-table__info--title">
                  <tr style={{ textAlign: "center" }}>
                    <th>Nhân viên</th>
                    <th>Chức vụ</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Giờ làm</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className="admin-table__info--data">
                  { loading ? <div></div> : staffs.map((staff) => (
                    <React.Fragment key={staff.id}>
                      <tr style={{ textAlign: "center" }}>
                        <td>{staff.name}</td>
                        <td>{staff.job_title}</td>
                        <td>{staff.phone_number}</td>
                        <td>{staff.address}</td>
                        <td>{getWorkTime(staff)}</td>
                        <td>
                          <button onClick={() => toggleDetails(staff.id)}>
                            Xem chi tiết
                          </button>
                        </td>
                      </tr>
                      {showDetails.includes(staff.id) && (
                        <tr>
                          <td colSpan={6}>
                            {/* Render staff details here */}
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
                                    
                                {/* Add more details as needed */}
                                </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
