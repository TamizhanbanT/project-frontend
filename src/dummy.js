import React from 'react'

function Dummy() {

    let d= require("./customer.json")

    let br="{"
    let cr="},"

    let c= d.map((x)=>{

        function ran(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }



    
    if(x.brand=="Peterengland"){
        let pe=Math.round(x.price*92/100)
        return(<>
        <div>{br}</div>
        <div>"_id":"{x._id}",</div>
           <div>"Vendor price":{pe},</div>
           <div>"custumor price":{x.price},</div>
           <div>"commission":8,</div>
           <div>"Profit":{x.price-pe},</div>
           <div>"brand":"{x.brand}",</div>
           <div>"November2023":{ran(35,45)},</div>
           <div>"December2023":{ran(35,45)},</div>
           <div>"January2024":{ran(35,45)},</div>
           <div>"February2024":{ran(35,45)},</div>
           <div>"March2024":{ran(35,45)}</div>
    
            <div>{cr}</div>
           </>
            ) 
    }
    else if
        (x.brand=="Arrow"){
        let pe=Math.round(x.price*91/100)
        return(<>
         <div>{br}</div>
         <div>"_id":"{x._id}",</div>
           <div>"Vendor price":{pe},</div>
 <div>"custumor price":{x.price},</div>
 <div>"commission":9,</div>
 <div>"Profit":{x.price-pe},</div>
           <div>"brand":"{x.brand}",</div>
           <div>"November2023":{ran(35,45)},</div>
           <div>"December2023":{ran(35,45)},</div>
           <div>"January2024":{ran(35,45)},</div>
           <div>"February2024":{ran(35,45)},</div>
           <div>"March2024":{ran(35,45)}</div>
    
           <div>{cr}</div></>
           
            ) 
    }
    else if
    (x.brand=="Allensolley"){
    let pe=Math.round(x.price*90/100)
    return(<>
    <div>{br}</div>
    <div>"_id":"{x._id}",</div>
       <div>"Vendor price":{pe},</div>
 
       <div>"custumor price":{x.price},</div>
       <div>"commission":10,</div>
       <div>"Profit":{x.price-pe},</div>
       <div>"brand":"{x.brand}",</div>
       <div>"November2023":{ran(30,40)},</div>
           <div>"December2023":{ran(35,45)},</div>
           <div>"January2024":{ran(20,30)},</div>
           <div>"February2024":{ran(35,45)},</div>
           <div>"March2024":{ran(35,45)}</div>
    
       <div>{cr}</div></>
        ) 
}
else if
(x.brand=="Levis"){
let pe=Math.round(x.price*91/100)
return(<>
<div>{br}</div>
<div>"_id":"{x._id}",</div>
   <div>"Vendor price":{pe},</div>

   <div>"custumor price":{x.price},</div>
   <div>"commission":9,</div>
   <div>"Profit":{x.price-pe},</div>
   <div>"brand":"{x.brand}",</div>
   <div>"November2023":{ran(35,45)},</div>
           <div>"December2023":{ran(48,55)},</div>
           <div>"January2024":{ran(39,50)},</div>
           <div>"February2024":{ran(30,40)},</div>
           <div>"March2024":{ran(25,35)}</div>
    
   <div>{cr}</div></>
    ) 
} else if
(x.brand=="Johnplayers"){
let pe=Math.round(x.price*93/100)
return(<>
<div>{br}</div>
<div>"_id":"{x._id}",</div>
   <div>"Vendor price":{pe},</div>

   <div>"custumor price":{x.price},</div>
   <div>"commission":7,</div>
   <div>"Profit":{x.price-pe},</div>
   <div>"brand":"{x.brand}",</div>
   <div>"November2023":{ran(25,30)},</div>
           <div>"December2023":{ran(40,50)},</div>
           <div>"January2024":{ran(35,45)},</div>
           <div>"February2024":{ran(34,40)},</div>
           <div>"March2024":{ran(35,45)}</div>
    
   <div>{cr}</div></>
    ) 
}
    }
    
    )
    console.log(c)
  return (
    <div>
       {c}
      
    </div>
  )
}

export default Dummy
