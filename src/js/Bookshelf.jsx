import React, { Component } from 'react';
import { intlShape, injectIntl } from 'react-intl';
import Book from './Book';
import floor from 'lodash/floor'
import Dimensions from 'react-dimensions'

class Bookshelf extends Component {  
  constructor (props) {
    super(props); 
    this.state = {
      //reqMargin: 0,
      checkRows:''
    } 
  }
  componentDidMount() {
    const componentWidth = this.props.containerWidth;
    const bookWidth = 220;
    const booksPerRow = floor(componentWidth / bookWidth);
    const checkRows = this.props.books.length >= booksPerRow ? true : false;
    const margin = ((componentWidth - (bookWidth * booksPerRow) - 13) / booksPerRow) / 2;
    this.setState({
      //reqMargin: margin,
      checkRows: checkRows
    })
  }

  renderBooks() {
    const that = this;
    
    return this.props.books.map(function(book, i) {          
      return (
        <Book key={i}
          intl={that.props.intl}
          id={book.id}
          author={book.author}
          image={book.image}
          title={book.title}
          description={book.description}
          updfUrl={book.updfUrl}   
          bookeditionid={book.bookeditionid}    
          iseT1={book.iseT1}    
          globalBookId={book.globalBookId}
          onBookClick={that.props.onBookClick}
          storeUPdfUrl={that.props.storeUPdfUrl}
          storeBookDetails={that.props.storeBookDetails}
          //reqMargin ={that.state.reqMargin}
        />
      )
    });
  };  
  
  renderEmpty() {    
    return (
      <div className="empty-help" >
        <div className="empty-message" tabIndex="0" />
      </div>         
    ) 
  }

  render() {
    let txtAlign;
    if(this.state.checkRows) {
      txtAlign ='left';
    }else {
      txtAlign ='center';
    }
    return (
      <div id="bookshelf" role="main">
          <div className="bookshelf-body" style={{textAlign:txtAlign}}>
            {(this.props.books.length === 0) ? this.renderEmpty() : this.renderBooks()}
          </div>
          <div id="books-assert-container" role="alert" aria-live="assertive" className="reader-only"></div>
      </div>          
    )    
  }
}

Bookshelf.propTypes = {
  intl: intlShape.isRequired
};

export default Dimensions()(injectIntl(Bookshelf));
