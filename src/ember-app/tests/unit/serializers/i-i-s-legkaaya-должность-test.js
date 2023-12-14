import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-legkaaya-должность', 'Unit | Serializer | i-i-s-legkaaya-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-legkaaya-должность',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-legkaaya-вид',
    'model:i-i-s-legkaaya-должность',
    'model:i-i-s-legkaaya-животные',
    'model:i-i-s-legkaaya-клетка',
    'model:i-i-s-legkaaya-корм',
    'model:i-i-s-legkaaya-расписание',
    'model:i-i-s-legkaaya-сведения',
    'model:i-i-s-legkaaya-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
