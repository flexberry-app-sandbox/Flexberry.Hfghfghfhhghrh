import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('string'),
  кабинет: DS.belongsTo('i-i-s-hfghfghfhhghrh-кабинет', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-hfghfghfhhghrh-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-hfghfghfhhghrh-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-hfghfghfhhghrh-запись.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-hfghfghfhhghrh-запись', {
    типОплаты: attr('Тип оплаты', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    кодЗаписи: attr('Код записи', { index: 3 }),
    время: attr('Время', { index: 4 }),
    дата: attr('Дата', { index: 5 }),
    сотрудник: belongsTo('i-i-s-hfghfghfhhghrh-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    клиент: belongsTo('i-i-s-hfghfghfhhghrh-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фамилия' }),
    кабинет: belongsTo('i-i-s-hfghfghfhhghrh-кабинет', 'Кабинет', {
      номерКабинета: attr('Номер кабинета', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'номерКабинета' })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-hfghfghfhhghrh-запись', {
    типОплаты: attr('Тип оплаты', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    кодЗаписи: attr('Код записи', { index: 3 }),
    время: attr('Время', { index: 4 }),
    дата: attr('Дата', { index: 5 }),
    сотрудник: belongsTo('i-i-s-hfghfghfhhghrh-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-hfghfghfhhghrh-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 7 })
    }, { index: -1, hidden: true }),
    кабинет: belongsTo('i-i-s-hfghfghfhhghrh-кабинет', 'Номер кабинета', {
      номерКабинета: attr('Номер кабинета', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
