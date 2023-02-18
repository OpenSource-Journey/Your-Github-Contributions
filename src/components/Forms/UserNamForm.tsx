import {
  Button,
  Flex,
  IconButton,
  Input,
  Tooltip,
  useClipboard,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

const UserNameForm = () => {
  const navigate = useNavigate();
  const { onCopy, setValue, hasCopied } = useClipboard('');
  const [userName, setUserName] = useState<string>('');

  useMemo(() => {
    const url = `${window.location.protocol}//${window.location.host}/contributions/${userName}`;

    setValue(url);

    return url;
  }, [userName, setValue]);

  useEffect(() => {
    if (hasCopied) {
      alert('Contributions page link copied successfully!');
    }
  }, [hasCopied]);

  return (
    <>
      <Flex gap={4} justifyContent="center" alignItems="center">
        <Input
          width={{ base: '250px', lg: '300px' }}
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
        <Tooltip label="Copy Contributions Page URL">
          <IconButton
            disabled={!userName}
            aria-label="contributions-page-link"
            icon={<HiOutlineClipboardCopy />}
            onClick={onCopy}
          />
        </Tooltip>
      </Flex>
    </>
  );
};

export default UserNameForm;
