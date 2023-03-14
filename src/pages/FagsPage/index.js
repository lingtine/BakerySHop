import { Accordion, Banner } from "~/components";
import styles from "./Fags.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function FagsPage() {
  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5256_3000x.jpg?v=1652873085",
  };
  const propsItem = [
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
    {
      id: Math.random(),
      label: "Can i learn react ?",
      content:
        "Yes you can. Yes you can.Yes you can.Yes you can.Yes you can.Yes you can.",
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <Banner image={banner} />
      <div className={cx("accordion-wrapper")}>
        <Accordion items={propsItem} />
      </div>
    </div>
  );
}

export default FagsPage;
