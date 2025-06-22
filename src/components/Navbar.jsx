// File: src/components/Navbar.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-4 md:px-16 border-b border-accent bg-primary sticky top-0 z-50">
      <h1 className="text-xl font-bold text-accent">xthxr.dev</h1>
      <nav className="flex space-x-4 text-xl">
        <a href="https://github.com/xthxr" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/xthxr" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/xthxr__" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com/@atharakram" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </nav>
    </header>
  );
}
