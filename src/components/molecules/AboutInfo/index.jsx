import Text from "../../atoms/Text";
import { AboutStyled } from "./styles";

const AboutInfo = () => {
  return (
    <AboutStyled>
      <Text>
        Em todo o país o comércio de alimentos por meio de delivery tem se
        tornado uma prática cada vez maior e que, consequentemente, abrange
        vários nichos e áreas. Segundo a pesquisa nacional encomendada pela VR
        Benefícios ao Instituto Locomotiva, houve um aumento expressivo de
        comerciantes que adotaram o delivery durante a pandemia e que vão
        manter. Antes, somente 49% dos estabelecimentos faziam entregas em
        domicílio, hoje o número cresceu para 81%. Mas, alguns nichos da
        alimentação ficaram de fora desse aumento tão expressivo, um deles, por
        exemplo, são os pequenos produtores locais. Aqueles que "fazem a feira"
        da sua cidade. Trazendo alimentos frescos, mais saudáveis e que duram
        mais para você.
      </Text>

      <Text>
        Pensando nisso, uma aplicação web/mobile focada em delivery de alimentos
        frescos surgiu. Onde um produtor rural ou local possa cadastrar
        alimentos frescos para a venda e o consumidor possa acessar a plataforma
        e comprar os alimentos desejados. Na página inicial haverá uma lista com
        todos os produtores, cada produtor terá sua loja com sua vitrine de
        alimentos. O consumidor fará a escolha da loja onde decidirá comprar os
        alimentos e haverá um carrinho de compras para por fim confirmar o
        pedido.
      </Text>
    </AboutStyled>
  );
};
export default AboutInfo;
