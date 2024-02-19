'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container  z-30 py-2 bg-white shadow-md sticky top-0 left-0">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={78} height={60} />
      </Link>

      {/* Burger Icon (visible only on small screens) */}
      <div className="lg:hidden">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Menu (visible only on medium and large screens) */}
      <ul
        className={`hidden lg:flex gap-12 uppercase ${menuOpen ? 'sm:hidden' : ''}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-ease-in hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Overlay and Mobile Menu (visible only when menu is open) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-white opacity-100">
          <div className="flexBetween max-container padding-container relative py-2">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={78} height={60} />
            </Link>
            <button onClick={toggleMenu}>
              <Image
                src="/close.svg"
                alt="Close"
                width={40}
                height={24}
                className="cursor-pointer rounded-full bg-gray-400 p-1 transition-all hover:bg-gray-600"
              />
            </button>
          </div>

          <ul className="max-container padding-container flex flex-col items-center justify-center py-32 ">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="p-2">
                <Button
                  type="button"
                  title={link.label}
                  variant="btn_dark_gray_outline"
                >
                  <Link
                    href={link.href}
                    className={`regular-40 text-white flexCenter cursor-pointer pb-1.5 
                  transition-all hover:font-bold ${menuOpen ? 'text-2xl font-bold flex items-center justify-center ' : ''}`}
                    onClick={toggleMenu}
                  >
                    {link.label}
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
