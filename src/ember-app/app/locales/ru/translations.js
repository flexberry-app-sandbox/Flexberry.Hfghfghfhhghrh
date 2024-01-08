import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISHfghfghfhhghrhДолжностьLForm from './forms/i-i-s-hfghfghfhhghrh-должность-l';
import IISHfghfghfhhghrhЗаписьLForm from './forms/i-i-s-hfghfghfhhghrh-запись-l';
import IISHfghfghfhhghrhКабинетLForm from './forms/i-i-s-hfghfghfhhghrh-кабинет-l';
import IISHfghfghfhhghrhКлиентLForm from './forms/i-i-s-hfghfghfhhghrh-клиент-l';
import IISHfghfghfhhghrhСотрудникLForm from './forms/i-i-s-hfghfghfhhghrh-сотрудник-l';
import IISHfghfghfhhghrhДолжностьEForm from './forms/i-i-s-hfghfghfhhghrh-должность-e';
import IISHfghfghfhhghrhЗаписьEForm from './forms/i-i-s-hfghfghfhhghrh-запись-e';
import IISHfghfghfhhghrhКабинетEForm from './forms/i-i-s-hfghfghfhhghrh-кабинет-e';
import IISHfghfghfhhghrhКлиентEForm from './forms/i-i-s-hfghfghfhhghrh-клиент-e';
import IISHfghfghfhhghrhСотрудникEForm from './forms/i-i-s-hfghfghfhhghrh-сотрудник-e';
import IISHfghfghfhhghrhДолжностьModel from './models/i-i-s-hfghfghfhhghrh-должность';
import IISHfghfghfhhghrhЗаписьModel from './models/i-i-s-hfghfghfhhghrh-запись';
import IISHfghfghfhhghrhКабинетModel from './models/i-i-s-hfghfghfhhghrh-кабинет';
import IISHfghfghfhhghrhКлиентModel from './models/i-i-s-hfghfghfhhghrh-клиент';
import IISHfghfghfhhghrhСотрудникModel from './models/i-i-s-hfghfghfhhghrh-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-hfghfghfhhghrh-должность': IISHfghfghfhhghrhДолжностьModel,
    'i-i-s-hfghfghfhhghrh-запись': IISHfghfghfhhghrhЗаписьModel,
    'i-i-s-hfghfghfhhghrh-кабинет': IISHfghfghfhhghrhКабинетModel,
    'i-i-s-hfghfghfhhghrh-клиент': IISHfghfghfhhghrhКлиентModel,
    'i-i-s-hfghfghfhhghrh-сотрудник': IISHfghfghfhhghrhСотрудникModel
  },

  'application-name': 'Hfghfghfhhghrh',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Hfghfghfhhghrh',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hfghfghfhhghrh',
          title: 'Hfghfghfhhghrh'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        hfghfghfhhghrh: {
          caption: 'Hfghfghfhhghrh',
          title: 'Hfghfghfhhghrh',
          'i-i-s-hfghfghfhhghrh-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-hfghfghfhhghrh-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-hfghfghfhhghrh-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-hfghfghfhhghrh-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-hfghfghfhhghrh-запись-l': {
            caption: 'Запись',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-hfghfghfhhghrh-должность-l': IISHfghfghfhhghrhДолжностьLForm,
    'i-i-s-hfghfghfhhghrh-запись-l': IISHfghfghfhhghrhЗаписьLForm,
    'i-i-s-hfghfghfhhghrh-кабинет-l': IISHfghfghfhhghrhКабинетLForm,
    'i-i-s-hfghfghfhhghrh-клиент-l': IISHfghfghfhhghrhКлиентLForm,
    'i-i-s-hfghfghfhhghrh-сотрудник-l': IISHfghfghfhhghrhСотрудникLForm,
    'i-i-s-hfghfghfhhghrh-должность-e': IISHfghfghfhhghrhДолжностьEForm,
    'i-i-s-hfghfghfhhghrh-запись-e': IISHfghfghfhhghrhЗаписьEForm,
    'i-i-s-hfghfghfhhghrh-кабинет-e': IISHfghfghfhhghrhКабинетEForm,
    'i-i-s-hfghfghfhhghrh-клиент-e': IISHfghfghfhhghrhКлиентEForm,
    'i-i-s-hfghfghfhhghrh-сотрудник-e': IISHfghfghfhhghrhСотрудникEForm
  },

});

export default translations;
