import { useNavigate } from 'react-router-dom';
import Titulo from '../layout/Titulo';
import AgendamentoForm from '../formularios/AgendamentoForm';
import styles from './Agendar.module.css';

function Agendar() {

    const navigate = useNavigate()

    function createPost(agendamento) {

        // inicializar custo e serviço
        agendamento.cost = 0
        agendamento.services = []

        fetch("http://localhost:5000/Lista_agenda", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(agendamento),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                // redirect
                navigate('/Home', { message: 'Agendamento criado com sucesso!' });

            })
            .catch(err => console.log(err));
        }

    return (
        <div ClassName={styles.novo_agendamento_container}>
            <Titulo ClassName={styles.novo_agendamento_titulo} text={"Faça seu Agendamento"} />
            <AgendamentoForm handleSubmit={createPost} btnText="Agendar" />
        </div>
    );
}

export default Agendar;