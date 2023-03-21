import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import styles from "./InputQuantity.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function InputQuantity({ quantity, onChange }) {
  const [value, setValue] = useState(quantity);
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setValue(value);
  };

  const handleDecrease = () => {
    if (quantity === 0) {
      setValue(0);
      onChange(0);
    } else {
      onChange(quantity - 1);
      setValue(value - 1);
    }
  };
  const handleIncrease = () => {
    if (quantity >= 99) {
      setValue(99);
      onChange(99);
    } else {
      setValue(value + 1);
      onChange(quantity + 1);
    }
  };

  const handleBlur = (e) => {
    const value = parseInt(e.target.value);
    if (value > 99) {
      setValue(99);
      onChange(99);
    } else {
      onChange(value);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <button className={cx("btn")} onClick={handleDecrease}>
        <HiOutlineMinus />
      </button>
      <input
        className={cx("input")}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        type={"number"}
      />
      <button className={cx("btn")} onClick={handleIncrease}>
        <HiOutlinePlus />
      </button>
    </div>
  );
}

export default InputQuantity;
