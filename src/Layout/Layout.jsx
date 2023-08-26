import styled from 'styled-components';
import { Header } from '../components/Header/Header';

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Navbar/Sidebar';
import { ModalComponent } from '../pages/Modal';
import { useState } from 'react';
const Container = styled.div`
  display: grid;
  grid-template-columns: 84px 1fr;
  grid-template-rows: 68px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
  min-height: 100vh;
`;
const Main = styled.div`
  grid-area: main;
  padding: 20px;
`;

export const Layout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Container>
        <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
        <Sidebar />
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
};
