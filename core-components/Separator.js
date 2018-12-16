// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Space } from './Space';

export const Separator = styled(Space)`
  height: 1px;
  background: ${({ bg = 'gray' }) => `var(--color-${bg})`};
`;

export const renderDefaultSeparator = () => <Separator />;
export const renderWhiteSeparator = () => <Separator bg="white" />;
