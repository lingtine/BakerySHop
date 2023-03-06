import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import classNames from "classnames/bind";
import styles from "./Accordion.module.scss";

const cx = classNames.bind(styles);

function Accordion({ items }) {
  const [appendedIndex, setAppendedIndex] = useState(0);
  const handleClick = (index) => {
    setAppendedIndex((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  const renderItems = items.map((item, index) => {
    const isAppended = appendedIndex === index;

    const icon = (
      <span>{isAppended ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div className={cx("col", "l-12", "m-12", "c-12")} key={item.id}>
        <div className={cx("accordion-container")}>
          <div
            className={cx("accordion-title")}
            onClick={() => {
              handleClick(index);
            }}
          >
            <div>{item.label}</div>
            <div>{icon}</div>
          </div>
          {isAppended && (
            <div className={cx("accordion-content")}>{item.content}</div>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className={cx("grid", "wide")}>
      <div className={cx("row")}>
        <div className={cx("col", "l-12", "m-12", "c-12")}>
          <div className={cx("accordion-container")}>
            <div className={cx("accordion-heading")}>
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>
        </div>
      </div>
      <div className={cx("row")}>{renderItems}</div>
    </div>
  );
}

export default Accordion;
