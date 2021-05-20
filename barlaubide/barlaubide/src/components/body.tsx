import { connect } from "react-redux";
import { Component, Fragment } from "react";
import Tiles from "./body/cards/tiles";
import Esps from "./body/especialidades/esps";
import Menu from "./body/menu/menu";
import Mapa from './body/mapa/mapa'
import { getSection } from '../redux/actions';

class Body extends Component<any>{


    render() {
        const {
            getSection,
            section
        } = this.props;

        var toShow = <></>

        switch (section) {
            case 0:
                toShow = <Fragment>
                    <Tiles />
                    <Esps />
                </Fragment>
                break;
            case 1:
                toShow = <Menu />
                break;
            case 2:
                toShow = <Mapa />
                break;
            default:
                toShow = <Fragment>
                    <Tiles />
                    <Esps />
                </Fragment>
                break;
        }

        return (
            <>
                { toShow}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        section: state.section,
    };
};

const mapDispatchToProps = {
    getSection
};


export default connect(mapStateToProps, mapDispatchToProps)(Body);