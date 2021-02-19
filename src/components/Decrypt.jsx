import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pidCrypt from 'pidcrypt';
// eslint-disable-next-line
import aes_cbc from 'pidcrypt/aes_cbc';

import { setKey } from '../redux/actions/key';
import { setMessage, setResult } from '../redux/actions/decrypt';

const Decrypt = () => {
  const dispatch = useDispatch();

  const key = useSelector(({ key }) => key);
  const message = useSelector(({ decrypt }) => decrypt.message);
  const result = useSelector(({ decrypt }) => decrypt.result);

  const onKeyChange = e => dispatch(setKey(e.target.value));
  const onMessageChange = e => dispatch(setMessage(e.target.value));

  const onDecrypt = e => {
    e.preventDefault();
    if(key === '' || message === '') {
      return alert('Заполните все поля');
    }
    const aes = new pidCrypt.AES.CBC();
    const decrypted = aes.decryptText(message, key);
   if(decrypted === '') {
     return dispatch(setResult('Не удалось расшифровать сообщение'));
   }
    dispatch(setResult(decrypted));
  }

  return (
    <section className="decrypt">
      <h2 className="decrypt__title title">Расшифрование</h2>
      <p className="decrypt__subtitle subtitle">Для того, чтобы расшифровать ваше сообщение введите секретный ключ и результат шифрования</p>
      <form onSubmit={onDecrypt} className="decrypt__form form">
        <label className="form__label">
          <span className="form__text">Введите секретный ключ</span>
          <input onChange={onKeyChange} value={key} type="text" className="form__input" />
        </label>
        <label className="form__label">
          <span className="form__text">Введите зашифрованное сообщение</span>
          <input onChange={onMessageChange} value={message} type="text" className="form__input" />
        </label>
        <button className="form__btn">Расшифровать</button>
      </form>
      {result && <p className="decrypt__result">Результат:&nbsp;{result}</p>}
    </section>
  )
}

export default Decrypt;