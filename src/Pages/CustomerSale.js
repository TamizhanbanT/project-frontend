import React, { useEffect,useState } from 'react'

import Form from 'react-bootstrap/Form';

import { Button } from 'react-bootstrap';

import axios from 'axios';

import "./Customer.css";



function CustomerSale() {

    const [data,setdata]=useState([]);

    const [Senddata,setSenddata]=useState([]);

    const [Size,setSize]=useState([]);

    const [DeleteShirt,setDeleteShirt]=useState([])


    const URL ='https://project-inventory-management.onrender.com/items';

  
        

        
        
  

    const getProduct = async () => {

        const response = await 
        axios.get(`${URL}/get-items`).then((value)=>{
           
           setdata(value.data);
   
           
        }).catch((err)=>{
            console.log("somthing went woron try again");
        })}
   
        useEffect(() => {getProduct()
        },[]);

        function Addtocart(item){

            setSenddata(item)
        }

        

            

        

        

        function postproduct(oneshirt){

            console.log(document.getElementById(oneshirt._id).value)

           setSize([{"Size":document.getElementById(oneshirt._id).value,
                      "_id":oneshirt._id},...Size])
                
           console.log(Size)
           

        }

       
            
          function Customer(){
          let data1=  data.map((x)=>{
          return(
            
            <div class="container">
                <div class="card">
                <img  class="card-img-top" src={x.image_url} height="200px" width="200px" />
                      

                         
                    <div class="card-body">
                                         
                        <h4 class="card-title">{x.brand}</h4>

                        <Form.Select label="Default select example" placeholder='select size' onChange={()=>postproduct(x)} id ={x._id}>
                        <option value="">--Please choose Size--</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </Form.Select>

                        <h5 class="card-title">({x.material})</h5>
                                              
                        <p class="card-text">  Price:{x.price} </p>

                        <Button variant="primary" onClick={()=>Addtocart(x)}>SELL</Button>               
                     </div>
                </div>
            </div>
         )
        }
        )
        return (data1)
    }    
       

        
    return (
        <div>
           {/*  <Navbar1 props={Senddata}></Navbar1> */}
         <div className='Cardhead'>
            
        {Customer()}

        </div>
        </div>

        
 
      );}
      export default CustomerSale

      