import React from 'react'
import FooterMain from '../components/FooterMain'
import NavbarBig from '../components/NavbarBig'

function DetailBerita() {
    return (
        <div>
            <NavbarBig />
            <div style={{ marginLeft: 50, marginLeft: 50, padding: 30 }}>
                <h2 style={{ fontFamily: 'poppins', color: '#1e66d4', textAlign: 'center' }}>Syarat Naik KRL Terbaru Wajib Booster? </h2>
                <hr></hr>
                <center>
                    <img alt="thumbnail"
                        className='img-fluid img-thumbnail rounded'
                        src='https://akcdn.detik.net.id/community/media/visual/2022/05/19/kapasitas-penumpang-krl-kini-jadi-80-persen-2_169.jpeg?w=700&q=90'
                        style={{ borderRadius: 10 }} />

                </center>
                <br></br>
                <u>Diterbitkan: 16 Juli 2022 20.00 WIB</u>
                <br></br>
                <br></br>
                <p style={{ textAlign: 'justify' }}> &emsp; &emsp;  Mulai 18 Mei 2022, kapasitas penumpang Commuter Line ditambah. Jika sebelumnya 60 persen kini menjadi 80 persen atau 130-135 penumpang per kereta.</p>
            </div>
            <FooterMain />
        </div>
    )
}

export default DetailBerita