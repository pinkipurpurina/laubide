import { Component } from "react"
import { connect } from "react-redux"
import { Nav, Navbar } from 'react-bootstrap'
import { FaHome, FaHamburger,FaMapSigns } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { setSection } from '../../../redux/actions'
import logo from '../../../Assests/icons/logo/logo.png';
import './navbar.css'

class Toolbar extends Component<any>{

    seccion(params: number) {
        const {
            setSection,
        } = this.props;

        setSection(params)
    }
    render() {

        return (
            <Navbar bg="light" expand="lg" id='nav' >
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <Navbar.Brand href="#"><p>LAU-BIDE</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#tiles" className='toolbar' onClick={() => this.seccion(0)}>
                            <FaHome className='icon' />
                            <p>Home</p>
                        </Nav.Link>
                        <Nav.Link href="#menu" className='toolbar' onClick={() => this.seccion(1)}>
                            <FaHamburger className='icon' />
                            <p>Menu</p>
                        </Nav.Link>
                        <Nav.Link href="#mapa" className='toolbar' onClick={() => this.seccion(2)}>
                            <FaMapSigns className='icon' />
                            <p>Ubicación</p>
                        </Nav.Link>
                        <Nav.Link href='tel:943537728' className='toolbar'>
                            <ImPhone className='icon' />
                            <p>Llamar</p>
                        </Nav.Link>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        section: state.section,
    };
};

const mapDispatchToProps = {
    setSection
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);