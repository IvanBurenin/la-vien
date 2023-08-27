'use client'

import { useState } from 'react'

import FaqData from '../../database/FaqData'

import styles from '../../about/page.module.css'
import mainStyles from '../../main.module.css'

export default function Faq() {
    const [accordionOpen, setAccordionOpen] = useState('')

    const onClickAccordion = (faq) => {
        if(accordionOpen == faq.title) {
            setAccordionOpen('')
        } else {
            setAccordionOpen(faq.title)
        }
    }

    return(
        <div className={styles.faqItems}>
            {FaqData.map((faq, index)=>
                <div key={index} className={`${styles.faqItem} ${accordionOpen == faq.title ? styles.active : ''}`}>
                    <div onClick={() => onClickAccordion(faq)} className={styles.top}>
                        <h4 className={`${mainStyles.text} ${styles.topTitle}`}>{faq.title}</h4>
                        <svg className={styles.faqIcon} xmlns="http://www.w3.org/2000/svg" width={22} height={12} viewBox="0 0 22 12" fill="none">
                            <path d="M10.3146 0.283408L0.261448 10.4666C0.0936209 10.6365 -1.89922e-06 10.8623 -1.94027e-06 11.097C-1.98131e-06 11.3318 0.0936208 11.5575 0.261448 11.7274L0.272807 11.7384C0.354167 11.821 0.452098 11.8869 0.560644 11.9318C0.66919 11.9768 0.786082 12 0.904208 12C1.02233 12 1.13923 11.9768 1.24777 11.9318C1.35632 11.8869 1.45425 11.821 1.53561 11.7384L11.0019 2.14902L20.4644 11.7384C20.5457 11.821 20.6437 11.8869 20.7522 11.9318C20.8608 11.9768 20.9777 12 21.0958 12C21.2139 12 21.3308 11.9768 21.4393 11.9318C21.5479 11.8869 21.6458 11.821 21.7272 11.7384L21.7385 11.7274C21.9064 11.5575 22 11.3318 22 11.097C22 10.8623 21.9064 10.6365 21.7385 10.4666L11.6854 0.283408C11.5969 0.193851 11.4906 0.122553 11.3728 0.0738374C11.255 0.0251218 11.1282 1.94571e-06 11 1.9233e-06C10.8718 1.90089e-06 10.745 0.0251217 10.6272 0.0738373C10.5094 0.122553 10.403 0.19385 10.3146 0.283408Z" fill="black"/>
                        </svg>
                    </div>
                    <div className={styles.openContent}>
                        <p className={`${mainStyles.text} ${styles.contentText}`}>{faq.text}</p>       
                    </div>
                </div>
            )}
        </div>
    )
}