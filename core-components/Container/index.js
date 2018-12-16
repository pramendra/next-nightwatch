// @flow
import React from 'react';
import styled from 'styled-components';
import { Space } from '../Space';

export const Container = styled(Space)`
  background: ${({ bg = 'transparent' }) => `var(--color-${bg})`};
  height: ${({ height = 'auto' }) => height};
  width: ${({ width = 'auto' }) => width};
`;
