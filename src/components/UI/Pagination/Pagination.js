import React, { memo, useMemo, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { isNotMain } from "../../../helpers/router-type";

import { White, Grey, Blue, Pink, Orange } from "../../../themes/colors";
import { center } from "../../../themes/styled";
import { Regular } from "../../../themes/font";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  overflow: hidden;
  position: relative;
`;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 0px 2.5px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.main === "true"
        ? `linear-gradient(to right, ${Pink}, ${Orange})`
        : `linear-gradient(to right, ${Blue}, ${Grey})`};
    border-radius: 10px;
  }
`;

const PageItem = styled.div`
  ${center}
  width: 25px;
  min-width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px 2.5px;
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  background: ${(props) =>
    props.active
      ? props.main === "true"
        ? `linear-gradient(to right, ${Pink}, ${Orange})`
        : `linear-gradient(to right, ${Blue}, ${Grey})`
      : "transparent"};
  color: ${White};
  font-size: ${Regular};
  font-weight: 500;

  ${(props) =>
    props.active
      ? ""
      : `&:hover {
    background: 
       ${
         props.main === "true"
           ? `linear-gradient(to right, ${Pink}, ${Orange})`
           : `linear-gradient(to right, ${Blue}, ${Grey})`
       };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }`}
`;

const PageOtherItem = styled(PageItem)`
  margin-top: -2.5px;
`;

function Pagination({ count, page, size, handleChangePage }) {
  const location = useLocation();
  const pageContainerRef = useRef();

  const pages = useMemo(() => {
    const result = Array(Math.ceil(count / size))
      .fill(0)
      .map((item, index) => index + 1);
    return result;
  }, [count, size]);

  useEffect(() => {
    const scroll = (page - 1) * 35;
    pageContainerRef.current.scrollTo(scroll < 0 ? 0 : scroll, 0);
  }, [page]);

  const handleChange = useCallback(
    (value) => {
      if (value < 1 || value > pages.length) {
        handleChangePage(page);
      } else {
        handleChangePage(value);
      }
    },
    [pages, page, handleChangePage]
  );

  return (
    <Container>
      <PageOtherItem
        main={String(!isNotMain(location.pathname))}
        onClick={() => handleChange(1)}
      >{`<<`}</PageOtherItem>
      <PageOtherItem
        main={String(!isNotMain(location.pathname))}
        onClick={() => handleChange(page - 1)}
      >{`<`}</PageOtherItem>
      <PageContainer
        ref={pageContainerRef}
        main={String(!isNotMain(location.pathname))}
      >
        {pages.map((item) => (
          <PageItem
            key={`page-${item}`}
            main={String(!isNotMain(location.pathname))}
            active={item === page}
            onClick={() => handleChange(item)}
          >
            {item}
          </PageItem>
        ))}
      </PageContainer>
      <PageOtherItem
        main={String(!isNotMain(location.pathname))}
        onClick={() => handleChange(page + 1)}
      >{`>`}</PageOtherItem>
      <PageOtherItem
        main={String(!isNotMain(location.pathname))}
        onClick={() => handleChange(pages.length)}
      >{`>>`}</PageOtherItem>
    </Container>
  );
}

const MemoPagination = memo(Pagination);

export default MemoPagination;
