// @flow
import React from 'react';
import Link from 'next/link';

type props = {
  category: 'category',
};
export default ({ category = 'category' }: props) => (
  <h1>
    <Link href="/">
      <a id="home-link">Link to Home Page{category}</a>
    </Link>
  </h1>
);
