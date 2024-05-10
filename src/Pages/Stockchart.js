import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Stockchart() {

    let val = require("../sale11.json")

    console.log(val)

    

   function mapp(mon,uu){

    let pro =0

        let month=val.map((x)=>{
            if(x.brand==uu){
             pro= pro + Number(x[mon]*x.Profit)
            }
        })
        return pro
    }
    

    

  return (
    <BarChart

    
    
    xAxis={[{ scaleType: 'band', data: ['November2023', 'December2023', 'January2024','February2024','March2024'] }]}
      series={[
        { data: [mapp("November2023","Allensolley"),mapp("December2023","Allensolley"),mapp("January2024","Allensolley"),mapp("February2024","Allensolley"),mapp("March2024","Allensolley")], stack: 'A', label: 'Allensolley' },

        { data: [mapp("November2023","Peterengland"), mapp("December2023","Peterengland"),mapp("January2024","Peterengland"),mapp("February2024","Peterengland"),mapp("March2024","Peterengland")], stack: 'A', label: 'Peterengland' },

        { data: [mapp("November2023","Arrow"), mapp("December2023","Arrow"),mapp("January2024","Arrow"),mapp("February2024","Arrow"),mapp("March2024","Arrow")], stack: 'A', label: 'Arrow' },
        { data: [mapp("November2023","Johnplayers"), mapp("December2023","Johnplayers"),mapp("January2024","Johnplayers"),mapp("February2024","Johnplayers"),mapp("March2024","Johnplayers")], stack: 'A', label: 'Johnplayers' },
        {data: [mapp("November2023","Levis"), mapp("December2023","Levis"),mapp("January2024","Levis"),mapp("February2024","Levis"),mapp("March2024","Levis")], stack: 'A', label: 'Levis' },
      ]}
      width={700}
      height={350}
    />
  );
}