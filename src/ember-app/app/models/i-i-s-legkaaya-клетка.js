import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлеткаMixin
} from '../mixins/regenerated/models/i-i-s-legkaaya-клетка';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлеткаMixin, Validations, {
});

defineProjections(Model);

export default Model;
