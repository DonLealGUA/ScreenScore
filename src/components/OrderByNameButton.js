import React from 'react';
import Button from 'react-bootstrap/Button';

const OrderByNameButton = ({onOrderByName}) => { //Only the button component with no functionallity that is handled in App.js
    return(
        <Button onClick={onOrderByName} variant="primary">
            Sortera alfabetiskt
        </Button>
    );
}

export default OrderByNameButton;