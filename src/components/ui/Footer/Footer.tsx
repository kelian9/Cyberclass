import React, { useState } from 'react';
import styles from './Footer.module.scss';
import { AuthAPI } from '../../../api/auth';
import useFormState from '../../../common/customHooks/useFormState';
import { AxiosResponse, AxiosError } from 'axios';

const Footer = () => {

    const email = useFormState('');

    const [res,setRes] = useState('')

    const subscribe = (e:any) => {
        e.preventDefault()
        AuthAPI.subscribeToNews(email.value)
            .then((response:AxiosResponse) => {
                setRes('Вы подписались')
                setTimeout(() => setRes(''), 3000)
            })
            .catch((err:AxiosError) => {
                setRes(err.response.data.en)
                setTimeout(() => setRes(''), 3000)
            })
    }

    return(
        <div className={styles.footer}>
            <div className={styles.footer__wrap}>
                <div className={styles.footer__top}>
                    <div className={styles.footer__news}>
                        <h3 className={styles.footer__title}>News & updates</h3>
                        <p className={styles.footer__subtext}>Enter your email to  get the latest on sales, new releases and more...</p>
                        <div className={styles.footer__form}>
                            <input type="email" name="email" className={styles.footer__formInput} {...email} placeholder="Email"/>
                            <button className={styles.footer__formBtn + ' common-btn' } onClick={subscribe}>Subscribe</button>
                            { res ? <span className={styles.response}>{res}</span> : null }
                        </div>
                    </div>
                    <div className={styles.footer__contact}>
                        <h3 className={styles.footer__title}>Contact us</h3>
                        <div className={styles.footer__contactInfo}>
                            <div className={styles.footer__infoBlock}>
                                <h5 className={styles.footer__contactName}>For business & support:</h5>
                                <a href="#" className={styles.footer__contactLink}>info@cyberclass.team</a>
                            </div>
                            {/* <div className={styles.footer__infoBlock}>
                                <h5 className={styles.footer__contactName}>Support:</h5>
                                <a href="#" className={styles.footer__contactLink}>support@gamerzclass.com</a>
                            </div> */}
                        </div>
                        {/* <a href="#" className={'common-btn--discord'}>
                            <img src="/static/images/footer/discord.svg" alt=""/>
                            <span>Join us on discord</span>
                        </a> */}
                        <div className={styles.footer__follow}>
                            <h4 className={styles.footer__followTitle}>Follow us</h4>
                            <div className={styles.footer__followGroup}>
                                {/* <a href="" className={styles.footer__followLink}>
                                    <div className={styles.footer__followIcon}>
                                        <img src="/static/images/footer/tw.svg" alt=""/>
                                    </div>
                                </a>
                                <a href="" className={styles.footer__followLink}>
                                    <div className={styles.footer__followIcon}>
                                        <img src="/static/images/footer/yt.svg" alt=""/>
                                    </div>
                                </a>
                                <a href="" className={styles.footer__followLink}>
                                    <div className={styles.footer__followIcon}>
                                        <img src="/static/images/footer/in.svg" alt=""/>
                                    </div>
                                </a>
                                <a href="" className={styles.footer__followLink}>
                                    <div className={styles.footer__followIcon}>
                                        <img src="/static/images/footer/fb.svg" alt=""/>
                                    </div>
                                </a> */}
                                <a href="" className={styles.footer__followLink}>
                                    <div className={styles.footer__followIcon}>
                                        <img src="/static/images/footer/inst.svg" alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__menu}>
                        <h3 className={styles.footer__title}>Main menu</h3>
                        <ul className={styles.footer__menuList}>
                            <li className={styles.footer__menuItem}>
                                <a href="/static/docs/CyberClass. Terms.pdf" className={styles.footer__menuLink}>Terms</a>
                            </li>
                            <li className={styles.footer__menuItem}>
                                <a href="/static/docs/CyberClass. Privacy.pdf" className={styles.footer__menuLink}>Privacy</a>
                            </li>
                            <li className={styles.footer__menuItem}>
                                <a href="/static/docs/Payments. Security. Refund.pdf" className={styles.footer__menuLink}>Payments. Security. Refund</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__bottom_center}>
                        <div className={styles.footer__bottomPay}>
                            <img src="/static/images/footer/pay.png" alt=""/>
                        </div>
                        <div className={styles.footer__bottomCopy}>© 2020 СyberClass</div>
                    </div>
                    <div className={styles.footer__bottom_right}>
                        <p>ИП Журавель Анастасия Александровна</p>
                        <p>ИНН 772619676401, ОГРНИП 319774600696590</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;