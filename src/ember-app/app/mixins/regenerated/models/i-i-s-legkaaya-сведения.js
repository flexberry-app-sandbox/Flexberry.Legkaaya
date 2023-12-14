import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  вид: DS.belongsTo('i-i-s-legkaaya-вид', { inverse: null, async: false }),
  клетка: DS.belongsTo('i-i-s-legkaaya-клетка', { inverse: null, async: false }),
  животные: DS.belongsTo('i-i-s-legkaaya-животные', { inverse: 'сведения', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-legkaaya-сведения.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  вид: {
    descriptionKey: 'models.i-i-s-legkaaya-сведения.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клетка: {
    descriptionKey: 'models.i-i-s-legkaaya-сведения.validations.клетка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  животные: {
    descriptionKey: 'models.i-i-s-legkaaya-сведения.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СведенияE', 'i-i-s-legkaaya-сведения', {
    номер: attr('Номер', { index: 0 }),
    клетка: belongsTo('i-i-s-legkaaya-клетка', 'Клетка', {
      номерКлетки: attr('Клетка', { index: 2 })
    }, { index: 1, displayMemberPath: 'тип' }),
    вид: belongsTo('i-i-s-legkaaya-вид', 'Вид', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });
};
