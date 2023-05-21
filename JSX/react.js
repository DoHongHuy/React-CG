// React.createElement
// 1. type:
//      + Element node
//      + Component/HOC (Hight Order Component)
// 2. props: classname, id, ... (attributes)
// 3. childrens/text node

// const h1 = React.createElement("h1", {
//     id: "h1Id",
//     style: {
//         backgroundColor: "yellow",
//         color: "red"
//     }

// }, "Hello anh em C04");

// const p = React.createElement("p", null, "Sint consequat sunt minim exercitation id esse ipsum exercitation ea.")

// version 17
// ReactDOM.render(h1, document.querySelector('#root'))

// const wrap = React.createElement(React.Fragment, null, h1, p);

// version 18
// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(wrap);

// const div = React.createElement()

const div = React.createElement("div", {
    className: "post"
},
    React.createElement("h1", { className: "heading_1"}, "Học lập trình Front-end"),
    React.createElement("p", {className: "paragraph"}, "Sunt sunt minim esse est magna amet sit et exercitation."),
    React.createElement("button", { 
            className: "btn btn-primary",
            onClick: () => alert("Xem chi tiết") 
        }, "Xem chi tiết")
)

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(div);