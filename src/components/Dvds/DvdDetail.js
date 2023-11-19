import React, {
  Fragment,
  memo,
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { get } from "lodash";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getIdolRank, checkVideo } from "../../services/jav/common.service";
import { VIDEO_CONTENT } from "../../services/jav/videos.service";
import Backdrop from "../UI/Backdrop/Backdrop";
import DvdPoster from "./DvdPoster";
import IdolTag from "../Idols/IdolTag";
import ClipboardGreyIcon from "../../assets/images/ic_clipboard_grey/ic_clipboard_grey.svg";
import ClipboardGreenIcon from "../../assets/images/ic_clipboard_green/ic_clipboard_green.svg";

import {
  Pink,
  White,
  Grey,
  Orange,
  Black,
  DarkBlue,
  LightBlue,
  Yellow,
  Red,
  Green,
} from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Large, XXLarge } from "../../themes/font";

const Container = styled.div`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${center}
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 10px;
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const PosterDvd = styled(DvdPoster)`
  width: 36vw;
  height: 24vw;
`;

const DetailContainer = styled.div`
  width: 36vw;
  height: calc(24vw + 6px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
`;

const CodeDvd = styled.div`
  display: flex;
  align-items: center;
  color: ${Black};
  font-size: ${XXLarge};
  cursor: pointer;

  &:hover img {
    display: unset;
  }
`;

const ButtonImage = styled.img`
  display: none;
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const Title = styled.div`
  color: ${White};
  font-size: ${Large};
`;

const IdolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagIdol = styled(IdolTag)`
  border: solid 2px ${Black};
  margin-top: 10px;
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
`;

const VideoButtonLink = styled(Link)`
  position: absolute;
  right: 0px;
  top: 3px;
  z-index: 500;
  ${center};
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: ${Yellow};
`;

const WebVideoButtonLink = styled.a`
  position: absolute;
  right: 0px;
  top: 38px;
  z-index: 500;
  ${center};
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: ${Green};
`;

const Dot = styled.span`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid ${Black};
  margin-left: 3px;
`;

function DvdDetail({ show, toggleModal, data }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const link = useMemo(() => {
    return `https://vlxx.cam/${get(
      VIDEO_CONTENT(get(data, "code", "")),
      "xid",
      ""
    )}`;
  }, [data]);

  const controlModal = useCallback(
    (event) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    if (show) {
      window.addEventListener("keyup", controlModal);
    } else {
      setCopied(false);
      window.removeEventListener("keyup", controlModal);
    }

    return () => {
      window.removeEventListener("keyup", controlModal);
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [show, controlModal]);

  const copyToClipboard = useCallback(() => {
    if (get(data, "code", "") && !copied) {
      const textarea = document.createElement("textarea");
      textarea.style.position = "fixed";
      textarea.style.left = "0";
      textarea.style.top = "0";
      textarea.style.opacity = "0";
      textarea.value = get(data, "code", "");
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [data, copied]);

  return createPortal(
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <Container
        show={show}
        uncensored={get(data, "type", "") === "Uncensored"}
      >
        <PosterDvd src={get(data, "poster", null)} />
        <DetailContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <CodeDvd onClick={copyToClipboard}>
              {get(data, "code", "")}
              <ButtonImage
                src={copied ? ClipboardGreenIcon : ClipboardGreyIcon}
              />
            </CodeDvd>
            {checkVideo(get(data, "code", null)) && (
              <Fragment>
                <VideoButtonLink to={`/jav/video/${get(data, "code", "")}`}>
                  <Dot />
                </VideoButtonLink>
                <WebVideoButtonLink
                  href={link}
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                >
                  <Dot style={{ borderLeft: `10px solid ${White}` }} />
                </WebVideoButtonLink>
              </Fragment>
            )}
          </div>
          <Title>{get(data, "title", "")}</Title>
          <IdolsContainer>
            {get(data, "idols", []).map((item) =>
              item.idIdol === "jai000" ? (
                <TagIdol
                  key={item.idIdol}
                  name={item.name}
                  style={{ background: Grey }}
                />
              ) : (
                <Link
                  key={item.idIdol}
                  to={`/jav/idol/${item.idIdol}`}
                  style={{ textDecoration: "none", color: Black }}
                >
                  <TagIdol
                    key={item.idIdol}
                    queen={getIdolRank(item.idIdol) === 1}
                    runnerUp={getIdolRank(item.idIdol) === 2}
                    name={item.name}
                  />
                </Link>
              )
            )}
          </IdolsContainer>
        </DetailContainer>
      </Container>
    </Fragment>,
    document.body
  );
}

const MemoDvdDetail = memo(DvdDetail);

export default MemoDvdDetail;
