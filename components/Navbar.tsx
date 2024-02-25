'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import Button from './Tool/Button';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  // State pour contrôler l'ouverture et la fermeture du menu
  const [menuOpen, setMenuOpen] = useState(false);

  // State pour stocker le label du lien actuellement actif
  const [currentActive, setCurrentActive] = useState(NAV_LINKS[0].label);

  // Fonction pour basculer l'état du menu entre ouvert et fermé
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (label: SetStateAction<string>) => {
    setCurrentActive(label);
    toggleMenu();
  };

  return (
    <nav className="flexBetween max-container padding-container z-30 bg-white sticky top-0 left-0">
      {/* Logo */}
      <Link href="/">
        <Image src="/image/logo.png" alt="logo" width={78} height={60} />
      </Link>

      {/* Icône de menu pour les petits écrans */}
      <div className="lg:hidden">
        <Image
          src="/svg/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Menu principal */}
      <ul
        className={`hidden lg:flex gap-12 uppercase bold-18 ${menuOpen ? 'sm:hidden' : ''}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className={`bold-16  flexCenter cursor-pointer pb-1.5 transition-ease-in ${
                currentActive === link.label ? 'text-gray-400' : ''
              }`}
            >
              {/* Appeler handleLinkClick lorsque le lien est cliqué */}
              <span onClick={() => handleLinkClick(link.label)}>
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-white opacity-100">
          <div className="flexBetween max-container padding-container relative py-2">
            {/* Logo */}
            <Link href="/">
              <Image src="/image/logo.png" alt="logo" width={78} height={60} />
            </Link>
            {/* Bouton pour fermer le menu */}
            <button onClick={toggleMenu}>
              <Image
                src="/svg/close.svg"
                alt="Close"
                width={40}
                height={24}
                className="cursor-pointer rounded-full bg-gray-400 p-1 transition-all hover:bg-gray-600"
              />
            </button>
          </div>

          {/* Liens du menu mobile */}
          <ul className="max-container padding-container flex flex-col items-center justify-center py-44 ">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="p-2">
                <Button
                  type="button"
                  title={link.label}
                  variant="btn_dark_gray_outline"
                >
                  <Link
                    href={link.href}
                    className={`regular-40 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                      menuOpen
                        ? 'text-2xl font-bold flex items-center justify-center '
                        : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {/* Appeler handleLinkClick lorsque le lien est cliqué */}
                    <span onClick={() => handleLinkClick(link.label)}>
                      {link.label}
                    </span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
