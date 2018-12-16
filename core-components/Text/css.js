// @flow
import { css } from 'styled-components';

/* 10px */
export const text0css = css`
  font-size: var(--text-xxs);
`;

/* 12px */
export const text1css = css`
  font-size: var(--text-xs);
`;

/* 14px */
export const text2css = css`
  font-size: var(--text-sm);
`;

/* 16px */
export const text3css = css`
  font-size: var(--text-base);
`;

/* 18px */
export const text4css = css`
  font-size: var(--text-lg);
`;

/* 20px */
export const text5css = css`
  font-size: var(--text-xl);
`;

/* 24px */
export const text6css = css`
  font-size: var(--text-2xl);
`;

/* 30px */
export const text7css = css`
  font-size: var(--text-3xl);
`;

/* 36px */
export const text8css = css`
  font-size: var(--text-4xl);
`;

/* 48px */
export const text9css = css`
  font-size: var(--text-5xl);
`;

export const textnormal = css`
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
`;

export const textmedium = css`
  font-weight: var(--font-black);
`;

export const textbold = css`
  font-weight: var(--font-bold);
`;

export const preventTextOverflowStyle = css`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
