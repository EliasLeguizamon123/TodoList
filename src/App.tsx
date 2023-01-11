import { Box, useColorMode } from '@chakra-ui/react';
import Router from './routes/Router.router';

function App() {
    const { colorMode } = useColorMode();

    return (
        <Box bg={colorMode === 'light' ? 'cBlue' : 'black'} h="100vh" w="100vw">
            <Router />
        </Box>
    );
}

export default App;
