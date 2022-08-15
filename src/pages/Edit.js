import React, { useState } from 'react';
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
import FooterMain from '../components/FooterMain';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';


const Edit = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const UploadControl = ({ children, value, onChange, disabled, accept }) => {
        return (
            <label htmlFor="contained-button-file" className="m-0 w-100">
                <input
                    value={value}
                    accept={accept}
                    disabled={disabled}
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={disabled ? () => { } : onChange}
                />
                {children}
            </label>
        );
    };

    const handleAddBanner = ({ target: { files } }) => {
        const loadedImage = files[0];
        // loadedImage will be a image file.
    };
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
                            <NavLink exact to="#" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns" style={{ color: 'gray' }}>Postingan</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="#" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table" style={{ color: 'gray' }}>Halaman</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="#" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line" style={{ color: 'gray' }}>Statistik</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="#" activeClassName="activeClicked">
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


                <div style={{ width: '100%', }}>
                    <NavbarAdmin />
                    <h2 style={{ textAlign: 'center', fontFamily: 'poppins', color: '#1e66d4' }}>Edit Postingan</h2>
                    <hr></hr>
                    <div style={{ margin: 30, padding: 20 }}>
                        <h5>Judul</h5>
                        <input type='text' placeholder='Judul berita ...'
                            style={{ width: '100%', padding: 10, borderRadius: 3, border: '1px solid gray' }} ></input>
                        <br></br>         <br></br>
                        <h5>Isi Berita</h5>
                        <div style={{ borderWidth: 1, borderColor: 'gray' }}>
                            <Editor
                                placeholder='Isi berita...'
                                wrapperStyle={{ border: "1px solid gray", borderRadius: 3 }}
                                editorStyle={{ border: "1px solid gray", borderRadius: 3, minHeight: 100, margin: 10 }}
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={editorState => setEditorState(editorState)}
                            />
                        </div>
                        <br></br>
                        <h5>Upload Thumbnail</h5>
                        <div style={{ padding: 20, border: '1px solid gray', width: 300, backgroundColor: '#e9ebf0' }}>
                            <center>
                                <button className="btn-styles" style={{ fontFamily: 'poppins', fontSize: 14, borderRadius: 5, backgroundColor: '#db5000', border: 'none', color: 'white', padding: 10 }}>
                                    <UploadControl onChange={handleAddBanner} accept="image/*">
                                        + Upload Gambar
                                    </UploadControl>
                                </button>
                            </center>
                        </div>
                        <br></br>
                        <br></br>
                        <button style={{ fontFamily: 'poppins' }} className="btn btn-primary w-100">
                            Posting Berita
                        </button>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: 180 }}></div>
            <FooterMain />
        </>
    );
};

export default Edit;