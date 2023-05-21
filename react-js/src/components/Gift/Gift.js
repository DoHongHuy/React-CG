import React, { useState } from "react";
const gifts = ["Nồi cơm điện", "TV LG 34'", "Máy sấy", "Mai"];
function Gift() {
    const [gift, setGift] = useState("");

    const handleGetGift = () => {
        let random = Math.floor(Math.random()*gifts.length);
        setGift(gifts[random]);
    }
    return (
        <div className="container">
            <h1>{gift || "Bấm nút bên dưới để lấy quà"}</h1>
            <button className="btn btn-success"
                onClick={handleGetGift}
            >Lấy quà</button>
        </div>
    )
}

export default Gift;