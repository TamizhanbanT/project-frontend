import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import TextField from '@mui/material/TextField'; // Import TextField component
import Button from 'react-bootstrap/Button'; // Import Button component
import { useFormik } from "formik";
import axios from 'axios';
function Vendor() {
  const URL ='https://project-inventory-management.onrender.com';
  const [data, setData] = useState([]);

  const getProduct = async () => {
      try {
          const response = await axios.get(`${URL}/vendor/get-vendor`);
          setData(response.data);
      } catch (error) {
          console.log("Something went wrong, please try again.", error);
      }
  }

  useEffect(() => {
      getProduct();
  }, []);

  const formik = useFormik({
      initialValues: { vendor_name: "", Brand: "", vendor_PhoneNumber: "", image: "" },
      onSubmit: (values) => {
          createProduct(values);
      }
  });

  const createProduct = (values) => {
    console.log(values)
      fetch(`${URL}/vendor/vendor`, {
          method: "POST",
          body: JSON.stringify(values),
         
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then((res) => res.json())
      .then((data) => {
          console.log("Product added successfully", data);
          // Refresh vendor list after adding a new product
          getProduct();
      })
      .catch((error) => {
          console.error("Error adding product:", error);
          
      });
  }

  const Delete_Id =(values)=>{

    let a={vendorId:values}

    createProduct1(a)
  }




  const createProduct1 = (values) => {

    
     console.log("createProduct", values)

    

    
     fetch(`${URL}/vendor/delete-vendor`, {
       method: "POST",
       body: JSON.stringify(values),
       
       headers: {
         "Content-Type": "application/json"
       }
     })
       .then((res) => res.json())
     
   }

  const renderCards = () => {
      return data.map((vendor, index) => {
          return (
              <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
              <img src={vendor.image} style={{height:"20rem", width: '18rem'}}></img>
                  <div className="card-body">
                      <h5 className="card-title">{vendor.vendor_name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{vendor.Brand}</h6>
                      <p className="card-text">Phone: {vendor.vendor_PhoneNumber}</p>
                      
                      <button className="btn btn-primary" onClick={() => Delete_Id(vendor)}>Delete</button>
                  </div>
              </div>
          );
      });
  };

  return (
    <div style={{display:"flex"}}>
      
      
      
    <Slider/>

    
          <h1  style={{display:"block"}}>Vendor Details</h1>
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" ,float:"left"}}>
              {renderCards()}
          </div>
          <div>

          <form className="add-product-form" onSubmit={formik.handleSubmit}>
              <TextField id="vendor_name" name="vendor_name" label="Vendor Name" variant="outlined"
                  value={formik.values.vendor_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <TextField id="Brand" name="Brand" label="Brand" variant="outlined"
                  value={formik.values.Brand}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <TextField id="vendor_PhoneNumber" name="vendor_PhoneNumber" label="Phone Number" variant="outlined"
                  value={formik.values.vendor_PhoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <TextField id="image" name="image" label="Image" variant="outlined"
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <Button variant="primary" type='submit'>Submit</Button>
          </form>
          </div>
      </div>
    
  );
}

export default Vendor;
