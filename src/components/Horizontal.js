import React from "react";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function Horizontal() {
    return (
        <div>
            <div className="row" style={{ marginLeft: '5%', marginRight: '5%', justifyContent: 'space-between' }}>
                <Card border="white" style={{ width: 300, marginLeft: -5, marginRight: -5 }}>

                    <Card.Body style={{ alignItems: 'center' }}>
                        <img
                            alt="sad dvd"
                            src='https://akcdn.detik.net.id/community/media/visual/2022/05/19/kapasitas-penumpang-krl-kini-jadi-80-persen-2_169.jpeg?w=700&q=90' width={300} style={{ borderRadius: 10 }} />
                        <a href='detail' style={{ textDecoration: 'none' }}>     <Card.Text style={{ width: 280, fontSize: 14, fontWeight: '600' }}>Syarat Naik KRL Terbaru Wajib Booster? Cek Aturan Lengkapnya di Sini!</Card.Text> </a>

                    </Card.Body>
                </Card>
                <br />
                <Card border="white" style={{ width: 300, marginLeft: -5, marginRight: -5 }}>

                    <Card.Body style={{ alignItems: 'center' }}>
                        <img
                            alt="description of "
                            src='https://img.antaranews.com/cache/800x533/2022/08/02/IMG_20220708_103057_1.jpg.webp' width={300} style={{ borderRadius: 10 }} />
                        <a href='https://lampung.antaranews.com/berita/645689/bi-lampung-sebut-inflasi-juli-capai-073-persen' style={{ textDecoration: 'none' }}>  <Card.Text style={{ width: 280, fontSize: 14, fontWeight: '600' }}>BI Lampung sebut inflasi Juli capai 0,73 persen</Card.Text> </a>

                    </Card.Body>
                </Card>
                <br />
                <Card border="white" style={{ width: 300, marginLeft: -5, marginRight: -5 }}>

                    <Card.Body style={{ alignItems: 'center' }}>
                        <img
                            alt="thumbnail"
                            src='https://gambar.lampung.co/2022/01/Atlet-Panjat-Tebing.jpg' width={300} style={{ borderRadius: 10 }} />
                        <a href='https://www.lampung.co/berita/fasilitas-tak-memadai-atlet-panjat-tebing-lampura-latihan-di-bandar-lampung/' style={{ textDecoration: 'none' }}> <Card.Text style={{ width: 280, fontSize: 14, fontWeight: '600' }}>Tak Ada Fasilitas, Atlet Panjat Tebing Lampura Latihan di Bandar Lampung</Card.Text> </a>

                    </Card.Body>
                </Card>
                <br />
                <Card border="white" style={{ width: 300, marginLeft: -5, marginRight: -5 }}>

                    <Card.Body style={{ alignItems: 'center' }}>
                        <img
                            alt="thumbnail"
                            src='https://img.antaranews.com/cache/800x533/2022/05/21/IMG-20220521-WA0011.jpg.webp' width={300} style={{ borderRadius: 10 }} />
                        <a href='https://lampung.antaranews.com/berita/645581/pemerintah-diminta-respons-cepat-maraknya-situs-judi-online' style={{ textDecoration: 'none' }}>  <Card.Text style={{ width: 280, fontSize: 14, fontWeight: '600' }}>Pemerintah diminta respons cepat maraknya situs judi online</Card.Text> </a>

                    </Card.Body>
                </Card>
                <br />




            </div >

        </div>
    );
}
