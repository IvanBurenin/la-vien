import Faq from '../components/Faq/Faq'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'О La Vien',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function About() {
    return(
        <>
            <section className={styles.about}>
                <div className={mainStyles.container}>
                    <h3 className={mainStyles.title}>О нас</h3>
                    <div className={styles.aboutInner}>
                        <img src="/la-vien/about-image/about-image1.jpg" alt="" className={styles.aboutImg} />
                        <div className={styles.aboutContent}>
                            <p className={mainStyles.text}>
                                Наш ресторан зародился из страсти к французской культуре и изысканной кухне. Открыв двери в 2010 году, мы с самого начала ставили своей миссией подарить нашим гостям уникальный кулинарный опыт, привнося в Московскую атмосферу неповторимый дух Парижа.
                            </p>
                            <p className={mainStyles.text}>
                                Каждое блюдо, созданное нашими талантливыми шеф-поварами, отражает традиции и наследие французской кухни, но при этом мы стараемся придавать им собственный уникальный штрих, чтобы удивить и порадовать наших гостей.
                            </p>
                            <p className={mainStyles.text}>
                                La Vien – это не только вкусная еда, но и атмосфера тепла и уюта, истинного искусства приготовления блюд и прекрасного обслуживания. У нас вы найдете уютный интерьер, созданный с любовью к деталям, и внимание к каждому посетителю.
                            </p>
                            <p className={mainStyles.text}>
                                Мы гордимся своей историей и благодарим каждого, кто был с нами на этом увлекательном пути. Мы всегда рады видеть новых и постоянных гостей, которые разделяют нашу страсть к французской кухне. Приходите и окунитесь в настоящий вкус Франции в нашем ресторане!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.faq}>
                <div className={mainStyles.container}>
                    <div className={styles.faqInner}>
                        <div className={mainStyles.left}>
                            <h3 className={mainStyles.title}>Ответы на вопросы</h3>
                        </div>
                        <div className={styles.faqContent}>
                            <Faq/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}