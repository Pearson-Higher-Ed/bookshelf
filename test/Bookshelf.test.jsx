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
**/

/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import Bookshelf from '../src/js/Bookshelf';
import msgObject from '../translations';
import data from '../demo/data/BookshelfData.json';

injectTapEventPlugin();
const intlObj = new InternationalSupport(msgObject, 'en');

it('renders correctly', () => {
  const tree = renderer
    .create(<MuiThemeProvider><IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}><Bookshelf onBookClick={function(){}} books={data} /></IntlProvider></MuiThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders empty', () => {
  const tree = renderer
    .create(<MuiThemeProvider><IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}><Bookshelf books={[]} onBookClick={function(){}} /></IntlProvider></MuiThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



