import React from 'react';
import { IntlProvider } from 'react-intl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import Bookshelf from './Bookshelf';
import msgObject from '../../translations';

export const BookshelfComponent = function ViewerComponent(paramsObj) { // eslint-disable-line import/prefer-default-export
  const intlObj = new InternationalSupport(msgObject, paramsObj.locale);

  return (<IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}>
    <Bookshelf
    	books={paramsObj.books}
      onBookClick={paramsObj.onBookClick}
      storeUPdfUrl={paramsObj.storeUPdfUrl}		
      storeBookDetails={paramsObj.storeBookDetails}
    />
  </IntlProvider>);
};
