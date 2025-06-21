export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-accent text-center text-sm text-text">
      <p>&copy; {new Date().getFullYear()} Athar Akram · All rights reserved.</p>
      <p className="mt-2">
        Built with 💻 by <a href="https://github.com/xthxr" className="text-accent underline">xthxr</a>
      </p>
    </footer>
  );
}

