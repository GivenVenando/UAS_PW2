import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const menu = [
    { name: "Daftar Pasien", path: "/pasien" },
    { name: "Tambah Pasien", path: "/pasien/create" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard Admin</h2>

      <div style={styles.menuContainer}>
        {menu.map((item, index) => (
          <button key={index} onClick={() => navigate(item.path)} style={styles.menuButton}>
            {item.name}
          </button>
        ))}
      </div>

      <button style={styles.logout} onClick={() => navigate("/login")}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "80%",
    margin: "auto",
    textAlign: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: "#333",
  },
  menuContainer: {
    display: "grid",
    gap: 12,
    gridTemplateColumns: "repeat(2, 1fr)",
    marginBottom: 40,
  },
  menuButton: {
    padding: "15px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#f2f2f2",
    transition: "0.3s",
  },
  logout: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 16,
  },
};
