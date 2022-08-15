import React from 'react'
import NavbarBig from '../components/NavbarBig'
import FooterMain from '../components/FooterMain'
import Horizontal from '../components/Horizontal'
import Body from '../components/Body'
import NewsFeed from '../components/NewsFeed'
import { Pagination } from "react-bootstrap";
function Utama() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <NavbarBig />
            <Horizontal />
            <br></br>
            <Body />
            <NewsFeed />
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <Pagination style={{ marginBottom: 100 }}>{items}</Pagination>
                <br />
                <br></br>
            </div>
            <FooterMain />
        </div>
    )
}

export default Utama