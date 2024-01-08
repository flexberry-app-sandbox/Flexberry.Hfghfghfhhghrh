import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hfghfghfhhghrh-запись', 'Unit | Serializer | i-i-s-hfghfghfhhghrh-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-hfghfghfhhghrh-запись',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
