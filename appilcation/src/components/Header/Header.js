import React from "react";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a className="navbar-brand" href="/">
        Employee List
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}
