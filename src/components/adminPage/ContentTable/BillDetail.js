import { useEffect, useState, useCallback, useMemo,useRef } from "react";
import { useParams } from "react-router-dom";
import HeaderContent from "../HeaderAdmin/headerContent";
import "./billDetail.scss";
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
import Modal from "../Modal/Modal";
import Button from "~/components/Button";


function BillDetail({ order }) {
  const { id } = useParams();
  const [customers, setCustomers] = useState({});
  const [bill, setBill] = useState({});
  const [billDetail, setBillDetail] = useState([]);
  const [product, setProduct] = useState([]);
  const [img, setImg] = useState();
  const [productsUpdated, setProductsUpdated] = useState(false);
  const myRef = useRef(false);
  const [status, setStatus] = useState(myRef.current);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await fetch(
        `http://localhost:81/api/order-update/${id}`
      );
      const json = await response.json();
      setBill(json.bill);
      setCustomers(json.customer);
      setBillDetail(json.billDetail);
      
      return json.billDetail;
    };

    fetchOrder().then((billDetailArr) => {
      const promises = billDetailArr.map((billDetail) => {
        return fetch(`http://localhost:81/api/products/${billDetail.id}`).then(
          (res) => res.json()
        );
      });
      Promise.all(promises).then((productsArr) => {
        setProduct(productsArr);
  
      });
    });
  }, []);


  useEffect(() => {
    if (product.length > 0) {
      const imgArr = [];
      const productsUpdatedArr = [];
      product.forEach((item) => {
        imgArr.push(item.image);
        productsUpdatedArr.push(true);
      });
      setImg(imgArr);
      setProductsUpdated(productsUpdatedArr);
    }
  }, []);

  function handleDeleteOrder(id) {
    
  }
  

  function changeState(state) {
    return state !== 0;
  }
  const handleEditButtonClick = () => {
    setStatus(true)
    // myRef.current = true;
    console.log(myRef.current);
  }

  



  const totalQuantity = useMemo(() => {
    return billDetail.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  }, [billDetail]);
  

  // getImg();
// console.log(status);
  return (
    <div style={{ width: "100%" }} className="order-detail__container">
      <div className="admin-content">
        <HeaderContent props={"Thông tin đơn hàng"} />
        <div className="order">
          <div className="order-title">
            <div className="order-detail">
              <div className="order-detail__wrapper">
                <div className="order-detail__info">
                  <div className="order-detail__info--title">Mã đơn hàng</div>
                  <div className="order-detail__info--content">{id}</div>
                  </div>
                  <div className="order-detail__info">
                    <div className="order-detail__info--title">
                      Trạng thái đơn hàng
                    </div>
                    <div className="order-detail__info--content">
                      {changeState(bill.state) ? (
                        <div>Chưa hoàn tất</div>
                      ) : (
                        <div>Đã hoàn tất</div>
                      )}
                    </div>
                  </div>
                  <div className="order-detail__info">
                  <div className="order-detail__info--title">
                    Hình thức thanh toán
                  </div>
                  <div className="order-detail__info--content">
                    {bill.payment}
                  </div>
                </div>
              </div>

              <div className="order-detail__btn">
                <Button 
                className="order-detail__btn--delete"
                disabled={isDeleting}
                onClick={handleDeleteOrder(id)}
                >
                  Hủy đơn hàng
                  <span className="order-icon__container">
                    <AiOutlineDelete/>
                  </span>
                </Button>
              </div>
            </div>

            <div className="order-time">
              <div className="order-time__date">{bill.date_order}</div>
            </div>
          </div>

          <div className="order-content">
            <div className="order-content-container">
              {/* ------------------------------------------ */}
              <div style={{ maxWidth: "820px" }}>
                <div
                  style={{ marginBottom: "20px" }}
                  className="order-content-detail"
                >
                  <div className="order-content__cart">
                    <table className="admin-table__info--show">
                      <thead className="admin-table__info--title">
                        <tr className="" style={{ textAlign: "center" }}>
                          <th>Sản phẩm</th>
                          <th>Số lượng</th>
                          <th>Giá</th>
                          <th>Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody className="admin-table__info--data">
                        {productsUpdated &&
                          billDetail.map((item, i) => (
                            <tr key={i}>
                              <td
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <span style={{ flex: 2 }}>{item.name}</span>
                                <div style={{ flex: 1 }}>
                                  <img
                                    className="img-product"
                                    src={`data:image/png;base64,${product[i].product.image}`}
                                  />
                                </div>
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {item.quantity}
                              </td>
                              <td>{item.unit_price}</td>
                              <td>{item.quantity * item.unit_price}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="order-content-detail">
                  <h3> Trạng thái đơn</h3>
                  <div className="order-content__bill">
                    <div className="order-content__bill--note">
                      <h4>Ghi chú cho đơn hàng</h4>
                      <input placeholder="Thêm ghi chú cho đơn hàng" />
                      <button>Cập nhật</button>
                    </div>
                    <div className="order-content__bill--detail">
                      <div className="order-content__bill--detail---item">
                        <div>
                          Số lượng sản phẩm
                          <p>{totalQuantity}</p>
                        </div>
                      </div>

                      <div className="order-content__bill--detail---item">
                        <div>
                          Tổng tiền hàng
                          <p>{bill.total}</p>
                        </div>
                      </div>

                      <div className="order-content__bill--detail---item">
                        <div>
                          Phí Ship
                          <p>0đ</p>
                        </div>
                      </div>

                      <div className="order-content__bill--detail---item">
                        <div>
                          Tổng giá trị thanh toán
                          <p>{bill.total}</p>
                        </div>
                      </div>
                      <div className="order-content__bill--detail---item">
                        <div>
                          Hình thức thanh toán
                          <p>{bill.payment}</p>
                        </div>
                      </div>

                      <div className="order-content__bill--detail---item">
                        <div>
                          Đã thanh toán
                          <p>0đ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------ */}
              <div className="order-content__address">
                <div className="order-content__address--title">
                  <h3>Thông tin người mua</h3>
                </div>
                <div className="order-content__address--customer">
                  <p>{customers.name}</p>
                  <p>{customers.email}</p>
                  <div className="order-content__address--customer---ordered">
                    <span>Đã đặt</span>
                    <b>3 đơn hàng</b>
                  </div>
                </div>

                <div className="order-content__address--ship">
                  <address>
                    <div className="order-content__address--ship---edit">
                      <div>
                      <h4>Thông tin giao hàng</h4> 
                      <button onClick={handleEditButtonClick}><AiOutlineEdit /></button>
                      </div>
                    </div>
                    <div className="order-content__address--ship---customer">
                      <div>{customers.name}</div>
                      <div>{customers.phone_number}</div>
                    </div>
                    <div className="order-content__address--ship---address">
                      <h4>Địa chỉ giao hàng</h4>
                      <p>{customers.address}</p>
                    </div>
                  </address>
                </div>
                <div className="order-content__address--note">
                  <h4>Ghi chú về khách hàng</h4>
                  <div>{customers.note}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal props={status}/>
    </div>
  );
}

export default BillDetail;
