import { extendTheme } from '@chakra-ui/react';
import '@fontsource/alatsi';

const theme = extendTheme({
    colors: {
        cBlue: '#A8B2B7',
        burntSienna: '#E0705F',
        sepia: '#b87A56',
        blueBell: '#B89fBA',
        vividTangerine: '#FF9F98',
        mauveloud: '#D7838E',
    },
    styles: {
        global: {
            body: {
                bg: 'cBlue',
                color: 'black',
                _dark: {
                    bg: 'black',
                    color: 'cBlue',
                },
            },
        },
    },
    shadows: {
        custom: '0 0 5px 3px black',

        darkC: '0 0 5px 3px #A8B2B7',
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        heading: `'Alatsi', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
});

export default theme;
