// @flow
import React from 'react';
import { Input } from '../../core-components/Input/Input';
import { Text } from '../../core-components/Text/Text';
import { Container } from '../../core-components/Container';

type searchFormType = {
  onSearchSubmit: Function,
};
export const SearchForm = ({ onSearchSubmit }: searchFormType) => (
  <Container p={4} bg="up-red" justify="center" align="center">
    <Container mr="2">
      <Text size="6" color="white" weight="bold">
        Profile
      </Text>
    </Container>
    <Input
      onKeyPress={onSearchSubmit}
      autoFocus
      placeholder="Github Username"
    />
  </Container>
);
