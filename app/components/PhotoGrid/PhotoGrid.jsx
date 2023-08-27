'use client'

import { useState } from 'react'

import GalleryData from '../../database/GalleryData'

import styles from '../../page.module.css'

export default function PhotoGrid() {
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
        <div className={styles.photoGrid}>
            {GalleryData.slice(0, 6).map((gallery, index) => (
                <div key={index}>
                    <img onClick={() => onClickImg(index)} src={gallery.img} alt="" className={styles.photoImg} />
                    {modal && selectedImage === index && (
                        <div onClick={onCloseModal} className={`${styles.modal} ${styles.modalOpened}`}>
                            <div className={styles.modalDialog}>
                                <div className={styles.modalContent}>
                                    <img className={styles.modalImg} src={gallery.img} alt="" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}