import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import ShortStars from "../../../helpers/short-stars";
import Input from "../../../components/UI/Input/Input";
import Textarea from "../../../components/UI/Textarea/Textarea";
import Select from "../../../components/UI/Select/Select";

import {
  White,
  Black,
  Grey,
  LightPurple,
  Yellow,
  DarkBlue,
  LightBlue,
  Blue,
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
    background: linear-gradient(${Grey}, ${Blue});
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
    props.disabled ? Grey : props.active ? Green : Blue};
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
      props.disabled ? Grey : props.active ? Green : DarkBlue};
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

function UPVVideoDataTool() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const result = useMemo(() => {
    if (!title && !content && (!stars || !stars.length)) {
      return "";
    }
    return `{
        title: \`${title}\`,
        content: \`<iframe width="943" height="530" src="${content}" frameborder="0" allowfullscreen></iframe>\`,
        type: "US/EU",
        stars: [${
          stars
            ?.map(
              (item) => `{ idStar: "${item.value}", name: "${item.label}" }`
            )
            .join(", ") || ""
        }],
  },`;
  }, [title, content, stars]);

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
      <Title>UPV VIDEO DATA TOOL</Title>
      <Row>
        <Column>
          <Label style={{ color: Grey }}>FORM</Label>
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
              placeholder={"Content..."}
              value={content}
              onChange={(e) => setContent(e.target.value.trim())}
            />
          </Content>
          <Content>
            <SelectCustom
              isMulti={true}
              options={ShortStars.map((item) => ({
                label: item.name,
                value: item.idStar,
                colors: [Yellow, LightBlue],
              }))}
              placeholder={"Stars..."}
              value={stars}
              onChange={(values) => setStars(values)}
            />
          </Content>
        </Column>
        <Column>
          <Label style={{ color: Blue }}>RESULT</Label>
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
              setTitle("");
              setContent("");
              setStars(null);
            }}
          >
            Reset
          </ButtonReset>
        </Column>
      </Row>
    </Container>
  );
}

export default UPVVideoDataTool;
