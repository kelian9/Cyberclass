import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__wrap}>
                <div className={styles.footer__top}>
                    <div className={styles.footer__news}>
                        <h3 className={styles.footer__title}>News & updates</h3>
                        <p className={styles.footer__subtext}>Sign up to get the latest on sales, new releases and more...</p>
                        <div className={styles.footer__form}>
                            <input type="text" className={styles.footer__formInput} placeholder="Enter your Email"/>
                            <button className={styles.footer__formBtn + ' common-btn' }>Sign up</button>
                        </div>
                        <p className={styles.footer__agree}>By clicking Sign Up, you agree to our</p>
                    </div>
                    <div className={styles.footer__contact}>
                        <h3 className={styles.footer__title}>Contact us</h3>
                        <div className={styles.footer__contactInfo}>
                            <div className={styles.footer__infoBlock}>
                                <h5 className={styles.footer__contactName}>Business:</h5>
                                <a href="#" className={styles.footer__contactLink}>support@gamerzclass.com</a>
                            </div>
                            <div className={styles.footer__infoBlock}>
                                <h5 className={styles.footer__contactName}>Support:</h5>
                                <a href="#" className={styles.footer__contactLink}>support@gamerzclass.com</a>
                            </div>
                        </div>
                        <a href="#" className={'common-btn--discord'}>
                            <img src="/static/images/footer/discord.svg" alt=""/>
                            <span>Join us on discord</span>
                        </a>
                        <div className={styles.footer__follow}>
                            <h4 className={styles.footer__followTitle}>Follow us</h4>
                            <div className={styles.footer__followGroup}>
                                <a href="" className={styles.footer__followLink}>
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
                                </a>
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
                                <a href="#" className={styles.footer__menuLink}>Support</a>
                            </li>
                            <li className={styles.footer__menuItem}>
                                <a href="#" className={styles.footer__menuLink}>Privacy Policy</a>
                            </li>
                            <li className={styles.footer__menuItem}>
                                <a href="#" className={styles.footer__menuLink}>Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__bottomPay}>
                        <img src="/static/images/footer/pay.png" alt=""/>
                    </div>
                    <div className={styles.footer__bottomCopy}>© 2020 СyberClass</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;