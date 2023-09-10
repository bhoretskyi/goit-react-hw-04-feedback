import { styled } from 'styled-components';

export const NotificationH = styled.h2`
  display: ${p => (p.$total === 0 ? 'block' : 'none')};
`;
