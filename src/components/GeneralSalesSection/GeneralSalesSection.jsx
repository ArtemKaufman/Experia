import React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../../UI/SectionHeader';
import Table from './Table';
import { ModalList } from './ModalList';

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
export const Typography = styled.p`
  color: ${(props) => (props.color ? props.color : '#fff')};
  width: ${(props) => (props.width ? props.width : '')};
  font-size: ${(props) => (props.fontsize ? props.fontsize : '13px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textalign ? props.textalign : 'start')};
`;

export const GeneralSalesSection = ({ data }) => {
  return (
    <SalesWrapper>
      <SectionHeader name="General Sales / Time" image="./icons/info.svg">
        <ModalList />
      </SectionHeader>

      {data.map((item, index) => (
        <Table key={index} data={item} />
      ))}
    </SalesWrapper>
  );
};
