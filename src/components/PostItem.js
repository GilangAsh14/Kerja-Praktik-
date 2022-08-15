import React from 'react'
import { Card, Row, Col, Button, Pagination } from "react-bootstrap";
import NavbarAdmin from './NavbarAdmin';
import { Trash, EyeSharp, PencilSharp, AddCircle } from 'react-ionicons'
import FooterMain from '../components/FooterMain'
function PostItem() {
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
        <div style={{ width: '100%', }}>
            <NavbarAdmin />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <b>Semua Postingan</b>
                <b >Kategori</b>
                <div>
                    <AddCircle
                        color={'#0d6efd'}
                        title={''}
                        height="30px"
                        width="30px"
                        style={{ position: 'absolute', margin: 5, }}
                    />
                    <Button variant="outline-primary" href="Upload" style={{ fontFamily: 'poppins', borderRadius: 20, paddingLeft: 40 }}>Postingan Baru</Button>
                </div>
            </div>

            <div>
                <Card bg="white" style={{ margin: 40, border: 'none' }}>
                    <Row className='shadow' style={{ padding: 20, }}>
                        <img alt="thumbnail"
                            src='https://akcdn.detik.net.id/community/media/visual/2022/05/19/kapasitas-penumpang-krl-kini-jadi-80-persen-2_169.jpeg?w=700&q=90'
                            style={{ borderRadius: 15, maxWidth: 200 }} />
                        <Col >
                            <h5>Syarat Naik KRL Terbaru Wajib Booster? Cek Aturan Lengkapnya di Sini!</h5>
                            <br></br>
                            <p>12 Juli 2022, 09.37 WIB</p>
                        </Col>
                        <Col xs={1}  >
                            <a href='edit'>
                                <PencilSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <br></br>
                            <a href='detail'>
                                <EyeSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <a>
                            <Trash
                                color={'#00000'}
                                title={''}
                                height="30px"
                                width="30px"
                            />
                            </a>
                        </Col>

                    </Row>
                </Card>
            </div>

            <div>
                <Card bg="white" style={{ margin: 40, border: 'none' }}>
                    <Row className='shadow' style={{ padding: 20, }}>
                        <img src="thumbnail"
                            src='https://img.antaranews.com/cache/800x533/2022/08/02/IMG_20220708_103057_1.jpg.webp'
                            style={{ borderRadius: 15, maxWidth: 200 }} />
                        <Col >
                            <h5>BI Lampung sebut inflasi Juli capai 0,73 persen</h5>
                            <br></br>
                            <p>Rabu, 3 Agustus 2022 9:03 WIB</p>
                        </Col>
                        <Col xs={1}  >
                            <a href='edit'>
                                <PencilSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <br></br>
                            <a href='https://lampung.antaranews.com/berita/645689/bi-lampung-sebut-inflasi-juli-capai-073-persen'>
                                <EyeSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <Trash
                                color={'#00000'}
                                title={''}
                                height="30px"
                                width="30px"
                            />
                        </Col>

                    </Row>
                </Card>
            </div>

            <div>
                <Card bg="white" style={{ margin: 40, border: 'none' }}>
                    <Row className='shadow' style={{ padding: 20, }}>
                    <img alt="thumbnail"
                            src='https://gambar.lampung.co/2022/01/Atlet-Panjat-Tebing.jpg'
                            style={{ borderRadius: 15, maxWidth: 200 }} />
                        <Col >
                            <h5>Tak Ada Fasilitas, Atlet Panjat Tebing Lampura Latihan di Bandar Lampung</h5>
                            <br></br>
                            <p>17 Januari, 2022</p>
                        </Col>
                        <Col xs={1}  >
                            <a href='edit'>
                                <PencilSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <br></br>
                            <a href='https://www.lampung.co/berita/fasilitas-tak-memadai-atlet-panjat-tebing-lampura-latihan-di-bandar-lampung/'>
                                <EyeSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <Trash
                                color={'#00000'}
                                title={''}
                                height="30px"
                                width="30px"
                            />
                        </Col>

                    </Row>
                </Card>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <Pagination style={{ marginBottom: 100 }}>{items}</Pagination>
                <br />
                <br></br>
            </div>
            {/* <FooterMain /> */}
        </div>
    )
}

export default PostItem