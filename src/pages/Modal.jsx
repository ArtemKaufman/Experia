import React, { useState } from 'react';
import Modal from 'react-modal';
import { Typography } from '../UI/Typography.styled';
import FlexContainer from '../UI/Flex';
import styled from 'styled-components';
import SquareCheckbox from '../UI/Checkbox/SquareCheckbox';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    padding: '20px',
    backgroundColor: '#111216',
    color: '#fff',
  },
};
const backdropStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1000,
  },
};

const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: #fff;
  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors.grayBg}; /* Змініть на колір для стану disabled */
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

Modal.setAppElement('#root');

export const ModalComponent = ({ isOpen, onRequestClose }) => {
  const [offer, setOffer] = useState(false);
  const giveOffer = () => {
    setOffer(!offer);
  };
  const disabled = offer ? true : false;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{ ...customStyles, ...backdropStyles }}
      contentLabel="Example Modal"
    >
      <FlexContainer gap="15px" direction="column">
        <Typography fontsize="22px">
          Привіт це Артем, я хотів би підсвітити деякі моменти які я впровадив в
          цю роботу =)
        </Typography>

        <Typography>
          На секції з основним графіком в правому верхньому куті є кнопка,
          натиснувши на неї відкриється вікно з вибором типу графіка який вам
          зручніший.
        </Typography>
        <Typography>
          На кожному графіку справа є чекбокси, натиснувши на них ви можете
          фільтрувати данні які відображені на ньому, оскільки в нас кольори то
          кожен колір відповідає за різний ключ в обʼєкті
        </Typography>
        <Typography color="#8941FF">
          Також я дуже вдячний за таке цікаве завдання, для мене було новим
          працювати з графіками і styled components, це виявилось доволі
          розвиваючим
        </Typography>
      </FlexContainer>
      <FlexContainer
        alignitems="center"
        margin="30px 10px 20px"
        gap="20px"
        justifyContent="center"
      >
        <Typography color="#9B53F8" onClick={() => onRequestClose}>
          Надаю згоду на отримання робочого контракту цьому креативному молодому
          чоловіку
        </Typography>
        <SquareCheckbox
          handleCheckboxChange={() => giveOffer}
          checked={offer}
          color="#9B53F8"
        />
        <CustomButton disabled={offer ? false : true} onClick={onRequestClose}>
          Погоджуюсь
        </CustomButton>
      </FlexContainer>
    </Modal>
  );
};
