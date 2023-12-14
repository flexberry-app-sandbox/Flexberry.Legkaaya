import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
        'application-name': 'Legkaaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Legkaaya',
          title: 'Legkaaya'
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
