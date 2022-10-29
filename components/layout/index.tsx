import { Link, HStack } from "@chakra-ui/react";
import React from "react";

type Props = { children: JSX.Element };

const Layout = (props: Props) => {
  return (
    <>
      <HStack spacing="24px" bgColor={"blue.300"} paddingX="4" paddingY="8">
        <Link href="https://www.instagram.com/eekrain/">Coba</Link>
      </HStack>

      {props.children}
    </>
  );
};

export default Layout;
