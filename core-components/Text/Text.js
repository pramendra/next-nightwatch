// @flow
import styled from 'styled-components';
import * as css from './css';

export const Text = styled.p`
  color: ${({ color = 'inherit' }) => `var(--color-${color})`};
  ${({ weight = 'normal' }) => css[`text${weight}`]};
  ${({ size = '1' }) => css[`text${size}css`]};
`;

// /* 12px */
// export const Text0 = styled(Text)`
//   ${css.text1css};
// `;

// /* 12px */
// export const Text1 = styled(Text)`
//   ${css.text1css};
// `;

// /* 14px */
// export const Text2 = styled(Text)`
//   ${css.text2css};
// `;

// /* 16px */
// export const Text3 = styled(Text)`
//   ${css.text3css};
// `;

// /* 18px */
// export const Text4 = styled(Text)`
//   ${css.text4css};
// `;

// /* 20px */
// export const Text5 = styled(Text)`
//   ${css.text5css};
// `;

// /* 24px */
// export const Text6 = styled(Text)`
//   ${css.text6css};
// `;

// /* 30px */
// export const Text7 = styled(Text)`
//   ${css.text7css};
// `;

// /* 36px */
// export const Text8 = styled(Text)`
//   ${css.text8css};
// `;

// /* 48px */
// export const Text9 = styled(Text)`
//   ${css.text9css};
// `;
