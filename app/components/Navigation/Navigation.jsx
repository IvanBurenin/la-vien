'use client'

import { useState } from 'react'
import Link from 'next/link'

import styles from '../Header/Header.module.css'
import mainStyles from '../../main.module.css'

export default function Navigation() {
    const [menu, setMenu] = useState(false)

    const onClickBtn = () => {
        setMenu(!menu)
    }

    return(
        <>
            <button onClick={onClickBtn} className={styles.menuBtn}>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
                <span className={styles.btnLine}></span>
            </button>
            <ul className={`${styles.menu} ${menu ? styles.menuActive : ''}`}>
                <li className={styles.menuItem}>
                    <Link href='/'>
                        Главная
                    </Link>       
                </li>
                <li className={styles.menuItem}>
                    <Link href='/contacts'>
                        Контакты
                    </Link>       
                </li>
                <li className={styles.menuItem}>
                    <Link href='/about'>
                        О нас
                    </Link>       
                </li>
                <li className={styles.menuItem}>
                    <Link href='/menu'>
                        Меню
                    </Link>       
                </li>
                <li className={styles.menuItem}>
                    <Link href='/gallery'>
                        Фото
                    </Link>       
                </li>
                <Link className={styles.btnLink} href='/booking'>
                    <button className={`${mainStyles.btn} ${styles.headerBtn} ${styles.btnAdaptive}`}>Забронировать</button>
                </Link>
            </ul>
        </>
    )
}