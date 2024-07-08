import styles from './Select.modules.css'

function Select({text, name,options ,handOnChange , value}) {
    return (
        <div ClassName={styles.form_control}>
            <label htmlfor={name} >{text}:</label>
            <Select name={name} id={name}>
                <option>Selecione seu corte</option>
            </Select>
        </div>
    )
}

export default Select