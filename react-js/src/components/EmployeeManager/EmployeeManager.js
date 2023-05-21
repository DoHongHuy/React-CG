import React, { useState, useRef ,useEffect} from "react";
const Employees = [
    {
        id: 1,
        name: 'Phan Văn Thiện',
        email: 'thiendeptrai@gmail.com'
    },
    {
        id: 2,
        name: 'Nguyễn Phước Quý Ngọc',
        email: 'ngocdaica@gmai.com'
    },
    {
        id: 3,
        name: 'Nguyễn Phước',
        email: 'phuocnguyen9669@gmail.com'
    }
]

function EmployeeManager() {





        const [employee, setEmployee] = useState(Employees);
        const [employeeName, setEmployeeName] = useState(Employees);
        const [employeeEmail, setEmployeeEmail] = useState(Employees);


        const maxId = Employees.reduce(
            (max, Employees) => (Employees.id > max ? Employees.id : max),
            Employees[0].id 
          );
        const [employeeID , setEmployeeId] = useState(maxId)

        //   const handleIncrease = (abvvv) => {
          
//   }

    function handAddEmployee(e){
        var abvvv = setEmployeeId(prevState => prevState +1 )


        // var newId = Math.max(...Employees.map(  Employees => Employees.id))


        
        // handNewIdEmployee(setEmployeeId)
        e.preventDefault();
        console.log(setEmployeeId)
        const newEmployees ={
            id : abvvv ,
            name : employeeName,
            email: employeeEmail
        }
        // setEmployee([
        //    employee.push(newEmployees)
        // ])

        Employees.push(newEmployees)

        console.log(Employees);
        setEmployeeName("");
        setEmployeeEmail("")
    }
    return (
        <>
        <form onSubmit={handAddEmployee}>
        <div className="container" >
            <h1>Add List</h1>
            <div className="row">
                <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    id="name"
                    aria-label="First name"
                    onInput={(e) => setEmployeeName(
                        e.target.value
                        )}
                />
                </div>
                <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    aria-label="Last name"
                    name="email"
                    id="email"
                    onInput={(e) =>setEmployeeEmail(
                        e.target.value
                        )  }
                />
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-outline-success">Add List</button>
            </div>
        </div>
        </form>
        
        <div className='App'>
              <div className='container'>
                <div className="row">
                <h1 className='text-tenter'> List</h1>
                </div>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Emai</th>
                      </tr>
                    </thead>
                    <tbody >
                        {Employees.map(e => (
                            <tr key={e.name}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                            </tr>
                        )) }
                    </tbody>
                  </table>

              </div>
            </div>
        </>
            
    )
}

export default EmployeeManager;