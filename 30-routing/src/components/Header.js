import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <span>Router Tutorial</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/photo">photo</Link>
        </li>
      </ul>
    </header>
  );
}
