import React, { PropTypes } from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { messages } from './defaultMessages';
import Book from './Book';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBlack, fullBlack } from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
  palette: {    
    textColor: darkBlack,    
    shadowColor: fullBlack
  }
});

class Bookshelf extends React.Component {  
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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="bookshelf" role="main">
            <div className="bookshelf-body">             
                {(this.props.books.length === 0) ? this.renderEmpty() : this.renderBooks()}
            </div>
            <div id="books-assert-container" role="alert" aria-live="assertive" className="reader-only"></div>
        </div>
      </MuiThemeProvider>           
    )    
  }
}

Bookshelf.propTypes = {
  intl: intlShape.isRequired,
  locale: React.PropTypes.string,
  books: React.PropTypes.array,
  onBookClick: React.PropTypes.func
};

export default injectIntl(Bookshelf); // Inject this.props.intl into the component context
