import { useState } from "react";

const StudentPortal = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allStudents, setallStudents] = useState([]);
  const signUp = () => {
    let student = { firstname, lastname, email, password };
    setallStudents([...allStudents, student]);
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };
  const deleteStudent = (userIndex)=>{
    let newAllStudents = [...allStudents]
    // newAllStudents.splice(userIndex,1)
    // setallStudents(newAllStudents)
    newAllStudents=newAllStudents.filter((eachStudent,index)=>(index!=userIndex))
    setallStudents(newAllStudents)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto shadow-sm">
            <h1 className="text-center">Student Portal</h1>
            <input
              type="text"
              placeholder="First Name"
              className="form-control my-2"
              onChange={(e) => setfirstname(e.target.value)}
              value={firstname}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="form-control my-2"
              onChange={(e) => setlastname(e.target.value)}
              value={lastname}
            />
            <input
              type="text"
              placeholder="Email"
              className="form-control my-2"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Password"
              className="form-control my-2"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
            <button onClick={signUp} className="btn btn-info w-100 my-2">
              Sign Up
            </button>
          </div>
        </div>
        <hr />
        <h1 className="text-center">LIST OF STUDENTS</h1>
        {allStudents.length==0 ? <h1 className="text-center">There are no students available</h1> :
        <table className="table table-striped">
        <thead>
          <tr>
            <th>S/N</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((eachStudent, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{eachStudent.firstname}</td>
              <td>{eachStudent.lastname}</td>
              <td>{eachStudent.email}</td>
              <td>{eachStudent.password}</td>
              <td>
                <button
                  className="btn btn-danger my-2 mx-2"
                  onClick={()=>deleteStudent(index)}
                >
                  Delete
                </button>
                <button className="btn btn-warning my-2">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      }
        
      </div>
    </>
  );
};
export default StudentPortal;
