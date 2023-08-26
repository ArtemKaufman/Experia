import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const StatusContainer = styled.div`
  width: 95%;
  padding: 32px;
  animation: ${pulseAnimation} 1.5s infinite;
`;

const Line = styled.div`
  height: 0.625rem;
  background-color: #2b3544;
  border-radius: 9999px;
  width: ${(props) => props.width || '100%'};
  margin-bottom: ${(props) => props.marginBottom || '1rem'};
`;

const LoadingStatus = () => {
  return (
    <StatusContainer>
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
      <Line width="100%" marginBottom="0.50rem" />
    </StatusContainer>
  );
};

export default LoadingStatus;
