import BookingForm from '../components/BookingForm/BookingForm'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export default function Booking() {
    return(
        <section className={styles.booking}>
            <div className={mainStyles.container}>
                <div className={styles.bookingInner}>
                    <div className={styles.left}>
                        <h3 className={mainStyles.title}>Бронирование</h3>
                    </div>
                    <BookingForm/>
                </div>
            </div>
        </section>
    )
}