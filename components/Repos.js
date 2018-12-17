// @flow
import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { Text } from '../core-components/Text/Text';
import { Container } from '../core-components/Container';
import { Loading } from './Loading';

type repoType = {
  name: string,
  html_url: string,
  description: string,
  id: number,
};

const Repo = ({ id, name, html_url: htmlUrl, description }: repoType) => (
  <li id={id}>
    <a href={htmlUrl}>
      <Text size="4" weight="bold">
        {name}
      </Text>
    </a>
    <Text size="4">{description}</Text>
  </li>
);

type reposType = { data: Array<repoType> };

const ReposComponent = ({ data = [] }: reposType) => {
  if (data.length > 0) {
    return (
      <React.Fragment>
        <Text size="6" weight="bold" color="up-red">
          Repos
        </Text>
        <ul>
          {data.map((item, i) => (
            <Container key={item.id} bg={i % 2 ? 'pale-grey' : 'white'} p="4">
              <Repo key={item.id} {...item} />
            </Container>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  return null;
};

const enhancer = compose(
  branch(({ loading }) => loading !== false, renderComponent(Loading)),
);

export const Repos = enhancer(ReposComponent);
