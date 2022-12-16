import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StorePerformance =()=>{
    const percentage = 88;
    return(
        <div>
            <div className="perf">
                <h1>Store Performance</h1>
               <div>
               <div className="idi">
                    <h2>Store ID: 5645345</h2>
                    <h3>Store Created: 13th August 2022</h3>
                </div>
                <div className="idi">
                    <h2>Successful Sales</h2>
                    <h5>112</h5>
                </div>
                <div className="idi">
                    <h2>Product Quality</h2>
                    <div style={{ width: 50, height: 50 }}>
  <CircularProgressbar value={88} text={`${percentage}%`}
      styles={buildStyles({
        rotation: 0.25,
        textSize: '16px',
        textColor: '#000',
        trailColor: '#4CC5D2',
        backgroundColor: '#4CC5D2',
      })}
  />
</div>
                </div>
                <div className="idi">
                    <h2>Delivery Rate</h2>
                    <div style={{ width: 50, height: 50 }}>
  <CircularProgressbar value={88} text={`${percentage}%`}
      styles={buildStyles({
        rotation: 0.25,
        textSize: '16px',
        textColor: '#000',
        trailColor: '#4CC5D2',
        backgroundColor: '#4CC5D2',
      })}
  />
</div>
                </div>
                <div className="idi">
                    <h2>Communication</h2>
                    <div style={{ width: 50, height: 50 }}>
  <CircularProgressbar value={88} text={`${percentage}%`}
      styles={buildStyles({
        rotation: 0.25,
        textSize: '16px',
        textColor: '#000',
        trailColor: '#4CC5D2',
        backgroundColor: '#4CC5D2',
      })}
  />
</div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default StorePerformance