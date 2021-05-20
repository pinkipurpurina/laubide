import { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import './menu.css'

interface IMenuItem {
    id?: number;
    nombre?: string;
    imagen?: string;
    descripcion?: string;
    precio?: number;
    ingredientes?: string;
    categoria?: string;
    dieta_tipo?: string;
    etiquetas?: string;
}

interface Iitem {
    menuItem: IMenuItem
}

class MenuItem extends Component<Iitem>{

    render() {

        const {
            menuItem
        } = this.props;

        return (
            <Container className='flex-item'>
                <div className='card-item'>
                    <Row>
                        <Col ><h1>{menuItem.nombre}</h1></Col>
                    </Row>
                    <Row>
                        <Col >
                            <div className='box'>
                                <img className='imagen' src={menuItem.imagen} alt={menuItem.nombre}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col><p>{menuItem.descripcion}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col><h2>{menuItem.precio}€</h2>
                        </Col>
                    </Row>
                </div>
            </Container>

        )
    }
}
export default MenuItem;