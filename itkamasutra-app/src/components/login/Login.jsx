import React from 'react';
import style from './Login.module.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field className={style.inputLabel}
                 placeholder={"Введите ваш логин"}
                 type="text"
                 component={"input"}
                 name={"login"}/>
      </div>
      <div>
          <Field className={style.inputLabel}
                 type="password"
                 placeholder={"Введите Ваш пароль"}
                 component={"input"}
                 name={"password"}/>
      </div>
      <div>
          <Field type={"checkbox"}
                 component={"input"}
                 name={"checkbox"}/> remember me
      </div>
      <div>
          <button className={style.submit}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
      console.log(formData)
  }
  return (
    <div className={style.wrapper}>
      <div className={style.loginForm}>
          <h1 className={style.titleForm}>Войти</h1>
          <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}
export default Login;
