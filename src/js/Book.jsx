import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import 'pearson-elements/scss/elements.scss'

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

  handleBookClick() {
    if (this.props.onBookClick) {
      this.props.onBookClick(this.props.id);
    }
    else {
      location.href='book.html?bookId=' + this.props.id;
    }    
  }
  
  handleModalOpen() {
    this.setState({modalOpen: true});
  }
  
  handleModalClose() {
    this.setState({modalOpen: false});
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
    const style = {
      color: '#8d8d8d',
      position: 'absolute',
      top: '0px',
      right: '0px'     
    }
    return (
      <div className={`book ${bookCoverExists ? '' : 'no-book-cover'}`}>
        <a href="javascript:void(0);"
           className="container"
           onClick={this.handleBookClick}
           tabIndex="0">
          {this.renderImage(bookCoverExists)}
          <p className="title">{this.props.title}</p>
        </a>
        <a className="info"
           href="javascript:void(0);"
           onClick={this.handleModalOpen}
           tabIndex="0">
          <i className="pe-icon--info-circle"></i>
        </a>
        <Dialog
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={this.handleModalClose}
          className="modal">
          <IconButton
            iconClassName="pe-icon--times" 
            onClick={this.handleModalClose}
            tooltipPosition="bottom-left" 
            style={style} />            
          <div className={`image-container ${bookCoverExists ? '' : 'no-book-cover'}`}>
            {this.renderImage(bookCoverExists)}
          </div>
          <div className="meta-container">
            <p className="header">PUBLICATION INFO</p>
            <p className="body">{this.props.title}</p>
            <p className="footer">{this.props.author}</p>
            <p className="header course-info">COURSE INFO</p>
            <p className="body">Course Name</p>
            <p className="footer">CourseId123</p>
          </div>
          <div className="desc-container">
            {this.props.description}
          </div>                
        </Dialog>
      </div>
    )
  }
}
