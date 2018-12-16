// @flow
import React from 'react';
import { Image } from '../Image/Image';

const staticPath = './../../../../static';
export const Icon1 = ({ uri, type = 'icons', ...props }: any) => {
  return <Image {...props} src={`${staticPath}/${type}/${uri}`} />;
};
