/* eslint-disable no-alert,no-new */
import injectTapEventPlugin from 'react-tap-event-plugin';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import tsLocaleData from 'react-intl/locale-data/ts';
import BookshelfComponent from '../main';
import BookshelfData from './data/BookshelfData.json';


// function getParameterByName(name, url) {
//   if (!url) {
//     url = window.location.href;
//   }
//   name = name.replace(/[\[\]]/g, '\\$&');
//   const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
//   const results = regex.exec(url);
//   if (!results) {
//     return null;
//   }
//   if (!results[2]) {
//     return '';
//   }
//   return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }

window.onBookClick = (bookId) => {
  window.alert(`Book has been clicked. Route to book page with bookId = ${bookId}`);
};

const storeBookDetails = () => {};

const localeData = {
  en: enLocaleData,
  fr: frLocaleData,
  ts: tsLocaleData
};

function getParam(item) {
  const svalue = window.location.search.match(new RegExp(`[?&]${item}=([^&]*)(&?)`, 'i'));
  return svalue ? svalue[1] : svalue;
}

function init() {
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();
  const region = getParam('lang') || 'en';
  addLocaleData(localeData[region.split('-')[0]]);

  // Create new instance of bookshelf component
  new BookshelfComponent({
    elementId: 'bookshelf-demo',
    locale: region,
    books: BookshelfData,
    onBookClick: window.onBookClick,
    storeBookDetails
  });
}

window.onload = init;
