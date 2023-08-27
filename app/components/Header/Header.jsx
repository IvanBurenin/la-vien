'use client'

import { useState } from 'react'
import Link from 'next/link'

import styles from './Header.module.css'
import mainStyles from '../../main.module.css'

export default function Header() {
    const [menu, setMenu] = useState(false)

    const onClickBtn = () => {
        setMenu(!menu)
    }

    return(
        <header className={styles.header}>
            <div className={mainStyles.container}>
                <nav className={`${styles.nav} ${menu ? styles.menuActive : ''}`}>
                    <button onClick={onClickBtn} className={styles.menuBtn}>
                        <span className={styles.btnLine}></span>
                        <span className={styles.btnLine}></span>
                        <span className={styles.btnLine}></span>
                    </button>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem}>
                            <Link onClick={onClickBtn} href='/'>
                                Главная
                            </Link>       
                        </li>
                        <li className={styles.menuItem}>
                            <Link onClick={onClickBtn} href='/contacts'>
                                Контакты
                            </Link>       
                        </li>
                        <li className={styles.menuItem}>
                            <Link onClick={onClickBtn} href='/about'>
                                О нас
                            </Link>       
                        </li>
                        <li className={styles.menuItem}>
                            <Link onClick={onClickBtn} href='/menu'>
                                Меню
                            </Link>       
                        </li>
                        <li className={styles.menuItem}>
                            <Link onClick={onClickBtn} href='/gallery'>
                                Фото
                            </Link>       
                        </li>
                        <Link onClick={onClickBtn} className={styles.btnLink} href='/booking'>
                            <button className={`${mainStyles.btn} ${styles.headerBtn} ${styles.btnAdaptive}`}>Забронировать</button>
                        </Link>
                    </ul>
                    <p className={styles.logo}>La Vien</p>
                    <div className={styles.right}>
                        <div className={styles.contacts}>
                            <Link href='tel: 78885553535'>
                                <p className={styles.contact}>Связаться с нами</p>
                                <p className={styles.contact}>+7 888 555 35 35</p>
                                <div className={styles.phone}>
                                    <svg className={styles.phoneIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M17.2282 12.3335L12.8897 10.3892C12.6932 10.305 12.4787 10.2711 12.2657 10.2907C12.0528 10.3102 11.848 10.3826 11.6701 10.5012C11.652 10.5128 11.6348 10.5257 11.6187 10.5398L9.35114 12.4685C9.32762 12.4813 9.30142 12.4885 9.27465 12.4894C9.24787 12.4904 9.22123 12.4851 9.19685 12.474C7.73935 11.7705 6.22951 10.2698 5.52326 8.83251C5.5115 8.8085 5.50538 8.78211 5.50538 8.75537C5.50538 8.72863 5.5115 8.70224 5.52326 8.67822L7.45832 6.38222C7.47221 6.36523 7.48509 6.34745 7.49689 6.32895C7.61389 6.15033 7.68455 5.94538 7.70251 5.73261C7.72047 5.51984 7.68516 5.30594 7.59976 5.11024L5.66928 0.779057C5.55965 0.523383 5.37006 0.310161 5.12895 0.171393C4.88785 0.0326249 4.60824 -0.0242032 4.3321 0.00943748C3.13196 0.167216 2.03033 0.756591 1.23307 1.66743C0.435819 2.57826 -0.0025051 3.74823 1.07704e-05 4.9587C1.07704e-05 12.1498 5.85021 18 13.0413 18C14.2517 18.0023 15.4215 17.5639 16.3323 16.7667C17.2431 15.9695 17.8325 14.868 17.9905 13.6679C18.0241 13.393 17.968 13.1147 17.8307 12.8743C17.6933 12.6338 17.4821 12.4442 17.2282 12.3335ZM13.0413 16.8979C6.45819 16.8979 1.10209 11.5418 1.10209 4.9587C1.09902 4.01636 1.43914 3.10513 2.05892 2.39527C2.67869 1.68541 3.53571 1.22548 4.46985 1.10142H4.49098C4.52799 1.10211 4.56393 1.11396 4.59408 1.13543C4.62423 1.1569 4.6472 1.18698 4.65996 1.22173L6.59778 5.54831C6.60883 5.57237 6.61456 5.59853 6.61456 5.625C6.61456 5.65147 6.60883 5.67763 6.59778 5.70169L4.65905 8.0032C4.64458 8.01963 4.63138 8.03713 4.61955 8.05555C4.49824 8.24075 4.4268 8.45414 4.41216 8.67505C4.39752 8.89597 4.44017 9.11692 4.53598 9.31651C5.3506 10.9843 7.03127 12.6521 8.71745 13.4668C8.91821 13.562 9.14023 13.6037 9.36187 13.5876C9.58351 13.5715 9.79719 13.4982 9.98208 13.3749C9.99953 13.363 10.017 13.3501 10.0335 13.3364L12.3001 11.4077C12.3225 11.3957 12.3472 11.3886 12.3726 11.387C12.3979 11.3855 12.4234 11.3894 12.4471 11.3985L16.7865 13.3428C16.8219 13.3579 16.8517 13.3837 16.8717 13.4167C16.8916 13.4497 16.9007 13.4881 16.8976 13.5265C16.7742 14.461 16.3147 15.3187 15.605 15.9392C14.8953 16.5596 13.9839 16.9004 13.0413 16.8979Z" fill="#FFF3E4"/>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <Link href='/booking'>
                            <button className={`${mainStyles.btn} ${styles.headerBtn}`}>Забронировать</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}