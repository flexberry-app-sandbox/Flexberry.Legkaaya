import {
  defineNamespace,
  defineProjections,
  Model as КормMixin
} from '../mixins/regenerated/models/i-i-s-legkaaya-корм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КормMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
