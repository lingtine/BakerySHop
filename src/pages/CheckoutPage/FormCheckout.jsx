import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CheckoutPage.module.scss";
import classNames from "classnames/bind";
import { Button, SelectBox } from "~/components";
import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

const cx = classNames.bind(styles);

function FormCheckout() {
  const [gender, setGender] = useState();
  const optionGenders = [
    {
      id: 1,
      label: "male",
      value: "male",
    },
    {
      id: 2,
      label: "female",
      value: "female",
    },
  ];

  const handleChangeGender = (option) => {
    setGender(option);
  };

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
    onSubmit: (values) => {},
  });
  return (
    <form className={cx("login-form")} onSubmit={formik.handleSubmit}>
      <div className={cx("form-input")}>
        <input
          placeholder="name"
          name="name"
          type="text"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className={cx("form-input--label")}>Name</div>
      </div>

      {formik.touched.password && formik.errors.password && (
        <div className={cx("messenger-error")}>{formik.errors.password}</div>
      )}
      {/* <div className={cx("input-select")}>
        <SelectBox
          options={optionGenders}
          onChange={handleChangeGender}
          selected={gender}
        />
      </div>
      {formik.touched.password && formik.errors.password && (
        <div className={cx("messenger-error")}>{formik.errors.password}</div>
      )} */}

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
      {formik.touched.email && formik.errors.email && (
        <div className={cx("messenger-error")}>{formik.errors.email}</div>
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
      {formik.touched.password && formik.errors.password && (
        <div className={cx("messenger-error")}>{formik.errors.password}</div>
      )}

      <div className={cx("actions")}>
        <Button className={cx("btn-cart")}>
          <IoIosArrowBack />
          <p>Quay trở lại vào giỏ hàng</p>
        </Button>
        <Button primary outline className={cx("btn-order")} type="submit">
          Đặt Hàng
        </Button>
      </div>
    </form>
  );
}

export default FormCheckout;
