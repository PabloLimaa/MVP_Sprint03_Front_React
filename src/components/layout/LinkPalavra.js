import { Link } from 'react-router-dom'
import styles from './LinkPalavra.module.css'

function LinkPalavra({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkPalavra