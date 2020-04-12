import React, { Fragment, useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

import { ALL_IDOLS_BY_PAGE, SIZE_IDOLS } from "../../services/idols.service";
import Pagination from "../../components/UI/Pagination/Pagination";
import IdolCard from "../../components/Idols/IdolCard";
import IdolDetail from "../../components/Idols/IdolDetail";

import { Pink, Orange, White } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";

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

const IdolContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
  gap: 80px 40px;
  padding: 80px 20px 30px;
  box-sizing: border-box;
`;

const IdolItem = styled.div`
  ${center}
  width: 16vw;
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

function Idols() {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const idols = useMemo(() => ALL_IDOLS_BY_PAGE(page, 20), [page]);

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
        {SIZE_IDOLS === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <IdolContainer>
            {idols.map(item => (
              <LazyLoad
                key={item.idIdol}
                height={200}
                once={true}
                overflow={true}
              >
                <IdolItem>
                  <IdolCard data={item} click={() => handleChangeData(item)} />
                </IdolItem>
              </LazyLoad>
            ))}
          </IdolContainer>
        )}
        <PaginationContainer>
          <Pagination
            count={SIZE_IDOLS}
            page={page}
            size={20}
            handleChangePage={handleChangePage}
          />
        </PaginationContainer>
      </Container>
      <IdolDetail show={show} toggleModal={toggleModal} data={data} />
    </Fragment>
  );
}

export default Idols;
