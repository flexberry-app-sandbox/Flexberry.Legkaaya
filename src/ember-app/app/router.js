import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-legkaaya-вид-l');
  this.route('i-i-s-legkaaya-вид-e',
  { path: 'i-i-s-legkaaya-вид-e/:id' });
  this.route('i-i-s-legkaaya-вид-e.new',
  { path: 'i-i-s-legkaaya-вид-e/new' });
  this.route('i-i-s-legkaaya-должность-l');
  this.route('i-i-s-legkaaya-должность-e',
  { path: 'i-i-s-legkaaya-должность-e/:id' });
  this.route('i-i-s-legkaaya-должность-e.new',
  { path: 'i-i-s-legkaaya-должность-e/new' });
  this.route('i-i-s-legkaaya-животные-l');
  this.route('i-i-s-legkaaya-животные-e',
  { path: 'i-i-s-legkaaya-животные-e/:id' });
  this.route('i-i-s-legkaaya-животные-e.new',
  { path: 'i-i-s-legkaaya-животные-e/new' });
  this.route('i-i-s-legkaaya-клетка-l');
  this.route('i-i-s-legkaaya-клетка-e',
  { path: 'i-i-s-legkaaya-клетка-e/:id' });
  this.route('i-i-s-legkaaya-клетка-e.new',
  { path: 'i-i-s-legkaaya-клетка-e/new' });
  this.route('i-i-s-legkaaya-корм-l');
  this.route('i-i-s-legkaaya-корм-e',
  { path: 'i-i-s-legkaaya-корм-e/:id' });
  this.route('i-i-s-legkaaya-корм-e.new',
  { path: 'i-i-s-legkaaya-корм-e/new' });
  this.route('i-i-s-legkaaya-расписание-l');
  this.route('i-i-s-legkaaya-расписание-e',
  { path: 'i-i-s-legkaaya-расписание-e/:id' });
  this.route('i-i-s-legkaaya-расписание-e.new',
  { path: 'i-i-s-legkaaya-расписание-e/new' });
  this.route('i-i-s-legkaaya-сотрудник-l');
  this.route('i-i-s-legkaaya-сотрудник-e',
  { path: 'i-i-s-legkaaya-сотрудник-e/:id' });
  this.route('i-i-s-legkaaya-сотрудник-e.new',
  { path: 'i-i-s-legkaaya-сотрудник-e/new' });
});

export default Router;
