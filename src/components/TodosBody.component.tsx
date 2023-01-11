import { Box, Heading, SimpleGrid, Text, useColorMode } from '@chakra-ui/react';
import ChangeColorModeButton from './ChangeColorModeButton.component';

function TodosBody() {
    const { colorMode } = useColorMode();

    return (
        <Box
            border="1px solid"
            borderRadius="lg"
            boxShadow={colorMode === 'light' ? 'custom' : 'darkC'}
            p={4}
            textAlign="center"
            w="40vw"
        >
            <SimpleGrid columns={2} p={4} spacing={6}>
                <Heading>Todo List</Heading>
                <ChangeColorModeButton />
            </SimpleGrid>
            <Text>List</Text>
        </Box>
    );
}

export default TodosBody;
