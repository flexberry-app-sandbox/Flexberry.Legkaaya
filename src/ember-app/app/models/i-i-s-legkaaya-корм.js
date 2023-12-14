import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КормMixin
} from '../mixins/regenerated/models/i-i-s-legkaaya-корм';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КормMixin, Validations, {
});

defineProjections(Model);

export default Model;
