import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-legkaaya-клетка', 'Unit | Model | i-i-s-legkaaya-клетка', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
