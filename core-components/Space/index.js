// @flow
import styled from 'styled-components';
import forEachObjIndexed from 'ramda/src/forEachObjIndexed';
import pick from 'ramda/src/pick';
import keys from 'ramda/src/keys';
import { Flex } from '../Flex';

const nCalc = v => `calc(-1 * ${v})`;
const calcCar = v => `var(--space-${v})`;
const spacingMap = {
  nm: v => ({ margin: nCalc(v) }),
  nmt: v => ({ marginTop: nCalc(v) }),
  nmr: v => ({ marginRight: nCalc(v) }),
  nmb: v => ({ marginBottom: nCalc(v) }),
  nml: v => ({ marginLeft: nCalc(v) }),
  nmx: v => ({ marginLeft: nCalc(v), marginRight: nCalc(v) }),
  nmy: v => ({ marginTop: nCalc(v), marginBottom: nCalc(v) }),

  m: v => ({ margin: v }),
  mt: v => ({ marginTop: v }),
  mr: v => ({ marginRight: v }),
  mb: v => ({ marginBottom: v }),
  ml: v => ({ marginLeft: v }),
  mx: v => ({ marginLeft: v, marginRight: v }),
  my: v => ({ marginTop: v, marginBottom: v }),

  p: v => ({ padding: v }),
  pt: v => ({ paddingTop: v }),
  pr: v => ({ paddingRight: v }),
  pb: v => ({ paddingBottom: v }),
  pl: v => ({ paddingLeft: v }),
  px: v => ({ paddingLeft: v, paddingRight: v }),
  py: v => ({ paddingTop: v, paddingBottom: v }),
};

const generateCSS = props => {
  const inlineCss = {};
  forEachObjIndexed((v, key) => {
    Object.assign(inlineCss, spacingMap[key](calcCar(v)));
  }, pick(keys(spacingMap), props));

  return inlineCss;
};

export const Space = styled(Flex)`
  ${props => generateCSS(props)};
`;

export const FlexBox = styled(Flex)`
  ${props => generateCSS(props)};
`;
