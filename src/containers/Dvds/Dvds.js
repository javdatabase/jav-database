import React, {
  Fragment,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { get } from "lodash";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
  const history = useHistory();
  const location = useLocation();
  const [filterHeight, setFilterHeight] = useState(80);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const dvds = useMemo(() => {
    const state = location.state;
    const result = ALL_DVDS_RELEASE_DETAIL_BY_PAGE(
      get(state, "code", ""),
      get(state, "type", null),
      get(state, "idols", null),
      get(state, "page", 1),
      30
    );
    let dvdData = [];
    result.data.forEach((item, index) => {
      let found = dvdData.findIndex((data) => data.id.includes(item.idDvd));
      if (found > -1) {
        const newData = {
          ...dvdData[found],
          dvds: [...dvdData[found].dvds, item],
        };
        dvdData[found] = newData;
      } else {
        const newData = {
          id: `${item.idDvd}${
            result.data[index + 1] ? result.data[index + 1].idDvd : ""
          }${result.data[index + 2] ? result.data[index + 2].idDvd : ""}${
            result.data[index + 3] ? result.data[index + 3].idDvd : ""
          }${result.data[index + 4] ? result.data[index + 4].idDvd : ""}${
            result.data[index + 5] ? result.data[index + 5].idDvd : ""
          }`,
          dvds: [item],
        };
        dvdData.push(newData);
      }
    });
    return {
      size: result.size,
      data: dvdData,
    };
  }, [location.state]);

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

  const handleChangeCode = useCallback(
    (code) => {
      const state = { ...location.state, code: code, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeType = useCallback(
    (type) => {
      const state = { ...location.state, type: type, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeIdols = useCallback(
    (idols) => {
      const state = { ...location.state, idols: idols, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangePage = useCallback(
    (page) => {
      const state = { ...location.state, page: page };
      history.push(location.pathname, state);
    },
    [history, location]
  );

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
            value={get(location.state, "code", "")}
            onChange={(e) => handleChangeCode(e.target.value)}
          />
          <SelectCustom
            options={[
              { label: "Censored", value: "Censored" },
              { label: "Uncensored", value: "Uncensored" },
            ]}
            placeholder={"Select type..."}
            isClearable={true}
            value={get(location.state, "type", null)}
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
            value={get(location.state, "idols", null)}
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
                key={item.id}
                height={"calc(10vw + 50px)"}
                once={true}
                overflow={true}
                offset={100}
              >
                {item.dvds.map((dvd) => (
                  <DvdItem key={dvd.idDvd}>
                    <DvdCard data={dvd} click={() => handleChangeData(dvd)} />
                  </DvdItem>
                ))}
              </LazyLoad>
            ))}
          </DvdContainer>
        )}
        <PaginationContainer>
          <Pagination
            count={dvds.size}
            page={get(location.state, "page", 1)}
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
