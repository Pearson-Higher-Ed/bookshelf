import React from 'react';

export default class Book extends React.Component {
  constructor(props) {
    super(props);

    this.handleBookClick = this.handleBookClick.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
  }

  handleBookClick() {
    location.href='book.html?bookId=' + this.props.id;
  }

  handleInfoClick() {
    alert('book info clicked');
  }

  renderImage(bookCoverExists) {
    if (bookCoverExists) {
      return(
        <img className="image" src={this.props.image} />
      )
    }
    else {
      return (<span className="image"></span>)
    }
  }

  render() {
    const bookCoverExists = (this.props.image !== '');

    return (
      <div className={`book ${bookCoverExists ? '' : 'no-book-cover'}`}>
        <a href="javascript:void(0);"
           className="container"
           onClick={this.handleBookClick}
           ui-keypress="{'enter': 'bookCtrl.goToBook(book)'}"
           tabindex="0">
          {this.renderImage(bookCoverExists)}
          <p className="title">{this.props.title}</p>
        </a>
        <a className="info"
           href="javascript:void(0);"
           onClick={this.handleInfoClick}
           tabindex="0">
          <i className="pe-icon--info-circle"></i>
        </a>
      </div>
    )
  }
}