import SearchBar from 'components/UI/SearchBar/SearchBar';
import React from 'react';
import styles from './Hero.module.scss';

const hero = (props) => (
    <section className={`${styles.hero} p-sm-3 py-3`}>
        <div className={styles.hero__bg} />
        <div className={styles.hero__content}>
            <h1 className={`${styles.hero__text}`}>It&apos;s the food you love, delivered.</h1>
            <SearchBar queryChange={props.queryChange} />
        </div>
    </section>
);

export default hero;
