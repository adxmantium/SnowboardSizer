// /styles/main.js

import { StyleSheet, Dimensions, Platform } from 'react-native'
import { theme, androidFontFamily } from './_global'

const { height, width } = Dimensions.get('window');
const isX = Platform.OS === 'ios' && height === 812;
const isSE = Platform.OS === 'ios' && height === 568;

const resultHeight = 50;

const _main = {
  container: {
    backgroundColor: theme.shade5,
    flex: 1,
  },
  nav: {
    height: isX ? 70 : 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.shade3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
  },
  body: {
    flex: 1,
    paddingBottom: isX ? 25 : 0,
  },
  navTitle: {
    color: theme.shade5,
    fontWeight: '700',
    fontSize: 24,
  },
  resultContainer: {
    height: `${resultHeight}%`,
    backgroundColor: theme.shade3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adjusterContainer: {
    height: `${100-resultHeight}%`,
  }, 
  resultTitle: {
    color: theme.shade5,
    fontSize: 20,
    fontWeight: '200',
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: '200',
    color: theme.shade5,
  },
  resultVal: {
    color: theme.shade5,
    fontSize: 40,
    fontWeight: '300',
  },
  infoBtn: {
    borderWidth: 2,
    borderColor: theme.shade5,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 3,
  },
  infoTxt: {
    color: theme.shade5,
    fontWeight: '800',
    fontSize: 12,
  },
  spacer: {
    width: 20,
    height: 20,
  }
};


// styles for info modal
const _modal = {
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    padding: 20,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginBottom: 40,
    marginTop: 15,
  },
  closeTxt: {
    color: theme.shade5,
    fontSize: 20,
  },
  title: {
    color: theme.shade5,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: '600',
  },
  parag: {
    marginBottom: 20,
  },
  label: {
    color: theme.shade5,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },
  val: {
    color: theme.shade5,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
  }
};


// style for intro modal
const _intro = {
  container: {
    backgroundColor: 'rgba(247, 249, 251,0.96)',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  }, 
  title: {
    color: theme.shade5,
    fontWeight: '500',
    fontSize: isSE ? 22 : 30,
  },
  slide: {
    backgroundColor: theme.shade3, 
    borderRadius: 3,
  },
  head: {
    padding: 20,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  body: {
    backgroundColor: theme.shade5,
    borderWidth: 1,
    borderColor: theme.shade3,
    padding: 20,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  text: {
    color: theme.shade3,
    fontWeight: '300',
    fontSize: isSE ? 16 : 20,
  },
  notLast: {
    marginBottom: 20,
  },
  nextBtn: {
    paddingTop: 40,
  },
  nextBtnText: {
    color: theme.shade3, 
    fontSize: 24, 
    fontWeight: '200',
    textAlign: 'center',
  }
};

// adjust styling for android
if( Platform.OS === 'android' ){

  _main.nav.height = 50;
  _modal.val.lineHeight = 28;
  _intro.text.fontSize = 18;

  const fontFamilyAdditions = [
    _main.navTitle,
    _main.resultTitle,
    _main.resultLabel,
    _main.resultVal,
    _modal.closeTxt,
    _modal.title,
    _modal.label,
    _modal.val,
    _intro.title, 
  ];

  fontFamilyAdditions.forEach(prop => prop.fontFamily = androidFontFamily);

}

export const main = StyleSheet.create(_main);
export const modal = StyleSheet.create(_modal);
export const intro = StyleSheet.create(_intro);
