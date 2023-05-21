// const courseName = "Học lập trình Front-end - ReactJS";
// const handleClick = (name) => alert(name);
// // const handleClick = () => alert("Xem chi tiết");
// const div = (
//     <div className="post">
//         <h1 className="heading_1">{courseName}</h1>
//         <p>Culpa sunt ut consectetur id sint qui labore magna cupidatat esse. Exercitation nostrud fugiat do tempor incididunt mollit magna veniam anim nostrud laboris est minim. Excepteur amet reprehenderit sunt voluptate ut est cillum reprehenderit quis consequat sit anim. Esse adipisicing veniam et consequat nisi cillum veniam do sit eu ad. Mollit enim sunt consectetur culpa ex.</p>
//         {/* <button className="btn btn-primary" onClick={() => alert("Xem chi tiết")}>Xem chi tiết</button> */}
//         {/* <button className="btn btn-primary" onClick={handleClick}>Xem chi tiết</button> */}
//         <button className="btn btn-primary" onClick={() => handleClick(courseName)}>Xem chi tiết</button>
//     </div>
// )

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(div);

const courses = [
    {
        courseId: 1,
        courseName: "Học lập trình Front-end",
        description: "Velit laboris est velit proident dolore adipisicing aute dolore amet."
    },
    {
        courseId: 2,
        courseName: "Học lập trình Back-end",
        description: "Adipisicing ullamco sit sunt ut aute est minim culpa adipisicing reprehenderit deserunt."
    },
    {
        courseId: 3,
        courseName: "Học lập trình Mobile",
        description: "VPariatur esse cupidatat cillum ea aliqua esse officia exercitation."
    },
]

const handleClick = (name) => alert(name);
const container = (
    courses.map((course) => (
        <div className="post" key={course.courseId}>
                <h1 className="heading_1">{course.courseName}</h1>
                <video width={400} controls>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/ogg" />
                    Your browser does not support HTML video.
                </video>
                <p>{course.description}</p>
                <button className="btn btn-primary" onClick={() => handleClick(course.courseName)}>Xem chi tiết</button>
        </div>
    ))
)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);