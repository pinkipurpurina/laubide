import { Component} from "react"
import { Container, Row, Col, } from 'react-bootstrap/'
import './tile.css';
import MyVerticallyCenteredModal from './modal/modal'


class Tiles extends Component<any>{

    render() {
       
        return (

            <Container className='tilescontainer' id='tiles'>
                <Row>
                    <Col sm><div className='tile nd1'>
                        <p className="titleHead">Fiestas de cumpleaños</p>
                        <p className="titleContent">Celebralos con nosotros</p>
                        <div className="titleButton">
                        <MyVerticallyCenteredModal/>
                        </div>
                    </div>
                    </Col>
                    <Col sm><div className='tile nd2'>
                        <p className="titleHead">Pedidos online</p>
                        <p className="titleContent">Servicio a domicilio</p>
                        <div className="titleButton">
                        <MyVerticallyCenteredModal/>
                        </div>
                    </div></Col>
                    <Col sm><div className='tile nd3'>
                        <p className="titleHead">Prueba de contenido</p>
                        <p className="titleContent">Prueba de contenido</p>
                        <div className="titleButton">
                            <MyVerticallyCenteredModal/>
                        </div>
                      
                    </div></Col>
                </Row>
            </Container>
        )
    }

}
export default Tiles;