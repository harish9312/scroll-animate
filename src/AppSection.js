import "./styles.css";
import React from "react";

export class AppSection extends React.Component {

    constructor() {
        super();
        this.state = {
            active: 1
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", (e) => this.scrollDownFade(e));
    }

    scrollDownFade = (e) => {
        const { active } = this.state
        if (active > 3 && e.keyCode === 40) {
            e.preventDefault()
            console.log('>> HERERERE', active);
            document.getElementById("bottom").scrollIntoView({ behavior: "smooth" })
            this.setState({ active: 1 });
            return
        }
        if (e.keyCode === 40) {
            console.log('>> active', active);
            console.log('>> e.keyCode', e.keyCode);
            e.preventDefault()
            this.setState({ active: active + 1 });
        }
    }
    render() {
        const a = ["#CD5C5C", "#F08080", "#FA8072", "#E9967A"];
        const { active } = this.state
        return (
            <div className="App">
                {[1, 2, 3, 4].map((x) => {
                    if (active === x) {
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
                    }
                })}
                <div id="bottom" className="bottom">asdsdd</div>
            </div>
        ); ƒ
    }
}