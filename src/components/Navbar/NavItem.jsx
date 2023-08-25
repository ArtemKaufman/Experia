import styled from 'styled-components';

const NavigationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isactive, theme }) =>
    isactive ? theme.colors.purple : theme.colors.bgIcons};
  border-radius: 50%;
  width: ${(props) => (props.size == 'small' ? '36px' : '48px')};
  height: ${(props) => (props.size == 'small' ? '36px' : '48px')};
  transition: background-color 0.3s ease, transform 0.3s ease; /* Combined transitions */

  &:hover {
    cursor: pointer;
    transform: scale(1.1); /* Corrected scaling property */
  }
`;

const NavigationIcon = styled.img`
  ${({ isactive, size }) =>
    isactive || size == 'small'
      ? ''
      : `filter: invert(65%) sepia(100%) saturate(0%) hue-rotate(173deg)
    brightness(102%) contrast(102%);`};
`;

export const NavItem = ({ isactive, src, onClick, size = 'big' }) => {
  return (
    <NavigationItem isactive={isactive} src={src} onClick={onClick} size={size}>
      <NavigationIcon
        src={src}
        alt="Navigation Icon"
        isactive={isactive}
        onClick={onClick}
        size={size}
      />
    </NavigationItem>
  );
};
