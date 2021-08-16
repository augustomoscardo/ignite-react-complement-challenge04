import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#EDF2F7',
      }
    }
  },
  colors: {
    white: '#F5F8FA',
    black: '#47585B',
    yellow: '#FFBA08'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
})