// @flow
import styled from 'styled-components';

type AlignType = 'stretch' | 'center' | 'baseline' | 'flex-start' | 'flex-end';
type AlignContentType =
  | 'stretch'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';
type JustifyType =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';

type flexType = {
  align: AlignType,
  alignContent: AlignContentType,
  flex: string,
  flexAuto: boolean,
  flexColumn: boolean,
  justify: JustifyType,
  width: string,
  wrap: boolean | number,
};

function buildStyle({
  align,
  alignContent,
  flex,
  flexAuto,
  flexColumn,
  justify,
  width,
  wrap,
}: flexType) {
  const output = {};
  if (align) {
    output['align-items'] = align;
  }
  if (alignContent) {
    output['align-content'] = alignContent;
  }
  if (justify) {
    output['justify-content'] = justify;
  }
  if (flex) {
    output.flex = flex;
  }
  if (flexAuto) {
    output.flex = '1 1 auto';
  }
  if (flexColumn) {
    output['flex-direction'] = 'column';
  }
  if (wrap) {
    output['flex-wrap'] = 'wrap';
  }
  if (width) {
    output.width = width;
  }

  const res = Object.keys(output).reduce(
    (str, key) => `${str}${key}: ${output[key]};`,
    '',
  );
  return res;
}

export const Flex = styled.div`
  display: flex;
  ${props => buildStyle(props)};
`;

export const Box = styled.div`
  ${props => buildStyle(props)};
`;

export const Flex1 = styled(Box)`
  flex: 1;
`;

export const DisplayFlex1 = styled(Flex1)`
  display: flex;
`;
