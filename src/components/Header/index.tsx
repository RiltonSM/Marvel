import { useState } from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom'

//Styles
import { 
    UltraContainer,
    SuperContainer,
    NavBar,
    Logo,
    LogoText,
    PageSelectorAndUserContainer,
    PageOption,
    Avatar,
    LogoutText,
    MenuMobile,
    MenuMobileRouteLabel,
    MenuIconImage
} from './styles';

//Assets
import avatarImg from '../../assets/images/foto-perfil.png';
import menuIcon from '../../assets/images/menu.svg';

const Header = () => {
    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

    const location = useLocation();
    
    const handleClickMenuIcon = () => {
        console.log("Entrou aqui")
        setMenuMobileIsVisible(!menuMobileIsVisible);
    }

    return(
        <UltraContainer>
            <SuperContainer>
                <NavBar>
                    <Logo>
                        <LogoText>MARVEL</LogoText>
                    </Logo>

                    <PageSelectorAndUserContainer>
                        <Link to="/characters">
                            <PageOption active={location.pathname === "/characters"}>Personagens</PageOption>
                        </Link>
                        <Link to="/movies">
                            <PageOption active={location.pathname === "/movies"}>Filmes</PageOption>
                        </Link>
                        <Link to="/comics">
                            <PageOption active={location.pathname === "/comics"}>HQs</PageOption>
                        </Link>

                        <Avatar src={avatarImg}/>
                        <LogoutText>Sair</LogoutText>
                    </PageSelectorAndUserContainer>
                    <MenuIconImage src={menuIcon} onClick={handleClickMenuIcon}/>
                </NavBar>
                <MenuMobile isVisible={menuMobileIsVisible}>
                    <div>
                        <Link to="/characters">
                            <PageOption active={location.pathname === "/characters"}>Personagens</PageOption>
                        </Link>
                        <Link to="/movies">
                            <PageOption active={location.pathname === "/movies"}>Filmes</PageOption>
                        </Link>
                        <Link to="/comics">
                            <PageOption active={location.pathname === "/comics"}>HQs</PageOption>
                        </Link>
                        <MenuMobileRouteLabel isTheCurrentPage={false} onClick={() => {}}>Sair</MenuMobileRouteLabel>
                    </div>                    
                </MenuMobile>
            </SuperContainer>
        </UltraContainer>
        
    )
}

export default Header;