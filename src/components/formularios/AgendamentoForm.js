import { useEffect, useState } from 'react';
import BotaoAgendar from '../form/BotaoAgendar';
import Input from '../form/Input';
import Select from '../form/Select';
import DateSelector from '../form/DateSelector';
import styles from './AgendamentoForm.module.css';

function AgendamentoForm({ handleSubmit, btnText, agendamentoData }) {
    const [Corte_options, SetCorte_options] = useState([]);
    const [Barbeiro_options, SetBarbeiro_options] = useState([]);

    const [agendamento, setagendamento] = useState(agendamentoData || {})

    //Get para pegar os tipos de cortes do bd______________________________________
    useEffect(() => {
        fetch("http://localhost:5000/Corte_options", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                SetCorte_options(data);
            })
            .catch(err => console.log(err));
    }, []);

    //Get para pegar a lista de nome dos barbeiros do bd______________________________________
    useEffect(() => {
        fetch("http://localhost:5000/Barbeiro_options", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                SetBarbeiro_options(data);
            })
            .catch(err => console.log(err));
    }, []);

    //########### LISTA AGENDAMENTOS ###############################################

    const handleDateChange = (date) => {
        setagendamento({ ...agendamento, data_corte: date });
    };

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(agendamento)
    }

    function handleChange(e) {
        setagendamento({ ...agendamento, [e.target.name]: e.target.value })
        
    }

    function handleCorte_options(e) {
        setagendamento({ 
            ...agendamento, 
            Corte_options: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome do cliente" name="name" placeholder="Insira seu nome" handOnChange={handleChange} />
            <Select name="barbeiro_id" text="Selecione o barbeiro" options={Barbeiro_options} placeholder="Escolha seu barbeiro" handOnChange={handleCorte_options} value={agendamento.Barbeiro_options ? agendamento.Barbeiro_options.id : ''}/>
            <Select name="corte_id" text="Selecione seu corte" options={Corte_options} placeholder="Escolha seu corte" handOnChange={handleCorte_options} value={agendamento.Corte_options ? agendamento.Corte_options.id : ''}/>
            <DateSelector selectedDate={agendamento.data_corte} handleDateChange={handleDateChange} />
            <BotaoAgendar text={btnText} />
        </form>
    );
}

export default AgendamentoForm;