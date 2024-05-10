import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import  { useState,useEffect} from 'react';
import axios from 'axios';



export default function Currentstock() {

    const URL ='https://project-inventory-management.onrender.com/items';


    const [data1,setdata1]=useState([])
    const getProduct = async () => {

        const response = await 
        axios.get(`${URL}/get-items`).then((value)=>{
           
           setdata1(value.data);
   
           
        }).catch((err)=>{
            console.log("somthing went woron try again");
        })}
   
        useEffect(() => {getProduct()
        },[]);

        console.log(data1)

        function mapp(uu){

            let pro =0
        
                let month=data1.map((x)=>{
                    if(x.brand==uu){
                     pro= pro + Number((+x.stock.M)+(+x.stock.S)+(+x.stock.XL)+(+x.stock.XXL)+(+x.stock.L))
                      console.log(pro)
                     
                    }
                })
                console.log(pro)

                return pro
            }
        
  return (
    <LineChart
     
      xAxis={[{ scaleType: 'band', data: ["Allensolley", "Peterengland", "Arrow","Levis", "Johnplayers"] }]}

      series={[
        { data: [mapp("Allensolley"), mapp("Peterengland"), mapp("Arrow"), mapp("Levis"), mapp("Johnplayers")] }
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}