import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./footer.css";

export default function Footer() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center footer">
        <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="#" aria-current="page"><strong>© 2023 Rahul Seth</strong> <span className="visually-hidden">(current)</span></a>
        </div>
    </nav>
  )
}