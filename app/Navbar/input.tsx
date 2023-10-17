"use client";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchBar() {
  return (
    <div className="searchbar">
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon w={4} h={4} display="flex" justifyContent="center" color="gray.300" />
          </InputLeftElement>
          <Input pr="4.5rem" placeholder="search" width={80} height={8}/>
        </InputGroup>
      </Stack>
    </div>
  );
}
