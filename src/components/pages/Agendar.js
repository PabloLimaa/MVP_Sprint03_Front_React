import AgendamentoForm from '../agendamentos/AgendamentoForm'

import styles from './Agendamento.module.css'

function Agendar() {
    return (
        <div className={styles.novo_agendamento_container}>
            <h1>Agendar</h1>
            <p>Crie seu agendamento de forma rápida e fácil</p>
            <AgendamentoForm />
        </div>
    )
}

export default Agendar