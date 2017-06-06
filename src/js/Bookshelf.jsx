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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Book from './Book';

class Bookshelf extends Component {
  renderBooks() {
    const that = this;
    return this.props.books.map(book => (
      <Book
        key={book.id}
        intl={that.props.intl}
        id={book.id}
        author={book.author}
        image={book.image}
        title={book.title}
        description={book.description}
        book={book}
        onBookClick={that.props.onBookClick}
        storeBookDetails={that.props.storeBookDetails}
      />
      ));
  }

  static renderEmpty() {
    return (
      <div className="empty-help" >
        <div className="empty-message" tabIndex="0" role="article" />
      </div>
    );
  }

  render() {
    return (
      <div id="bookshelf" role="main">
        <div className="bookshelf-body">
          {(this.props.books.length === 0) ? Bookshelf.renderEmpty() : this.renderBooks()}
        </div>
        <div id="books-assert-container" role="alert" aria-live="assertive" className="reader-only" />
      </div>
    );
  }
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired
};

export default injectIntl(Bookshelf);
