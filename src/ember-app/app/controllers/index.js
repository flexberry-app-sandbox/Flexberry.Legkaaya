import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.legkaaya.caption'),
          title: i18n.t('forms.application.sitemap.legkaaya.title'),
          children: [{
            link: 'i-i-s-legkaaya-животные-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-животные-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-животные-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-legkaaya-должность-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-legkaaya-расписание-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-расписание-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-расписание-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-legkaaya-вид-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-вид-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-вид-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-legkaaya-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-сотрудник-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-legkaaya-клетка-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-клетка-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-клетка-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-legkaaya-корм-l',
            caption: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-корм-l.caption'),
            title: i18n.t('forms.application.sitemap.legkaaya.i-i-s-legkaaya-корм-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})