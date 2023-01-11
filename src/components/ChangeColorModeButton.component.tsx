import { Button, useColorMode } from '@chakra-ui/react';
import { VscColorMode } from 'react-icons/vsc';

function ChangeColorModeButton() {
    const { toggleColorMode } = useColorMode();

    return (
        <Button size="md" variant="ghost" w="100px" onClick={toggleColorMode}>
            <VscColorMode />
        </Button>
    );
}

export default ChangeColorModeButton;
