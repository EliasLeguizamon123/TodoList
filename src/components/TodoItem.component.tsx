import {
    Box,
    Button,
    Checkbox,
    SimpleGrid,
    Stack,
    Text,
    useColorMode,
} from '@chakra-ui/react';
import { Todo } from '../models/todo.model';
import { AiOutlineCloseSquare } from 'react-icons/ai';

export interface props {
    todos: Todo[];
}

function TodoItem(props: props) {
    const { colorMode } = useColorMode();

    return (
        <>
            {props.todos.map((todo) => (
                <Stack key={todo.id} p={2} w="full">
                    <SimpleGrid columns={3} gap={4}>
                        <Box w="full">
                            <Checkbox isChecked={todo.isChecked} />
                        </Box>
                        <Box w="full">
                            <Text as={todo.isChecked ? 'del' : 'i'}>
                                {todo.description}
                            </Text>
                        </Box>
                        <Box w="full">
                            <Button
                                color={colorMode === 'dark' ? 'cBlue' : 'black'}
                                variant="link"
                            >
                                <AiOutlineCloseSquare />
                            </Button>
                        </Box>
                    </SimpleGrid>
                </Stack>
            ))}
        </>
    );
}

export default TodoItem;
