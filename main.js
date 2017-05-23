import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import itLocaleData from 'react-intl/locale-data/it';
import nlLocaleData from 'react-intl/locale-data/nl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';

import ComponentOwner from './src/js/component-owner';
import msgObject from './translations';
import './main.scss';

export default class BookshelfDemo {
  constructor(config) {
    addLocaleData(frLocaleData);
    addLocaleData(itLocaleData);
    addLocaleData(nlLocaleData);
    this.init(config);
  }

  init(config) {
    // const locale = config.locale ? config.locale : 'en';
    this.intlObj = new InternationalSupport(msgObject, config.locale);

    ReactDOM.render(
      <IntlProvider locale={this.intlObj.getLocale()} messages={this.intlObj.getMessages()}>
        <ComponentOwner
          books={config.books}
          onBookClick={config.onBookClick}
          locale={config.locale}
          storeBookDetails={config.storeBookDetails}
        />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }
}

export { BookshelfComponent } from './src/js/BookshelfComponent';

// Listen for client events to initialize a new Bookshelf component
document.body.addEventListener('o.InitBookshelf', e => new BookshelfDemo(e.detail));
