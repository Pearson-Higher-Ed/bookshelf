
import React from 'react';
import ReactDOM from 'react-dom';

// i18n
import { addLocaleData, IntlProvider } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import itLocaleData from 'react-intl/locale-data/it';
import nlLocaleData from 'react-intl/locale-data/nl';
import frJson from './translations/fr.json';
import itJson from './translations/it.json';
import nlJson from './translations/nl.json';
import './main.scss';

import Bookshelf from './src/js/Bookshelf';

const translations = {
  'fr' : frJson,
  'it' : itJson,
  'nl' : nlJson
};

export default class BookshelfComponent {
  constructor(config) {
    addLocaleData(frLocaleData);
    addLocaleData(itLocaleData);
    addLocaleData(nlLocaleData);
    this.init(config);
  }

  init(config) {
    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Bookshelf books={config.books} onBookClick={config.onBookClick} />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}

export Bookshelf from './src/js/Bookshelf';

// Listen for client events to initialize a new Bookshelf component
document.body.addEventListener('o.InitBookshelf', e => new BookshelfComponent(e.detail));
