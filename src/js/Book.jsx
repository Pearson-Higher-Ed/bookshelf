import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { messages } from './defaultMessages';

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.handleBookClick = this.handleBookClick.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = {
      modalOpen: false
    };
  }

  handleBookClick(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (this.props.onBookClick) {
      if (this.props.book.iseT1) {
        this.props.onBookClick(this.props.id, this.props.book.iseT1);
        this.props.storeBookDetails(this.props.book);
      } else {
        this.props.onBookClick(this.props.id);
      }
    } else {
      window.location.href = `book.html?bookId=${this.props.id}`;
    }
  }

  handleModalOpen(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({ modalOpen: true });
  }

  handleModalClose(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.setState({ modalOpen: false });
  }

  renderImage(bookCoverExists) {
    if (bookCoverExists) {
      return (
        <img className="image" src={this.props.image} alt={`${this.props.title} cover`} />
      );
    }

    return (<span className="image" />);
  }

  render() {
    const { formatMessage } = this.props.intl;
    const bookCoverExists = (this.props.image !== '');
    const style = {
      modal: {
        width: '59%',
        maxWidth: '59%',
        bodyStyle: {
          padding: '5.9% 6.4%'
        }
      }
    };

    return (
      <div className={`book ${bookCoverExists ? '' : 'no-book-cover'}`}>
        <a
          className="bookContainer"
          onClick={this.handleBookClick}
          role="link"
          tabIndex="0"
        >
          {this.renderImage(bookCoverExists)}
          <p className="title">{this.props.title}</p>
        </a>
        <a
          className="info"
          role="link"
          onClick={this.handleModalOpen}
          tabIndex="0"
          aria-label={formatMessage(messages.moreInfo)}
        >{''}</a>
        <Dialog
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={this.handleModalClose}
          className="modal"
          contentStyle={style.modal}
          bodyStyle={style.modal.bodyStyle}
        >
          <div
            className="cancelBtn"
            role="presentation"
            onClick={this.handleModalClose}
            aria-label={formatMessage(messages.moreInfoCloseIcon)}
          />
          <div className={`image-container ${bookCoverExists ? '' : 'no-book-cover'}`}>
            {this.renderImage(bookCoverExists)}
          </div>
          <div className="meta-container">
            <p className="header">{formatMessage(messages.publicationInfo)}</p>
            <p className="body">{this.props.title}</p>
            <p className="footer">{this.props.author}</p>
            <p className="header course-info">{formatMessage(messages.courseInfo)}</p>
            <p className="body">Course Name</p>
            <p className="footer">CourseId123</p>
          </div>
          <div className="desc-container">
            {this.props.description}
          </div>
        </Dialog>
      </div>
    );
  }
}

Book.defaultProps = {
  storeBookDetails: null
};

Book.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onBookClick: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  intl: PropTypes.object.isRequired,
  storeBookDetails: PropTypes.func
};
