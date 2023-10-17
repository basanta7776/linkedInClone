import Link from "next/link";
import { Avatar, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { SearchBar } from "./input";

export default function Nav() {
  return (
    <HStack padding={2}>
      <Flex style={{ justifyContent: "space-between", width: "100vw" }}>
        <HStack>
          <Link href="/" className="logo">
            <Image src="/linkedin1.png" alt="" width={30} height={30} />
          </Link>
          <SearchBar />
        </HStack>
        <HStack>
          <Link href="/" className="home">
            {" "}
            Home
          </Link>
          <Link href="/mynetwork" className="mynetwork">
            My Network
          </Link>
          <Link href="jobs" className="jobs">
            Jobs
          </Link>
          <Link href="messaging" className="messaging">
            Messaging
          </Link>
          <Link href="notification" className="notification">
            Notification
          </Link>
          <Avatar size="sm"/>
        </HStack>
      </Flex>
    </HStack>
  );
}
