// @flow
import React from 'react';
import { Text } from '../core-components/Text/Text';
import { Container } from '../core-components/Container';

export const Loading = () => (
  <Container justify="center" p={4}>
    <Text size="6" color="up-red" weight="bold">
      Loading
    </Text>
  </Container>
);
