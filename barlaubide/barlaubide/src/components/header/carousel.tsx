import { Component, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import Brand from './brand/brand'
import './carousel.css'
import Toolbar from './navbar/navbar';

class Header extends Component<any>{

    render() {
        return (
            <Carousel fade controls={false}>
                <Carousel.Item interval={8000}>
                    <div id='item1' >
                        <Toolbar />
                        <Brand show />
                    </div>
                   
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <div id='item2' >
                        <Toolbar />
                        <Brand show />
                    </div>
                   
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <div id='item3' >
                        <Toolbar />
                        <Brand show />
                    </div>
                   
                </Carousel.Item>
            </Carousel>
        )

    }
}
export default Header;