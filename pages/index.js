// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { fetchUser, fetchRepo } from '../redux/actions';
import { Space } from '../core-components/Space';
import { PageHead } from '../components/Label/PageHead';
import { SearchForm } from '../components/Form/SearchForm';
import { Profile } from '../components/Profile';
import { Repos } from '../components/Repos';

const IndexPage = ({ onSearchSubmit, users = {}, repo = {}, keyword }) => {
  return (
    <React.Fragment>
      <PageHead />
      <Space my={4} />
      <SearchForm onSearchSubmit={onSearchSubmit} />
      {keyword && <Profile {...users} />}
      {keyword && <Repos {...repo} />}
    </React.Fragment>
  );
};

const mapStateToProps = ({ users, repo }) => {
  return { users, repo };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: bindActionCreators(fetchUser, dispatch),
    fetchRepo: bindActionCreators(fetchRepo, dispatch),
  };
};
const pageEnhancer = compose(
  //
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('keyword', 'setKeyword', null),
  withHandlers({
    onSearchSubmit: props => e => {
      if (e.charCode === 13 || e.keyCode === 13) {
        const keyword = e.target.value;
        props.setKeyword(keyword);
        props.fetchUser(keyword);
        props.fetchRepo(keyword);
      }
    },
  }),
);

export default pageEnhancer(IndexPage);
