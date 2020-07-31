import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/images/Logo.png';
// import Logo from '../../assets/images/youFlix_Logo.png';
// import Logo from '../../assets/images/youFlix_Logo3.png';
import Logo from '../../assets/images/yFlix_Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu(){
    return (
        <nav className="Menu">

            <Link to="/">
                <img className="Logo" src={Logo} alt="YouFlix"/>
            </Link>

            <Button as={ Link } className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu