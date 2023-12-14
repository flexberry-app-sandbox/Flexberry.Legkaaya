import {
  defineNamespace,
  defineProjections,
  Model as КлеткаMixin
} from '../mixins/regenerated/models/i-i-s-legkaaya-клетка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлеткаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
