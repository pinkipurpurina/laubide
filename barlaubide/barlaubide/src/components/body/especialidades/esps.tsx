import { Component, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap/';
import img1 from '../../../Assests/icons/icon_specs/basket.png'
import img2 from '../../../Assests/icons/icon_specs/clock.png';
import img3 from '../../../Assests/icons/icon_specs/hat.png';
import img4 from '../../../Assests/icons/icon_specs/leaf.png';
import './esps.css';
class Esps extends Component<any>{

    render() {
        return (
            <Container className='espscontainer'>
                <Row className='specs'>
                    <Col>
                        {/* <Spec src={basket} head="100% organic" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time." /> */}
                        <div className="spec">
                        <img  src={img1}/>
                            <p className="specHead">100% organic</p>
                            {/* <hr/> */}
                            <p className="specContent">Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time.</p>
                        </div>

                    </Col>
                    <Col>
                        {/* // <Spec src={clock} head="fast delivery" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time." /> */}
                        <div className="spec">
                            <img  src={img2}/>
                            <p className="specHead">100% organic</p>
                            {/* <hr/> */}
                            <p className="specContent">Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time.</p>
                        </div>

                    </Col>
                    <Col>
                        {/* //  <Spec src={leaf} head="cleanness" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time." /> */}
                        <div className="spec">
                        <img  src={img3}/>
                            <p className="specHead">100% organic</p>
                            {/* <hr/> */}
                            <p className="specContent">Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time.</p>
                        </div>

                    </Col>
                    <Col>
                        {/* // <Spec src={chef} head="Experienced Chef" content="Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time." /> */}
                        <div className="spec">
                            <img  src={img4}/>  
                            <p className="specHead">100% organic</p>
                            {/* <hr/> */}
                            <p className="specContent">Our chef start prepairing order as soon as you place it, while we keep engines hot for your delivery.Therefore we deliver food hot and at our fastest so you can enjoy every meal with your loved one on time.</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Esps;