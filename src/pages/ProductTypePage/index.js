import styles from "./ProductTypePage.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card, SelectBox } from "~/components";
import { fetchProductsByCollection } from "~/store";
import { useThunk } from "~/hooks";

import {
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
} from "react-icons/tfi";

const cx = classNames.bind(styles);

function ProductTypePage() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [layoutActive, setLayoutActive] = useState(1);
  const [optionSelect, setOptionSelect] = useState(null);
  const { collectionId } = useParams();
  const { data } = useSelector((state) => state.productsByCollection);

  const [doFetchProducts, isLoading, error] = useThunk(
    fetchProductsByCollection
  );
  useEffect(() => {
    doFetchProducts(collectionId);
  }, [collectionId, doFetchProducts]);

  let content;
  if (isLoading) {
    content = <h1>isLoading</h1>;
  } else if (error) {
    content = <h1>isError</h1>;
  } else if (data) {
    content = data.productByType.map((product) => {
      return (
        <div key={product.id} className={cx("col", "l-4", "l-4", "c-4")}>
          <Card content={product} />
        </div>
      );
    });
  }

  // layout
  const layouts = [TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt];
  const renderLayout = layouts.map((Icon, index) => {
    return (
      <button
        key={index}
        onClick={(e) => {
          const value = parseInt(e.currentTarget.value);
          setLayoutActive(value);
        }}
        value={index}
        className={cx("layout-button", { active: index === layoutActive })}
      >
        <Icon />
      </button>
    );
  });

  // select box

  const handleSelected = (option) => {
    setOptionSelect(option);
  };

  const options = [
    { id: Math.random(), label: "Red", value: "red" },
    { id: Math.random(), label: "Green", value: "green" },
    { id: Math.random(), label: "Yellow", value: "yellow" },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-12", "m-12", "c-12")}>
            <div className={cx("collection-nav")}>
              <div className={cx("collection-nav-buttons")}>
                <button
                  className={cx("collection-nav-button")}
                  onClick={() => {
                    setIsShowFilter(!isShowFilter);
                  }}
                >
                  {isShowFilter ? "hide filter" : "filter"}
                </button>

                <SelectBox
                  className={cx("collection-nav-button")}
                  selected={optionSelect}
                  onChange={handleSelected}
                  options={options}
                  placeholder={options[0].label}
                />
              </div>
              <div className={cx("collection-nav-layout")}>{renderLayout}</div>
            </div>
          </div>
        </div>
        <div className={cx("row")}>
          {isShowFilter ? (
            <div className={cx("col", "l-2", "m-2", "c-0")}>
              <div>side bar</div>
            </div>
          ) : (
            <></>
          )}
          <div
            className={cx("col", "l-10", "m-10", "c-12", {
              "l-8": isShowFilter,
              "m-8": isShowFilter,
              "l-12": !isShowFilter,
              "m-12": !isShowFilter,
            })}
          >
            <div>
              <div className={cx("row")}>{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTypePage;
