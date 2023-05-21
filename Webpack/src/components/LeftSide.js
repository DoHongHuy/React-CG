import React from "react";

const menus = [
    {
        name: "Home",
        link: "#"
    },
    {
        name: "About",
        link: "#"
    },
    {
        name: "Site map",
        link: "#"
    },
    {
        name: "Contact",
        link: "#"
    },
]
function LeftSide(){
    return (
        <div className="bg-success w-25">
            <div className="list-group">
                {
                    menus.map(menu => (
                        <a key={menu.name} className="list-group-item" href={menu.link}>{menu.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default LeftSide;