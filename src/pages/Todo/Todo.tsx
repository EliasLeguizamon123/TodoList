import { Stack } from '@chakra-ui/react';
import TodosBody from '../../components/TodosBody.component';

function Todo() {
    return (
        <Stack align="center" h="full" pt="6rem" w="full">
            <TodosBody />
        </Stack>
    );
}

export default Todo;
