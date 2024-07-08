import styles from '/.BotaoAgendar.module.css'

function BotaoAgendar({text}) {
    return (
        <div ClassName={styles.form_control}>
            <button className={Styles.btn}>{text}</button>
        </div>
    )
}

export default BotaoAgendar