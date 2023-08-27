import Link from 'next/link'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Связаться с нами',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Contacts() {
    return(
        <section className={styles.contacts}>
            <div className={mainStyles.container}>
                <h3 className={mainStyles.title}>Контакты</h3>
                <div className={styles.contactsInner}>
                    <div className={`${mainStyles.left} ${styles.leftAdaptive}`}>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.4287126771646!2d37.63278345195857!3d55.73691213968965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ae2a4b6c109%3A0x3eca8ce5bc25a05a!2z0YPQuy4g0JHQsNGF0YDRg9GI0LjQvdCwLCAyINGB0YLRgNC-0LXQvdC40LUgMSwg0JzQvtGB0LrQstCwLCAxMTUxODQ!5e0!3m2!1sru!2sru!4v1691855325425!5m2!1sru!2sru" width={"470"} height={"550"} style={{border:'0'}} loading={"lazy"}></iframe>       
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p className={mainStyles.text}>
                            Наши двери открыты для вас с понедельника по воскресенье, с 12:00 до 24:00. Рады предоставить вам лучший сервис, чтобы каждое ваше посещение было особенным.
                        </p>
                        <ul className={styles.contactsList}>
                                <li className={styles.contact}>
                                    <Link href='tel: 78885553535'>
                                        <img src="./la-vien/home-images/contact-phone.svg"  className={styles.contactIcon} alt="" />
                                        <p className={`${mainStyles.text} ${styles.contactText}`}>+7 888 555 35 35</p>                    
                                    </Link>
                                </li>
                                <li className={styles.contact}>
                                    <Link href='mailto: lavien@gmail.com'>
                                        <img src="./la-vien/home-images/contact-mail.svg" className={styles.contactIcon} alt="" />
                                        <p className={`${mainStyles.text} ${styles.contactText}`}>lavien@gmail.com</p>                    
                                    </Link>
                                </li>
                                <li className={styles.contact}>
                                    <Link href='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%91%D0%B0%D1%85%D1%80%D1%83%D1%88%D0%B8%D0%BD%D0%B0,+2+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+115184/@55.7368918,37.6327564,18.25z/data=!4m9!1m2!2m1!1z0JzQvtGB0LrQstCwLCDQn9C10YfQsNGC0L3QuNC60L7QsiDQv9C10YDQtdC60YDQtdGB0YLQvtC6LCAxNUE!3m5!1s0x46b54ae2a4b6c109:0x3eca8ce5bc25a05a!8m2!3d55.7369425!4d37.6338904!16s%2Fg%2F11rp3ckkj7?entry=ttu' target='a_blank'>
                                        <img src="./la-vien/home-images/contact-map.svg" className={styles.contactIcon}  alt="" />
                                        <p className={`${mainStyles.text} ${styles.contactText}`}>ул. Бахрушина, 2 строение 1, Москва </p>                    
                                    </Link>
                                </li>
                        </ul>
                        <p className={mainStyles.text}>
                            Следите за нами в социальных сетях, чтобы быть в курсе всех новостей и акций ресторана. Присоединяйтесь к нашему сообществу, где мы делимся интересными историями о французской кухне и рассказываем о наших мероприятиях.
                        </p>
                        <p className={mainStyles.text}>
                            Мы ценим каждого нашего гостя и готовы предоставить ответы на все ваши вопросы. Свяжитесь с нами через форму обратной связи на сайте, и мы обязательно ответим вам.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}