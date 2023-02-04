import React, { Fragment, useState, useMemo, useCallback } from "react";
import { chunk } from "lodash";
import styled from "styled-components";
import { Grid } from "react-virtualized";

import {
  ALL_DVDS_PRE_RELEASE_BY_PAGE,
  SIZE_PRE_RELEASE_DVDS,
} from "../../../services/jav/dvds.service";
import Pagination from "../../../components/UI/Pagination/Pagination";
import DvdCard from "../../../components/Dvds/DvdCard";
import DvdDetail from "../../../components/Dvds/DvdDetail";

import { Pink, Orange, White } from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";

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
  ${center}
  padding: 30px 10px;
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

function PreReleaseDvds() {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const dvds = useMemo(() => {
    return ALL_DVDS_PRE_RELEASE_BY_PAGE(page, 60);
  }, [page]);

  const gridDvds = useMemo(() => {
    return chunk(dvds, 6);
  }, [dvds]);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);

  const toggleModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChangeData = useCallback(
    (value) => {
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
        {SIZE_PRE_RELEASE_DVDS === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <DvdContainer>
            <Grid
              style={{ overflow: "visible" }}
              containerStyle={{ overflow: "visible" }}
              columnCount={6}
              rowCount={gridDvds.length}
              columnWidth={(window.innerWidth - 20) / 6}
              rowHeight={228}
              width={window.innerWidth - 20}
              height={228 * gridDvds.length}
              cellRenderer={({ columnIndex, key, rowIndex, style }) => (
                <div
                  key={key}
                  style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {!!gridDvds?.[rowIndex][columnIndex] && (
                    <DvdItem>
                      <DvdCard
                        data={gridDvds[rowIndex][columnIndex]}
                        click={() =>
                          handleChangeData(gridDvds[rowIndex][columnIndex])
                        }
                      />
                    </DvdItem>
                  )}
                </div>
              )}
            />
          </DvdContainer>
        )}
        <PaginationContainer>
          <Pagination
            count={SIZE_PRE_RELEASE_DVDS}
            page={page}
            size={60}
            handleChangePage={handleChangePage}
          />
        </PaginationContainer>
      </Container>
      <DvdDetail show={show} toggleModal={toggleModal} data={data} />
    </Fragment>
  );
}

export default PreReleaseDvds;
