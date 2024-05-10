import React, { useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';



import "./context.css";


import CardGroup from 'react-bootstrap/CardGroup';

import Table from 'react-bootstrap/Table';

import axios from 'axios';

import { Dropdown } from 'react-bootstrap';












function Product() {

   /*  let data = require('./shirt.json'); */
    
    /* const[Cartvalue,Setcartvalue]=useState(0) */

    const URL ='https://project-inventory-management.onrender.com/items/get-items';

    const [data,setdata]=useState([])

    const [Filter1,setFilter]=useState("All")

    const [Filter2,setFilter2]=useState("All")

    const getProduct = async () => {

     const response = await 
     axios.get(URL).then((value)=>{
        
        setdata(value.data);

        
     }).catch((err)=>{
         console.log("somthing went wrong try again");
     })}

     useEffect(() => {getProduct()
     },[]);

     /* function Brand(x){

      let filter1=data.filter((y,z)=>{

        y.brand===x

        
      })

      setdata(filter1)
     }
 */

     const Filterbrand = (item) => {

      console.log(item)
      if ((Filter1 === "All")&&(Filter2 ==="All") ){
          return true;
      }
          else if ((Filter1 === "All")&&(Filter2 !="All")){
          return (item.type===(Filter2));
        }
        else if ((Filter1 != "All")&&(Filter2 ==="All")){
          return (item.brand===(Filter1));
        }
      
       else {
          return (item.brand === (Filter1)&&(item.type===(Filter2)))         
      }
  };

       function Card(){

    let data1=data.filter(Filterbrand).map((x,y)=>{

        return(
           
            
            <tbody>
              <tr>
                <td>{y+1}</td>
                <td><img src={x.image_url} height="40px" width="40px"></img></td>
                <td>{x.type}</td>
                <td>{x.brand}</td>
                <td>{x.material}</td>
                <td>
                <td>{x.stock.S}</td>
                <td>{x.stock.M}</td>
                <td>{x.stock.L}</td>
                <td>{x.stock.XL}</td>
                <td>{x.stock.XXL}</td>
                <td>{x.stock.S + x.stock.M+x.stock.L+x.stock.XL+x.stock.XXL}</td>
                </td>
                <td>{x.price}</td>
                
              </tr>
              
            </tbody>

            
        
        )
    })
    
    return(data1)

   }


  return (
    <div>
      
       

      <Table striped="columns" className="tab"><thead>
              <tr>
                <th>S.NO</th>
                <th>IMAGE</th>
                <th>TYPE
                <select     className='TYPE'
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
                           
                        </select>
                </th>
                <th>
                <select     className='BRAND'
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
                        </select>





                </th>
                <th>MATERIAL</th>
                <th>STOCK
                    <th>S</th>
                    <th>M</th>
                    <td>L</td>
                    <td>XL</td>
                    <td>XXL</td>
                   </th>
                  <th>PRICE</th>
               </tr>
            </thead>{Card()}
            
           
            </Table>
             <Button type="submit">Add Items</Button>
             
    </div>
    
    
  )
  
}

export default Product
