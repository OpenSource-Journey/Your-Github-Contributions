import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const UserNameForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  return (
    <>
      <Flex gap={4} justifyContent="center" alignItems="center">
        <Input
          width={{ base: '300px', lg: '350px' }}
          spellCheck={false}
          type="search"
          autoFocus
          placeholder="Enter Your GitHub Username..."
          value={userName}
          onChange={(e) => {
            const { value } = e.target;
            setUserName(value);
          }}
        />
        <Button
          px={4}
          colorScheme="teal"
          disabled={!userName}
          variant="solid"
          onClick={() => navigate(`/contributions/${userName}`)}
        >
          Generate
        </Button>
      </Flex>
    </>
  );
};

export default UserNameForm;
