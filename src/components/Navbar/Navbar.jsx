import FlexContainer from '../../UI/Flex';
import { NavItem } from './NavItem';

import { useState } from 'react';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('./icons/dashboard.svg');

  const handleItemClick = (src) => {
    setActiveItem(src);
  };

  return (
    <FlexContainer direction="column" gap="20px">
      <NavItem
        isactive={activeItem == './icons/dashboard.svg'}
        src="./icons/dashboard.svg"
        onClick={() => handleItemClick('./icons/dashboard.svg')}
      />
      <NavItem
        isactive={activeItem == './icons/cards.svg'}
        src="./icons/cards.svg"
        onClick={() => handleItemClick('./icons/cards.svg')}
      />
      <NavItem
        isactive={activeItem == './icons/product.svg'}
        src="./icons/product.svg"
        onClick={() => handleItemClick('./icons/product.svg')}
      />
      <NavItem
        isactive={activeItem == './icons/wear-tear.svg'}
        src="./icons/wear-tear.svg"
        onClick={() => handleItemClick('./icons/wear-tear.svg')}
      />
      <NavItem
        isactive={activeItem == './icons/games.svg'}
        src="./icons/games.svg"
        onClick={() => handleItemClick('./icons/games.svg')}
      />
      <NavItem
        isactive={activeItem == './icons/settings.svg'}
        src="./icons/settings.svg"
        onClick={() => handleItemClick('./icons/settings.svg')}
      />
    </FlexContainer>
  );
};
