import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Steps() {
    
    const [steps,setSteps] = useState();

    return ( 

        <div>
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Steps</Card.Header>
                <Card.Body>
                <Card.Title>{steps}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Steps;