import React from 'react';
import styles from './Site.module.css'
import {PageOne} from './pages/PageOne';
import {Routes, Route, NavLink, Navigate} from 'react-router-dom';
import {PageTwo} from './pages/PageTwo';
import {PageThree} from './pages/PageThree';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>TINY TASKS</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                  <NavLink className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)} to={'page1'}>On/Off buttons</NavLink>
                  <NavLink className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)} to={'page2'}>Page 2</NavLink>
                  <NavLink className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)} to={'page3'}>Page 3</NavLink>
                </div>
                <div className={styles.content}>
                  <Routes>
                    <Route path={'/'} element={<Navigate  to={'/PageOne'}/>}/>
                    <Route path={'page1'} element={<PageOne/>}/>
                    <Route path={'page2'} element={<PageTwo/>}/>
                    <Route path={'page3'} element={<PageThree/>}/>
                  </Routes>
                </div>
            </div>
        </div>
    );
};

