import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

//Components
import Checkbox from '../../components/Checkbox';

//Styles
import {
    Container,
    MarvelMovableLogo,
    LogoText,
    ContainerAfterAnimation,
    LoginContainer,
    MarvelLogo,
    WelcomeBack,
    Form,
    FormLabel,
    Input,
    PasswordActionsContainer,
    CheckboxWithLabel,
    Text,
    ForgetPassword,
    Button,
    SignUpContainer,
    SignUpText
} from './styles';

const Home = () => {
    const [showMovableLogo, setShowMovableLogo] = useState(true);

    const history = useHistory();

    useEffect(() => {
        const timeoutToRemoveMovableLogo = 
            setTimeout(
                function () {
                    setShowMovableLogo(false);
                }, 4000
            )
        ;

        return () => {
            clearTimeout(timeoutToRemoveMovableLogo);
        };
    }, []);

    const handleClick = () => {
        history.push('/characters');
    }

    return(
        <Container className="home">
            {
                showMovableLogo ? (        
                        <MarvelMovableLogo>
                            <LogoText>
                                MARVEL
                            </LogoText>
                        </MarvelMovableLogo>
                    ) : (
                        <ContainerAfterAnimation>
                            <LoginContainer>
                                <MarvelLogo id="logo-static">
                                    <LogoText>
                                        MARVEL
                                    </LogoText>
                                </MarvelLogo>
                                <WelcomeBack>
                                    Bem-vindo(a) de volta!
                                </WelcomeBack>
                                <Form>
                                    <FormLabel>
                                        Acesse sua conta:
                                    </FormLabel>

                                    <Input placeholder="Usuário"/>
                                    <Input placeholder="Senha"/>

                                    <PasswordActionsContainer>
                                        <CheckboxWithLabel>
                                            <Checkbox/>
                                            <Text>Salvar login</Text>
                                        </CheckboxWithLabel>

                                        <ForgetPassword>Esqueci a senha</ForgetPassword>
                                    </PasswordActionsContainer>

                                    <Button onClick={handleClick}>
                                        Entrar
                                    </Button>

                                    <SignUpContainer>
                                        <Text>Ainda não tem o login?</Text>
                                        <SignUpText>Cadastre-se</SignUpText>
                                    </SignUpContainer>
                                </Form>
                            </LoginContainer>
                        </ContainerAfterAnimation>
                    )
                }
        </Container>        
    )
}

export default Home;

