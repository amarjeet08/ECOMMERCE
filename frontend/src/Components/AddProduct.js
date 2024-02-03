import React, { useState } from 'react'
import axios from 'axios'
import './AddProduct.css'

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        images: new Array(5).fill(''),
        category: 'Electronics',
        subcategory: 'Smartphones'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'images') {
            const images = [...productData.images];
            images[e.target.dataset.index] = value;
            setProductData({
                ...productData,
                images
            })
        } else {
            setProductData({
                ...productData,
                [name]: value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/product/addproduct', productData);
            alert('Product successfully added')
            console.log('Product successfully added', response.data)

            setProductData({
                name: '',
                description: '',
                price: '',
                images: new Array(5).fill(''),
                category: '',
                subcategory: ''
            })

        } catch (error) {
            console.error('Error adding Product', error)
        }
    }

    return (
        <div>
            <div className='outer-Div'>
                <input className='all-input' onChange={handleChange} placeholder='Enter Product Name' name='name' value={productData.name} />
                <textarea className='all-input' onChange={handleChange} placeholder='Enter Product Description' name='description' value={productData.description} />
                <input className='all-input' onChange={handleChange} placeholder='Enter Price' name='price' value={productData.price} />
                {productData.images.map((image, index) => (
                    <input key={index} className='all-input' onChange={handleChange} placeholder={`Enter Image URL ${index + 1}`} name='images' data-index={index} value={image} />
                ))}

                <div class="form-floating">
                    <select class="form-select" onChange={handleChange} id="floatingSelect" aria-label="Floating label select example" name='category' value={productData.category}>
                        <option value="Electronics" selected >Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Home and Kitchen">Home and Kitchen</option>
                        <option value="Books">Books</option>
                        <option value="Sports and Outdoors">Sports and Outdoors</option>
                        <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                        <option value="Toys and Games">Toys and Games</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Music">Music</option>
                        <option value="Home Improvement">Home Improvement</option>
                    </select>
                    <label for="floatingSelect">Choose From Below</label>
                </div>

                <div class="form-floating">
                    <select class="form-select" onChange={handleChange} id="floatingSelect" aria-label="Floating label select example" name='subcategory' value={productData.subcategory}>
                        <optgroup label='Electronics'>
                            <option value="Smartphones">Smartphones</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                        </optgroup>
                    </select>
                    <label for="floatingSelect">Choose From Below</label>
                </div>

                <button type="submit" onClick={handleSubmit} class="btn btn-success">Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct