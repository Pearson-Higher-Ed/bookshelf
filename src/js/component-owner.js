import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBlack, fullBlack } from 'material-ui/styles/colors';

import { BookshelfComponent } from './BookshelfComponent';

const muiTheme = getMuiTheme({
  palette: {
    textColor: darkBlack,
    shadowColor: fullBlack
  }
});

class ComponentOwner extends React.Component {
  getChildContext() {
    return {
      muiTheme
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <BookshelfComponent
          books={this.props.books}
          onBookClick={this.props.onBookClick}
          locale={this.props.locale}
          storeBookDetails={this.props.storeBookDetails}
        />
      </MuiThemeProvider>
    );
  }
}

ComponentOwner.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

ComponentOwner.propTypes = {
  books: PropTypes.array.isRequired,
  locale: PropTypes.string,
  onBookClick: PropTypes.func.isRequired,
  storeBookDetails: PropTypes.func.isRequired
};

ComponentOwner.defaultProps = {
  locale: 'en'
};

export default injectIntl(ComponentOwner); // Inject this.props.intl into the component context
