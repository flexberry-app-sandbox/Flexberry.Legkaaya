import { Serializer as КормSerializer } from
  '../mixins/regenerated/serializers/i-i-s-legkaaya-корм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КормSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
