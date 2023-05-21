// const h1 = document.createElement("h1");
// h1.className ="heading_1";
// h1.id = "h1Id";
// h1.innerText = "Hello anh em codegym";

// document.getElementsByTagName("body")[0]
// document.body.appendChild(h1);


const div = document.createElement("div");
div.className = "post";

const h1 = document.createElement("h1");
h1.innerText = "Lộ trình học Front-end";
h1.className = "heading_1";

const p = document.createElement("p");
p.className = "paragraph";
p.innerText = "Nostrud sunt non do aliquip elit exercitation sunt enim elit sint. Elit sint irure adipisicing aliquip enim magna ad fugiat in minim enim est eu aliquip. Aute ex eiusmod pariatur laboris Lorem commodo enim officia occaecat quis consectetur. Deserunt ea non veniam magna reprehenderit deserunt pariatur occaecat tempor commodo id officia. Qui eu est eu commodo officia qui fugiat ad nostrud quis laboris culpa. Pariatur enim magna incididunt veniam qui tempor dolore aliqua cillum fugiat exercitation in. Do ipsum eu mollit id culpa cillum id occaecat commodo pariatur cillum."


const btn = document.createElement("button");
btn.className = "btn btn-primary";
btn.innerText = "Xem chi tiết";
btn.onclick = function(){
    alert("Onclic xem chi tiết")
}

div.appendChild(h1);
div.appendChild(p);
div.appendChild(btn);

document.querySelector("#root").appendChild(div);