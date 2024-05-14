import React from 'react';
import Button from 'react-bootstrap/Button';

const OrderByGradeButton = ({onOrderByGrade}) => { //Only the button component with no functionallity that is handled in App.js
    return(
        <Button onClick={onOrderByGrade} variant="primary">
            Sortera efter betyg
        </Button>
    );
}

export default OrderByGradeButton;