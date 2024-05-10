import React, { useState,useEffect} from 'react';

import Form from 'react-bootstrap/Form';

import TextField from '@mui/material/TextField';

import "./context.css";

import Table from 'react-bootstrap/Table';

import axios from 'axios';

import { Button } from 'react-bootstrap';

import { useFormik } from "formik";

import * as yup from "yup";

import Modeledit from './Modeleditnew';

import { Modal } from 'antd';
import Slider from './Slider';



//  VALIDATION SCHEMA--------------------------------


const productValidationSchema = yup.object({
  type: yup.string()
    .required("Why not fill the type?"),
  stock: yup.object({
 
    S: yup.number()
    .required("Why not fill the type?"),
    M: yup.number()
    .required("Why not fill the type?"),
    L: yup.number()
    .required("Why not fill the type?"),
    XL: yup.number()
    .required("Why not fill the type?"),
    XXL: yup.number()
    .required("Why not fill the type?")}),
  
    
  price: yup.number()
    .required("Why not fill the price?"),
  brand: yup.string()   
    .required("Why not fill the brand?"),
  material: yup.string()
    .required("Why not fill the material?"),
   image_url: yup.string()
   .required("Why not fill the image_url?")
})




function Inventory() {



   

    const URL ='https://project-inventory-management.onrender.com/items';

    const [data,setdata]=useState([])

    const [Filter1,setFilter]=useState("All")

    const [Filter2,setFilter2]=useState("All")

    

    const [Senddata,setSenddata]=useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);


    // ADD ITEMS----------------------------------------
    

    const getProduct = async () => {

     const response = await 
     axios.get(`${URL}/get-items`).then((value)=>{
        
        setdata(value.data);

        
     }).catch((err)=>{
         console.log("somthing went woron try again");
     })}

     useEffect(() => {getProduct()
     },[]);



     // FILTERING ITEMS-----------------------------------
     

     const Filterbrand = (item) => {

     
      if ((Filter1 === "All")&&(Filter2 ==="All") ){
          return true;
      }
          else if ((Filter1 === "All")&&(Filter2 !=="All")){
          return (item.type===(Filter2));
        }
        else if ((Filter1 !== "All")&&(Filter2 ==="All")){
          return (item.brand===(Filter1));
        }
      
       else {
          return (item.brand === (Filter1)&&(item.type===(Filter2)))         
      }
  };

 

  const formik = useFormik({

    initialValues: { type: "", stock:{S:"",M:"",L:"",XL:"",XXL:""}, price: "", brand: "", material: "" , image_url:""},

    validationSchema: productValidationSchema,

    onSubmit: (values) => {
     
      createProduct(values)
    }   
  });


  const createProduct = (values) => {
  
    fetch(`${URL}/add-items`, {
      method: "POST",
      body: JSON.stringify(values),
      
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
    
  }

  // DELETE ITEMS---------------------------


    const Delete_Id =(values)=>{

      let a={itemId:values}

      createProduct1(a)
    }


  

    const createProduct1 = (values) => {

      
       console.log("createProduct", values)

      

      
       fetch(`${URL}/delete-items`, {
         method: "POST",
         body: JSON.stringify(values),
         
         headers: {
           "Content-Type": "application/json"
         }
       })
         .then((res) => res.json())
       
     }
   
     // EDIT ITEMS----------------------------------


     const showModal = (x) => {
      setIsModalOpen(true);

      setSenddata(x);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    
  

   function Card(){

     let data1=data.filter(Filterbrand).map((x,y)=>{

        return(          
              <tr key={y}>
                <td>{y+1}</td>
                <td><img src={x.image_url} height="40px" width="40px" alt="Shirts"></img></td>
                <td>{x.type}</td>
                <td>{x.brand}</td>
                <td>{x.material}</td>
                
                <td>{x.stock.S}</td>
                <td>{x.stock.M}</td>
                <td>{x.stock.L}</td>
                <td>{x.stock.XL}</td>
                <td>{x.stock.XXL}</td>
                <td>{Number(x.stock.S) + Number(x.stock.M)+Number(x.stock.L)+(+x.stock.XL)+(+x.stock.XXL)}</td>
                
                <td>{x.price}</td>
                <td><Button type="primary" onClick={()=>showModal(x)  }>EDIT</Button></td>
                <td><Button type="primary" onClick={()=>Delete_Id(x._id)  }>DELETE</Button></td>



                
                
                
              </tr>
              
           

            
        
        )
    })
    
    return(data1)

   }


  return (
    <div style={{display:"flex"}}>
      
      
      
      <Slider/>
      <div>
      <h1>Product Details</h1>
      <br></br>
      <Table striped="columns" className="tab">
        <thead>
              <tr>
                <th rowSpan="2">S.NO</th>
                <th rowSpan="2">IMAGE</th>
                <th rowSpan="2">TYPE
                <Form.Select     className='TYPE'
                            style={{ textAlign: "center"}}
                            name="TYPE"
                            value={Filter2}
                            onChange={(e) => setFilter2(e.target.value)}
                        >
                            <option value="All">ALL TYPE</option>
                            <option value="offhand">OFF HAND</option>
                            <option value="casual">CASUAL</option>
                            <option value="formal">FORMAL</option>
                            <option value="chinese">CHINESE</option>
                           
                        </Form.Select>
                </th>
                <th rowSpan="2">BRAND
                <Form.Select     className='BRAND'
                            style={{ textAlign: "center"}}
                            name="BRAND"
                            value={Filter1}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">ALL BRAND</option>
                            <option value="Allensolley">ALLEN SOLLEY</option>
                            <option value="Peterengland">PETER ENGLAND</option>
                            <option value="Arrow">ARROW</option>
                            <option value="Levis">LEVIS</option>
                            <option value="Johnplayers">JOHN PLAYER</option>
                  </Form.Select>
                </th>
                <th rowSpan="2">MATERIAL</th>
                <th colSpan="6">STOCK</th>
                  <th rowSpan="2">PRICE</th>
                  <th rowSpan="2">EDIT ITEMS</th>
                  <th rowSpan="2">DELETE ITEMS</th>
               </tr>
               <tr>
                    <td>S</td>
                    <td>M</td>
                    <td>L</td>
                    <td>XL</td>
                    <td>XXL</td>
                    <td>TOTAL STOCK</td>
               </tr>
            </thead>
            <tbody>{Card()}</tbody>
        </Table>

          <h3>Add products</h3>       

      <form /* style={{display:"block"}} */ className="add-product-form" onSubmit={formik.handleSubmit}>

      <TextField id="type" name="type" label="Type" variant="outlined"
        value={formik.values.type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.type && formik.errors.type ? formik.errors.type : ""}
      
      <TextField id="stock.S" name="stock.S" label="S" variant="outlined"
        value={formik.values.stock.S}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
     
      <TextField id="stock.M" name="stock.M" label="M" variant="outlined"
        value={formik.values.stock.M}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <TextField id="stock.L" name="stock.L" label="L" variant="outlined"
        value={formik.values.stock.L}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <TextField id="stock.XL" name="stock.XL" label="XL" variant="outlined"
        value={formik.values.stock.XL}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <TextField id="stock.XXL" name="stock.XXL" label="XXL" variant="outlined"
        value={formik.values.stock.XXL}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <TextField id="price" name="price" label="Price" variant="outlined"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.price && formik.errors.price ? formik.errors.price : ""}

      <TextField id="brand" name="brand" label="brand" variant="outlined"
        value={formik.values.brand}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.brand && formik.errors.brand ? formik.errors.brand : ""}

      <TextField id="material" name="material" label="material" variant="outlined"
        value={formik.values.material}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.material && formik.errors.material ? formik.errors.material : ""}

      <TextField id="image_url" name="image_url" label="image_url" variant="outlined"
        value={formik.values.image_url}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}       
      />

        {formik.touched.image_url && formik.errors.image_url ? formik.errors.image_url : ""}


     
        <Button variant="primary" type='submit'>Submit</Button>
     
    </form>

    <Modal title="EDIT ITEMS" open={isModalOpen}  onCancel={handleCancel} footer={null}>

      <Modeledit props={Senddata}/>

    </Modal>
    </div>

    </div>
  )
}

export default Inventory
