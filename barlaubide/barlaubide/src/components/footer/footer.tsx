import  {Component}  from "react"
import { Container, Row, Col } from 'react-bootstrap'
import {FaSmileWink, AiFillInstagram, AiFillFacebook, FaWordpress, SiTwitter, AiOutlineGooglePlus, FaHeart } from 'react-icons/all'
import './footer.css'

class Footer extends Component<any>{

    render() {
        return (
            <footer className="footer">
                <Container >
                    <Row>
                        <Col sm={6}>
                            <div className="storage">

                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="storage2">
                                <a href="https://www.instagram.com/barlaubide/" ><AiFillInstagram className='icon'/></a>
                                <a href="https://www.facebook.com/Lau-Bide-Ama%C3%B1a-1983167781758056/" ><AiFillFacebook className='icon'/></a>
                                <a href="/" ><FaWordpress className='icon'/></a>
                                <a href="/" ><SiTwitter className='icon'/></a>
                                <a href="/" ><AiOutlineGooglePlus className='icon'/></a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="footer-text"><a href='tel:943537728'>Contacto: +34943537728</a><br /><a href='tel:943537728'>Pedidos: +34943537728</a> <br />
                        &copy; COPYRIGHT 2021 reserved by <b> Laura Fernández</b><br /><br />
                        Hecho con <FaHeart className='heart' /> por <p style={{ display: "inline", float: "none" }} >Laura Fernández Raya </p>
                        <p> Si quieres una página como ésta, ponte en contacto conmigo al 622727777 <FaSmileWink className='cara'/></p></span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;