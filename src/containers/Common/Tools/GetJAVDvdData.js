import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import Textarea from "../../../components/UI/Textarea/Textarea";

import request from "../../../apis/request";
import {
  Black,
  Green,
  Grey,
  LightPurple,
  Orange,
  Pink,
  White,
} from "../../../themes/colors";
import { Large, XLarge, XXLarge } from "../../../themes/font";
import { center, fadeIn } from "../../../themes/styled";

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
  const [link, setLink] = useState("");
  const [cachedLink] = useState([]);
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
},`;
  }, [code, title, poster, type, idols]);

  useEffect(() => {
    const links = link.split(",").filter((item) => !cachedLink.includes(item));
    links.forEach((item) => {
      request
        .get(item, {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            priority: "u=0, i",
            "sec-ch-ua":
              '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
            "sec-ch-ua-arch": '"x86"',
            "sec-ch-ua-bitness": '"64"',
            "sec-ch-ua-full-version": '"142.0.7444.176"',
            "sec-ch-ua-full-version-list":
              '"Chromium";v="142.0.7444.176", "Google Chrome";v="142.0.7444.176", "Not_A Brand";v="99.0.0.0"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": '""',
            "sec-ch-ua-platform": '"macOS"',
            "sec-ch-ua-platform-version": '"15.7.2"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
            cookie:
              "__utmz=45030847.1716571133.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); UGVyc2lzdFN0b3JhZ2U=%7B%7D; __utma=45030847.1122226552.1716571133.1738524693.1740455561.11; __utmz=45030847.1716571133.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); timezone=-420; __qca=P1-c83f74ba-9740-45a6-a339-3bb6ba069f7d; dm=javlibrary; __utmc=45030847; __utma=45030847.1122226552.1716571133.1738524693.1740455561.11; __utmb=45030847.1.10.1765430653; __utmb=45030847.2.10.1765430653; __utmc=45030847; cf_clearance=OQnge_p3TfNTwhuk_pJH5g9XacY4ynb1hN_fBGQ_gmM-1765430653-1.2.1.1-C362GBCvWeAXECrsDJYYlFqbF.WdDa467qtdfuocRCKurNYEcQ.kA3wxCexkw3w9LQZXDeLs3fmGHGBCRcdoI81F7ORn73mLG234R_0Uuu65NcQtp_XzU77e0B2.C35OxwHRbO0qv600Jmv8amm86xFmINH3B3fudh8xCj9b_noW0WVXG3.Q_O8mNEfv4RycSWD1p_BfF25eyrKrjNi87G9gOwh6fHdb1Fp16wZHzM.E.AgmBP_7GvA1WedRfIZY; over18=18",
          },
        })
        .then(console.log)
        .catch(console.log);
    });
  }, [link, cachedLink]);

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
      <Title>Get JAV DVD DATA TOOL</Title>
      <Row>
        <Column>
          <Label style={{ color: Orange }}>FORM</Label>
          <Content>
            <TextareaCustom
              placeholder={"Link,..."}
              value={link}
              onChange={(e) => setLink(e.target.value.trim())}
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
