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
import { IntlProvider, injectIntl } from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { InternationalSupport } from '@pearson-incubator/aquila-js-core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog';
import Book from '../src/js/Book';
import msgObject from '../translations';

const intlObj = new InternationalSupport(msgObject, 'en');
injectTapEventPlugin();

const bookData = {
  iseT1: false
}
const bookdataeT1 = {
  iseT1: true
}
const BookComp = injectIntl(({date, intl}) => (
    <Book key='123'
    		intl={intl}
        id='123'
        author='author'
        title='title'
        image='image'
        description='description'
        onBookClick={function(){}}
        book={bookData}
        ></Book>
));
const BookCompeT1 = injectIntl(({date, intl}) => (
    <Book key='123'
        intl={intl}
        id='123'
        author='author'
        title='title'
        image='image'
        description='description'
        onBookClick={function(){}}
        storeBookDetails={function(){}}
        book={bookdataeT1}
        />
));

/*const BookCompWithoutBookClk = injectIntl(({date, intl}) => (
    <Book key='123'
        intl={intl}
        id='123'
        author='author'
        title='title'
        image='image'
        description='description'
        storeBookDetails={function(){}}
        book={bookData}
        />
));*/


it('renders correctly', () => {
  const tree = renderer
    .create(<MuiThemeProvider><IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}><BookComp /></IntlProvider></MuiThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders the Book', () => {
  	const component = renderer.create(<MuiThemeProvider><IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}><BookComp /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.children[0].props.onClick({preventDefault(){}});
  tree.children[1].props.onClick({preventDefault(){}});
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders eT1 Book', () => {
    const component = renderer.create(<MuiThemeProvider><IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}><BookCompeT1 /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.children[0].props.onClick({preventDefault(){}});
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/*it('renders without book click', () => {
    const component = renderer.create(<MuiThemeProvider><IntlProvider locale={intlObj.getLocale()} messages={intlObj.getMessages()}><BookCompWithoutBookClk /></IntlProvider></MuiThemeProvider>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.children[0].props.onClick({preventDefault(){}});
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});*/

