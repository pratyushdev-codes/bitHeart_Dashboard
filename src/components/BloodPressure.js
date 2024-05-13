import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function BloodPressure() {

    const [BloodPressure,setBloodPressure] = useState();

    return ( 
        <div>
           <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Blood Pressure</Card.Header>
                <Card.Body>
                <Card.Title>{BloodPressure}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
     );
}


export default BloodPressure;