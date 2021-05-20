import './brand.css';
import logo from '../../../Assests/icons/logo/logo.png';

const brand = (props: { show: any; }) => {
    let vclass = " ";
    if (props.show) {
        vclass = "show";
    }

    if (props.show) {
        vclass = "show";
    }
    let all_class = ["brand"];
    all_class.push(vclass);
    return (
        <div className={all_class.join(" ")}>
            
            <div className="text">
                <p className="brandnum">4</p>
                <p className="name">Bide</p>
            </div>
            <div className="image-container">
                <img src={logo} alt="Logo" />
                <p className="lastTitle">Gastrobar</p>
            </div>   
        </div>

    );
}

export default brand;