import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Hfghfghfhhghrh',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hfghfghfhhghrh',
          title: 'Hfghfghfhhghrh'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
