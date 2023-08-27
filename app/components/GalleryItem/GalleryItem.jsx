'use client'

import { useState } from 'react'

import styles from '../../gallery/page.module.css'

export default function GalleryItem({img, index}) {
    const [modal, setModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const onClickImg = (index) => {
        setSelectedImage(index);
        setModal(true);
    };

    const onCloseModal = () => {
        setSelectedImage(null);
        setModal(false);
    };

    return (
        <>
            <img onClick={() => onClickImg(index)} src={img} alt="" className={styles.photoImg} />
            {modal && selectedImage === index && (
                <div onClick={onCloseModal} className={`${styles.modal} ${styles.modalOpened}`}>
                    <div className={styles.modalDialog}>
                        <div className={styles.modalContent}>
                            <img className={styles.modalImg} src={img} alt="" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}