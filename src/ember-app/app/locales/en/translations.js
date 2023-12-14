import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLegkaayaВидLForm from './forms/i-i-s-legkaaya-вид-l';
import IISLegkaayaДолжностьLForm from './forms/i-i-s-legkaaya-должность-l';
import IISLegkaayaЖивотныеLForm from './forms/i-i-s-legkaaya-животные-l';
import IISLegkaayaКлеткаLForm from './forms/i-i-s-legkaaya-клетка-l';
import IISLegkaayaКормLForm from './forms/i-i-s-legkaaya-корм-l';
import IISLegkaayaРасписаниеLForm from './forms/i-i-s-legkaaya-расписание-l';
import IISLegkaayaСотрудникLForm from './forms/i-i-s-legkaaya-сотрудник-l';
import IISLegkaayaВидEForm from './forms/i-i-s-legkaaya-вид-e';
import IISLegkaayaДолжностьEForm from './forms/i-i-s-legkaaya-должность-e';
import IISLegkaayaЖивотныеEForm from './forms/i-i-s-legkaaya-животные-e';
import IISLegkaayaКлеткаEForm from './forms/i-i-s-legkaaya-клетка-e';
import IISLegkaayaКормEForm from './forms/i-i-s-legkaaya-корм-e';
import IISLegkaayaРасписаниеEForm from './forms/i-i-s-legkaaya-расписание-e';
import IISLegkaayaСотрудникEForm from './forms/i-i-s-legkaaya-сотрудник-e';
import IISLegkaayaВидModel from './models/i-i-s-legkaaya-вид';
import IISLegkaayaДолжностьModel from './models/i-i-s-legkaaya-должность';
import IISLegkaayaЖивотныеModel from './models/i-i-s-legkaaya-животные';
import IISLegkaayaКлеткаModel from './models/i-i-s-legkaaya-клетка';
import IISLegkaayaКормModel from './models/i-i-s-legkaaya-корм';
import IISLegkaayaРасписаниеModel from './models/i-i-s-legkaaya-расписание';
import IISLegkaayaСведенияModel from './models/i-i-s-legkaaya-сведения';
import IISLegkaayaСотрудникModel from './models/i-i-s-legkaaya-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-legkaaya-вид': IISLegkaayaВидModel,
    'i-i-s-legkaaya-должность': IISLegkaayaДолжностьModel,
    'i-i-s-legkaaya-животные': IISLegkaayaЖивотныеModel,
    'i-i-s-legkaaya-клетка': IISLegkaayaКлеткаModel,
    'i-i-s-legkaaya-корм': IISLegkaayaКормModel,
    'i-i-s-legkaaya-расписание': IISLegkaayaРасписаниеModel,
    'i-i-s-legkaaya-сведения': IISLegkaayaСведенияModel,
    'i-i-s-legkaaya-сотрудник': IISLegkaayaСотрудникModel
  },

  'application-name': 'Legkaaya',

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
        'application-name': 'Legkaaya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Legkaaya',
          title: 'Legkaaya'
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
        'и-с-з-о-о-п-а-р-к': {
          caption: 'ИС ЗООПАРК',
          title: 'ИС ЗООПАРК',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-legkaaya-должность-l': {
              caption: 'Должность',
              title: 'Должность'
            },
            'i-i-s-legkaaya-сотрудник-l': {
              caption: 'Сотрудник',
              title: 'Сотрудник'
            }
          },
          'информация-о-животных': {
            caption: 'Информация о животных',
            title: 'Информация о животных',
            'i-i-s-legkaaya-вид-l': {
              caption: 'Вид',
              title: 'Вид'
            },
            'i-i-s-legkaaya-животные-l': {
              caption: 'Животные',
              title: 'Животные'
            }
          },
          уход: {
            caption: 'Уход',
            title: 'Уход',
            'i-i-s-legkaaya-корм-l': {
              caption: 'Корм',
              title: 'Корм'
            },
            'i-i-s-legkaaya-расписание-l': {
              caption: 'Расписание',
              title: 'Расписание'
            },
            'i-i-s-legkaaya-клетка-l': {
              caption: 'Клетка',
              title: 'Клетка'
            }
          }
        },
        legkaaya: {
          caption: 'Legkaaya',
          title: 'Legkaaya',
          'i-i-s-legkaaya-животные-l': {
            caption: 'Животные',
            title: ''
          },
          'i-i-s-legkaaya-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-legkaaya-расписание-l': {
            caption: 'Расписание',
            title: ''
          },
          'i-i-s-legkaaya-вид-l': {
            caption: 'Вид',
            title: ''
          },
          'i-i-s-legkaaya-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-legkaaya-клетка-l': {
            caption: 'Клетка',
            title: ''
          },
          'i-i-s-legkaaya-корм-l': {
            caption: 'Корм',
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
    'i-i-s-legkaaya-вид-l': IISLegkaayaВидLForm,
    'i-i-s-legkaaya-должность-l': IISLegkaayaДолжностьLForm,
    'i-i-s-legkaaya-животные-l': IISLegkaayaЖивотныеLForm,
    'i-i-s-legkaaya-клетка-l': IISLegkaayaКлеткаLForm,
    'i-i-s-legkaaya-корм-l': IISLegkaayaКормLForm,
    'i-i-s-legkaaya-расписание-l': IISLegkaayaРасписаниеLForm,
    'i-i-s-legkaaya-сотрудник-l': IISLegkaayaСотрудникLForm,
    'i-i-s-legkaaya-вид-e': IISLegkaayaВидEForm,
    'i-i-s-legkaaya-должность-e': IISLegkaayaДолжностьEForm,
    'i-i-s-legkaaya-животные-e': IISLegkaayaЖивотныеEForm,
    'i-i-s-legkaaya-клетка-e': IISLegkaayaКлеткаEForm,
    'i-i-s-legkaaya-корм-e': IISLegkaayaКормEForm,
    'i-i-s-legkaaya-расписание-e': IISLegkaayaРасписаниеEForm,
    'i-i-s-legkaaya-сотрудник-e': IISLegkaayaСотрудникEForm
  },

});

export default translations;
