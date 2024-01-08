import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hfghfghfhhghrh-сотрудник', 'Unit | Model | i-i-s-hfghfghfhhghrh-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-hfghfghfhhghrh-должность',
    'model:i-i-s-hfghfghfhhghrh-запись',
    'model:i-i-s-hfghfghfhhghrh-кабинет',
    'model:i-i-s-hfghfghfhhghrh-клиент',
    'model:i-i-s-hfghfghfhhghrh-сотрудник',
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
