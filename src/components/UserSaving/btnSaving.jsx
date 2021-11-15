import React from 'react';
import styles from './saving.module.css';
import btnSaving from '../../assets/Image/Piggy bank-amico.png';

export function ButtonSaving() {
    return (
        <div className={styles.btn}>
            <figure className={styles.btnSaving}> 
                <img src={btnSaving} alt="Button Saving" />
            </figure>
            <button className={styles.savingMoney}> saving money </button>
        </div>
    );
}

