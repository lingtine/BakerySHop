import "../GlobalStyles/GlobalStyles.scss";
import "~/components/Header/index";
import { useState, useEffect } from "react";
import HeaderContent from "./HeaderAdmin/headerContent";
import React from "react";
import Chart from "../adminPage/Chart/Chart";
import AdminPieChart from "../adminPage/Chart/PieChart";
import AdminPieChart2 from "../adminPage/Chart/PieChart2";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function AdminPage() {

  

  const [orders, setOrders] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderCod, setOrderCod] = useState(0);
  const [orderBank, setOrderBank] = useState([]);
  const [done, setDone] = useState(0);
  const [doneWCod, setDoneWCod] = useState(0);
  const [doneWBank, setDoneWBank] = useState(0);
  const [orderCancel, setOrderCancel] = useState(0);
  const navigate= useNavigate()
  useEffect(() => {
    const fecthOrder = () => {
      fetch("http://localhost:81/api/order-list")
        .then((res) => res.json())
        .then((data) => {
          setOrders(data.order);
        });
    };
    fecthOrder();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      getInfo(orders);
    }
  }, [orders]);

  function getInfo(data) {
    var totalOrder = 0;
    var codOrder = 0;
    var orderDone = 0;
    var orderCancel = 0;
    data.forEach((order) => {
      totalOrder = order.total + totalOrder;
      if (order.payment == "COD") {
        codOrder += 1;
      }
      if (order.state == 1 || order.state == 2) {
        orderDone += 1;
        switch (order.payment) {
          case "COD":
            var totalCod = 0;
            totalCod += 1;
            setDoneWCod(totalCod);
            break;
          case "ATM":
            var totalBank = 0;
            totalBank += 1;
            setDoneWBank(totalBank);
            break;
        }
      } else if (order.state == 3) {
        orderCancel += 1;
      }
    });
    setOrderTotal(totalOrder);
    setOrderCod(codOrder);
    setOrderBank(orders.length - codOrder);
    setDone(orderDone);
    setOrderCancel(orderCancel);
  }

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Redirect to login page if user is not authenticated or is not an admin
  if (!isAuthenticated || !user.isAdmin) {
    navigate("/login") ;
  }

  const data = {
    orders: orders.length,
    orderDone: done,
    orderTotal: orderTotal,
    orderBank: orderBank,
    orderCod: orderCod,
    orderCancel: orderCancel,
    status: true,
  };
  console.log(Number(orders.length));

  return (
    <React.Fragment>
      <div className="admin-content">
        <HeaderContent props={"Doanh thu"} />
        <div className="admin-statistics">
          <div className="admin-statistics__container">
            <div className="admin-statistics__data">
              <label>Tổng đơn</label>
              <div className="admin-statistics__data--table">
                <div className="admin-statistics__data--table---value">
                  Tổng số đơn:
                  <span>{orders.length}</span>
                </div>
                <div className="admin-statistics__data--table---value">
                  Tổng Thu:
                  <span>{orderTotal && orderTotal}</span>
                </div>
                <div className="admin-statistics__data--table---value">
                  hình thức: COD {orderCod}, Banking{orders.length - orderCod}
                </div>
              </div>
            </div>

            <div className="admin-statistics__data">
              <label>Tổng doanh thu</label>
              <div className="admin-statistics__data--table">
                <div className="admin-statistics__data--table---value">
                  Tổng doanh thu:
                  <span>{orderTotal}</span>
                </div>
                <div className="admin-statistics__data--table---value">
                  COD: <span>{orderCod}</span>
                </div>
                <div className="admin-statistics__data--table---value">
                  Banking: <span>{orderBank}</span>
                </div>
              </div>
            </div>

            <div className="admin-statistics__data">
              <label>Đơn hoàn tất</label>
              <div className="admin-statistics__data--table">
                <div className="admin-statistics__data--table---value">
                  Tổng đơn hoàn tất:
                  <span>{done}</span>
                </div>
                <div className="admin-statistics__data--table---value">
                  ATM:
                  <span>{doneWBank}</span>
                </div>
                <div className="admin-statistics__data--table---value">
                  COD:
                  <span>{doneWCod}</span>
                </div>
              </div>
            </div>

            <div className="admin-statistics__data">
              <label>Đơn hủy</label>
              <div className="admin-statistics__data--table">
                <div className="admin-statistics__data--table---value">
                  Tổng đơn hủy : {orderCancel}
                </div>
                <div className="admin-statistics__data--table---value">
                  Sản phẩm
                </div>
                <div className="admin-statistics__data--table---value">
                  COD:
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-statistics__chart">
          <div className="admin-statistics__chart--payment">
            <div className="admin-statistics__data">
              <div className="admin-statistics__data--piechart">
                <label>Số Lượng Đặt Hàng</label>
                <div className="admin-statistics__data--label">
                  <span>{orders.length}</span> Đơn hàng
                  <div>Đơn đã hoàn tất: {done}</div>
                  <div>Đơn đã hủy: {orderCancel}</div>
                </div>
                <div className="admin-statistics__data--ratio">
                  Tỷ lệ hủy đơn:{" "}
                  {
                    <span>
                      {(
                        (Number(orderCancel) / Number(orders.length)) *
                        100
                      ).toFixed(2)}
                      %
                    </span>
                  }
                </div>
                <AdminPieChart props={data} />
              </div>

              <div className="admin-statistics__chart--description">
                <div>
                  <span className="description-span ordercod"></span>Đơn đã hoàn
                  tất
                </div>
                <div>
                  <span className="description-span orderbank"></span>Đơn hủy
                </div>
              </div>
            </div>
          </div>

          <div className="admin-statistics__chart--payment">
            <div className="admin-statistics__data">
              <div className="admin-statistics__data--piechart">
                <label>Tổng đơn hàng</label>
                <div className="admin-statistics__data--label">
                  <span>{orders.length}</span> Đơn hàng
                  <div>Tổng thu: {orderTotal}</div>
                </div>
                <AdminPieChart2 props={data} />
              </div>

              <div className="admin-statistics__chart--description">
                <div>
                  <span className="description-span ordercod"></span>Đơn COD
                </div>
                <div>
                  <span className="description-span orderbank"></span>Đơn
                  Banking
                </div>
                <div>
                  <span className="description-span ordercancel"></span>Đơn Hủy
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{padding: "70px", height: "700px"}} className="admin-statistics__chart--payment">
          <div className="admin-statistics__data">
          <div className="admin-statistics__data--chart">
                {/* <label>Tổng đơn hàng</label> */}
                <div className="admin-statistics__data--label ">
                  <span>{orders.length}</span> Đơn hàng
                  <div>Tổng thu: {orderTotal}</div>
                </div>
                <Chart props={data} />
              </div>
          </div>
        </div>
      </div>
      {/* <Doughnut  data={test} /> */}
    </React.Fragment>
  );
}

export default AdminPage;
