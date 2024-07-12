import styles from './Home.module.css'
// import homem from '../../img/homem.png'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>CutCulture</span></h1>
            <p>Destacando-se por suas características distintas, a CutCulture proporciona aos seus clientes a flexibilidade de agendar um horário ou ser atendido por ordem de chegada. Nossa busca é pela excelência, não apenas na qualidade dos cortes, mas também no respeito ao valioso tempo dos nossos clientes. O compromisso com o crescimento e valorização das pessoas representa um dos pilares fundamentais da barbearia. Nossa conduta foi cuidadosamente elaborado com o intuito de evidenciar os princípios que norteiam as iterações da nossa empresa com diversos públicos.</p>
            <p>Agende seu Corte com a gente</p>
            <LinkButton to="/Agendar" text="Agendar"/>
            {/* <img src={homem} alt='Cutculture'></img> */}
        </section>
    )
}

export default Home