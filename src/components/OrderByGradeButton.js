import React from 'react';
import Button from 'react-bootstrap/Button';

const OrderByGradeButton = ({onOrderByGrade}) => {
    return(
        <Button onClick={onOrderByGrade} variant="primary">
            Sortera efter betyg
        </Button>
    );
}

export default OrderByGradeButton;