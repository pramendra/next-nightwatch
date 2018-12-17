// @flow
import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { Text } from '../core-components/Text/Text';
import { Image } from '../core-components/Image/Image';
import { Container } from '../core-components/Container';
import { Loading } from './Loading';

type profileType = {
  name: string,
  login: string,
  avatar_url: string,
};
const ProfileComponent = ({
  data: { login, avatar_url: url, name },
}: {
  data: profileType,
}) => (
  <Container my={4} key={login}>
    <Container mr={2}>
      <Image src={url} height="80" width="80" />
    </Container>
    <Container align="center">
      <Text size="4">Name:</Text>
      <Text size="4" weight="bold">
        {name}
      </Text>
    </Container>
  </Container>
);

const enhancer = compose(
  branch(({ loading }) => loading !== false, renderComponent(Loading)),
);

export const Profile = enhancer(ProfileComponent);
