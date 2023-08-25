import { StatisticCard } from './StatisticCard';
import FlexContainer from '../../UI/Flex';

export const CardsSection = ({ data }) => {
  const icons = [
    { src: './icon-statistic/user.svg' },
    { src: './icon-statistic/setting.svg' },
    { src: './icon-statistic/keyhole.svg' },
    { src: './icon-statistic/share.svg' },
    { src: './icon-statistic/games.svg' },
  ];
  const colors = [
    { color: '#42CC5826' },
    { color: '#4998EE26' },
    { color: '#F25D5D26' },
    { color: '#F4A73226' },
    { color: '#9B53F826' },
  ];

  const arrayOfObjects = Object.keys(data).map((key, index) => ({
    name: key,
    quantity: data[key],
    src: icons[index]?.src || '',
    color: colors[index]?.color || '',
  }));

  return (
    <FlexContainer gap="20px">
      {arrayOfObjects.map((card) => (
        <StatisticCard
          key={card.src}
          src={card.src}
          quantity={card.quantity}
          name={card.name}
          color={card.color}
        />
      ))}
    </FlexContainer>
  );
};
