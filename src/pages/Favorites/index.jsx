import { useNavigate } from "react-router-dom";

import { useProducts } from "../../hooks/products";
import { api } from "../../services/api";

import { SecondHeader } from "../../components/SecondHeader";
import { BoxCupom } from "../../components/BoxCupom";
import { ShowOutfit } from "../../components/ShowOutfit";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Favorites() {
  const { favorites } = useProducts();
  const navigate = useNavigate();

  function handleNavigateOutfit(product_name) {
    navigate(`/outfit?${product_name}`);
  }

  return (
    <Container>
      <SecondHeader />
      <h3>FAVORITOS</h3>

      <Main>
        <BoxCupom />
        <div className="DivCatalog">
          {
            favorites.length > 0 &&
            favorites.map((product, index) => (
              <ShowOutfit key={ index } image={ `${ api.defaults.baseURL }/files/${ product.img }` } title={ product.name } price={ product.price } onClick={() => handleNavigateOutfit(product.name) } />
            )).reverse()
          }
        </div>

        <Footer />
      </Main>
    </Container>
  )
}