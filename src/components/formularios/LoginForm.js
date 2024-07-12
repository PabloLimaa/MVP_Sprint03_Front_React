import Input from '../form/Input';
import styles from './LoginForm.module.css';


function LoginForm({ to, text }) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Email cliente" name="email" placeholder="E-mail" />
            <Input type="Password" text="senha" name="senha" placeholder="Senha" />
            
        </form>
    );
}

export default LoginForm;