import Link from 'next/link';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = ({store}) => {

    const userState = store.getState().UserReducer

    useEffect(() => {
        console.log(userState.userID)
    })
    
    return (
        <header className={styles.header} id="header">
            <div className={styles.header__wrap}>

                <div className={styles.header__logo}>
                    <Link href="/main">
                        <a className={styles.header__logo_link}>
                            <img src="/static/images/navigation/logo.svg" alt="" />
                        </a>
                    </Link>
                </div>

                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav_list}>
                        <li className={styles.header__nav_item}>
                            <a href="#" className={styles.header__nav_link}>
                                <img src="/static/images/navigation/search.svg" alt="" />
                                <span>Search</span>
                            </a>
                        </li>
                        <li className={styles.header__nav_item}>
                            {  userState && !userState?.userID ? 
                                <Link href="/authorization" >
                                    <div className={styles.header__nav_link}>
                                        <img src="/static/images/navigation/login.svg" alt="" />
                                        <span>Log in</span>
                                    </div>
                                </Link> :
                                <span className={styles['user-name']}>{userState.person.name}</span>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
