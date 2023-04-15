import {useEffect, useState} from 'react'
import HeaderContent from "../HeaderAdmin/headerContent";
import { MdUpdate } from 'react-icons/md';
function AddProduct() {
  const [types, setTypes] = useState([]);
  const [typeName, setTypeName] = useState();

  const [name, setName] = useState();
  const [images, setImages] = useState()
  const [productType, setProductType] = useState();
  const [productTypeName, setProductTypeName] = useState();
  const [description, setDescription] = useState();
  const [promotion, setPromotion] = useState();
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [alreadyInStock, setAlreadyInStock] = useState();

  

  useEffect(() => {
    const fetchProducts = () => {
        fetch("http://localhost:81/api/products-type")
        .then(res => res.json())
        .then(data => {
          setTypes(data.productByType)
          
        })
    }
    fetchProducts()
},[])


    // const [value, setValue] = useState({
    //     name: '',
    //     id_type: '1',
    //     unit_price: '',
    //     unit: '',
    //     stock: '',
    //     image: null,
    //     promotion_price: '0',
    //     new: '1',
    //     description: '',
    // })


    // const handleInputChange = (event) => {
    //   const { name, value, files } = event.target;
      
    //     setValue((prevValue) => ({
    //       ...prevValue,
    //       [name]: value,
    //     }));
      
      
    // };
    
    
    function formDataToJson(formData) {
      let jsonObject = {};
      for (const [key, value] of formData.entries()) {
        jsonObject[key] = value;
      }
      return JSON.stringify(jsonObject);
    }


      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('id_type', productType);
        formData.append('unit_price', price);
        formData.append('unit', productTypeName);
        formData.append('stock', stock);
        formData.append('image', images);
        formData.append('promotion_price', promotion);
        formData.append('new', alreadyInStock);
        formData.append('description', description);
        console.log('name: ', name , 'id_type:', productType, 'unit_price:', price, 'stock:', stock, 'promotion_price:', promotion,'new:', alreadyInStock, 'description:', description, 'image:', images );
        const myJson = formDataToJson(formData);
        console.log(myJson);
        fetch('http://localhost:81/api/products', {
          method: 'POST',
          headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json",
            "Content-Type": "multipart/form-data"
          },
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data); // the newly added product object returned by the API
        })
        .catch(error => {
          console.error('Error adding product:', error);
        });
        alert("đã thêm thành công")
      };
      



    return (
      <div className="addproducts-page">
                                
      <div className="admin-content"> 
         <HeaderContent props={"Thêm sản phẩm"}/>
              <div className="admin-content__form">
                <h1> Thêm sản phẩm</h1>
                <div className="addproduct-form">
                  <form onSubmit={handleSubmit}>
                  <div className="addproduct-form__heading">
                    <div className="addproduct-form__heading--name">
                      <label htmlFor="name">Tên sản phẩm</label>
                      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="addproduct-form__heading--unit">
                      <label htmlFor="unit">Loại sản phẩm</label>
                      <div className="select-dropdown">
                        <select  name="unit" onChange={e => setProductTypeName(e.target.value)} >
                            {types.map((type, i) => (
                              <option key={type.id_type} value={type.id_type}  >{type.name}</option>
                            ))}
                           
                        </select>
                      </div>
                      {/* <div className="addproduct-form__unit_price">
                          <label htmlFor="description">Loại</label>
                          <input type="text" placeholder="Chú thích về sản phẩm..." name="unit" value={value.unit} onChange={handleInputChange} />
                      </div> */}
                    </div>
                  </div>

                  <div className="addproduct-form__info">
                    <div className="addproduct-form__info--price">
                      <label htmlFor="unit_price">Giá thành</label>
                      <input type="text" name="unit_price" value={price} onChange={e => setPrice(e.target.value)} />
                    </div>

                    <div className="addproduct-form__info--Stock">
                      <label htmlFor="stock">Số lượng</label>
                      <input type="text" name="stock" value={stock} onChange={e => setStock(e.target.value)} />
                    </div>
                  </div>

                  <div className="addproduct-form__image">
                    <label htmlFor="image">Hình ảnh</label>
                    {/* <input type="file" accept="image/jpeg,image/png" name="image" onChange={handleInputChange} /> */}
                    <input type="file"  accept="image/jpeg,image/png" onChange={(e) => setImages(e.target.files[0])} />
                  </div>


                  <div className="addproduct-form__description">
                    <label htmlFor="description">Chú thích</label>
                    <input type="text" placeholder="Chú thích về sản phẩm..." name="description" value={description} onChange={e => setDescription(e.target.value)} />
                  </div>
                  <div className="addproduct-form__promotion">
                    <label htmlFor="description">Giảm giá</label>
                    <input type="text" placeholder="Chú thích về sản phẩm..." name="promotion_price" value={promotion} onChange={e => setPromotion(e.target.value)} />
                  </div>
                  <div className="addproduct-form__new">
                    <label htmlFor="description">Mới</label>
                    <input type="text" placeholder="Chú thích về sản phẩm..." name="new" value={alreadyInStock} onChange={e => setAlreadyInStock(e.target.value)} />
                  </div>
                  <div className="addproduct-form__unit_price">
                    <label htmlFor="description">Loại</label>
                    <input type="text" placeholder="Chú thích về sản phẩm..." name="id_type" value={productType} onChange={e => setProductType(e.target.value)} />
                  </div>
                  <div className="addproduct-form__btn">
                    <button type="submit">Thêm sản phẩm</button>
                  </div>
                  </form>
                </div>
              </div>
      </div>
      </div>  

    )
}

export default AddProduct