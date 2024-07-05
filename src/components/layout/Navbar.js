import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo_marca_nav.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt='Logo'/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Login</Link></li>
                    <li className={styles.item}><Link to="/CriarConta">Criar Conta</Link></li>
                    <li className={styles.item}><Link to="/Home">Home</Link></li>
                    <li className={styles.item}><Link to="/Agendar">Agendar</Link></li>
                </ul>
                
            </Container>
        </nav>
    ) 
}

export default Navbar