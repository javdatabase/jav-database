import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

import Textarea from "../../components/UI/Textarea/Textarea";
import ClipboardPurpleIcon from "../../assets/images/ic_clipboard_purple/ic_clipboard_purple.svg";
import ClipboardGreenIcon from "../../assets/images/ic_clipboard_green/ic_clipboard_green.svg";

import { White, Orange, Pink, LightPurple } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { XLarge, XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 320px;
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
  margin-bottom: 50px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: ${XLarge};
  font-weight: bold;
  color: ${White};
  margin-bottom: 10px;
`;

const TextareaCustom = styled(Textarea)`
  width: 100%;
`;

const CopyButton = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 30px;
  height: 30px;
  background: ${White};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

function Debug() {
  const [uppercaseValue, setUppercaseValue] = useState("");
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const copyToClipboard = useCallback(() => {
    if (uppercaseValue && !copied) {
      const textarea = document.createElement("textarea");
      textarea.style.position = "fixed";
      textarea.style.left = "0";
      textarea.style.top = "0";
      textarea.style.opacity = "0";
      textarea.value = uppercaseValue;
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
  }, [uppercaseValue, copied]);

  return (
    <Container>
      <Title>TOOLS</Title>
      <Content>
        <Label>Uppercase:</Label>
        <TextareaCustom
          rows={5}
          placeholder={"Convert to uppercase..."}
          value={uppercaseValue}
          onChange={(e) =>
            setUppercaseValue(e.target.value.trim().toUpperCase())
          }
        />
        <CopyButton
          disabled={!uppercaseValue}
          src={copied ? ClipboardGreenIcon : ClipboardPurpleIcon}
          alt={""}
          onClick={copyToClipboard}
        />
      </Content>
    </Container>
  );
}

export default Debug;
