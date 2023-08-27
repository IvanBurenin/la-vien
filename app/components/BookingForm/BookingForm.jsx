'use client'

import { useState } from 'react'
import Link from 'next/link'

import TimeData from '../../database/TimeData'

import styles from '../../booking/page.module.css'
import mainStyles from '../../main.module.css'

export default function BookingForm() {
    const [personinput, setPersonInput] = useState(1)
    const [phoneInput, setPhoneInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [timeInput, setTimeInput] = useState('')
    const [timeBox, setTimeBox] = useState(false)
    const [modalOpened, setModalOpened] = useState(false)

    const onClickInputUp = () => {
        const newValue = Number(personinput) + 1;
    
        if (newValue <= 8) {
            setPersonInput(newValue);
        }
    };

    const onClickInputDown = () => {
        const newValue = Number(personinput) - 1;
    
        if (newValue >= 1) {
            setPersonInput(newValue);
        }
    }

    const onChangePhone = (event) => {
        const value = event.target.value.replace(/[^\d+]/g, '')
        setPhoneInput(value);
    }

    const onChangeName = (event) => {
        const value = event.target.value.replace(/[^A-Za-zА-Яа-я\s]/g, '');
        setNameInput(value)
    }

    const onClickTime = (time) => {
        setTimeInput(time.time)
        setTimeBox(!timeBox)
    }

    const onClickTimeBox = () => {
        setTimeBox(!timeBox)
    }

    const onClickButton = () => {
        if (phoneInput == '' || nameInput == '' || timeInput == '') {
            alert('Введите данные')
        } else{
            setModalOpened(true)
        }
    }

    const closeModal = () => {
        setModalOpened(false)
        setPersonInput(1)
        setPhoneInput('')
        setNameInput('')
        setTimeInput('')
    }

    return(
        <>
                <div className={`${styles.modal} ${modalOpened ? styles.modalOpened : ''}`}>
                    <div className={styles.modalDialog}>
                        <div className={styles.modalContent}>
                            <div className={styles.modalInner}>
                                <h1 className={`${mainStyles.title} ${styles.modalText}`}>Добро пожаловать</h1>
                                <h3 className={`${mainStyles.text} ${styles.modalText}`}>Мы желаем Вам прятного времяпровождения в нашем ресторане La Vien</h3>
                                <button onClick={closeModal} className={mainStyles.btn}>Вернуться</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            <form className={`${styles.content} ${styles.noSelect}`}>
                <div className={styles.contentItem}>
                    <p className={styles.text}>Дата*</p>
                    <input type="date" className={styles.input} placeholder='Введите'/>    
                </div>
                <div className={styles.contentItem}>
                    <p className={styles.text}>Время*</p>
                    <input type="text" onClick={onClickTimeBox} className={styles.input} placeholder='Нажмите' value={timeInput} onChange={setTimeInput} readOnly/>
                    <ul className={`${styles.timeContent} ${timeBox ? styles.timeContentActive : ''}`}>
                        {TimeData.map((time, index)=>
                            <li onClick={() => onClickTime(time)} key={index} className={styles.text}>{time.time}</li>
                        )}
                    </ul>
                </div>            
                <div className={styles.contentItem}>
                    <p className={styles.text}>Кол-во персон*</p>
                    <input type="text" className={styles.input} placeholder='Нажмите' value={personinput} onChange={setPersonInput} readOnly/>
                    <div className={styles.inputButtons}>
                        <svg onClick={onClickInputUp} className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 15 13" fill="none">
                            <path d="M1.00481 12.25L7.5 1L13.9952 12.25H1.00481Z" stroke="black"/>
                        </svg>
                        <svg onClick={onClickInputDown} className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 15 13" fill="none">
                            <path d="M13.9952 0.75L7.5 12L1.00481 0.749999L13.9952 0.75Z" stroke="black"/>
                        </svg>    
                    </div> 
                </div>     
                <div className={styles.contentItem}>
                    <p className={styles.text}>Номер телефона*</p>
                    <input type="text" className={styles.input} placeholder='Введите' value={phoneInput} onChange={onChangePhone}/>    
                </div>
                <div className={styles.contentItem}>
                    <p className={styles.text}>Имя*</p>
                    <input type="text" className={`${styles.input} ${styles.nameInput}`} placeholder='Введите' value={nameInput} onChange={onChangeName}/>    
                </div>
                <div className={`${styles.contentItem} ${styles.textareaContent}`}>
                    <p className={styles.text}>Особые пожелания</p>
                    <textarea className={styles.textarea}></textarea>
                </div>
                <div className={styles.contentDown}>
                    <button onClick={onClickButton} className={`${mainStyles.btn} ${styles.formBtn}`} type='button'>ЗАБРОНИРОВАТЬ</button>
                    <Link href='tel: 78885553535'>
                        <p className={`${styles.text} ${styles.number}`}>
                            *если возникли вопросы: +7 888 555 35 35
                        </p>
                    </Link>
                </div>
            </form>
        </>
    )
}