import styles from './Home.module.css'
import homem from '../../img/homem.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Culture</span></h1>
            <p>Agende seu Corte de Cabelo com a gente</p>
            <LinkButton to="/Agendar" text="Agendar"/>
            <img src={homem} alt='Culture'></img>
        </section>
    )
}

export default Home