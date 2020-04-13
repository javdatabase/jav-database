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

import SizesCup from "../../helpers/sizes-cup";
import ModelStyles from "../../helpers/model-styles";
import { modelStyle, sizeCup } from "../../helpers/render-color";
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
} from "../../themes/colors";
import { Regular } from "../../themes/font";
import { center, fadeIn } from "../../themes/styled";

const FilterIdolsContainer = styled.div`
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

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
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
  const [filterHeight, setFilterHeight] = useState(80);
  const [name, setName] = useState("");
  const [cup, setCup] = useState(null);
  const [styles, setStyles] = useState([]);
  const [best, setBest] = useState(false);
  const [uncensored, setUncensored] = useState(false);
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const idols = useMemo(() => {
    return ALL_IDOLS_BY_PAGE(
      name,
      cup,
      styles,
      best,
      uncensored,
      active,
      page,
      20
    );
  }, [name, cup, styles, best, uncensored, active, page]);

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

  const handleChangeName = useCallback((value) => {
    setName(value);
    setPage(1);
  }, []);

  const handleChangeCup = useCallback((value) => {
    setCup(value);
    setPage(1);
  }, []);

  const handleChangeStyles = useCallback((value) => {
    setStyles(value);
    setPage(1);
  }, []);

  const handleChangeBest = useCallback(() => {
    setBest(!best);
    setPage(1);
  }, [best]);

  const handleChangeUncensored = useCallback(() => {
    setUncensored(!uncensored);
    setPage(1);
  }, [uncensored]);

  const handleChangeActive = useCallback(() => {
    setActive(!active);
    setPage(1);
  }, [active]);

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
      <FilterIdolsContainer id={"filter-idols"}>
        <div style={{ display: "flex" }}>
          <Input
            placeholder={"Search name..."}
            value={name}
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
            value={cup}
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
            value={styles}
            onChange={(value) => handleChangeStyles(value)}
          />
          <CheckboxGroup>
            <Checkbox
              label={"The Best"}
              value={best}
              onChange={handleChangeBest}
              customColor={`linear-gradient(to right, ${LightPurple}, ${DarkPurple})`}
            />
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox
              label={"Uncensored"}
              value={uncensored}
              onChange={handleChangeUncensored}
              customColor={`linear-gradient(to right, ${DarkBlue}, ${LightBlue})`}
            />
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox
              label={"Active"}
              value={active}
              onChange={handleChangeActive}
            />
          </CheckboxGroup>
        </div>
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
                key={item.idIdol}
                height={100}
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
            count={idols.size}
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
