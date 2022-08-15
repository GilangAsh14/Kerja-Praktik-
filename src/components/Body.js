import React from 'react'
import { Card } from "react-bootstrap";
function Body() {
    return (
        <div>
            <div className="row" style={{ marginLeft: 30, marginRight: 30, justifyContent: 'space-arround', }}>
                <Card border="white" style={{ width: 800, marginLeft: -5, marginRight: -5 }}>

                    <Card.Body style={{ alignItems: 'center' }}>
                        <img alt="thumbnail"
                            src='https://akcdn.detik.net.id/community/media/visual/2022/05/19/kapasitas-penumpang-krl-kini-jadi-80-persen-2_169.jpeg?w=700&q=90'
                            width={'100%'} style={{ borderRadius: 10 }} />
                        <a href='detail'> <Card.Text style={{ width: '100%', fontSize: 14, fontWeight: '600', backgroundColor: '#21409a', padding: 10, borderRadius: 10, color: 'white' }}>Syarat Naik KRL Terbaru Wajib Booster? Cek Aturan Lengkapnya di Sini!</Card.Text>
                        </a>

                    </Card.Body>
                </Card>
                <br />
                <Card border="white" style={{ marginLeft: -5, marginRight: -5, width: 500, justifyContent: 'space-between', }}>

                    <Card.Body style={{ fontFamily: 'poppins' }}>
                        <hr></hr>
                        <h5 style={{ color: '#21409a', textAlign: 'center' }}>Perkembangan Virus Corona</h5>
                        <hr></hr>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <div>
                                <br></br>
                                <p style={{ color: '#2e2e2e' }}>Kasus Positif</p>
                                <p style={{ color: '#2e2e2e' }}>Meninggal Dunia</p>
                                <p style={{ color: '#2e2e2e' }}>Sembuh</p>
                            </div>
                            <div>
                                <span style={{ marginTop: -70 }}>Indonesia</span>
                                <p style={{ color: '#ff7f0e' }}>6,111,305</p>
                                <p style={{ color: '#d62728' }}>156,791</p>
                                <p style={{ color: '#35a435' }}>5,933,979</p>
                            </div>
                            <div>
                                <span>Seluruh Dunia</span>
                                <p style={{ color: '#ff7f0e' }}>560,387,014</p>
                                <p style={{ color: '#d62728' }}>6,372,616</p>
                                <p style={{ color: '#35a435' }}>533,357,493</p>
                            </div>


                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Body