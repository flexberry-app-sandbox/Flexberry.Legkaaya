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
          caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.caption'),
          title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.сотрудники.title'),
            children: [{
              link: 'i-i-s-legkaaya-должность-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.сотрудники.i-i-s-legkaaya-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.сотрудники.i-i-s-legkaaya-должность-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-legkaaya-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.сотрудники.i-i-s-legkaaya-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.сотрудники.i-i-s-legkaaya-сотрудник-l.title'),
              icon: 'address card',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.информация-о-животных.caption'),
            title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.информация-о-животных.title'),
            children: [{
              link: 'i-i-s-legkaaya-вид-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.информация-о-животных.i-i-s-legkaaya-вид-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.информация-о-животных.i-i-s-legkaaya-вид-l.title'),
              children: null
            }, {
              link: 'i-i-s-legkaaya-животные-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.информация-о-животных.i-i-s-legkaaya-животные-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.информация-о-животных.i-i-s-legkaaya-животные-l.title'),
              icon: 'folder open',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.caption'),
            title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.title'),
            children: [{
              link: 'i-i-s-legkaaya-корм-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.i-i-s-legkaaya-корм-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.i-i-s-legkaaya-корм-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-legkaaya-расписание-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.i-i-s-legkaaya-расписание-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.i-i-s-legkaaya-расписание-l.title'),
              icon: 'address card',
              children: null
            }, {
              link: 'i-i-s-legkaaya-клетка-l',
              caption: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.i-i-s-legkaaya-клетка-l.caption'),
              title: i18n.t('forms.application.sitemap.и-с-з-о-о-п-а-р-к.уход.i-i-s-legkaaya-клетка-l.title'),
              children: null
            }]
          }]
        }
      ]
    };
  }),
})