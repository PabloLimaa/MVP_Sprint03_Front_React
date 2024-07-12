import React from 'react';
import LoginForm from "../formularios/LoginForm";
import styles from './Login.module.css';
import LinkButton from '../layout/LinkButton';
import LinkPalavra from '../layout/LinkPalavra';

function Login({ to, text }) {
    return (
        <div className={styles.novo_login}>
            <LoginForm to="/Home" />
            <LinkButton text="Entrar" to="/Home" />
            <LinkPalavra text="Criar Conta" to="/CriarConta" />
        </div>
    );
}

export default Login;