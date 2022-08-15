import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';
import PostItem from '../components/PostItem';
import FooterMain from '../components/FooterMain';

const Post = () => {
    return (
        <>

            <div style={{ display: 'flex', height: '100vh', }}>

                <CDBSidebar textColor="gray" backgroundColor="white" style={{ marginBottom: -30 }}>
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="#aa" className="text-decoration-none" style={{ color: 'gray' }}>
                            Menu
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <NavLink exact to="Post" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns" style={{ color: 'gray' }}>Postingan</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table" style={{ color: 'gray' }}>Halaman</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line" style={{ color: 'gray' }}>Statistik</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="book" style={{ color: 'gray' }}>Komentar</CDBSidebarMenuItem>
                            </NavLink>


                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Copyright 2022
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

                <PostItem />

            </div>
            <div style={{ marginTop: 180 }}></div>
            <FooterMain />
        </>
    );
};

export default Post;