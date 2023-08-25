import styled from 'styled-components';
import { FC } from 'react';
import Icon from './Icon';
import FlexContainer from '../../UI/Flex';
import { Typography } from '../../UI/Typography.styled';

const StatisticCardWraper = styled.div`
  width: 100%;
  max-width: 335px;
  height: 104px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatisticCardContent = styled.div`
  padding: 20px;
  display: flex;
  gap: 22px;

  span {
    font-size: 44px;
    font-size: 44px;
    line-height: 48px;
    font-weight: 400;
    color: #fff;
  }
  p {
    color: ${({ theme }) => theme.colors.greyText};
    font-size: 13px;
    font-size: 500;
    line-height: 16px;
  }
`;

export const StatisticCard = ({
  src = './icon-statistic/user.svg',
  quantity = 10,
  name = 'something',
  color = '#42CC5826',
}) => {
  const changedName = name.split('_').map((name, index) => {
    if (name == 'iam') {
      return name.toUpperCase();
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  });
  const revertedString = changedName.join(' ');
  return (
    <StatisticCardWraper>
      <StatisticCardContent>
        <Icon color={color}>
          <img src={src} />
        </Icon>
        <FlexContainer justifyContent="strart" direction="column">
          <span>{quantity}</span>
          <Typography>{revertedString}</Typography>
        </FlexContainer>
      </StatisticCardContent>
    </StatisticCardWraper>
  );
};
