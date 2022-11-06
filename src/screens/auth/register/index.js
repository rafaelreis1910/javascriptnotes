import Header from "../../../components/header";
import RegisterForm from "../../../components/auth/register_form";
import { Column, Section, Title, Container, Card } from "rbx";
import LogoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";

const RegisterScreen = () => (
  <>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={LogoImage} />
                    </Column>
                  </Column.Group>

                  <Column.Group>
                    <Column size={12}>
                      <Title
                        size={6}
                        className="has-text-grey has-text-centered"
                      >
                        Suas notas em um só lugar
                      </Title>
                    </Column>
                  </Column.Group>
                  <RegisterForm />
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default RegisterScreen;
