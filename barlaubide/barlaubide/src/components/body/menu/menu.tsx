import { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from 'react-bootstrap';
import MenuItem from './menu-item';
import { getPlatos } from '../../../redux/actions';
import './menu.css';
import './botones.css';

class Menu extends Component<any>{
    recibir(numero: string) {
        const {
            getPlatos
        } = this.props;

        getPlatos(numero);
    }

    componentDidMount() {
        const {
            getPlatos
        } = this.props;

        getPlatos();
    }

    render() {
        const categorias = {
            Raciones: '1',
            Bocadillos: '2',
            Hamburguesas: '3',
            Pintxos: '4'
        }
        const {
            platos
        } = this.props;

        return (
            <>
                <Container className='filtros' id="menu">

                    {
                        Object.entries(categorias)
                            .map(([key, value]) => <button className='button type3'  key={key} onClick={() => this.recibir(value)}>{key}</button>)
                    }
                </Container>
                <Container className='flex-container' >

                    {platos.map(item => (
                        <MenuItem menuItem={item} key={item.id} />
                    ))}
                </Container>
            </>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        platos: state.platos,
    };
};

const mapDispatchToProps = {
    getPlatos
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);