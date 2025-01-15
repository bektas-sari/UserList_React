import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]); // Kullanıcı listesini tutar
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimini tutar
  const [newUser, setNewUser] = useState({ name: "", email: "" }); // Yeni kullanıcı bilgilerini tutar

  // API'den kullanıcıları çek
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Arama terimine göre filtrelenen kullanıcılar
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Yeni kullanıcı ekleme
  const addUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      const userToAdd = {
        id: users.length + 1,
        ...newUser,
      };
      setUsers([...users, userToAdd]);
      setNewUser({ name: "", email: "" });
    }
  };

  // Kullanıcı silme
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Router>
      <Routes>
        {/* Ana Sayfa */}
        <Route
          path="/"
          element={
            <div>
              <h1>User List</h1>

              {/* Arama kutusu */}
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
              />

              {/* Yeni kullanıcı formu */}
              <form onSubmit={addUser} className="add-user-form">
                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  required
                />
                <button type="submit">Add User</button>
              </form>

              {/* Kullanıcı listesi */}
              <ul>
                {filteredUsers.map((user) => (
                  <li key={user.id}>
                    <div>
                      <Link to={`/user/${user.id}`}>
                        <strong>{user.name}</strong>
                      </Link>{" "}
                      - {user.email}
                    </div>
                    <button onClick={() => deleteUser(user.id)} className="delete-btn">
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        {/* Kullanıcı Detay Sayfası */}
        <Route path="/user/:id" element={<UserDetail users={users} />} />
      </Routes>
    </Router>
  );
}

// Kullanıcı Detay Bileşeni
function UserDetail({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found!</p>;

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company?.name || "N/A"}</p>
      <Link to="/" className="back-btn">Back to User List</Link>
    </div>
  );
}

export default App;
