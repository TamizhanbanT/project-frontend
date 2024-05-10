import React from 'react';

import Table from 'react-bootstrap/Table';

import Form from 'react-bootstrap/Form';

import { useState ,useEffect} from 'react';

import Slider from './Pages/Slider';

function Stocktable() {



    let monpro=0
    

    const [Filter1,setFilter]=useState("All")

    const [Filter2,setFilter2]=useState("All")

    const [Sale,Setsale]=useState("November2023")
    
    const[monthlyprofit, setmonthlyprofit]=useState(0)

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
   

    let stock= require("./sale11.json")

    useEffect(()=>{setmonthlyprofit(monpro)})
 function Card(){

        let data1=stock.filter(Filterbrand).map((x,y)=>{

            monpro=x[Sale]*x.Profit+monpro
            

           
             return(          
                 <tr key={y}>
                   <td>{y+1}</td>
                   <td>{x._id}</td>
                   <td>{x.brand}</td>
                   <td>{x['Vendor price']}</td>
                   <td>{x['customer price']}</td>
                   <td>{x.Profit}</td>
                    <td>{x[Sale]}</td>
                    <td>{x[Sale]*x.Profit}</td>
                   </tr>        
           )
       })
       
       return(data1)
   
      }
return (
  
    <div style={{display:"flex"}}>
      
      <Slider ></Slider>
      
      <div>
       <h1 style={{display:"flex",paddingLeft:"400px"}}>Stock Details</h1> 
        <Table striped="columns" className="tab"   >
        <thead>
              <tr>
                <th rowSpan="2">S.NO</th>

                <th>ITEM ID</th>
                
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
                <th >VENDOR PRICE</th>
                <th>CUSTOMER PRICE</th>
                  <th rowSpan="2">PROFIT/SHIRT</th>
                  <th rowSpan="2">STOCK SALES
                <Form.Select     className='SALE'
                            style={{ textAlign: "center"}}
                            name="SALE"
                            value={Sale}
                            onChange={(e) => Setsale(e.target.value)}
                            
                            
                        >
                            
                            <option value="November2023">November2023</option>
                            <option value="December2023">December2023</option>
                            <option value="January2024">January2024</option>
                            <option value="February2024">February2024</option>
                            <option value="March2024">March2024</option>
                  </Form.Select>
                </th>
                  <th rowSpan="2">MONTHLY PROFIT</th>
               </tr>
      
            </thead>
            <tbody>{Card()}
            </tbody>
        </Table>
        <h3 style={{float:"right",display:"block"}}>Total Monthly Profit:{monthlyprofit}</h3>
        </div>
      
    </div>
  )
}

export default Stocktable
