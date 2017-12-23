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
  body: {
    flex: 1,
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
  }
});
