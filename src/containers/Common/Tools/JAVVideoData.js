import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";

import {
  White,
  Black,
  Grey,
  Orange,
  Pink,
  LightPurple,
  DarkBlue,
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

const ButtonCopy = styled.div`
  ${center};
  background: ${(props) =>
    props.disabled ? Grey : props.active ? DarkBlue : LightBlue};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${White};
  font-size: ${Large};
  text-align: center;
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.disabled ? Grey : props.active ? Green : LightBlue};
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

function JAVVideoDataTool() {
  const [code, setCode] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const result = useMemo(() => {
    if (!code && !content) {
      return "";
    }

    return `{
        code: "${code}",
        title: \`<iframe width="943" height="530" src="${content}" frameborder="0" allowfullscreen></iframe>\`,
      }`;
  }, [code, content]);

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
      <Title>JAV VIDEO DATA TOOL</Title>
      <Row>
        <Column>
          <Label style={{ color: DarkBlue }}>FORM</Label>
          <Content>
            <InputCustom
              placeholder={"Code..."}
              value={code}
              onChange={(e) => setCode(e.target.value.trim().toUpperCase())}
            />
          </Content>
          <Content>
            <InputCustom
              placeholder={"Content..."}
              value={content}
              onChange={(e) => setContent(e.target.value.trim())}
            />
          </Content>
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
              setContent("");
            }}
          >
            Reset
          </ButtonReset>
        </Column>
      </Row>
    </Container>
  );
}

export default JAVVideoDataTool;
