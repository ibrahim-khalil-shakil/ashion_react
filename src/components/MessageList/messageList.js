import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Admin/Layout/sidebar";
import Header from "../Admin/Layout/header";

export default function MessageList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost/ashion_ci/index.php")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching users:", error);
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/ashion_ci/delete.php?id=${id}`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      })
      .catch(function (error) {
        console.error("Error deleting user:", error);
      });
  }

  return (
    <div className="d-flex" id="dashboard-wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Header />
        <div className="container-fluid px-4">
          <div className="row ">

            <h2 className="fs-2 mb-3 d-h3">Message List</h2>
            <div className="col">
              <table className="table bg-white rounded shadow-lg table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">Message</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, key) => (
                    <tr key={key}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.message}</td>
                      <td>
                        <Link
                          to={`user/${user.id}/edit`}
                          className="btn btn-primary mr-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}