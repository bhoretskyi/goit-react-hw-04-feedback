import { styled } from 'styled-components';

export const StatisticsSection = styled.div`
  display: ${p => (p.$total === 0 ? 'none' : 'block')};
`;
