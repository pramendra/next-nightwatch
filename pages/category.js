// @flow
import React from 'react';
import Link from 'next/link';

type props = { test: boolean };
export default ({ test = true }: props) => (
  <h1>
    <Link href="/">
      <a id="home-link">Link to Home Page {test}</a>
    </Link>
  </h1>
);
