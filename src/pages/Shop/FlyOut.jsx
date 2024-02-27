import React from "react";

const FlyOutContext = React.createContext();

export function FlyOut(props) {
    const [open, toggle] = React.useState(false);


    return (
        <FlyOutContext.Provider value={{ open, toggle }}>
            {props.children}
        </FlyOutContext.Provider>
    );
}

function Toggle() {
    const { open, toggle } = React.useContext(FlyOutContext);

    return (
        <div onClick={() => toggle(!open)}>
            <h1>Click</h1>
        </div>
    );
}

function List({ children }) {
    const { open } = React.useContext(FlyOutContext);
    return open && <ul>{children}</ul>;
}

function Item({ children }) {
    return <li>{children}</li>;
}










FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;