import { HeaderContainer, Logo, SearchContainer, SearchIcon, SearcInput } from "./Header.styled"
import LogoImg from "../../assets/glance.png";
import SearchImg from "../../assets/icon_search.png"
export const Header = () => {
  return (
    <HeaderContainer>
              <Logo src={LogoImg} alt="Logo" />
      <SearchContainer>
        <SearchIcon src={SearchImg}/>
        <SearcInput type="text" placeholder="Пошук"/>
      </SearchContainer>
    </HeaderContainer>
  );
};