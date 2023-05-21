import React, { useState } from "react";
import noAvatar from '../../asset/images/noAvatar.jpg';

const student_db = "student_db";
function Student() {
    const [students, setStudents] = useState(() => {
        let data = [];
        if (window.localStorage.getItem(student_db) == null) {
            data = [];
            window.localStorage.setItem(student_db, JSON.stringify(data));
        }
        else {
            data = JSON.parse(window.localStorage.getItem(student_db))
        }
        return data;
    });

    // const [students, setStudents] = useState([{
    //     id: 1,
    //     fullname: "Khoa Nguyễn",
    //     avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg",
    //     email: "khoa.nguyen@codegym.vn"
    // }]);

    const [student, setStudent] = useState({
        id: 0,
        fullname: "",
        avatar: "",
        email: ""
    })
    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");
    // const [avatar, setAvatar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setStudents(pre => {
            let id = findMaxId() + 1;
            let newStudent = {
                ...student,
                id: id
            }
            let newData = [
                ...pre,
                newStudent
            ]
            window.localStorage.setItem(student_db, JSON.stringify(newData));
            return newData;
        })

        // setStudents([
        //     ...students,
        //     {
        //         id: findMaxId() + 1,
        //         fullname: fullname,
        //         avatar: avatar,
        //         email: email
        //     }
        // ])
        // setAvatar("");
        // setEmail("");
        // setFullname("");
        setStudent({
            id: 0,
            fullname: "",
            avatar: "",
            email: ""
        })
    }

    const handleRestForm = () => {
        // setAvatar("");
        // setEmail("");
        // setFullname("");
        setStudent({
            id: 0,
            fullname: "",
            avatar: "",
            email: ""
        })
    }

    const handleInput = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
        console.log(student);
    }

    const handleRemove = (std) => {
        let confirm = window.confirm("Are sure to remove this student?");
        if (confirm) {
            setStudents(pre => {
                let newData = pre.filter(student => student.id !== std.id);
                window.localStorage.setItem(student_db, JSON.stringify(newData));
                return newData;
            })
        }
    }
    const findMaxId = () => {
        // let max = 0;
        // for(let std of students){
        //     if(std.id > max){
        //         max =- std.id;
        //     }
        // }
        // return max;
        let newStudents = [...students];
        newStudents.sort(function (std1, std2) {
            return std2.id - std1.id;
        })
        return (newStudents[0] && newStudents[0].id) || 0;
    }

    const { fullname, avatar, email } = student;
    return (
        <div className="container">
            <section className="create-student mt-2">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="form-label">Fullname</label>
                                <input type="text" className="form-control form-control-sm" name="fullname" value={fullname}
                                    placeholder="Enter fullname ..."
                                    onInput={handleInput} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control form-control-sm" name="email" value={email}
                                    placeholder="Enter email ..."
                                    onInput={handleInput} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Avatar URL</label>
                                <input type="url" className="form-control form-control-sm" name="avatar" value={avatar}
                                    placeholder="Enter avatar url ..."
                                    onInput={handleInput} required
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary btn-sm me-2">
                                    <i className="fa fa-plus"></i> Create
                                </button>
                                <button type="button" className="btn btn-warning btn-sm" onClick={handleRestForm}>
                                    <i className="fa fa-times"></i> Cancel
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <img className="rounded mx-auto d-block w-50" src={avatar || noAvatar} alt="no avatar" />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <section className="display-student">
                <div className="row">
                    <h2 className="text-white bg-success">List student</h2>
                </div>
                <div className="row">
                    {
                        students.map(student => (
                            <div className="col-3" key={student.id}>
                                <div className="card my-2">
                                    <img src={student.avatar} alt="" className="card-image-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{student.fullname}
                                            <i role='button' className="fa-solid fa-person-circle-xmark ms-2 text-warning"
                                                onClick={() => handleRemove(student)}
                                            ></i>
                                        </h5>
                                        <p className="card-text">{student.email}</p>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Student;