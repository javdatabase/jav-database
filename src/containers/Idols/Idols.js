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

import SizesCup from "../../helpers/sizes-cup";
import ModelStyles from "../../helpers/model-styles";
import { sizeCup, modelStyle } from "../../helpers/render-color";
import { ALL_IDOLS_BY_PAGE } from "../../services/idols.service";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Pagination from "../../components/UI/Pagination/Pagination";
import IdolCard from "../../components/Idols/IdolCard";
import IdolDetail from "../../components/Idols/IdolDetail";

import {
  Pink,
  Orange,
  White,
  DarkPurple,
  LightPurple,
  DarkBlue,
  LightBlue,
  Grey,
} from "../../themes/colors";
import { Regular } from "../../themes/font";
import { center, fadeIn } from "../../themes/styled";

const FilterIdolsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: solid 3px ${Pink};
  box-sizing: border-box;
`;

const RowFilter = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 80px;
  padding: 20px;
  box-sizing: border-box;
`;

const SelectCustom = styled(Select)`
  margin-left: 30px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Result = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
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

const IdolContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(15vw, 1fr));
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
  const history = useHistory();
  const location = useLocation();
  const [filterHeight, setFilterHeight] = useState(160);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const idols = useMemo(() => {
    setShow(false);
    const state = location.state;
    const result = ALL_IDOLS_BY_PAGE(
      get(state, "name", ""),
      get(state, "cup", null),
      get(state, "styles", null),
      get(state, "best", false),
      get(state, "uncensored", false),
      get(state, "working", false),
      get(state, "height", ""),
      get(state, "breast", ""),
      get(state, "hips", ""),
      get(state, "normal", false),
      get(state, "censored", false),
      get(state, "retired", false),
      get(state, "page", 1),
      20
    );
    let idolData = [];
    result.data.forEach((item, index) => {
      let found = idolData.findIndex((data) => data.id.includes(item.idIdol));
      if (found > -1) {
        const newData = {
          ...idolData[found],
          idols: [...idolData[found].idols, item],
        };
        idolData[found] = newData;
      } else {
        const newData = {
          id: `${item.idIdol}${
            result.data[index + 1] ? result.data[index + 1].idIdol : ""
          }${result.data[index + 2] ? result.data[index + 2].idIdol : ""}${
            result.data[index + 3] ? result.data[index + 3].idIdol : ""
          }${result.data[index + 4] ? result.data[index + 4].idIdol : ""}`,
          idols: [item],
        };
        idolData.push(newData);
      }
    });
    return {
      size: result.size,
      data: idolData,
    };
  }, [location.state]);

  const changeFilterHeight = useCallback(() => {
    const element = document.getElementById("filter-idols");
    setFilterHeight(element.clientHeight);
  }, []);

  useEffect(() => {
    const element = document.getElementById("filter-idols");
    ElementResizeEvent(element, changeFilterHeight);
    return () => {
      ElementResizeEvent.unbind(element);
    };
  }, [changeFilterHeight]);

  const handleChangeName = useCallback(
    (name) => {
      const state = { ...location.state, name: name, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeCup = useCallback(
    (cup) => {
      const state = { ...location.state, cup: cup, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeStyles = useCallback(
    (styles) => {
      const state = { ...location.state, styles: styles, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeBest = useCallback(() => {
    const state = {
      ...location.state,
      best: !get(location.state, "best", false),
      page: 1,
    };
    history.push(location.pathname, state);
  }, [history, location]);

  const handleChangeUncensored = useCallback(() => {
    const state = {
      ...location.state,
      uncensored: !get(location.state, "uncensored", false),
      page: 1,
    };
    history.push(location.pathname, state);
  }, [history, location]);

  const handleChangeWorking = useCallback(() => {
    const state = {
      ...location.state,
      working: !get(location.state, "working", false),
      page: 1,
    };
    history.push(location.pathname, state);
  }, [history, location]);

  const handleChangeHeight = useCallback(
    (height) => {
      const state = { ...location.state, height: height, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeBreast = useCallback(
    (breast) => {
      const state = { ...location.state, breast: breast, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeHips = useCallback(
    (hips) => {
      const state = { ...location.state, hips: hips, page: 1 };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  const handleChangeNormal = useCallback(() => {
    const state = {
      ...location.state,
      normal: !get(location.state, "normal", false),
      page: 1,
    };
    history.push(location.pathname, state);
  }, [history, location]);

  const handleChangeCensored = useCallback(() => {
    const state = {
      ...location.state,
      censored: !get(location.state, "censored", false),
      page: 1,
    };
    history.push(location.pathname, state);
  }, [history, location]);

  const handleChangeRetired = useCallback(() => {
    const state = {
      ...location.state,
      retired: !get(location.state, "retired", false),
      page: 1,
    };
    history.push(location.pathname, state);
  }, [history, location]);

  const handleChangePage = useCallback(
    (page) => {
      const state = {
        ...location.state,
        page: page,
      };
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
      <FilterIdolsContainer id={"filter-idols"}>
        <RowFilter>
          <Input
            placeholder={"Search name..."}
            value={get(location.state, "name", "")}
            onChange={(e) => handleChangeName(e.target.value)}
          />
          <SelectCustom
            isMulti={true}
            options={SizesCup.map((item) => ({
              label: item,
              value: item,
              color: sizeCup(item),
            }))}
            placeholder={"Select size cup..."}
            value={get(location.state, "cup", null)}
            onChange={(value) => handleChangeCup(value)}
          />
          <SelectCustom
            isMulti={true}
            options={ModelStyles.map((item) => ({
              label: item,
              value: item,
              color: modelStyle(item),
            }))}
            placeholder={"Select model styles..."}
            value={get(location.state, "styles", null)}
            onChange={(value) => handleChangeStyles(value)}
          />
          <CheckboxGroup>
            <Checkbox
              label={"The Best"}
              value={get(location.state, "best", false)}
              onChange={handleChangeBest}
              customColor={`linear-gradient(to right, ${LightPurple}, ${DarkPurple})`}
            />
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox
              label={"Uncensored"}
              value={get(location.state, "uncensored", false)}
              onChange={handleChangeUncensored}
              customColor={`linear-gradient(to right, ${DarkBlue}, ${LightBlue})`}
            />
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox
              label={"Working"}
              value={get(location.state, "working", false)}
              onChange={handleChangeWorking}
            />
          </CheckboxGroup>
        </RowFilter>
        <RowFilter>
          <Input
            placeholder={"Search height..."}
            type={"number"}
            value={get(location.state, "height", "")}
            onChange={(e) => handleChangeHeight(e.target.value)}
          />
          <Input
            style={{ marginLeft: "30px" }}
            placeholder={"Search breast..."}
            type={"number"}
            value={get(location.state, "breast", "")}
            onChange={(e) => handleChangeBreast(e.target.value)}
          />
          <Input
            style={{ marginLeft: "30px" }}
            placeholder={"Search hips..."}
            type={"number"}
            value={get(location.state, "hips", "")}
            onChange={(e) => handleChangeHips(e.target.value)}
          />
          <CheckboxGroup>
            <Checkbox
              label={"Normal"}
              value={get(location.state, "normal", false)}
              onChange={handleChangeNormal}
            />
          </CheckboxGroup>
          <CheckboxGroup style={{ marginLeft: "44.5px" }}>
            <Checkbox
              label={"Censored"}
              value={get(location.state, "censored", false)}
              onChange={handleChangeCensored}
            />
          </CheckboxGroup>
          <CheckboxGroup style={{ marginLeft: "44.5px" }}>
            <Checkbox
              label={"Retired"}
              value={get(location.state, "retired", false)}
              onChange={handleChangeRetired}
              customColor={Grey}
            />
          </CheckboxGroup>
        </RowFilter>
        <Result>
          ( {idols.size + ` ${idols.size > 1 ? "results" : "result"}`} )
        </Result>
      </FilterIdolsContainer>
      <Container filterHeight={filterHeight}>
        {idols.size === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <IdolContainer>
            {idols.data.map((item) => (
              <LazyLoad
                key={item.id}
                height={"calc(22vw + 50px)"}
                once={true}
                overflow={true}
              >
                {item.idols.map((idol) => (
                  <IdolItem key={idol.idIdol}>
                    <IdolCard
                      data={idol}
                      click={() => handleChangeData(idol)}
                    />
                  </IdolItem>
                ))}
              </LazyLoad>
            ))}
          </IdolContainer>
        )}
        <PaginationContainer>
          <Pagination
            count={idols.size}
            page={get(location.state, "page", 1)}
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
