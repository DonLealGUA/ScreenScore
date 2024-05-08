import React from 'react';
import Button from 'react-bootstrap/Button';

const OrderByAlphaButton = ({onOrderByAlpha}) => {
    return(
        <Button onClick={onOrderByAlpha} variant="primary">
            Sortera alfabetiskt
        </Button>
    );
}

export default OrderByAlphaButton;