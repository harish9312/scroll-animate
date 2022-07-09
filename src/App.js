import "./styles.css";
import React from "react";

export default function App() {
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {
    document.addEventListener("keydown", scrollDown);
  }, [active]);

  const scrollDown = (e) => {
    e.preventDefault();
    if (e.keyCode === 40) {
      const element = document.getElementById(`new-${active + 1}`);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
      if (active >= 3) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }
  }

  const a = ["#CD5C5C", "#F08080", "#FA8072", "#E9967A"];

  return (
    <div className="App">
      {[1, 2, 3, 4].map((x) => {
        return (
          <div
            key={x}
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
