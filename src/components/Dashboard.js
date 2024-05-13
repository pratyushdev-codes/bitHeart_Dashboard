import React from "react";
import HeroImage from "./HeroImage";
import Steps from "./Steps";
import BloodPressure from "./BloodPressure";
import HeartRate from "./HeartRate";
import BodyTemperature from "./BodyTemperature";

function Dashboard() {
    return ( 
        <div>
            <HeroImage/>
            <div className="container">
            <div className="content">
                <div className="row1">
                    <div className="rowcontent">
                        <div className="steps box"><Steps/></div>
                        <div className="bp box"><BloodPressure/></div>
                        <div className="hr box"><HeartRate/></div>
                    </div>
                </div>
                <div className="row2">
                    <div className="rowcontent">
                        <div className="bt box"><BodyTemperature/></div>
                        <div className="box emptybox1">Empty Component 1 </div>
                        <div className="box emptybox2">Empty Component 2</div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
        </div>
     );
}

export default Dashboard;