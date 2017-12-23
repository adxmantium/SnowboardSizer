// /styles/main.js

import { StyleSheet } from 'react-native'
import { theme } from './_global'

const resultHeight = 45;

export const main = StyleSheet.create({
  container: {
    backgroundColor: theme.shade5,
    flex: 1,
  },
  nav: {
    height: 65,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.shade3,
    paddingBottom: 5,
  },
  navLandscape: {
    height: 45,
  },
  body: {
    flex: 1,
  },
  bodyLandscape: {
    flexDirection: 'row',
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
  resultContainerLandscape: {
    height: '100%',
    flex: 1,
  },
  adjusterContainer: {
    height: `${100-resultHeight}%`,
  }, 
  adjusterContainerLandscape: {
    height: '100%',
    flex: 1,
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
});
