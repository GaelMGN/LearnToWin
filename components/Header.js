import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gray-100">
      <div className="mx-auto flex h-[80px] max-w-[75%] items-center justify-between">
        <a href="#">
          <Image
            src={require("../src/assets/img/Logo-serre-Vert-et-noir.png")}
            alt="logo"
            width="49"
            height="43"
          />
        </a>
        <div className="align-center flex justify-between">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-8" />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;
