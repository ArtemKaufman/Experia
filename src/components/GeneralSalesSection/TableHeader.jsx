import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.thead``;

const TableHeaderRow = styled.tr`
  border-bottom: none;
`;

const TableHeaderCell = styled.th`
  padding: 8px 32px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

const TableHeader = () => {
  return (
    <StyledTableHeader>
      <TableHeaderRow>
        <TableHeaderCell>Card Name</TableHeaderCell>
        <TableHeaderCell>Card Number</TableHeaderCell>
        <TableHeaderCell>Type</TableHeaderCell>
        <TableHeaderCell>Limited</TableHeaderCell>
        <TableHeaderCell>№ Operations</TableHeaderCell>
        <TableHeaderCell>Date of lost operations</TableHeaderCell>
        <TableHeaderCell>Rating</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Price</TableHeaderCell>
        <TableHeaderCell align="right">Options</TableHeaderCell>
      </TableHeaderRow>
    </StyledTableHeader>
  );
};

export default TableHeader;
