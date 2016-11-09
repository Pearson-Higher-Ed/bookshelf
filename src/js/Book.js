import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import SvgIcon from 'material-ui/SvgIcon';

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
      modal:{
        width:'59%',
        maxWidth: '59%',
        bodyStyle: {
          padding:'5.9% 6.4%'
        }
      },
      cancelIcon: {
        color: '#8d8d8d',
        position: 'absolute',
        top: '19px',
        right: '19px',
        height: '18.7px',
        width: '18px',
        cursor: 'pointer'
      },
      moreInfo: {
        height: '18px',
        width: '18px'
      }    
    }
    const MoreinfoIcon = (props) => (
      <SvgIcon {...props}>
        <path d="M192.984304,258.45713 L189.015304,258.45713 C188.559435,258.45713 188.188478,258.086565 188.188478,257.630696 C188.188478,257.174826 188.559435,256.803478 189.015304,256.803478 L190.172783,256.803478 L190.172783,252.503826 L189.677,252.503826 C189.22113,252.503826 188.850174,252.133261 188.850174,251.677391 C188.850174,251.221522 189.22113,250.850565 189.677,250.850565 L191,250.850565 C191.45587,250.850565 191.826826,251.221522 191.826826,251.677391 L191.826826,256.803478 L192.984304,256.803478 C193.440565,256.803478 193.811522,257.174826 193.811522,257.630696 C193.811522,258.086565 193.440565,258.45713 192.984304,258.45713 M190.668957,247.54287 C191.307565,247.54287 191.826826,248.062522 191.826826,248.700348 C191.826826,249.338565 191.307565,249.857826 190.668957,249.857826 C190.030739,249.857826 189.511478,249.338565 189.511478,248.700348 C189.511478,248.062522 190.030739,247.54287 190.668957,247.54287 M191,244 C186.037478,244 182,248.037478 182,253 C182,257.962913 186.037478,262 191,262 C195.962522,262 200,257.962913 200,253 C200,248.037478 195.962522,244 191,244" id="ic_info" fill="#b7bbbf"></path>
      </SvgIcon>
    );
    const CancelIcon = (props) => (
      <SvgIcon {...props}>
        <path d="M712.993036,23.3253012 L720.736289,15.2808193 C721.026024,14.9878313 721.026024,14.5128916 720.735855,14.2199036 C720.445687,13.9266988 719.975518,13.9266988 719.685349,14.2199036 L711.976795,22.005012 L704.268458,14.2199036 C703.978072,13.9266988 703.50812,13.9266988 703.217735,14.2199036 C702.927566,14.5128916 702.927566,14.9878313 703.217518,15.2808193 L710.960554,23.3253012 L703.217735,31.3697831 C702.927566,31.6627711 702.927566,32.1377108 703.217735,32.4306988 C703.507687,32.7234699 703.978072,32.7239036 704.268458,32.4306988 L711.976795,24.6455904 L719.685349,32.4306988 C719.975518,32.7239036 720.44612,32.7234699 720.735855,32.4306988 C721.026024,32.1377108 721.026024,31.6627711 720.735855,31.3697831 L712.993036,23.3253012 Z" id="ic_cancel" fill="#8d8d8d"></path>
      </SvgIcon>
    );
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
          <MoreinfoIcon viewBox="182 244 18 18" style={style.moreInfo}/>
        </a>
        <Dialog
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={this.handleModalClose}
          className="modal"
          contentStyle={style.modal}
          bodyStyle= {style.modal.bodyStyle}>
          <CancelIcon onClick={this.handleModalClose} viewBox="703 14 18 18.7" style={style.cancelIcon}/>            
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
