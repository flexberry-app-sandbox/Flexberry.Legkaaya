import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКормления: DS.attr('string'),
  времяУборки: DS.attr('string'),
  животные: DS.belongsTo('i-i-s-legkaaya-животные', { inverse: null, async: false }),
  клетка: DS.belongsTo('i-i-s-legkaaya-клетка', { inverse: null, async: false }),
  корм: DS.belongsTo('i-i-s-legkaaya-корм', { inverse: null, async: false })
});

export let ValidationRules = {
  времяКормления: {
    descriptionKey: 'models.i-i-s-legkaaya-расписание.validations.времяКормления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяУборки: {
    descriptionKey: 'models.i-i-s-legkaaya-расписание.validations.времяУборки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  животные: {
    descriptionKey: 'models.i-i-s-legkaaya-расписание.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клетка: {
    descriptionKey: 'models.i-i-s-legkaaya-расписание.validations.клетка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  корм: {
    descriptionKey: 'models.i-i-s-legkaaya-расписание.validations.корм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасписаниеE', 'i-i-s-legkaaya-расписание', {
    времяУборки: attr('Время уборки', { index: 0 }),
    времяКормления: attr('Время кормления', { index: 1 }),
    корм: belongsTo('i-i-s-legkaaya-корм', 'Корм', {
      название: attr('Название', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'название' }),
    животные: belongsTo('i-i-s-legkaaya-животные', 'Животные', {
      кличка: attr('Кличка', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'кличка' }),
    клетка: belongsTo('i-i-s-legkaaya-клетка', 'Клетка', {
      номерКлетки: attr('Клетка', { index: 7 })
    }, { index: 6, displayMemberPath: 'тип' })
  });

  modelClass.defineProjection('РасписаниеL', 'i-i-s-legkaaya-расписание', {
    времяУборки: attr('Время уборки', { index: 0 }),
    времяКормления: attr('Время кормления', { index: 1 }),
    корм: belongsTo('i-i-s-legkaaya-корм', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true }),
    животные: belongsTo('i-i-s-legkaaya-животные', 'Кличка', {
      кличка: attr('Кличка', { index: 3 })
    }, { index: -1, hidden: true }),
    клетка: belongsTo('i-i-s-legkaaya-клетка', 'Тип', {
      тип: attr('Тип', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
