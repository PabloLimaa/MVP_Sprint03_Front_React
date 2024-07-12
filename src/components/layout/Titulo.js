import styles from './Titulo.module.css'

function Titulo({text}) {
    return (
        <div className={styles.titulo_container}>
            <h1>{text}</h1>
            <p className={styles.copy_right}><span>CutCulture</span> &copy; 2024</p>
        </div>
    )
}

export default Titulo