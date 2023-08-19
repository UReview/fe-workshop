import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <Center minH="100vh" minW="100vw" display="flex" flexDir="column">
      {children}
    </Center>
  );
};

export default ProfileLayout;
