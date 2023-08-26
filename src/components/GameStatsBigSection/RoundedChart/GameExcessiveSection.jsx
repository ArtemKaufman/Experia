import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../../../UI/SectionHeader';
import { PieChartComponent } from './RoundChart';
import Dropdown from '../../../UI/DropDownMenu';
import { List } from './List';
import { Loader } from './Loader';

const GameWrapper = styled.section`
  max-width: 428px;
  position: relative;
  width: 100%;
  height: 344px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  border-radius: 4px;
  margin-top: 16px;
`;

export const GameExcessiveSection = ({ data, isLoading }) => {
  const content = isLoading ? (
    <Loader />
  ) : (
    <>
      <SectionHeader name="Game Stats">
        <Dropdown name="Napervile" atribute="Location">
          <List />
        </Dropdown>
      </SectionHeader>

      <PieChartComponent data={data} />
    </>
  );
  return <GameWrapper>{content}</GameWrapper>;
};
