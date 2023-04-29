import {
  Button,
  Flex,
  IconButton,
  Input,
  Tooltip,
  useClipboard,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { showToastMessage } from 'utils/toastUtils';

const UserNameForm = () => {
  const navigate = useNavigate();
  const { onCopy, setValue, hasCopied } = useClipboard('');
  const [userName, setUserName] = useState<string>('');

  useMemo(() => {
    const url = `${window.location.protocol}//${window.location.host}/${userName}`;

    setValue(url);

    return url;
  }, [userName, setValue]);

  useEffect(() => {
    if (hasCopied) {
      showToastMessage('success', 'Link copied successfully!');
    }
  }, [hasCopied]);

  const handleSubmit = () => {
    userName && navigate(`/${userName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex alignItems="center" gap={4} justifyContent="center" wrap="wrap">
        <Input
          autoFocus
          isRequired
          placeholder="Enter Your GitHub Username..."
          spellCheck={false}
          type="search"
          value={userName}
          width={{ base: '250px', lg: '300px' }}
          onChange={(e) => {
            const { value } = e.target;
            setUserName(value);
          }}
        />
        <Tooltip isDisabled={!userName} label="Generate">
          <Button
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            colorScheme="teal"
            isDisabled={!userName}
            px={4}
            type="submit"
            variant="solid">
            Generate
          </Button>
        </Tooltip>
        <Tooltip isDisabled={!userName} label="Copy Contributions Page URL">
          <IconButton
            aria-label="contributions-page-link"
            icon={<HiOutlineClipboardCopy />}
            isDisabled={!userName}
            onClick={() => userName && onCopy()}
          />
        </Tooltip>
      </Flex>
    </form>
  );
};

export default UserNameForm;
