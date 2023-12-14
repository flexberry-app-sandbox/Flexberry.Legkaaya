import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКлетки: DS.attr('number'),
  площадь: DS.attr('string'),
  тип: DS.attr('string')
});

export let ValidationRules = {
  номерКлетки: {
    descriptionKey: 'models.i-i-s-legkaaya-клетка.validations.номерКлетки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-legkaaya-клетка.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-legkaaya-клетка.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлеткаE', 'i-i-s-legkaaya-клетка', {
    номерКлетки: attr('Номер клетки', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    площадь: attr('Площадь', { index: 2 })
  });

  modelClass.defineProjection('КлеткаL', 'i-i-s-legkaaya-клетка', {
    номерКлетки: attr('Номер клетки', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    площадь: attr('Площадь', { index: 2 })
  });
};
