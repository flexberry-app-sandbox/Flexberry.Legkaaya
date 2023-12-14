import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кличка: DS.attr('string'),
  номерЖивотного: DS.attr('number'),
  сотрудник: DS.belongsTo('i-i-s-legkaaya-сотрудник', { inverse: null, async: false }),
  сведения: DS.hasMany('i-i-s-legkaaya-сведения', { inverse: 'животные', async: false })
});

export let ValidationRules = {
  кличка: {
    descriptionKey: 'models.i-i-s-legkaaya-животные.validations.кличка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЖивотного: {
    descriptionKey: 'models.i-i-s-legkaaya-животные.validations.номерЖивотного.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-legkaaya-животные.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сведения: {
    descriptionKey: 'models.i-i-s-legkaaya-животные.validations.сведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖивотныеE', 'i-i-s-legkaaya-животные', {
    номерЖивотного: attr('Номер животного', { index: 0 }),
    кличка: attr('Кличка', { index: 1 }),
    сотрудник: belongsTo('i-i-s-legkaaya-сотрудник', 'Сотрудник', {
      фамилия: attr('Ответственный', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    сведения: hasMany('i-i-s-legkaaya-сведения', 'Сведения', {
      номер: attr('Номер', { index: 0 }),
      клетка: belongsTo('i-i-s-legkaaya-клетка', 'Клетка', {
        номерКлетки: attr('Клетка', { index: 2 })
      }, { index: 1, displayMemberPath: 'тип' }),
      вид: belongsTo('i-i-s-legkaaya-вид', 'Вид', {
        наименование: attr('Наименование', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЖивотныеL', 'i-i-s-legkaaya-животные', {
    номерЖивотного: attr('Номер животного', { index: 0 }),
    кличка: attr('Кличка', { index: 1 }),
    сотрудник: belongsTo('i-i-s-legkaaya-сотрудник', 'Ответственный', {
      фамилия: attr('Ответственный', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
