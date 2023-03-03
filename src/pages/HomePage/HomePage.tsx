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
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import UserNameForm from "../../components/Forms/UserNamForm";
import Mockup1Image from "../../assets/images/Mockup-1.png";
import Mockup2Image from "../../assets/images/Mockup-2.png";

import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Grid gap={8}>
      <Link
        _hover={{ textDecoration: "none" }}
        href="https://github.com/OpenSource-Journey/Your-Github-Contributions"
        target="_blank"
      >
        <Button
          as={motion.button}
          whileHover={{
            scale: 1.2,
          }}
          border="1px"
          borderColor="gray.300"
          shadow="md"
          rounded="24px"
          display="block"
          margin="auto"
          leftIcon={<FaGithub className="star-on-github" />}
        >
          Star on GitHub
        </Button>
      </Link>
      <Text
        lineHeight={1}
        fontSize={{ base: "4xl", lg: "6xl" }}
        fontWeight="semibold"
        textAlign="center"
        mb={4}
      >
        Generate your contributions ✨ summary in seconds
      </Text>
      <UserNameForm />
      <Text lineHeight={1} fontWeight="medium" textAlign="center">
        Just enter your GitHub username and we'll generate a contributions
        summary page for you.
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        <GridItem
          as={motion.div}
          whileHover={{
            scale: 1.1,
          }}
          colSpan={{ base: 1, lg: 2 }}
          order={{ base: 1, lg: 0 }}
        >
          <Image src={Mockup1Image} />
        </GridItem>

        <GridItem pt={8}>
          <Flex height="100%" alignItems="center">
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
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        <GridItem pt={8}>
          <Flex height="100%" alignItems="center">
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
          whileHover={{
            scale: 1.1,
          }}
          colSpan={{ base: 1, lg: 2 }}
        >
          <Image src={Mockup2Image} />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default HomePage;
