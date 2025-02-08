import React from "react";

const Footer = () => {
  return (
    <footer className="w-full footer footer-center bg-base-200 border-t  text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Faisal
          Hasan Emon
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
