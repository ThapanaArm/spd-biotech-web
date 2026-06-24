import type { ReactNode } from "react";

// Inline formatting: **text** or <b>text</b> -> bold.
function renderInline(text: string, keyBase: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|<b>[\s\S]*?<\/b>)/g)
    .filter((s) => s !== "")
    .map((part, i) => {
      const md = part.match(/^\*\*([^*]+)\*\*$/);
      const html = part.match(/^<b>([\s\S]*?)<\/b>$/);
      if (md) return <strong key={`${keyBase}-${i}`}>{md[1]}</strong>;
      if (html) return <strong key={`${keyBase}-${i}`}>{html[1]}</strong>;
      return <span key={`${keyBase}-${i}`}>{part}</span>;
    });
}

/**
 * Renders plain text with light formatting:
 *  - a line starting with "- ", "* " or "• " becomes a chevron bullet
 *  - consecutive plain lines become a paragraph (line breaks preserved)
 *  - blank line separates blocks
 *  - **text** or <b>text</b> becomes bold
 */
export default function RichText({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  let para: string[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    const items = bullets;
    const key = `u${blocks.length}`;
    bullets = [];
    blocks.push(
      <ul className="detail-features" key={key}>
        {items.map((t, i) => (
          <li key={i}>{renderInline(t, `${key}-${i}`)}</li>
        ))}
      </ul>
    );
  };
  const flushPara = () => {
    if (!para.length) return;
    const ls = para;
    const key = `p${blocks.length}`;
    para = [];
    blocks.push(
      <p className="detail-desc" key={key}>
        {ls.map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {renderInline(line, `${key}-${i}`)}
          </span>
        ))}
      </p>
    );
  };

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    if (bullet) {
      flushPara();
      bullets.push(bullet[1]);
    } else if (line === "") {
      flushBullets();
      flushPara();
    } else {
      flushBullets();
      para.push(line);
    }
  }
  flushBullets();
  flushPara();
  return <>{blocks}</>;
}
