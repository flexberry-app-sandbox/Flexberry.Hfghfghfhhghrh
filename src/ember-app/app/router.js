import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-hfghfghfhhghrh-должность-l');
  this.route('i-i-s-hfghfghfhhghrh-должность-e',
  { path: 'i-i-s-hfghfghfhhghrh-должность-e/:id' });
  this.route('i-i-s-hfghfghfhhghrh-должность-e.new',
  { path: 'i-i-s-hfghfghfhhghrh-должность-e/new' });
  this.route('i-i-s-hfghfghfhhghrh-запись-l');
  this.route('i-i-s-hfghfghfhhghrh-запись-e',
  { path: 'i-i-s-hfghfghfhhghrh-запись-e/:id' });
  this.route('i-i-s-hfghfghfhhghrh-запись-e.new',
  { path: 'i-i-s-hfghfghfhhghrh-запись-e/new' });
  this.route('i-i-s-hfghfghfhhghrh-кабинет-l');
  this.route('i-i-s-hfghfghfhhghrh-кабинет-e',
  { path: 'i-i-s-hfghfghfhhghrh-кабинет-e/:id' });
  this.route('i-i-s-hfghfghfhhghrh-кабинет-e.new',
  { path: 'i-i-s-hfghfghfhhghrh-кабинет-e/new' });
  this.route('i-i-s-hfghfghfhhghrh-клиент-l');
  this.route('i-i-s-hfghfghfhhghrh-клиент-e',
  { path: 'i-i-s-hfghfghfhhghrh-клиент-e/:id' });
  this.route('i-i-s-hfghfghfhhghrh-клиент-e.new',
  { path: 'i-i-s-hfghfghfhhghrh-клиент-e/new' });
  this.route('i-i-s-hfghfghfhhghrh-сотрудник-l');
  this.route('i-i-s-hfghfghfhhghrh-сотрудник-e',
  { path: 'i-i-s-hfghfghfhhghrh-сотрудник-e/:id' });
  this.route('i-i-s-hfghfghfhhghrh-сотрудник-e.new',
  { path: 'i-i-s-hfghfghfhhghrh-сотрудник-e/new' });
});

export default Router;
