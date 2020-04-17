import React, {
  Fragment,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import ElementResizeEvent from "element-resize-event";

import ShortIdols from "../../helpers/short-idols";
import { getIdolRank } from "../../services/common.service";
import { ALL_DVDS_RELEASE_DETAIL_BY_PAGE } from "../../services/dvds.service";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Pagination from "../../components/UI/Pagination/Pagination";
import DvdCard from "../../components/Dvds/DvdCard";
import DvdDetail from "../../components/Dvds/DvdDetail";

import {
  Pink,
  Orange,
  White,
  Red,
  Yellow,
  LightBlue,
} from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Regular } from "../../themes/font";

const FilterDvdsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  padding: 20px;
  border-bottom: solid 3px ${Pink};
  box-sizing: border-box;
`;

const SelectCustom = styled(Select)`
  margin-left: 30px;
`;

const Result = styled.div`
  align-self: center;
  color: ${White};
  font-size: ${Regular};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px - ${(props) => props.filterHeight}px);
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
  padding: 30px 20px;
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

function Dvds() {
  const [filterHeight, setFilterHeight] = useState(80);
  const [code, setCode] = useState("");
  const [type, setType] = useState(null);
  const [idols, setIdols] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const dvds = useMemo(() => {
    return ALL_DVDS_RELEASE_DETAIL_BY_PAGE(code, type, idols, page, 30);
  }, [code, type, idols, page]);

  const changeFilterHeight = useCallback(() => {
    const element = document.getElementById("filter-dvds");
    setFilterHeight(element.clientHeight);
  }, []);

  useEffect(() => {
    const element = document.getElementById("filter-dvds");
    ElementResizeEvent(element, changeFilterHeight);
    return () => {
      ElementResizeEvent.unbind(element);
    };
  }, [changeFilterHeight]);

  const handleChangeCode = useCallback((value) => {
    setCode(value);
    setPage(1);
  }, []);

  const handleChangeType = useCallback((value) => {
    setType(value);
    setPage(1);
  }, []);

  const handleChangeIdols = useCallback((value) => {
    setIdols(value);
    setPage(1);
  }, []);

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
      <FilterDvdsContainer id={"filter-dvds"}>
        <div style={{ display: "flex" }}>
          <Input
            placeholder={"Search code..."}
            value={code}
            onChange={(e) => handleChangeCode(e.target.value)}
          />
          <SelectCustom
            options={[
              { label: "Censored", value: "Censored" },
              { label: "Uncensored", value: "Uncensored" },
            ]}
            placeholder={"Select type..."}
            isClearable={true}
            value={type}
            onChange={(value) => handleChangeType(value)}
          />
          <SelectCustom
            isMulti={true}
            options={ShortIdols.map((item) => ({
              label: item.name,
              value: item.idIdol,
              colors:
                getIdolRank(item.idIdol) === 1
                  ? [Yellow, Red]
                  : getIdolRank(item.idIdol) === 2
                  ? [LightBlue, Pink]
                  : [Pink, Orange],
            }))}
            placeholder={"Select idols..."}
            value={idols}
            onChange={(value) => handleChangeIdols(value)}
          />
        </div>
        <Result>
          ( {dvds.size + ` ${dvds.size > 1 ? "results" : "result"}`} )
        </Result>
      </FilterDvdsContainer>
      <Container filterHeight={filterHeight}>
        {dvds.size === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <DvdContainer>
            {dvds.data.map((item) => (
              <LazyLoad
                key={item.idDvd}
                height={300}
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
            count={dvds.size}
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

export default Dvds;
