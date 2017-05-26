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
