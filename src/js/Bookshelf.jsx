import React, { Component } from 'react';
import Book from './Book';
import { messages } from './defaultMessages';

export default class Bookshelf extends Component {  
  constructor (props) {
    super(props);  
  }

  renderBooks() {
    const that = this;
    
    return this.props.books.map(function(book, i) {          
      return (
        <Book key={i}
          id={book.id}
          author={book.author}
          image={book.image}
          title={book.title}
          description={book.description}
          onBookClick={that.props.onBookClick}
        />
      )
    });
  };  
  
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
              {(this.props.books.length === 0) ? this.renderEmpty() : this.renderBooks()}
          </div>
          <div id="books-assert-container" role="alert" aria-live="assertive" className="reader-only"></div>
      </div>          
    )    
  }
}
