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
          caption: i18n.t('forms.application.sitemap.hfghfghfhhghrh.caption'),
          title: i18n.t('forms.application.sitemap.hfghfghfhhghrh.title'),
          children: [{
            link: 'i-i-s-hfghfghfhhghrh-должность-l',
            caption: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-должность-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-hfghfghfhhghrh-кабинет-l',
            caption: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-кабинет-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-hfghfghfhhghrh-клиент-l',
            caption: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-клиент-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-hfghfghfhhghrh-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-сотрудник-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-hfghfghfhhghrh-запись-l',
            caption: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.hfghfghfhhghrh.i-i-s-hfghfghfhhghrh-запись-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})