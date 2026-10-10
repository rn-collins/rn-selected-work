import type { ReactNode } from "react";
import type { Block, Essay, Run } from "../lib/essays";
import styles from "../app/essays/essays.module.css";

// Renders an essay's blocks as semantic HTML. A citation group such as [S10][S8] becomes "[10, 8]", each number a
// link to that entry in the numbered source list at the end of the page.
function Runs({ runs, numbers }: { runs: Run[]; numbers: Map<string, number> }) {
  return (
    <>
      {runs.map((r, i): ReactNode => {
        if (r[0] === "t") return r[1];
        if (r[0] === "b") return <strong key={i}>{r[1]}</strong>;
        const ids = r[1].filter((id) => numbers.has(id));
        return (
          <span className={styles.cites} key={i}>
            [{ids.map((id, j) => (
              <span key={id}>
                {j > 0 && ", "}
                <a href={`#src-${id}`} aria-label={`Source ${numbers.get(id)}`}>{numbers.get(id)}</a>
              </span>
            ))}]
          </span>
        );
      })}
    </>
  );
}

function BlockView({ b, numbers }: { b: Block; numbers: Map<string, number> }) {
  switch (b.t) {
    case "h2":
      return <h2>{b.x}</h2>;
    case "h3":
      return <h3>{b.x}</h3>;
    case "p":
      return <p><Runs runs={b.r} numbers={numbers} /></p>;
    case "ul":
      return <ul>{b.items.map((it, i) => <li key={i}><Runs runs={it} numbers={numbers} /></li>)}</ul>;
    case "ol":
      return <ol>{b.items.map((it, i) => <li key={i}><Runs runs={it} numbers={numbers} /></li>)}</ol>;
    case "table":
      return (
        <div className={styles.tableWrap} role="region" aria-label="Comparison table, scrolls sideways on narrow screens" tabIndex={0}>
          <table>
            <thead>
              <tr>{b.head.map((c, i) => <th scope="col" key={i}><Runs runs={c} numbers={numbers} /></th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (j === 0
                    ? <th scope="row" key={j}><Runs runs={c} numbers={numbers} /></th>
                    : <td key={j}><Runs runs={c} numbers={numbers} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function EssayBody({ e }: { e: Essay }) {
  const numbers = new Map(e.sources.map((s, i) => [s.id, i + 1]));
  return (
    <div className={styles.body}>
      {e.blocks.map((b, i) => <BlockView b={b} numbers={numbers} key={i} />)}
    </div>
  );
}
