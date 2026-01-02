import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { uniqBy } from "lodash";
import styled from "styled-components";

import Textarea from "../../../components/UI/Textarea/Textarea";

import ShortIdols from "../../../helpers/short-idols";
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

const convertWrongName = (str) => {
  const WRONG_NAMES = {
    "Hibiki Ootsuki": "Hibiki Otsuki",
    "Honoka Tsujii": "Honoka Tsuji",
    "Arisa Hanyuu": "Arisa Hanyu",
    "Nao Jinguuji": "Nao Jinguji",
    "Yuri Nikaidou": "Yuri Nikaido",
  };

  return WRONG_NAMES[str] || str;
};

function GetJAVDvdDataTool() {
  const [sources, setSources] = useState("");
  const [dvds, setDvds] = useState([]);
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const parseSourceToDvd = useCallback((html) => {
    const extract = (pattern) => {
      const match = html.match(pattern);
      return match ? match[1].trim() : "";
    };

    const decodeHtmlEntities = (str) => {
      return new DOMParser().parseFromString(str, "text/html").documentElement
        .textContent;
    };

    const code = extract(
      /<td class="header">ID:<\/td>\s*<td class="text">([^<]+)<\/td>/i
    );

    let rawTitle = extract(/<title>(.*?)<\/title>/i);
    let title = "";
    if (rawTitle) {
      rawTitle = rawTitle.replace(/ - JAVLibrary/i, "").trim();
      title = rawTitle.replaceAll(code, "").trim().toUpperCase();
    }

    const poster = extract(/<img[^>]+id="video_jacket_img"[^>]+src="([^"]+)"/i);

    let idols = [
      ...html.matchAll(/<span class="star"><a[^>]*>([^<]+)<\/a>/gi),
    ].map((m) => m[1].trim());

    const aliases = [
      ...html.matchAll(/<span[^>]*id="alias[^"]*"[^>]*>\(([^)]+)\)<\/span>/gi),
    ].map((m) => m[1].trim());

    idols = [...idols, ...aliases].flatMap((name) => {
      const match = name.match(/^(.+?)\s*\((.+?)\)$/);
      return match ? [match[1].trim(), match[2].trim()] : [name];
    });

    idols = [...new Set(idols)].reduce(
      (acc, item) => [
        ...acc,
        convertWrongName(item),
        convertWrongName(item.split(" ").reverse().join(" ")),
      ],
      []
    );

    let temp;
    if (code && title && poster && idols.length) {
      temp = {
        code: String(code).toUpperCase(),
        title: decodeHtmlEntities(title),
        poster: poster,
        type: "Censored",
        idols: uniqBy(
          idols
            .map((i) => ShortIdols.find((item) => item.name === i))
            .filter((item) => !!item),
          "idIdol"
        ).sort((a, b) => {
          let x = a.idIdol.toUpperCase();
          let y = b.idIdol.toUpperCase();
          if (x < y) return -1;
          else if (x > y) return 1;
          else return 0;
        }),
      };
      setDvds((p) => uniqBy([...p, temp], "code"));
    }
  }, []);

  useEffect(() => {
    if (sources.trim()) {
      parseSourceToDvd(sources);
    }
  }, [sources, parseSourceToDvd]);

  const result = useMemo(() => {
    if (!dvds.length) {
      return "";
    } else {
      return `${dvds
        .map(
          (item) => `{
            code: "${item.code}",
            title: \`${item.title}\`,
            poster: "${item.poster}",
            type: "Censored",
            idols: [${
              item.idols
                ?.map(
                  (item) => `{ idIdol: "${item.idIdol}", name: "${item.name}" }`
                )
                .join(", ") || ""
            }],
}`
        )
        .join(",")}`;
    }
  }, [dvds]);

  useEffect(() => {
    if (result) {
      const element = document.getElementById("textarea-result");
      element?.scrollTo({ top: element?.scrollHeight, behavior: "smooth" });
    }
  }, [result]);

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
              rows={19}
              placeholder={"Sources..."}
              value={sources}
              onChange={(e) => setSources(e.target.value)}
            />
          </Content>
        </Column>
        <Column>
          <Label style={{ color: Pink }}>RESULT</Label>
          <Content>
            <TextareaCustom
              id={"textarea-result"}
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
              setSources("");
              setDvds([]);
            }}
          >
            Reset
          </ButtonReset>
        </Column>
      </Row>
    </Container>
  );
}

export default GetJAVDvdDataTool;
