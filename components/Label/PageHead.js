// @flow
import React from 'react';
import { Text } from '../../core-components/Text/Text';
import { Container } from '../../core-components/Container';

export const PageHead = () => (
  <Container flexColumn align="center" my={4}>
    <Text size="9" weight="bold">
      Github Profile Search
    </Text>
  </Container>
);
