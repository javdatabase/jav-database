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

import ShortIdols from "../../../helpers/short-idols";
import { getIdolRank } from "../../../services/jav/common.service";
import { ALL_VIDEOS_BY_PAGE } from "../../../services/jav/videos.service";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import Pagination from "../../../components/UI/Pagination/Pagination";
import DvdCard from "../../../components/Dvds/DvdCard";
import DvdDetail from "../../../components/Dvds/DvdDetail";

import {
  Pink,
  Orange,
  White,
  Red,
  Yellow,
  LightBlue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Regular } from "../../../themes/font";

const FilterDvdContainer = styled.div`
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

function LeakedVideos() {
  const history = useHistory();
  const location = useLocation();
  const [filterHeight, setFilterHeight] = useState(80);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const dvds = useMemo(() => {
    const state = location.state;
    const result = ALL_VIDEOS_BY_PAGE(
      get(state, "code", ""),
      get(state, "idols", null),
      get(state, "page", 1),
      30
    );
    return result;
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
      <FilterDvdContainer id={"filter-dvds"}>
        <div style={{ display: "flex" }}>
          <Input
            placeholder={"Search code..."}
            value={get(location.state, "code", "")}
            onChange={(e) => handleChangeCode(e.target.value)}
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
      </FilterDvdContainer>
      <Container filterHeight={filterHeight}>
        {dvds.size === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <DvdContainer>
            {dvds.data.map((item) => (
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

export default LeakedVideos;
