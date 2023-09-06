import { FaChevronDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";

import Logo from "../../assets/logo.svg";

import { InputSearch } from "../InputSearch";

import { Container } from "./style";

export function Header() {
  return (
    <Container>

      <div>
        <p> Sua moda é feita aqui ;) </p>
        <ul>
          <li> <a href="#"> Política de privacidade </a> </li>
          <li> <a href="#"> Contato </a> </li>
          <li> <a href="#"> Ajuda </a> </li>
        </ul>
      </div>

      <div>
        <img src={ Logo } alt="Logomarca" />

        <div className="boxButtons">
          <button>
            <p> Olá, <strong> nane </strong> </p>
            <FaChevronDown size={ 20 } />
          </button>

          <button>
            <FiHeart size={ 20 } />
            <span> 0 </span>
          </button>

          <button>
            <RiShoppingBag2Line size={ 20 } />
            <span> 0 </span>
          </button>
        </div>

        <InputSearch className="input" />

      </div>

    </Container>
  )
}