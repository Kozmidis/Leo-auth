import React from "react";
import IconFb from "../common/IconFb";
import IconGoogle from "../common/IconGoogle";
import IconVk from "../common/IconVk";

export default function AuthForm() {
  return (
    <div className="popup">
      <form className="authForm" name="formAuth">
        <h2 className="authForm__title">Войти</h2>
        <input
          className="authForm__input"
          form="formAuth"
          placeholder="E-mail"
        ></input>
        <input
          className="authForm__input"
          form="formAuth"
          placeholder="Пароль"
        ></input>
        <button
          className="authForm__button authForm__button_restore"
          type="button"
        >
          <span className="authForm__button-text authForm__button-text_restore">
            Восстановить пароль
          </span>
        </button>
        <button
          disabled
          type="submit"
          className="authForm__button authForm__button_submit"
        >
          <span className="authForm__button-text authForm__button-text_submit">
            Войти
          </span>
        </button>
        <nav style={{ width: "100%" }}>
          <ul className="authForm__navBar">
            <li>
              <button className="authForm__navBar-item authForm__navBar-item_fb">
                <IconFb />
              </button>
            </li>
            <li>
              <button className="authForm__navBar-item authForm__navBar-item_google">
                <IconGoogle />
              </button>
            </li>
            <li>
              <button className="authForm__navBar-item authForm__navBar-item_vk">
                <IconVk />
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="authForm__button authForm__button_create"
          type="button"
        >
          <span className="authForm__button-text authForm__button-text_create">
            Создать аккаунт
          </span>
        </button>
      </form>
      <button className="popup__button">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M14.707 5.707a1 1 0 00-1.414-1.414l-6.647 6.646a1.5 1.5 0 000 2.122l6.647 6.646a1 1 0 001.414-1.414L8.414 12l6.293-6.293z"
            fill="#939CB0"
          ></path>
        </svg>
      </button>
    </div>
  );
}
