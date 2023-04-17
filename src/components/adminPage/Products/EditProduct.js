import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import HeaderContent from "../HeaderAdmin/headerContent";

function EditProduct({ match }) {
  const [types, setTypes] = useState([]);
  const [product, setProduct] = useState([]);
  const [typeName, setTypeName] = useState();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    const fetchProducts = () => {
      fetch(`http://localhost:81/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.product);
        });
    };
    fetchProducts();
  }, []);
  console.log(product);

  const [value, setValue] = useState({
    name: "",
    id_type: "1",
    unit_price: "",
    unit: "",
    stock: "",
    image: File,
    promotion_price: "0",
    new: "1",
    description: "",
  });

  async function updateProduct() {
    const response = await fetch(`http://localhost:81/api/products/${id}`, {
      method: 'PUT',
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    const data = await response.json();
    console.log(data); // You can check the response from the API in the console
  }

  

  function handleSubmit(event) {
    event.preventDefault();
    updateProduct();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

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
                    value={product.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="addproduct-form__heading--unit">
                  <label htmlFor="unit">Loại sản phẩm</label>
                  <div className="select-dropdown">
                    <select style={{width: "100%"}} name="unit" onChange={handleInputChange}>
                        <option
                        
                          value={product.id_type}
                          onChange={handleInputChange}
                        >
                          {product.name}
                        </option>
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
                    value={product.unit_price}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="addproduct-form__info--Stock">
                  <label htmlFor="stock">Số lượng</label>
                  <input
                    type="text"
                    name="stock"
                    value={product.stock}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="addproduct-form__image">
                <label htmlFor="image">Hình ảnh</label>
                <img style={{width: '100%', height: '100%'}} src={`data:image/png;base64,${product.image}`}/>
              </div>

              <div className="addproduct-form__description">
                <label htmlFor="description">Chú thích</label>
                <input
                  type="text"
                  placeholder="Chú thích về sản phẩm..."
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="addproduct-form__btn">
                <button type="submit">Thêm sản phẩm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
