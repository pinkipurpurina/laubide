import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import Toolbar from './components/navbar';
import Header from './components/carousel/carousel';
import Tiles from './components/cards/tiles';
import Esps from './components/especialidades/esps';
import ScrollArrow from './components/scrollbutton';
import Footer from './components/footer/footer';
import Body from './components/body';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
           <Header /> 
           <Body />
           <Footer/>
           <ScrollArrow />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
