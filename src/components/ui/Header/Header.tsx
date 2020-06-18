import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = ({store}) => {

    const [user,setUser] = useState(null);
    const [menuVision, toggleMenuVision] = useState(false);

    const logout = () => {
        localStorage.clear();
        setUser(null)
    }

    useEffect(() => {
        user === null && localStorage.getItem('user') ? setUser(JSON.parse(localStorage.getItem('user'))) : null;
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
                        { !user?.userID && !user?.nickName ?
                            <li className={styles.header__nav_item}>
                                <Link href="/registration">
                                    <span className={styles.header__nav_link}>SIGN UP</span>
                                </Link>
                            </li> :
                            null
                        }
                        <li className={styles.header__nav_item}>
                            {  !user?.userID && !user?.nickName ? 
                                <Link href="/authorization" >
                                    <span className={styles.header__nav_link}>LOG IN</span>
                                </Link> :
                                <p className={styles['user-name']} onClick={() => toggleMenuVision(!menuVision)}>
                                    <img src={ user?.avatar ? 'http://194.177.23.9:577/' + user?.avatar : '/static/images/avatar.svg'} alt=""/>
                                    {user?.nickName || user?.person.phoneNumber}
                                    { menuVision ? 
                                        <ul className={styles['profile-menu']}>
                                            <Link href="/profile">
                                                <li>Profile</li>
                                            </Link>
                                            <li onClick={logout}>Logout</li>
                                        </ul> :
                                    null }
                                </p>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;