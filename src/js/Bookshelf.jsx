import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { messages } from './defaultMessages';
import Book from './Book';

const renderBooks = (books) => books.map((book, i) => (
  <Book key={i}
        id={book.id}
        author={book.author}
        image={book.image}
        title={book.title}
        description={book.description}
  />)
);

class Bookshelf extends React.Component {
  renderEmpty() {
    const { formatMessage } = this.props.intl;
    
    return (
      <div className="empty-help" >
          <div className="empty-message" tabindex="0">
            <p>{formatMessage(messages.emptyMessage)}</p>                
          </div>
      </div>         
    ) 
  }

  render() {    
    return (
      <div id="bookshelf" role="main">
          <div className="bookshelf-body">             
              {(this.props.books.length === 0) ? this.renderEmpty() : renderBooks(this.props.books)}
          </div>
          <div id="books-assert-container" role="alert" aria-live="assertive" class="reader-only"></div>
      </div>           
    )    
  }
}

Bookshelf.propTypes = {
  intl: intlShape.isRequired,
  locale: React.PropTypes.string,
  books: React.PropTypes.array
};

export default injectIntl(Bookshelf); // Inject this.props.intl into the component context
