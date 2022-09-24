import React, {
  Fragment,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { get, chunk } from "lodash";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { Grid } from "react-virtualized";
import ElementResizeEvent from "element-resize-event";

import SizesCup from "../../../helpers/sizes-cup";
import { sizeCup } from "../../../helpers/render-color";
import { ALL_STARS_BY_PAGE } from "../../../services/upv/stars.service";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import Pagination from "../../../components/UI/Pagination/Pagination";
import StarCard from "../../../components/Stars/StarCard";
import StarDetail from "../../../components/Stars/StarDetail";

import { White, Grey, Blue } from "../../../themes/colors";
import { Regular } from "../../../themes/font";
import { center, fadeIn } from "../../../themes/styled";

const FilterStarsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: solid 3px ${Blue};
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
  width: 300px;
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
    background: linear-gradient(${Grey}, ${Blue});
    border-radius: 10px;
  }
`;

const StarContainer = styled.div`
  ${center};
  padding: 30px 0px;
`;

const StarItem = styled.div`
  ${center};
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

function Stars() {
  const history = useHistory();
  const location = useLocation();
  const [filterHeight, setFilterHeight] = useState(160);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  const stars = useMemo(() => {
    setShow(false);
    const state = location.state;
    const result = ALL_STARS_BY_PAGE(
      get(state, "name", ""),
      get(state, "cup", null),
      get(state, "height", ""),
      get(state, "breast", ""),
      get(state, "hips", ""),
      get(state, "page", 1),
      20
    );
    return result;
  }, [location.state]);

  const gridStars = useMemo(() => {
    return chunk(stars.data, 5);
  }, [stars]);

  const changeFilterHeight = useCallback(() => {
    const element = document.getElementById("filter-stars");
    setFilterHeight(element.clientHeight);
  }, []);

  useEffect(() => {
    const element = document.getElementById("filter-stars");
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
      <FilterStarsContainer id={"filter-stars"}>
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
        </RowFilter>
        <Result>
          ( {stars.size + ` ${stars.size > 1 ? "results" : "result"}`} )
        </Result>
      </FilterStarsContainer>
      <Container filterHeight={filterHeight}>
        {stars.size === 0 ? (
          <NotFound>Not Found</NotFound>
        ) : (
          <StarContainer>
            <Grid
              style={{ overflow: "visible" }}
              containerStyle={{ overflow: "visible" }}
              columnCount={5}
              rowCount={gridStars.length}
              columnWidth={(window.innerWidth - 20) / 5}
              rowHeight={520}
              width={window.innerWidth - 20}
              height={520 * gridStars.length}
              cellRenderer={({ columnIndex, key, rowIndex, style }) => (
                <div
                  key={key}
                  style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {!!gridStars?.[rowIndex][columnIndex] && (
                    <StarItem>
                      <StarCard
                        data={gridStars[rowIndex][columnIndex]}
                        click={() =>
                          handleChangeData(gridStars[rowIndex][columnIndex])
                        }
                      />
                    </StarItem>
                  )}
                </div>
              )}
            />
          </StarContainer>
        )}
        <PaginationContainer>
          <Pagination
            count={stars.size}
            page={get(location.state, "page", 1)}
            size={20}
            handleChangePage={handleChangePage}
          />
        </PaginationContainer>
      </Container>
      <StarDetail show={show} toggleModal={toggleModal} data={data} />
    </Fragment>
  );
}

export default Stars;
