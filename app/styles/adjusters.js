// /styles/main.js

import { StyleSheet } from 'react-native'
import { theme } from './_global'

const containerPadding = 20;

export const adj = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: containerPadding,
    paddingRight: containerPadding,
    justifyContent: 'center',
  },
  innerContainer: {

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
    textDecorationLine: 'underline',
    textDecorationColor: theme.shade1,
  },
  rideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rideBtn: {
    borderRadius: 3,
    padding: 15,
    backgroundColor: theme.shade4,
  },
  rideBtnActive: {
    backgroundColor: theme.shade3,
    padding: 20,
  },
  rideBtnTxt: {
    color: theme.shade5,
    fontWeight: '500',
  }
});
