import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CheckoutPage.module.scss";
import classNames from "classnames/bind";
import { Button } from "~/components";
import { order } from "~/store";
import { useThunk } from "~/hooks";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalPopUp from "./ModalPopUp";
import { IoIosArrowBack } from "react-icons/io";

const cx = classNames.bind(styles);

function FormCheckout({ paymentType }) {
  const [doOrder] = useThunk(order);
  const [isOpen, setIsOpen] = useState(false);
  const { items, total } = useSelector((state) => state.cart.data);
  const { email } = useSelector((state) => state.auth.user);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const actionContent = (
    <div className={cx("modal-action")}>
      <Button
        className={cx("modal-action-btn")}
        onClick={handleClose}
        to={"/"}
        primary
        outline
      >
        Đi đến trang chủ
      </Button>
      <Button
        className={cx("modal-action-btn")}
        onClick={handleClose}
        to={"/collection"}
        primary
        outline
      >
        Tiếp tục mua hàng
      </Button>
    </div>
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phoneNumber: 0,
      note: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên của bạn"),
      address: Yup.string().required("Vui lòng nhập địa chỉ"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]*$/, "Số điện thoại chỉ được chứa số")
        .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
        .max(11, "Số điện thoại tối đa chỉ được 11 chữ số")
        .required("Vui lòng nhập số điện thoại")
        .required("Vui lòng nhập số điện thoại"),
    }),
    onSubmit: (values) => {
      doOrder({
        paymentType,
        items,
        total,
        email,
        phone_number: values.phoneNumber,
        address: values.address,
        name: values.name,
        note: values.note,
      });
      handleOpen();
    },
  });

  return (
    <form className={cx("login-form")} onSubmit={formik.handleSubmit}>
      <div className={cx("form-input")}>
        <input
          placeholder="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={cx("form-input--label")}>Name</div>
      </div>

      {formik.touched.name && formik.errors.name && (
        <div className={cx("messenger-error")}>{formik.errors.name}</div>
      )}

      <div className={cx("form-input")}>
        <input
          placeholder="address"
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={cx("form-input--label")}>address</div>
      </div>
      {formik.touched.address && formik.errors.address && (
        <div className={cx("messenger-error")}>{formik.errors.address}</div>
      )}

      <div className={cx("form-input")}>
        <input
          placeholder="Phone number"
          name="phoneNumber"
          type="tel"
          value={formik.values.phoneNumber || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={cx("form-input--label")}>Phone number</div>
      </div>
      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <div className={cx("messenger-error")}>{formik.errors.phoneNumber}</div>
      )}
      <div className={cx("form-input")}>
        <textarea
          placeholder="Note"
          name="note"
          value={formik.values.note}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={cx("form-input--label")}>Note</div>
      </div>
      {formik.touched.note && formik.errors.note && (
        <div className={cx("messenger-error")}>{formik.errors.note}</div>
      )}

      <div className={cx("actions")}>
        <Button
          leftIcon={<IoIosArrowBack />}
          to={"/cart"}
          className={cx("btn-cart")}
        >
          Quay trở lại vào giỏ hàng
        </Button>
        <Button primary outline className={cx("btn-order")} type="submit">
          Đặt Hàng
        </Button>

        {isOpen && (
          <ModalPopUp actions={actionContent} onClose={handleClose}>
            <div className={cx("modal-heading")}>
              Đã thêm sản phẩm vào giỏ hàng
            </div>
          </ModalPopUp>
        )}
      </div>
    </form>
  );
}

export default FormCheckout;
