import React, { useState } from "react";


// one-way binding
// two-way binding

// useState(): thay đổi trạng thái của dữ liệu
// const [state, setState] = useState(initState)
// initState: 
//      + trạng thái đầu tiên của state
//      + kiểu dự: là tất cả các loại dữ liệu của js (KDL nguyên thủy, mảng, object, function)
// state: đầu tiên được gán bằng giá trị ở trong initState
// setState: function, cập/thay đổi state

// Nguyên lý: 
//  + mỗi khi state được cập/thay đổi sẽ re-render lại component
//  + nếu 1 lúc thay đổi nhiều state, thì component chỉ re-render 1 lần
function Main() {
    // const handleInput = (e) => {
    //     document.querySelector('.heading_1').innerText = e.target.value;
    //     // document.title = e.target.value;
    // }

    // const handleClick = () => {
    //     document.querySelector('input[type="text"]').value = "Button";
    // }

    const [count, setCount] = useState(0);
    const [staff, setStaff] = useState({
        name: "Khoa",
        age : 18
    })
    
    const handleIncrement = () => {
        // setCount(count + 1);
        // setCount(count + 2);
        // setCount(count + 3);
        setCount(function(preCount){
            return preCount + 1;
        })
        setCount((preValue) => preValue + 1)
        setCount((preValue) => preValue + 1)
    };

    const handleUpdate = () => {
        setStaff({
            ...staff,
            email: "khoa.nguyen@codegym.vn"
        })
    }

    console.log(`re-render: ${JSON.stringify(staff)}`);
    // console.log(`re-render: ${count}`);
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5 heading_1">Sticky footer with fixed navbar</h1>
                <h1>{count}</h1>
                <button onClick={handleIncrement}>Increment Count</button>

                <button onClick={handleUpdate}>Update Staff</button>

                {/* <input type="text" onInput={handleInput} />
                <button onClick={handleClick}>Change Name</button> */}
            </div>
        </main>
    )
}

export default Main;