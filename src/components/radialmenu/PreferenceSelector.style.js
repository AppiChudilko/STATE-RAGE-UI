import { css } from 'styled-components';

export const container = css`
`;

export const center = css`
  background: #2962FF;
  &:not(:empty):hover {
    cursor: pointer;
  }
  > svg {
    position: relative;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
  }
`;

export const slice = css`
  cursor: pointer;
  color: grey;
  background: rgba(0, 0, 0, 0.5);
  &:hover {
    color: white;
    background: #2962FFD0;
    transition: 0.1s;
  }
`;