import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../../UI/SectionHeader';
import Table from './Table';
import { ModalList } from './ModalList';
import LoadingStatus from './Skeleton';

const SalesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.greyBg};
  border-radius: 4px;
  margin-top: 16px;
  width: 100%;
  max-width: 1756px;
  color: #fff;
  img {
    width: 28px;
    height: 40px;
  }
`;
export const GeneralSalesSection = ({ data, isLoading }) => {
  const content = isLoading ? (
    <LoadingStatus />
  ) : (
    <>
      {data.map((item, index) => (
        <Table key={index} data={item} />
      ))}
    </>
  );
  return (
    <SalesWrapper>
      <SectionHeader name="General Sales / Time" image="./icons/info.svg">
        <ModalList />
      </SectionHeader>
      {content}
    </SalesWrapper>
  );
};
