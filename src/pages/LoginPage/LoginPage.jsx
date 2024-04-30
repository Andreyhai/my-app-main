import React, { Fragment, useState } from 'react';
import LanguageButton from '../../components/languageButton/LanguageButton';
import styles from './Login.module.css';
// import axios from "axios"
// import { HOME_ROUTE } from '../../utils/PATHS';

import path from '../../sources/login.png';
import { Link } from 'react-router-dom';

const inputStyles = {
  width: '70%',
  height: '15%',
  padding: '10px',
  // background: "transparent",
  border: "1px solid grey",
  borderRadius: "5px",
  padding: "10px",
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [src, setSrc] = useState(true);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     handleSubmit();
  //   }
  // };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // Добавьте код для обработки входа с использованием значений username и password
    //   if (username === __DATA__[0] && password === __DATA__[1]) {
    //     Change(!isAuth)
    //     console.log(isAuth)
    //     window.location.replace(ADMIN_ROUTE)
    //   } else {
    //     alert(false)
    //   }
  };

  const ChangeSrc = () => {
    setSrc(!src);
  };

  return (
    <Fragment>
      <header
        style={{
          padding: '10px',
        }}
      >
        <LanguageButton src={src} ChangeSrc={ChangeSrc} />
      </header>
      <div className={styles.main}>
        <section className={styles.loginBlock}>
          <section
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              // background: 'grey',
              width: '100%',
              height: '70%',
            }}
          >
            <header className={styles.formHeader}>
              <div className={styles.firstTitle}>Welcome TO INTRAVEL</div>
              <div className={styles.secondTitle}>
                Welcome to INTRAVEL. Find yourself some entertainment
              </div>
            </header>
            <main className={styles.content}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // background: 'grey',
                  width: '100%',
                  height: '70%',
                }}
              >
                <input style={inputStyles} placeholder="Name" />
                <input style={inputStyles} placeholder="Email" />
                <input style={inputStyles} placeholder="Password" />
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    gap: '10px',
                  }}
                >
                  <input type="checkbox" />
                  <div>Remember Me</div>
                </div>
                <button
                  style={{
                    background: 'black',
                    color: 'white',
                    width: '80%',
                    padding: '10px',
                    borderRadius: '30px',
                    border: '1px solid black',
                  }}
                >
                  Register
                </button>
              </div>
              {/* <div>
            <div>
              Already have an account?
            </div> 
            <Link>Log in</Link>
          </div> */}
            </main>
          </section>
          <section
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={path}
              alt={path}
              style={{
                width: '90%',
                height: '80%',
                // boxShadow: '10px 10px 16px 0px hsba(0, 0%, 0%, 0.25)',
                borderRadius: '14px',
              }}
            />
          </section>
        </section>
      </div>
    </Fragment>
  );
};

export default LoginPage;
