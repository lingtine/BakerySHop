import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import HeaderContent from "../HeaderAdmin/headerContent";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button";

function EditProduct({ match }) {
  const [types, setTypes] = useState([]);
  const [product, setProduct] = useState([]);
  const [name, setName] = useState();
  const [images, setImages] = useState();
  const [image, setImage] = useState();
  const [productType, setProductType] = useState();
  const [productTypeName, setProductTypeName] = useState();
  const [description, setDescription] = useState();
  const [promotion, setPromotion] = useState();
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [alreadyInStock, setAlreadyInStock] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = () => {
      fetch(`http://localhost:81/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
         setProduct(data.product);
          getOldData(data.product)
        });
    };
    fetchProducts();
  }, []);

  const getOldData = (data) => {
    setName(data.name);
    setProductType(data.id);
    setImages(data.image);
    setDescription(data.description);
    setStock(data.stock);
    setPrice(data.unit_price);
    setProductTypeName(data.unit)
    setPromotion(data.promotion_price);
    setAlreadyInStock(data.new)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setImages(base64String);
    };
  };

  function formDataToJson(formData) {
    let jsonObject = {};
    for (const [key, value] of formData.entries()) {
      jsonObject[key] = value;
    }
    return JSON.stringify(jsonObject);
  }

  async function updateProduct() {
    // You can check the response from the API in the console
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("id_type", 1);
    formData.append("unit_price", price);
    formData.append("unit", productTypeName);
    formData.append("stock", stock);
    formData.append("image", images);
    formData.append("promotion_price", 0);
    formData.append("new", 1);
    formData.append("description", description);
    const myJson = formDataToJson(formData);
    console.log("name :", name,"unit", productTypeName,"price", price,"stock", stock,"img", images, promotion,alreadyInStock, description, productType);
    fetch(`http://localhost:81/api/products/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: myJson,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // the newly added product object returned by the API
      })
      .catch((error) => {
        console.error("Error change tpye:", error);
      });
    alert("đã chỉnh sửa");
    navigate("/admin/products");
  }

  return (
    <div className="addproducts-page">
      <div className="admin-content">
        <HeaderContent props={"Sửa sản phẩm"} />
        <div className="admin-content__form">
          <h1> Sửa sản phẩm</h1>
          <div className="addproduct-form">
            <form onSubmit={handleSubmit}>
              <div className="addproduct-form__heading">
                <div className="addproduct-form__heading--name">
                  <label htmlFor="name">Tên sản phẩm</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="addproduct-form__heading--unit">
                  <label htmlFor="unit">Loại sản phẩm</label>
                  <div className="select-dropdown">
                    <select
                      style={{ width: "100%" }}
                      name="unit"
                      onChange={(e) => setName(e.target.value)}
                    >
                      <option value={product.id_type}>{product.id_type}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="addproduct-form__info">
                <div className="addproduct-form__info--price">
                  <label htmlFor="unit_price">Giá thành</label>
                  <input
                    type="text"
                    name="unit_price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="addproduct-form__info--Stock">
                  <label htmlFor="stock">Số lượng</label>
                  <input
                    type="text"
                    name="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>

              <div className="addproduct-form__image">
                <label htmlFor="image">Hình ảnh</label>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleImageUpload}
                />
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={`data:image/png;base64,${images}`}
                  onChange={handleImageUpload}
                />
              </div>

              <div className="addproduct-form__description">
                <label htmlFor="description">Chú thích</label>
                <textarea
                  type="text"
                  placeholder="Chú thích về sản phẩm..."
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="addproduct-form__promotion">
                    <label htmlFor="description">Giảm giá</label>
                    <input type="text" placeholder="Giảm giá sản phẩm..." name="promotion_price" value={promotion} onChange={e => setPromotion(e.target.value)} />
                  </div>

              <div className="addproduct-form__btn">
                <Button type="submit">Thêm sản phẩm</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
