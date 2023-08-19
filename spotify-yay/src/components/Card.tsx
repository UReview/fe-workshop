import { User } from "@/context/useUserContext";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Heading,
  useColorMode,
  Button,
  CardFooter,
} from "@chakra-ui/react";

interface ProfileCardProps {
  user: User;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.user.images[0].url}
        alt="Spotify Profile Pics"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.user.display_name}</Heading>
          <Text py="2">
            Followers - {props.user.followers.total.toLocaleString()}
          </Text>
        </CardBody>
      </Stack>

      <CardFooter>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
