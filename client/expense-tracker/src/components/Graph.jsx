import React from 'react'
import {Chart, ArcElement} from "chart.js"
import {Doughnut} from "react-chartjs-2";


Chart.register(ArcElement);

const data = {
  
};

const config = ()=>{
  data:{
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
}
const Graph = () => {
  return (
    <div className='flex justify-center max-w-xs mx-auto'>
      <div className="item">
        <div className="chart relative">
         <Doughnut data={data}></Doughnut>
        </div>
        <div className="flex flex-col py-10 gap-4">
          {/* labels */}
        </div>
      </div>
    </div>
  )
}

export default Graph