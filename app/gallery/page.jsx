import GalleryData from '../database/GalleryData'

import GalleryItem from '../components/GalleryItem/GalleryItem'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Галерея ресторана',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Gallery() {
    return(
        <section className={styles.gallery}>
            <div className={mainStyles.container}>
                <h3 className={`${mainStyles.title} ${styles.galleryTitle}`}>Галерея ресторана</h3>
                <div className={styles.galleryItems}>
                    {GalleryData.map((gallery, index) => 
                        <GalleryItem key={index} index={index} img={gallery.img}/>
                    )}
                </div>
            </div>
        </section>
    )
}