import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateSelector.module.css';

function DateSelector({ selectedDate, handleDateChange }) {
    const [currentDate] = useState(new Date());

    useEffect(() => {
        if (!selectedDate) {
            handleDateChange(currentDate);
        }
    }, [currentDate, selectedDate, handleDateChange]);

    return (
        <div className={styles.date_picker}>
            <label htmlFor="data_corte">Data do corte</label>
            <DatePicker
                selected={selectedDate || currentDate}
                onChange={date => handleDateChange(date)}
                dateFormat="dd/MM/yyyy"
                className={styles.date_picker_input}
            />
        </div>
    );
}

export default DateSelector;