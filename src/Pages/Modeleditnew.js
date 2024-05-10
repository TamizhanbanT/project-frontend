import React, { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';

import { Col } from 'react-bootstrap';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {Button} from "react-bootstrap"

import './model.css';


const Modeledit = (value) => {

  const [TYPE,setTYPE]= useState("");

  const [PRICE,setPRICE]= useState("");

  const [BRAND,setBRAND]= useState("");

  const [MATERIAL,setMATERIAL]=useState("");

  const [SMALL,setSMALL] =useState("");

  const [MEDIUM,setMEDIUM] =useState("");

  const [LARGE,setLARGE] =useState("");

  const [XTRAL,setXL] =useState("");

  const [XTRAXL,setXXL]=useState("");

  const [IMGURL,setIMGURL]=useState("");



  useEffect(()=>{

    console.log(value)

     setTYPE(value.props.type)

     setPRICE(value.props.price)

     setBRAND(value.props.brand)

    if (value.props.stock!==undefined){
       setSMALL(Number(value.props.stock.S))  
 
     setMEDIUM(Number(value.props.stock.M))  
 
     
     setLARGE(Number(value.props.stock.L))

     setXL(Number(value.props.stock.XL))

     setXXL(Number(value.props.stock.XXL)) }

     setMATERIAL(value.props.material)

     setIMGURL(value.props.image_url)

  },[value])


  
  const createProduct2 = (jsondata) => {

      console.log("json",jsondata)

       fetch(`https://project-inventory-management.onrender.com/items/edit-items`, {

         method: "POST",

         body: JSON.stringify(jsondata),
         
         headers: {
           "Content-Type": "application/json"
         }
       })
         .then((res) => res.json()
         )      
    }

  const ONedit = () =>{
    // alert('submit')
  

    let Values= { type:TYPE, stock:{S:SMALL,M:MEDIUM,L:LARGE,XL:XTRAL,XXL:XTRAXL}, price: PRICE, brand: BRAND, material: MATERIAL , image_url:IMGURL}
    
    console.log(Values)

        let newval=value.props._id
        
    let jsondata={itemId:newval,...Values}

    console.log(jsondata)

    createProduct2(jsondata)
   

  }
      
 /* console.log(value.props) */
  



  return (
    <div >
      
     
      <Form className="add-product-form" 
      // style={{display:"grid", "grid-template-columns": "repeat(auto-fill, minmax(280px, 1fr))"}}
      >
         {/*  <Form.Group as={Col} md="2"></Form.Group> */}
          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="TYPE" className="mb-3">
            <Form.Control type="text"  value={TYPE} onChange={(event)=>setTYPE(event.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel controlId="floatingInput" label="PRICE" className="mb-3"> 
            <Form.Control type="text"   value={PRICE} onChange={(event)=>setPRICE(event.target.value)}/>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="BRAND" className="mb-3">
          <Form.Control type="text" value={BRAND} onChange={(event)=>setBRAND(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="MATERIAL" className="mb-3">
          <Form.Control type="text" value={MATERIAL} onChange={(event)=>setMATERIAL(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="IMAGE URL" className="mb-3">
          <Form.Control type="text" value={IMGURL} onChange={(event)=>setIMGURL(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="SIZE-S" className="mb-3">
          <Form.Control type="text"  value={SMALL} onChange={(event)=>setSMALL(event.target.value)}  />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="SIZE-M" className="mb-3">
          <Form.Control type="text" value={MEDIUM} onChange={(event)=>setMEDIUM(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="SIZE-L" className="mb-3">
          <Form.Control type="text" value={LARGE} onChange={(event)=>setLARGE(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="SIZE-XL" className="mb-3">
          <Form.Control type="text" value={XTRAL} onChange={(event)=>setXL(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" className="" controlId="exampleForm.ControlInput2">
          <FloatingLabel controlId="floatingInput" label="SIZE-XXL" className="mb-3">
          <Form.Control type="text" value={XTRAXL} onChange={(event)=>setXXL(event.target.value)} />
          </FloatingLabel>
          </Form.Group>

        
         {/*  <Form.Group as={Col} md="2">   
         </Form.Group> */}


      <Button type="button" className="btn" onClick={ONedit}>Submit</Button>



</Form>
     
    </div>
  );
};
export default Modeledit;