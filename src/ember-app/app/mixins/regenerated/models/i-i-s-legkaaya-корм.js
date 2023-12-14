import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодКорма: DS.attr('number'),
  название: DS.attr('string')
});

export let ValidationRules = {
  кодКорма: {
    descriptionKey: 'models.i-i-s-legkaaya-корм.validations.кодКорма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-legkaaya-корм.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КормE', 'i-i-s-legkaaya-корм', {
    кодКорма: attr('Код корма', { index: 0 }),
    название: attr('Название', { index: 1 })
  });

  modelClass.defineProjection('КормL', 'i-i-s-legkaaya-корм', {
    кодКорма: attr('Код корма', { index: 0 }),
    название: attr('Название', { index: 1 })
  });
};
