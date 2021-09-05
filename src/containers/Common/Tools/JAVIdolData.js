import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import SizesCup from "../../../helpers/sizes-cup";
import ModelStyles from "../../../helpers/model-styles";
import { modelStyle } from "../../../helpers/render-color";
import { SIZE_IDOLS } from "../../../services/jav/idols.service";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";
import Select from "../../../components/UI/Select/Select";

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

const SelectCustom = styled(Select)`
  width: 100%;
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

const ButtonCopy = styled.div`
  ${center};
  background: ${(props) =>
    props.disabled ? Grey : props.active ? Green : Yellow};
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
      props.disabled ? Grey : props.active ? Green : Red};
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

function JAVIdolDataTool() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [other, setOther] = useState("");
  const [born, setBorn] = useState("");
  const [height, setHeight] = useState("");
  const [breast, setBreast] = useState("");
  const [cup, setCup] = useState(null);
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [styles, setStyles] = useState(null);
  const [album, setAlbum] = useState([""]);
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const result = useMemo(() => {
    if (
      !avatar &&
      !name &&
      !other &&
      !born &&
      !height &&
      !breast &&
      !cup &&
      !waist &&
      !hips &&
      (!styles || !styles.length) &&
      (!album || !album.length || album[0] === "")
    ) {
      return "";
    }
    return `{
        idIdol: "jai${Array(3 - String(SIZE_IDOLS + 1).length)
          .fill("0")
          .join("")}${SIZE_IDOLS + 1}",
        avatar: "${avatar}"
        name: "${name}",
        other: "${other}",
        born: "${born}"
        height: "${height} cm",
        breast: "${breast} cm",
        cup: "${cup?.label || ""}",
        waist: "${waist} cm",
        hips: "${hips} cm",
        styles: [${
          styles?.map((item) => `{ tag: "${item.label}" }`).join(", ") || ""
        }],
        album: [${
          album
            ?.filter((item) => !!item)
            .map((item) => `{ picture: "${item}" }`)
            .join(", ") || ""
        }],
}`;
  }, [
    avatar,
    name,
    other,
    born,
    height,
    breast,
    cup,
    waist,
    hips,
    styles,
    album,
  ]);

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

  return (
    <Container>
      <Title>JAV IDOL DATA TOOL</Title>
      <Row>
        <Column>
          <Label style={{ color: Red }}>FORM</Label>
          <Content>
            <InputCustom
              placeholder={"Avatar..."}
              value={avatar}
              onChange={(e) => setAvatar(e.target.value.trim())}
            />
          </Content>
          <Content style={{ flexDirection: "row" }}>
            <InputCustom
              style={{ width: "50%", minWidth: "unset", marginRight: "30px" }}
              placeholder={"Name..."}
              value={name}
              onChange={(e) => setName(e.target.value.trim())}
            />
            <InputCustom
              style={{ width: "50%", minWidth: "unset" }}
              placeholder={"Other..."}
              value={other}
              onChange={(e) => setOther(e.target.value.trim())}
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
          <Content>
            <SelectCustom
              isMulti={true}
              options={ModelStyles.map((item) => ({
                label: item,
                value: item,
                color: modelStyle(item),
              }))}
              placeholder={"Styles..."}
              value={styles}
              onChange={(values) => setStyles(values)}
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
          <Label style={{ color: Yellow }}>RESULT</Label>
          <Content>
            <TextareaCustom
              readOnly={true}
              rows={12}
              placeholder={"Result..."}
              value={result}
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
              setOther("");
              setBorn("");
              setHeight("");
              setBreast("");
              setCup(null);
              setWaist("");
              setHips("");
              setStyles(null);
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

export default JAVIdolDataTool;
