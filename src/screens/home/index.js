import Header from "../../components/header";
import { Column, Section, Title, Container } from "rbx";
import { Link } from "react-router-dom";

import PresentationImage from "../../assets/images/presentation.png";
import "../../styles/home.scss";

const HomeScreen = () => (
  <>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
            Crie notas e acesse-as facilmente e alcance novos picos de produtividade. 
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
            Retirar o excesso de ideias,pensamentos e tarefas representa muito mais leveza e praticidade em seu dia a dia. Por outro lado, a desorganização pode oferecer problemas  para o seu dia a dia. O sistema proposto é gerenciar todos os pensamentos e ideias salvando tudo nada se perde dentro do sistema
            </Title>
            <Link
              to="/register"
              className="button is-outlined is-white is-large"
            >
              <strong>Registre-se gratuitamente AGORA</strong>
            </Link>
          </Column>
          <Column size={6} offset={1}>
            <img src={PresentationImage} alt="PresentationImage"/>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default HomeScreen;
