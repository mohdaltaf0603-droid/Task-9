function MobileMenu({ links, onClose }) {
  return (
    <div className="mobile-menu">
      {links.map((link) => (
        <a key={link.name} href={link.href} onClick={onClose}>
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default MobileMenu;