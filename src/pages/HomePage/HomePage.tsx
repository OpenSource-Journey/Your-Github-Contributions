import {
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Mockup1ImageDark from '../../assets/images/Mockup-1.png';
import Mockup2ImageDark from '../../assets/images/Mockup-2.png';
import Mockup1ImageLight from '../../assets/images/Mockup-light-1.png';
import Mockup2ImageLight from '../../assets/images/Mockup-light-2.png';
import UserNameForm from '../../components/Forms/UserNamForm';

import { motion } from 'framer-motion';
import { BsCheckCircle } from 'react-icons/bs';

const HomePage = () => {
  const SwitchMockup1 = useColorModeValue(Mockup1ImageLight, Mockup1ImageDark);
  const SwitchMockup2 = useColorModeValue(Mockup2ImageLight, Mockup2ImageDark);

  return (
    <Grid gap={8}>
      <Link
        _hover={{ textDecoration: 'none' }}
        href="https://github.com/OpenSource-Journey/Your-Github-Contributions"
        margin="auto"
        target="_blank"
        width="max-content"
      >
        <Button
          as={motion.button}
          border="1px"
          borderColor="gray.300"
          display="block"
          leftIcon={<FaGithub className="star-on-github" />}
          margin="auto"
          rounded="24px"
          shadow="md"
          whileHover={{
            scale: 1.2,
          }}
        >
          Star on GitHub
        </Button>
      </Link>
      <Text
        fontSize={{ base: '4xl', lg: '6xl' }}
        fontWeight="semibold"
        lineHeight={1}
        mb={4}
        textAlign="center"
      >
        Generate your contributions ✨ summary in seconds
      </Text>
      <UserNameForm />
      <Text fontWeight="medium" lineHeight={1} textAlign="center">
        Just enter your GitHub username and we&apos;ll generate a contributions
        summary page for you.
      </Text>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        <GridItem
          as={motion.div}
          colSpan={{ base: 1, lg: 2 }}
          order={{ base: 1, lg: 0 }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Image src={SwitchMockup1} />
        </GridItem>

        <GridItem pt={8}>
          <Flex alignItems="center" height="100%">
            <List
              fontSize="2xl"
              lineHeight={1.5}
              ml={{ base: 4 }}
              width="max-content"
            >
              <ListItem>
                <ListIcon as={BsCheckCircle} color="teal" /> Contribution
                Summary Widgets
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheckCircle} color="teal" /> Pull Requests
                Distribution Graph
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheckCircle} color="teal" /> Issues Distribution
                Graph
              </ListItem>
            </List>
          </Flex>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        <GridItem pt={8}>
          <Flex alignItems="center" height="100%">
            <List
              fontSize="2xl"
              lineHeight={1.5}
              ml={{ base: 4 }}
              width="max-content"
            >
              <ListItem>
                <ListIcon as={BsCheckCircle} color="teal" /> Contribution Graph
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheckCircle} color="teal" /> Contributed
                Organizations
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheckCircle} color="teal" /> Popular
                Repositories
              </ListItem>
            </List>
          </Flex>
        </GridItem>

        <GridItem
          as={motion.div}
          colSpan={{ base: 1, lg: 2 }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <Image src={SwitchMockup2} />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default HomePage;
