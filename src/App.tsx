import classNames from "classnames";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState(0);
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
          iusto!border-base-300 rounded-box p-6
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
          Tab content 2
        </div>
      </div>
    </div>
  );
}

export default App;
