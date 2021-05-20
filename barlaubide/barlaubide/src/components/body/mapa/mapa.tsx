import { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'

import './mapa.css'

class Mapa extends Component<any>{

    render() {
        return (
            <Container className='espscontainer' id='mapa'>
              <Row className='specs' >
              <h1 className='titulo'> Ven, visítanos y prueba nuestra carta.</h1>
                    <iframe width="100%" height="600"  scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=bar%20laubide,%20eibar+(Bar%20laubide)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
            
              </Row>
                   
            </Container>

        )
    }
}
export default Mapa;