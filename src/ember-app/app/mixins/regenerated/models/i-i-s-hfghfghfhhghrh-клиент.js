import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('number'),
  имя: DS.attr('string'),
  кодКлиента: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  отчество: DS.attr('string'),
  полис: DS.attr('number'),
  серияПаспорта: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКлиента: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.кодКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  полис: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.полис.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-hfghfghfhhghrh-клиент', {
    номерПаспорта: attr('Номер паспорта', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    серияПаспорта: attr('Серия паспорта', { index: 3 }),
    полис: attr('Полис', { index: 4 }),
    кодКлиента: attr('Код клиента', { index: 5 }),
    имя: attr('Имя', { index: 6 }),
    номерТелефона: attr('Номер телефона', { index: 7 }),
    датаРождения: attr('Дата рождения', { index: 8 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-hfghfghfhhghrh-клиент', {
    номерПаспорта: attr('Номер паспорта', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    серияПаспорта: attr('Серия паспорта', { index: 3 }),
    полис: attr('Полис', { index: 4 }),
    кодКлиента: attr('Код клиента', { index: 5 }),
    имя: attr('Имя', { index: 6 }),
    номерТелефона: attr('Номер телефона', { index: 7 }),
    датаРождения: attr('Дата рождения', { index: 8 })
  });
};
