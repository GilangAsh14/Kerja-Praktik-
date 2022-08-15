import React from 'react'
import { Card } from "react-bootstrap";
function NewsFeed() {
    return (
        <div >
            <h5 style={styles.aha}>NewsFeed</h5>
            <Card style={{ padding: 15, borderWidth: 1, marginBottom: 30, marginLeft: 50, marginRight: 50, boxShadow: '1px 2px 5px gray', }}>
                <div style={{ marginLeft: 30, marginRight: 30, display: 'flex', flexDirection: 'row', }} >
                    <img alt="thumbnail"
                        src='https://akcdn.detik.net.id/community/media/visual/2022/05/19/kapasitas-penumpang-krl-kini-jadi-80-persen-2_169.jpeg?w=700&q=90'
                        style={{ borderRadius: 15, maxWidth: 300 }} />
                    <div>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 16, fontFamily: 'poppins', padding: 10, borderRadius: 10, color: '#2e2e2e' }}>Syarat Naik KRL Terbaru Wajib Booster? Cek Aturan Lengkapnya di Sini!</p>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 14, padding: 10, borderRadius: 10, color: '#2e2e2e' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>12 Juli 2022, 09.37 WIB</p>
                            <a href="detail" style={{ textDecoration: 'none' }}>Baca Selengkapnya >></a>
                        </div>
                    </div>
                </div>
            </Card >

            <Card style={{ padding: 15, borderWidth: 1, marginBottom: 30, marginLeft: 50, marginRight: 50, boxShadow: '1px 2px 5px gray', }}>
                <div style={{ marginLeft: 30, marginRight: 30, display: 'flex', flexDirection: 'row', }} >
                    <img alt="thumbnail"
                        src='https://img.antaranews.com/cache/800x533/2022/08/02/IMG_20220708_103057_1.jpg.webp'
                        style={{ borderRadius: 15, maxWidth: 300 }} />
                    <div>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 16, fontFamily: 'poppins', padding: 10, borderRadius: 10, color: '#2e2e2e' }}>BI Lampung sebut inflasi Juli capai 0,73 persen</p>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 14, padding: 10, borderRadius: 10, color: '#2e2e2e' }}>Bandarlampung (ANTARA) - Perwakilan Bank Indonesia (BI) Provinsi Lampung  mengatakan bahwa tingkat inflasi di daerahnya pada Juli sebesar 0,73 persen atau lebih rendah dari bulan sebelumnya. </p>
                        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>Rabu, 3 Agustus 2022 9:03 WIB</p>
                            <a href="https://lampung.antaranews.com/berita/645689/bi-lampung-sebut-inflasi-juli-capai-073-persen" style={{ textDecoration: 'none' }}>Baca Selengkapnya >></a>
                        </div>
                    </div>
                </div>
            </Card >

            <Card style={{ padding: 15, borderWidth: 1, marginBottom: 30, marginLeft: 50, marginRight: 50, boxShadow: '1px 2px 5px gray', }}>
                <div style={{ marginLeft: 30, marginRight: 30, display: 'flex', flexDirection: 'row', }} >
                    <img alt="thumbnail"
                        src='https://gambar.lampung.co/2022/01/Atlet-Panjat-Tebing.jpg'
                        style={{ borderRadius: 15, maxWidth: 300 }} />
                    <div>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 16, fontFamily: 'poppins', padding: 10, borderRadius: 10, color: '#2e2e2e' }}>Tak Ada Fasilitas, Atlet Panjat Tebing Lampura Latihan di Bandar Lampung</p>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 14, padding: 10, borderRadius: 10, color: '#2e2e2e' }}>elang Pekan Olahraga Provinsi (Porprov) Lampung IX Tahun 2022 yang akan di gelar November mendatang tentunya menumbuhkan semangat para atlet seluruh cabang olahraga se-provinsi Lampung mempersiapkan diri untuk mengikuti perhelatan olahraga tersebut.</p>
                        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>17 Januari, 2022</p>
                            <a href="https://www.lampung.co/berita/fasilitas-tak-memadai-atlet-panjat-tebing-lampura-latihan-di-bandar-lampung/" style={{ textDecoration: 'none' }}>Baca Selengkapnya >></a>
                        </div>
                    </div>
                </div>
            </Card >

            <Card style={{ padding: 15, borderWidth: 1, marginBottom: 30, marginLeft: 50, marginRight: 50, boxShadow: '1px 2px 5px gray', }}>
                <div style={{ marginLeft: 30, marginRight: 30, display: 'flex', flexDirection: 'row', }} >
                    <img alt="thumbnail"
                        src='https://img.antaranews.com/cache/800x533/2022/05/21/IMG-20220521-WA0011.jpg.webp'
                        style={{ borderRadius: 15, maxWidth: 300 }} />
                    <div>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 16, fontFamily: 'poppins', padding: 10, borderRadius: 10, color: '#2e2e2e' }}>Pemerintah diminta respons cepat maraknya situs judi online</p>
                        <p style={{ marginLeft: 10, width: '100%', fontSize: 14, padding: 10, borderRadius: 10, color: '#2e2e2e' }}>Ketua MPR RI Bambang Soesatyo meminta kepada Pemerintah untuk segera merespons kritik dari publik terkait dengan maraknya situs atau aplikasi terindikasi judi online yang masih bisa diakses di tengah hiruk-pikuk pemblokiran penyelenggara sistem elektronik (PSE).
</p>
                        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <p>2 Agustus 2022 14:44 WIB</p>
                            <a href="https://lampung.antaranews.com/berita/645581/pemerintah-diminta-respons-cepat-maraknya-situs-judi-online" style={{ textDecoration: 'none' }}>Baca Selengkapnya >></a>
                        </div>
                    </div>
                </div>
            </Card >


        </div >
    )
}

export default NewsFeed

const styles = ({
    aha: {
        color: '#21409a', marginLeft: 50
    }
})