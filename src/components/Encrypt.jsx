import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pidCrypt from 'pidcrypt';
import aes_cbc from 'pidcrypt/aes_cbc';

import { setKey } from '../redux/actions/key';
import { setMessage, setResult } from '../redux/actions/encrypt';

const Encrypt = () => {
  const dispatch = useDispatch();

  const key = useSelector(({ key }) => key);
  const message = useSelector(({ encrypt }) => encrypt.message);
  const result = useSelector(({ encrypt }) => encrypt.result);

  const onKeyChange = e => dispatch(setKey(e.target.value));
  const onMessageChange = e => dispatch(setMessage(e.target.value));

  const onEncrypt = e => {
    e.preventDefault();
    if(key === '' || message === '') {
      return alert('Заполните все поля');
    }
    const aes = new pidCrypt.AES.CBC();
    const encrypted = aes.encryptText(message, key);
    dispatch(setResult(encrypted));
  }
  return (
    <section className="encrypt">
      <h2 className="encrypt__title title">Шифрование</h2>
      <p className="encrypt__subtitle subtitle">Для того, чтобы зашифровать ваше сообщение задайте секретный ключ и введите текст сообщения</p>
      <form onSubmit={onEncrypt} className="encrypt__form form">
        <label className="form__label">
          <span className="form__text">Введите секретный ключ</span>
          <input onChange={onKeyChange} value={key} type="text" className="form__input" />
        </label>
        <label className="form__label">
          <span className="form__text">Введите сообщение</span>
          <input onChange={onMessageChange} value={message} type="text" className="form__input" />
        </label>
        <button className="form__btn">Зашифровать</button>
      </form>
      {result && <p className="encrypt__result">Результат:&nbsp;{result}</p>}
    </section>
  )
}

export default Encrypt;