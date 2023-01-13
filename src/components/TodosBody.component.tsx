import { Box, Heading, SimpleGrid, Text, useColorMode } from '@chakra-ui/react';
import TodoItem from './TodoItem.component';

function TodosBody() {
    const { colorMode } = useColorMode();

    const todosDummies = [
        {
            id: 1,
            description: 'Make todo',
            isChecked: true,
        },
        {
            id: 2,
            description: 'Learn C++',
            isChecked: false,
        },
        {
            id: 3,
            description: 'Read Godot Docs',
            isChecked: false,
        },
        {
            id: 4,
            description: 'Make get started',
            isChecked: false,
        },
    ];

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
            </SimpleGrid>
            <TodoItem todos={todosDummies} />
        </Box>
    );
}

export default TodosBody;
