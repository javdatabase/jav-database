import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import ShortIdols from "../../../helpers/short-idols";
import { getIdolRank } from "../../../services/jav/common.service";
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
  LightBlue,
  Green,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Large, XLarge, XXLarge } from "../../../themes/font";

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

const SelectCustom = styled(Select)`
  width: 100%;
`;

const ButtonCopy = styled.div`
  ${center};
  background: ${(props) =>
    props.disabled ? Grey : props.active ? Green : Pink};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${White};
  font-size: ${Large};
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.disabled ? Grey : props.active ? Green : Orange};
  }
`;

const ButtonReset = styled(ButtonCopy)`
  margin-top: 30px;
  background: ${Grey};
  color: ${Black};

  &:hover {
    background: ${Grey};
  }
`;

function JAVDvdDataTool() {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [type, setType] = useState(null);
  const [idols, setIdols] = useState(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const result = useMemo(() => {
    if (!code && !title && !poster && !type && (!idols || !idols.length)) {
      return "";
    }
    return `{
      code: "${code}",
      title: \`${title}\`,
      poster: "${poster}",
      type: "${type?.label || ""}",
      idols: [${
        idols
          ?.map((item) => `{ idIdol: "${item.value}", name: "${item.label}" }`)
          .join(", ") || ""
      }],
}`;
  }, [code, title, poster, type, idols]);

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
      <Title>JAV DVD DATA TOOL</Title>
      <Row>
        <Column>
          <Label style={{ color: Orange }}>FORM</Label>
          <Content>
            <InputCustom
              placeholder={"Code..."}
              value={code}
              onChange={(e) => setCode(e.target.value.trim().toUpperCase())}
            />
          </Content>
          <Content>
            <TextareaCustom
              rows={6}
              placeholder={"Title..."}
              value={title}
              onChange={(e) => setTitle(e.target.value.trim().toUpperCase())}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Poster..."}
              value={poster}
              onChange={(e) => setPoster(e.target.value.trim())}
            />
          </Content>
          <Content>
            <SelectCustom
              options={[
                { label: "Censored", value: "Censored" },
                { label: "Uncensored", value: "Uncensored" },
              ]}
              placeholder={"Type..."}
              value={type}
              onChange={(value) => setType(value)}
            />
          </Content>
          <Content>
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
              placeholder={"Idols..."}
              value={idols}
              onChange={(values) => setIdols(values)}
            />
          </Content>
        </Column>
        <Column>
          <Label style={{ color: Pink }}>RESULT</Label>
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
              setCode("");
              setTitle("");
              setPoster("");
              setType(null);
              setIdols(null);
            }}
          >
            Reset
          </ButtonReset>
        </Column>
      </Row>
    </Container>
  );
}

export default JAVDvdDataTool;
