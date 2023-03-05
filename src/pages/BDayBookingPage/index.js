import styles from "./BDayBookingPage.module.scss";
import classNames from "classnames/bind";

import { Banner, ShopifySectionTemplate } from "~/components";

const cx = classNames.bind(styles);

function BDayBookingPage() {
  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5256_3000x.jpg?v=1652873085",
  };
  const dataStepOne = {
    title: "STEP 1: CHOOSE A COMBO",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  const dataStepTwo = {
    title: "STEP 2: PICK A CAKE",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  const dataStepThree = {
    title: "STEP 3: CHOOSE A GIFT",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  const dataStepFour = {
    title: "STEP 4: CHOOSE A DECORATION",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  const dataStepFive = {
    title: "STEP 5: CHOOSE AN EXPERIENCE",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  return (
    <div>
      <Banner image={banner} />
      <ShopifySectionTemplate data={dataStepOne} />
      <ShopifySectionTemplate data={dataStepTwo} />
      <ShopifySectionTemplate data={dataStepThree} />
      <ShopifySectionTemplate data={dataStepFour} />
      <ShopifySectionTemplate data={dataStepFive} />

      <div>
        <div className={cx("content-heading")}>
          <p>STEP 6: ENJOY YOUR PARTY</p>
        </div>
        <Banner image={banner} />
      </div>
    </div>
  );
}

export default BDayBookingPage;
