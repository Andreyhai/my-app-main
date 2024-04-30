import React from 'react';
import styles from './Content.module.css';
import image from '../../sources/bg.png';
import image2 from '../../sources/image1.png';

const Content = () => {
  return (
    <main className={styles.main}>
      <div style={{ width: '90%', background: '', margin: '0 auto', display: "flex",flexWrap: "wrap", justifyContent: "center", gap: "30px"}}>
        <section>
          <header className={styles.citata}>Начни путешествие с себя</header>
          <main>
            <img
              src={image}
              alt={image}
              style={{ height: '200px', width: '100%' }}
            />
          </main>
        </section>
        {/* <section className={styles.about}>
          <div className={styles.imageBlock}>
            <img className={styles.imageBlockImg} src={image2} alt={image2} />
          </div>

          <div className={styles.textBlock}>
            {/* <div className={styles.textBlockText}>
              Знакомство с разными культурами и обычаями помогает расширить свой
              кругозор, понять мир шире и увидеть его во всем его многообразии.
              Путешествия также способствуют личностному росту, развитию
              толерантности и пониманию других людей.
            </div> */}
          {/* </div> */}

          {/* <div className={styles.aboutFooter}>
            {/* <div
              style={{
                borderBottom: '1px solid hsba(0, 0%, 49%, 1)',
              }}
            >
              Руководство по пользованию
            </div>
          </div>
        </section> */}


        <section style={{width: "80vw"}}>
          <header className={styles.citata}>Этап 1. Регистрация/вход</header>
          <main style={{
            background: "hsba(36, 25%, 100%, 1)",
            height: "200px",
            width: "100%",
          }}>
          Перед тем, как начать пользоваться приложением, важно зарегистрироваться, чтобы получить доступ ко всем его функциям и возможностям. Регистрация позволяет создать личный аккаунт, который будет хранить ваши данные, настройки и предпочтения.
          </main>
        </section>
      </div>
    </main>
  );
};

export default Content;
