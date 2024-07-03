import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";

function App() {
  const [tab, setTab] = useState(0);
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        licenseKey:
          "demo:1686709997486:7d877c500300000000814db5426acea6ee2e1165a8d588b6ac3965084c",
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
      },
      viewer.current!
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <div className="container mx-auto mt-3">
      <div role="tablist" className="tabs tabs-lifted w-full">
        <button
          role="tab"
          className={classNames("tab", { "tab-active": tab == 0 })}
          onClick={() => setTab(0)}
        >
          Default
        </button>
        <div
          role="tabpanel"
          className="tab-content border-base-300 rounded-box p-6"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt
          deserunt, cumque ullam ea unde odio magnam voluptas non iste ex
          quaerat aperiam libero corrupti incidunt, temporibus possimus ducimus
          iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          perspiciatis cupiditate, saepe animi ducimus et dolorum laborum in
          molestias. Possimus molestias eum animi sapiente mollitia, earum
          ratione! Vitae, eveniet beatae.
        </div>

        <button
          role="tab"
          className={classNames("tab", { "tab-active": tab == 1 })}
          onClick={() => setTab(1)}
        >
          PDF
        </button>
        <div
          role="tabpanel"
          className="tab-content border-base-300 rounded-box p-6"
        >
          <div
            className="webviewer"
            ref={viewer}
            style={{ height: "100vh" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
