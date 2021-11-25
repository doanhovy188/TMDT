import React from 'react';
import styles from './interest.module.css';
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet"></link>;


export function InterestBox() {

    return (
        <div className={styles.container}>
            <h2 className={styles.topic}> Interest Rate (%/year) </h2>
            <table className={styles.tableInterest}>
                <tr>
                    <td>Term</td>
                    <td>1 m</td>
                    <td>2 m</td>
                    <td>3 m</td>
                    <td>6 m</td>
                    <td>9 m</td>
                    <td>12 m</td>
                    <td>24 m</td>
                    
                </tr>
                <tr>
                    <td>Maturity interest</td>
                    <td>3.5</td>
                    <td>3.6</td>
                    <td>3.7</td>
                    <td>5.1</td>
                    <td>5.5</td>
                    <td>5.8</td>
                    <td>6.1</td>
                </tr>
                <tr>
                    <td>Monthly interest</td>
                    <td> &nbsp; </td>
                    <td>3.4</td>
                    <td>3.5</td>
                    <td>4.9</td>
                    <td>5.3</td>
                    <td>5.6</td>
                    <td>5.9</td>
                </tr>
            </table>
            <p className={styles.nonTerm}> Non-term interest rate: 0.1%</p>
        </div>
    );
}
