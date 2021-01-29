import React from 'react';
import style from './Login.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from './../common/FormsControls/FormsControls';
import { requaredField } from './../../utilites/validators/formvalidator';
import { connect } from 'react-redux';
import { loginThunkCreator } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field className={style.inputLabel}
                 type="text"
                 placeholder={"Введите Ваш email"}
                 validate={[requaredField]}
                 component={Input}
                 name={"email"}/>
      </div>
      <div>
          <Field className={style.inputLabel}
                 type="password"
                 placeholder={"Введите Ваш пароль"}
                 validate={[requaredField]}
                 component={Input}
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
    console.log(formData.email);
      props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
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
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login: loginThunkCreator})(Login);
