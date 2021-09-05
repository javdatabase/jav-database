import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import SizesCup from "../../../helpers/sizes-cup";
import { SIZE_STARS } from "../../../services/upv/stars.service";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";
import Select from "../../../components/UI/Select/Select";
import ClipboardPurpleIcon from "../../../assets/images/ic_clipboard_purple/ic_clipboard_purple.svg";
import ClipboardGreenIcon from "../../../assets/images/ic_clipboard_green/ic_clipboard_green.svg";

import {
  White,
  Black,
  Grey,
  Orange,
  Pink,
  LightPurple,
  Yellow,
  Red,
  Green,
  DarkBlue,
  LightBlue,
  Blue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Regular, Large, XLarge, XXLarge } from "../../../themes/font";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 160px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
  overflow: auto;

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

const Title = styled.div`
  ${center}
  font-size: ${XXLarge};
  font-weight: bold;
  color: ${LightPurple};
  margin-bottom: 80px;
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  margin: 0px -30px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Label = styled.div`
  font-size: ${XLarge};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const TextareaCustom = styled(Textarea)`
  width: 100%;
`;

const InputCustom = styled(Input)`
  width: 100%;
`;

const SelectHalfCustom = styled(Select)`
  width: 50%;
`;

const ButtonAdd = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  ${center};
  background: ${Blue};
  margin-left: 30px;
  border-radius: 6px;
  color: ${White};
  font-size: ${Regular};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${DarkBlue};
  }
`;

const ButtonRemove = styled(ButtonAdd)`
  background: ${Red};

  &:hover {
    background: ${Orange};
  }
`;

const ButtonImage = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 20px;
  height: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const ButtonCopy = styled.div`
  ${center};
  background: ${(props) =>
    props.disabled ? Grey : props.active ? Green : LightBlue};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${Black};
  font-size: ${Large};
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.disabled ? Grey : props.active ? Green : Yellow};
  }
`;

const ButtonReset = styled(ButtonCopy)`
  margin-top: 30px;
  background: ${Grey};
  color: ${White};

  &:hover {
    background: ${Grey};
  }
`;

function UPVStarDataTool() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [height, setHeight] = useState("");
  const [breast, setBreast] = useState("");
  const [cup, setCup] = useState(null);
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [album, setAlbum] = useState([""]);
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const result = useMemo(() => {
    if (
      !avatar &&
      !name &&
      !born &&
      !height &&
      !breast &&
      !cup &&
      !waist &&
      !hips &&
      (!album || !album.length || album[0] === "")
    ) {
      return "";
    }
    return `{
          idStar: "ups${Array(3 - String(SIZE_STARS + 1).length)
            .fill("0")
            .join("")}${SIZE_STARS + 1}",
          avatar: "${avatar}"
          name: "${name}",
          born: "${born}"
          height: "${height} cm",
          breast: "${breast} in",
          cup: "${cup?.label || ""}",
          waist: "${waist} in",
          hips: "${hips} in",
          album: [${
            album
              ?.filter((item) => !!item)
              .map((item) => `{ picture: "${item}" }`)
              .join(", ") || ""
          }],
  }`;
  }, [avatar, name, born, height, breast, cup, waist, hips, album]);

  const shortResult = useMemo(() => {
    if (!name) {
      return "";
    }
    return `{ idStar: "jai${Array(3 - String(SIZE_STARS + 1).length)
      .fill("0")
      .join("")}${SIZE_STARS + 1}", name: "${name}" }`;
  }, [name]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const copyToClipboard = useCallback(() => {
    if (result && !copied) {
      const textarea = document.createElement("textarea");
      textarea.style.position = "fixed";
      textarea.style.left = "0";
      textarea.style.top = "0";
      textarea.style.opacity = "0";
      textarea.value = result;
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
  }, [result, copied]);

  const shortToClipboard = useCallback(() => {
    if (shortResult && !copied) {
      const textarea = document.createElement("textarea");
      textarea.style.position = "fixed";
      textarea.style.left = "0";
      textarea.style.top = "0";
      textarea.style.opacity = "0";
      textarea.value = shortResult;
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
  }, [shortResult, copied]);

  return (
    <Container>
      <Title>UPV STAR DATA TOOL</Title>
      <Row>
        <Column>
          <Label style={{ color: Yellow }}>FORM</Label>
          <Content>
            <InputCustom
              placeholder={"Avatar..."}
              value={avatar}
              onChange={(e) => setAvatar(e.target.value.trim())}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Name..."}
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Born..."}
              value={born}
              onChange={(e) => setBorn(e.target.value.trim())}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Height..."}
              type={"number"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Content>
          <Content style={{ flexDirection: "row" }}>
            <InputCustom
              style={{ width: "50%", minWidth: "unset", marginRight: "30px" }}
              placeholder={"Breast..."}
              type={"number"}
              value={breast}
              onChange={(e) => setBreast(e.target.value)}
            />
            <SelectHalfCustom
              placeholder={"Born..."}
              options={SizesCup.map((item) => ({
                label: item,
                value: item,
              }))}
              value={cup}
              onChange={(value) => setCup(value)}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Waist..."}
              type={"number"}
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Hips..."}
              type={"number"}
              value={hips}
              onChange={(e) => setHips(e.target.value)}
            />
          </Content>
          {album.map((item, index) => (
            <Content key={index} style={{ flexDirection: "row" }}>
              <InputCustom
                placeholder={"Picture..."}
                value={item}
                onChange={(e) =>
                  setAlbum((prev) =>
                    prev.map((i, n) =>
                      n === index ? e.target.value.trim() : i
                    )
                  )
                }
              />
              {index === album.length - 1 ? (
                <ButtonAdd onClick={() => setAlbum((prev) => [...prev, ""])}>
                  +
                </ButtonAdd>
              ) : (
                <ButtonRemove
                  onClick={() =>
                    setAlbum((prev) => prev.filter((i, n) => n !== index))
                  }
                >
                  -
                </ButtonRemove>
              )}
            </Content>
          ))}
        </Column>
        <Column>
          <Label style={{ color: LightBlue }}>RESULT</Label>
          <Content>
            <TextareaCustom
              readOnly={true}
              rows={12}
              placeholder={"Result..."}
              value={result}
            />
          </Content>
          <Content>
            <InputCustom
              readOnly={true}
              placeholder={"Short..."}
              value={shortResult}
            />
            <ButtonImage
              disabled={!shortResult}
              src={copied ? ClipboardGreenIcon : ClipboardPurpleIcon}
              onClick={shortToClipboard}
            />
          </Content>
          <ButtonCopy
            disabled={!result}
            active={copied}
            type="button"
            onClick={copyToClipboard}
          >
            {copied ? "Copied To Clipboard" : "Copy To Clipboard"}
          </ButtonCopy>
          <ButtonReset
            disabled={!result}
            type="button"
            onClick={() => {
              setAvatar("");
              setName("");
              setBorn("");
              setHeight("");
              setBreast("");
              setCup(null);
              setWaist("");
              setHips("");
              setAlbum([""]);
            }}
          >
            Reset
          </ButtonReset>
        </Column>
      </Row>
    </Container>
  );
}

export default UPVStarDataTool;
