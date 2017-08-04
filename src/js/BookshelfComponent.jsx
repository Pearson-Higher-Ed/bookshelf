/**
PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 *  Copyright © 2017 Pearson Education, Inc.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
* */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import Bookshelf from './Bookshelf';
import msgObject from '../../translations';

const BookshelfComponent = function ViewerComponent(paramsObj) { // eslint-disable-line import/prefer-default-export
  const intlObj = new InternationalSupport(msgObject, paramsObj.locale);

  return (<IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}>
    <Bookshelf
      books={paramsObj.books}
      onBookClick={paramsObj.onBookClick}
      storeBookDetails={paramsObj.storeBookDetails}
    />
  </IntlProvider>);
};

export default BookshelfComponent;
