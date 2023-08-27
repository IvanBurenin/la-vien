import Link from 'next/link'

import MenuData from '../database/MenuData'

import styles from '../menu/page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Меню La Vien',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Menu() {
    return(
        <section className={styles.menu}>
            <div className={mainStyles.container}>
                <div className={styles.menuInner}>
                    <div className={`${mainStyles.left} ${styles.menuLeft}`}>
                        <h3 className={mainStyles.title}>Меню</h3>
                        <ul className={styles.list}>
                            <p className={`${mainStyles.text} ${styles.listTitle}`}>Выберите:</p>
                            {MenuData.map((menu, index)=>
                                <li key={index} className={styles.listItem}>
                                    <Link href={`/menu/#${menu.group}`}>
                                        <button className={`${mainStyles.btn} ${styles.menuBtn}`}>{menu.group}</button>       
                                    </Link>    
                                </li>       
                            )}
                        </ul>
                    </div>
                    <div className={styles.content}>
                        {MenuData.map((menu, index) =>
                            <div key={index} className={styles.group} id={menu.group}>
                                <h2 className={styles.groupTitle}>{menu.group}</h2>
                                {menu.items.map((item, nestedIndex)=>
                                    <div key={nestedIndex} className={styles.groupItem}>
                                        <div className={styles.itemInner}>
                                            <img src={item.img} alt="" className={styles.itemImg} />
                                            <div className={styles.itemContent}>
                                                <p className={`${mainStyles.text} ${styles.text}`}>{item.title}</p>
                                                <div className={styles.features}>
                                                    <p className={styles.price}>{`${item.price} руб.`}</p>
                                                    <p className={styles.weight}>{`(${item.weight} гр.)`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}