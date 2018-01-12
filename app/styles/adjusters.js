// /styles/main.js

import { StyleSheet, Dimensions, Platform } from 'react-native'
import { theme, androidFontFamily } from './_global'

const { height, width } = Dimensions.get('window');
const isSE = Platform.OS === 'ios' && height === 568;
const is_ipad = Platform.OS === 'ios' && width > 700;

const containerPadding = 20;
const ipadPadding = 150

const _adj = {
  container: {
    flex: 1,
    paddingLeft: is_ipad ? ipadPadding : containerPadding,
    paddingRight: is_ipad ? ipadPadding : containerPadding,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headInner: {
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '200',
    color: theme.shade2,
  },
  value: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.shade2,
  },
  value2: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.shade1,
    marginLeft: 5,
    marginRight: 5,
    textDecorationLine: 'underline',
    textDecorationColor: theme.shade1,
  },
  value3: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.shade2,
  },
  rideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rideBtn: {
    borderRadius: 3,
    padding: isSE ? 8 : 15,
    backgroundColor: theme.shade4,
  },
  rideBtnActive: {
    backgroundColor: theme.shade3,
    padding: isSE ? 10 : 20,
  },
  rideBtnTxt: {
    color: theme.shade5,
    fontWeight: '500',
  }
};

if( Platform.OS === 'android' ){

  _adj.title.fontSize = 16;
  _adj.title.fontWeight = '500';
  _adj.rideBtn.padding = 9;
  _adj.rideBtnActive.padding = 11;

  const fontFamilyAdditions = [
    _adj.title, 
    _adj.value,
    _adj.value2,
    _adj.value3,
    _adj.rideBtnTxt,
  ];

  fontFamilyAdditions.forEach(prop => prop.fontFamily = androidFontFamily);

}

export const adj = StyleSheet.create(_adj);
