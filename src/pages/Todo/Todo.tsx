import { Stack } from '@chakra-ui/react';
import Nadvar from '../../components/Nadvar.component';
import TodosBody from '../../components/TodosBody.component';

function Todo() {
    return (
        <Stack align="center" h="full" spacing={12} w="full">
            <Nadvar />
            <TodosBody />
        </Stack>
    );
}

export default Todo;
