import Input from '../form/Input';
import styles from './CriarContaForm.module.css';


function CriarContaForm({ to, text }) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Email cliente" name="email" placeholder="Insira seu Email" />
            <Input type="text" text="Email cliente" name="email" placeholder="Insira seu Nome" />
            <Input type="Password" text="senha" name="senha" placeholder="Insira sua senha" />
            <Input type="Password" text="senha" name="senha" placeholder="Confirmar senha" />
            
        </form>
    );
}

export default CriarContaForm;