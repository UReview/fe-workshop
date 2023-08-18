import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps): JSX.Element => {
  return (
    <Center minH="100vh" minW="100vw" display="flex" flexDir="column">
      {children}
    </Center>
  );
};

export default LoginLayout;
