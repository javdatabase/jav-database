import React, { Fragment, useState, useCallback } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

import Pagination from "../../components/UI/Pagination/Pagination";
import DvdCard from "../../components/Dvds/DvdCard";
import DvdDetail from "../../components/Dvds/DvdDetail";
import { Pink, Orange, White } from "../../themes/colors";
import { fadeIn, center } from "../../themes/styled";

import {
  ALL_DVDS_AMATEUR,
  SIZE_AMATEUR_DVDS
} from "../../services/dvds.service";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${Orange}, ${Pink});
    border-radius: 10px;
  }
`;

const DvdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14vw, 1fr));
  gap: 10px;
  padding: 50px 20px 30px;
  box-sizing: border-box;
`;

const DvdItem = styled.div`
  ${center}
  width: 15vw;
  animation: ${fadeIn} 1s linear;
`;

const PaginationContainer = styled.div`
  ${center}
  margin-bottom: 5px;
`;

const NotFound = styled.div`
  width: 100%;
  height: 200px;
  color: ${White};
  ${center};
  font-style: italic;
`;

function AmateurDvds() {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const handleChangePage = useCallback(page => {
    setPage(page);
  }, []);

  const toggleModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChangeData = useCallback(
    value => {
      if (value) {
        setData(value);
      } else {
        setData(null);
      }
      toggleModal();
    },
    [toggleModal]
  );

  return (
    <Fragment>
      <Container>
        {SIZE_AMATEUR_DVDS === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <DvdContainer>
            {ALL_DVDS_AMATEUR(page, 30).map(item => (
              <LazyLoad
                key={item.idDvd}
                height={200}
                once={true}
                overflow={true}
              >
                <DvdItem>
                  <DvdCard data={item} click={() => handleChangeData(item)} />
                </DvdItem>
              </LazyLoad>
            ))}
          </DvdContainer>
        )}
        <PaginationContainer>
          <Pagination
            count={SIZE_AMATEUR_DVDS}
            page={page}
            size={30}
            handleChangePage={handleChangePage}
          />
        </PaginationContainer>
      </Container>
      <DvdDetail show={show} toggleModal={toggleModal} data={data} />
    </Fragment>
  );
}

export default AmateurDvds;