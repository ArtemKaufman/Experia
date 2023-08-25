import React from 'react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import FlexContainer from '../../UI/Flex';
import { Typography } from '../../UI/Typography.styled';

export const TableContainer = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  padding: 0 32px;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px 32px;
  border: none;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

const StyledTr = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const Table = ({ data }) => {
  function formatDate(inputDate) {
    const parts = inputDate.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const dateObject = new Date(year, month - 1, day);
    const monthName = monthNames[dateObject.getMonth()];
    const dayOfMonth = dateObject.getDate();
    const fullYear = dateObject.getFullYear();

    const formattedDate = `${monthName} ${dayOfMonth}, ${fullYear}`;
    return formattedDate;
  }
  const formattedDate = formatDate(data.date);
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader />
        <tbody>
          <StyledTr>
            <TableCell>
              <FlexContainer gap="16px" width="157px">
                <img src="./images/dracon.png" />
                {data.model.name}
              </FlexContainer>
            </TableCell>
            <TableCell>
              <FlexContainer direction="column">
                <Typography>{data.card_name} </Typography>
                <Typography color="rgba(255, 255, 255, 0.60)">
                  Card {data.card_number}
                </Typography>
              </FlexContainer>
            </TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.limited}</TableCell>
            <TableCell>{data.operations}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{data.rating}%</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>
              <Typography fontWeight="500">{data.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <img src="./icons/action-menu.svg" />
            </TableCell>
          </StyledTr>
        </tbody>
        <tbody>
          <StyledTr>
            <TableCell>
              <FlexContainer gap="16px" width="157px">
                <img src="./images/dracon.png" />
                {data.model.name}
              </FlexContainer>
            </TableCell>
            <TableCell>
              <FlexContainer direction="column">
                <Typography>{data.card_name} </Typography>
                <Typography color="rgba(255, 255, 255, 0.60)">
                  Card {data.card_number}
                </Typography>
              </FlexContainer>
            </TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.limited}</TableCell>
            <TableCell>{data.operations}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{data.rating}%</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>
              <Typography fontWeight="500">{data.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <img src="./icons/action-menu.svg" />
            </TableCell>
          </StyledTr>
        </tbody>
        <tbody>
          <StyledTr>
            <TableCell>
              <FlexContainer gap="16px" width="157px">
                <img src="./images/dracon.png" />
                {data.model.name}
              </FlexContainer>
            </TableCell>
            <TableCell>
              <FlexContainer direction="column">
                <Typography>{data.card_name} </Typography>
                <Typography color="rgba(255, 255, 255, 0.60)">
                  Card {data.card_number}
                </Typography>
              </FlexContainer>
            </TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.limited}</TableCell>
            <TableCell>{data.operations}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{data.rating}%</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>
              <Typography fontWeight="500">{data.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <img src="./icons/action-menu.svg" />
            </TableCell>
          </StyledTr>
        </tbody>
        <tbody>
          <StyledTr>
            <TableCell>
              <FlexContainer gap="16px" width="157px">
                <img src="./images/dracon.png" />
                {data.model.name}
              </FlexContainer>
            </TableCell>
            <TableCell>
              <FlexContainer direction="column">
                <Typography>{data.card_name} </Typography>
                <Typography color="rgba(255, 255, 255, 0.60)">
                  Card {data.card_number}
                </Typography>
              </FlexContainer>
            </TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.limited}</TableCell>
            <TableCell>{data.operations}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{data.rating}%</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>
              <Typography fontWeight="500">{data.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <img src="./icons/action-menu.svg" />
            </TableCell>
          </StyledTr>
        </tbody>
        <tbody>
          <StyledTr>
            <TableCell>
              <FlexContainer gap="16px" width="157px">
                <img src="./images/dracon.png" />
                {data.model.name}
              </FlexContainer>
            </TableCell>
            <TableCell>
              <FlexContainer direction="column">
                <Typography>{data.card_name} </Typography>
                <Typography color="rgba(255, 255, 255, 0.60)">
                  Card {data.card_number}
                </Typography>
              </FlexContainer>
            </TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.limited}</TableCell>
            <TableCell>{data.operations}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{data.rating}%</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>
              <Typography fontWeight="500">{data.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <img src="./icons/action-menu.svg" />
            </TableCell>
          </StyledTr>
        </tbody>
        <tbody>
          <StyledTr>
            <TableCell>
              <FlexContainer gap="16px" width="157px">
                <img src="./images/dracon.png" />
                {data.model.name}
              </FlexContainer>
            </TableCell>
            <TableCell>
              <FlexContainer direction="column">
                <Typography>{data.card_name} </Typography>
                <Typography color="rgba(255, 255, 255, 0.60)">
                  Card {data.card_number}
                </Typography>
              </FlexContainer>
            </TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.limited}</TableCell>
            <TableCell>{data.operations}</TableCell>
            <TableCell>{formattedDate}</TableCell>
            <TableCell>{data.rating}%</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>
              <Typography fontWeight="500">{data.price}</Typography>
            </TableCell>
            <TableCell align="right">
              <img src="./icons/action-menu.svg" />
            </TableCell>
          </StyledTr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
