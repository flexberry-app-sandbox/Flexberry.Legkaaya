import { Serializer as КлеткаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-legkaaya-клетка';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлеткаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
