import React from 'react';
import styles from './saving.module.css';
import avatar from '../../assets/Image/avatar1.png';

export function UserSavingBox() {

    return (
        <div className={styles.container}>
            <div className={styles.boxInfo}>
                <figure className={styles.avatar}> <img src={avatar} alt="Avatar" /> </figure>
                <h2 className={styles.topic}> Hi! Doan Ho Vi </h2>
                <button className={styles.savingList}> Savings Account List </button>
                <p className={styles.accountNumber}> Account Number: </p>
                <p className={styles.numberDetail}> 181810101180801 </p>
                <p className={styles.accountBalance}> Account Balance: </p>

            </div>
        </div>
    );
}

