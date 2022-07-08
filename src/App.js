import "./styles.css";
import React from "react";

export default function App() {
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      console.log("asdsd", e.keyCode);
      if (e.keyCode === 40) {
        let act = active;
        if (active >= 4) {
          act = 1;
        }
        const element = document.getElementById(`new-${act}`);
        element.scrollIntoView({ block: "start", behavior: "smooth" });
        setActive(act + 1);
      }
    });
  }, [active]);

  const a = ["#CD5C5C", "#F08080", "#FA8072", "#E9967A"];

  return (
    <div style={{ minHeight: "1000px" }} className="App">
      {[1, 2, 3, 4].map((x) => {
        return (
          <div
            className="main"
            id={`new-${x}`}
            style={{ minHeight: "100vh", background: `${a[x - 1]}` }}
          >
            {x}
          </div>
        );
      })}
    </div>
  );
}
