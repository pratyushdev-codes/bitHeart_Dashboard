import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function HeartRate() {

    const [HeartRate,setHeartRate] = useState();

    return (
        <div>
             <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Heart Rate</Card.Header>
                <Card.Body>
                <Card.Title> {HeartRate} kmph</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
      );
}


export default HeartRate;