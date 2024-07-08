import BotaoAgendar from '../form/BotaoAgendar'
import styles from './AgendamentoForm.module.css'


function AgendamentoForm({btnText}) {
    return (
        <form ClassName={styles.form}>
            <Input type="text" text="Nome do cliente" name="name" placeholder="Insira seu nome" />
            <Input type="number" text="CPF" name="cpf" placeholder="Insira seu CPF" />
            <Select name="corte_id" text="Selecione seu corte"/>
            
            <BotaoAgendar Text={btnText}/>
        </form>
    )
}

export default AgendamentoForm