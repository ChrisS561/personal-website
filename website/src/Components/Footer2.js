import React from "react";

const defaultBackgroundColor = "#212529";

export default function Footer2({ backgroundColor = defaultBackgroundColor }) {
  return (
    <footer className="text-center text-white" style={{ backgroundColor}}>
      <div className="text-center p-3">
        © {new Date().getFullYear()} Christopher Smith Jr. All Rights Reserved.
      </div>
    </footer>
  );
}
