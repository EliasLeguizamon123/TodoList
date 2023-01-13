import { Button, useColorMode } from '@chakra-ui/react';
import { RiEyeLine, RiEyeCloseLine } from 'react-icons/ri';

function ChangeColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button size="md" variant="ghost" w="100px" onClick={toggleColorMode}>
            {colorMode === 'light' ? <RiEyeLine /> : <RiEyeCloseLine />}
        </Button>
    );
}

export default ChangeColorModeButton;
