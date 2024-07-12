import React from 'react';
import CriarContaForm from "../formularios/CriarContaForm";
import styles from './Login.module.css';
import LinkButton from '../layout/LinkButton';
import LinkPalavra from '../layout/LinkPalavra';


function CriarConta() {
    return (
        <div className={styles.novo_login}>
            <CriarContaForm to="/Home" />
            <LinkButton text="Concluir" to="/" />
            <LinkPalavra text="Voltar" to="/" />
        </div>
    );
}

export default CriarConta