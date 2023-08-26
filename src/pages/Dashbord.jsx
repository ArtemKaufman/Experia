import { useEffect, useState } from 'react';
import { CardsSection } from '../components/StatisticCardSection/CardsSection';
import { GameStatsSect } from '../components/GameStatsBigSection/GameUserStatsSect';
import { GameExcessiveSection } from '../components/GameStatsBigSection/RoundedChart/GameExcessiveSection';

import { GeneralSalesSection } from '../components/GeneralSalesSection/GeneralSalesSection';
import FlexContainer from '../UI/Flex';

export const Dashbord = () => {
  const [statisticData, setStatisticData] = useState({});
  const [chartData, setChartData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://vindev.cx.ua/dashboard')
      .then((response) => response.json())
      .then((data) => {
        setStatisticData(data.statistic);
        setChartData(data.chartData);
        setUsersData(data.users);
        setSalesData(data.general_sales_time);
        setIsLoading(false);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <CardsSection data={statisticData} />
      <FlexContainer gap="16px">
        <GameStatsSect data={chartData} usersData={usersData} />
        <GameExcessiveSection isLoading={isLoading} data={chartData} />
      </FlexContainer>
      <GeneralSalesSection data={salesData} isLoading={isLoading} />
    </div>
  );
};
