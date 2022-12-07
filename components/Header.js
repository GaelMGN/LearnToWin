import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [anchorCoaching, setAnchorCoaching] = useState(null);
  const [anchorMenu, setAnchorMenu] = useState(null);
  const openCoaching = Boolean(anchorCoaching);
  const openMenu = Boolean(anchorMenu);

  const handleClickCoaching = (event) => {
    setAnchorCoaching(event.currentTarget);
  };

  const handleClickMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorCoaching(null);
    setAnchorMenu(null);
  };

  return (
    <header className="sticky top-0 z-20 bg-gray-100">
      <div className="mx-auto flex h-[80px] max-w-[75%] items-center justify-between">
        <Link href="/">
          <a className="flex h-14 w-14 items-center  sm:w-24">
            <Image
              src={require("../src/assets/img/Logo-serre-Vert-et-noir.png")}
              alt="logo"
              fill="true"
            />
          </a>
        </Link>
        <div className="flex items-center justify-between lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="h-6 w-6 hover:cursor-pointer hover:text-[#437A73]"
            onClick={handleClickMenu}
          />
        </div>
        <div className="hidden gap-6 font-bold lg:flex lg:justify-between">
          <Link href="/">
            <a className="hover:text-[#437A73]">Accueil</a>
          </Link>
          <a
            href="#"
            className="hover:cursor-pointer hover:text-[#437A73]"
            onClick={handleClickCoaching}
          >
            Découvrir nos coaching &darr;
          </a>
          <Link href="/events">
            <a className="hover:text-[#437A73]">Découvrir nos évènements</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-[#437A73]">Contact</a>
          </Link>
        </div>
        <Menu
          id="basic"
          anchorEl={anchorCoaching}
          open={openCoaching}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Entretien physique</MenuItem>
          <MenuItem onClick={handleClose}>Développement personnel</MenuItem>
          <MenuItem onClick={handleClose}>Sommeil et relaxation</MenuItem>
          <MenuItem onClick={handleClose}>Nutrition</MenuItem>
        </Menu>
        <Menu
          id="basic"
          anchorEl={anchorMenu}
          open={openMenu}
          onClose={handleClose}
          onMouseLeave={handleClose}
        >
          <Link href="/">
            <MenuItem onClick={handleClose}>Accueil</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem onClick={handleClose}>Entretien physique</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem onClick={handleClose}>Développement personnel</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem onClick={handleClose}>Sommeil et relaxation</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem onClick={handleClose}>Nutrition</MenuItem>
          </Link>
          <Link href="/events">
            <MenuItem onClick={handleClose}>Découvrir nos évènements</MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Link>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
