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
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: theme.shade3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
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
  infoBtn: {
    borderWidth: 1,
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
    fontWeight: '600',
    fontSize: 12,
  },
  spacer: {
    width: 20,
    height: 20,
  }
});


export const modal = StyleSheet.create({
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
});

