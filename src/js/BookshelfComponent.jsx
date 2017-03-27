import React from 'react';
import { IntlProvider } from 'react-intl';
import InternationalSupport from './InternationalSupport';
import Bookshelf from './Bookshelf';

export const BookshelfComponent = function ViewerComponent(paramsObj) { // eslint-disable-line import/prefer-default-export
  const intlObj = new InternationalSupport(paramsObj.locale);
  return (<IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}>
    <Bookshelf
    	books={paramsObj.books}
      onBookClick={paramsObj.onBookClick}
      storeUPdfUrl={paramsObj.storeUPdfUrl}		
      storeBookDetails={paramsObj.storeBookDetails}
    />
  </IntlProvider>);
};
