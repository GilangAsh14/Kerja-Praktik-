import React from 'react'
import { Badge, Card } from 'react-bootstrap'
const FooterMain = () => {
    return (
        <Card bg="dark" style={{ padding: 10, }}>
            <h3 className="text-center">
                <Badge bg="dark">Tulang</Badge> <Badge bg="warning">Bawang</Badge>
            </h3>
            <p className='text-center text-white'>Andalas © Copyright 2022. All rights Reserved</p>
        </Card>
    )
}

export default FooterMain;