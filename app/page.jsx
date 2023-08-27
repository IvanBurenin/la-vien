import Link from 'next/link'

import TopSlider from './components/TopSlider/TopSlider'
import PhotoGrid from './components/PhotoGrid/PhotoGrid'

import styles from './page.module.css'
import mainStyles from './main.module.css'

export const metadata = {
    title: 'Ресторан La Vien',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function LaVienHome() {
    return (
        <>
            <section className={styles.top}>
                    <div className={styles.topInner}>
                            <div className={styles.topLeft}>
                                <p className={styles.topTime}>
                                    ПН-ВС 12:00 - 24:00       
                                </p>
                                <h1 className={`${mainStyles.title} ${styles.topTitle}`}>
                                    Секреты французской кухни в сердце Москвы
                                </h1>
                                <h2 className={`${mainStyles.title} ${styles.topSubtitle}`}>
                                    Добро пожаловать в ресторан La Vien, где каждое блюдо - это искусство. Откройте для себя изысканные вкусы Франции в уютной атмосфере нашего ресторана.
                                </h2>
                                <div className={styles.buttons}>
                                    <Link href='/booking'>
                                        <button className={mainStyles.btn}>Забронировать</button>    
                                    </Link>
                                    <Link href='/menu'>
                                        <button className={mainStyles.btn}>Меню</button>
                                    </Link>       
                                </div>
                            </div>
                        <div className={styles.topRight}>
                            <TopSlider/>
                        </div>
                    </div>
            </section>

            <section className={styles.news}>
                <div className={mainStyles.container}>
                    <div className={styles.newsInner}>
                        <div className={mainStyles.left}>
                            <h3 className={mainStyles.title}>Новое в нашей коллекции</h3>
                        </div>
                        <div className={styles.newsRight}>
                            <div className={styles.newsItem}>
                                <img src="./la-vien/home-images/news-images/news-image1.jpg" alt="" className={styles.newsImg} />
                                <p className={`${mainStyles.text} ${styles.newsText}`}>Эскаргот в чесночном соусе</p> 
                            </div>
                            <div className={styles.newsItem}>
                                <img src="./la-vien/home-images/news-images/news-image2.jpg" alt="" className={styles.newsImg} />
                                <p className={`${mainStyles.text} ${styles.newsText}`}>Тыквенный рататуй</p> 
                            </div>
                            <div className={styles.newsItem}>
                                <img src="./la-vien/home-images/news-images/news-image3.jpg" alt="" className={styles.newsImg} />
                                <p className={`${mainStyles.text} ${styles.newsText}`}>Крем-брюле с клубникой</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={mainStyles.container}>
                    <div className={styles.aboutInner}>
                        <div className={mainStyles.left}>
                            <h3 className={mainStyles.title}>О нас</h3>    
                        </div>       
                        <div className={styles.aboutRight}>
                            <p className={styles.text}>
                                Наш ресторан существует с 2012 года и предлагает незабываемый кулинарный опыт, сочетая традиции французской кухни с оригинальными интерпретациями блюд. Каждый ингредиент – это мастерство, а каждое блюдо – произведение искусства. Позвольте нам порадовать вас неповторимой атмосферой, изысканными блюдами и внимательным обслуживанием. Вместе с нами погрузитесь в настоящий вкус Франции прямо здесь, в Москве. Добро пожаловать на наш стол!    
                            </p>       
                            <ul className={styles.contacts}>
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
                                        <p className={`${mainStyles.text} ${styles.contactText}`}>ул. Бахрушина, 2 строение 1, Москва</p>                    
                                    </Link>
                                </li>
                            </ul>
                            <p className={mainStyles.text}>
                                Мы всегда готовы ответить на ваши вопросы!
                            </p>
                        </div>
                    </div>
                </div>   
            </section>

            <section className={styles.menu}>
                <div className={mainStyles.container}>
                    <div className={styles.menuInner}>
                        <div className={mainStyles.left}>
                            <h3 className={mainStyles.title}>Меню</h3>
                        </div>
                        <div className={styles.menuRight}>
                            <p className={mainStyles.text}>
                                В нашем ресторане вы найдете изысканные закуски, такие как классический рататуй и французские сыры с деликатесами. Гурманы оценят наш ассортимент изысканных мясных и рыбных блюд, поданных с оригинальными соусами. Пасты и ризотто, неповторимые десерты и шедевры кондитерского искусства оставят незабываемые впечатления. Мы гордимся своими винными картами, предлагая вам лучшие французские вина, которые подчеркнут неповторимость каждого блюда. Насладитесь атмосферой подлинной Франции в Москве    
                            </p>
                            <div className={styles.menuButtons}>
                                <Link href='/menu'>
                                    <button className={mainStyles.btn}>Меню</button>    
                                </Link>
                                <Link href='/booking'>
                                    <button className={mainStyles.btn}>Забронировать</button>    
                                </Link>
                            </div> 
                        </div>       
                    </div>
                </div>
            </section>

            <section className={styles.photo}>
                <div className={mainStyles.container}>
                    <div className={styles.photoInner}>
                        <div className={mainStyles.left}>
                            <h3 className={mainStyles.title}>Фото</h3>
                        </div>
                        <div className={styles.photoRight}>
                            <PhotoGrid/>
                            <Link href='/gallery'>
                                <button className={mainStyles.btn}>Все фото</button>         
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}