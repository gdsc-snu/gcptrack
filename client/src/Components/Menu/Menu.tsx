
import * as React from 'react';
import styled from 'styled-components';
import leaderboardLogo from "../../pictures/LeaderboardLogo.svg";
// import leaderboardOpen from '../../pictures/leaderboardOpen.svg'
import AdminInfo from "../../pictures/AdminInfo.svg";
import ClubInfo from "../../pictures/ClubInfo.svg";

interface ShadowedProps {
  readonly clicked: boolean;
};

interface TextProps {
  readonly clicked: boolean;
}

interface ItemsProps {
  readonly activeClassName: string;
}

const Menu = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <SlickBar clicked={click}>
        <Item
          onClick={() => setClick(false)}
          activeClassName="active"
        >
          <img src={leaderboardLogo} alt="leaderboard" />
          <Text clicked={click}>Leaderboard</Text>
        </Item>
        <Item
          onClick={() => setClick(false)}
          activeClassName="active"
        >
          <img src={AdminInfo} alt="facilator info" />
          <Text clicked={click}>Facilitator info</Text>
        </Item>

        <Item
          onClick={() => setClick(false)}
          activeClassName="active"
        >
          <img src={ClubInfo} alt="clubInfo" />
          <Text clicked={click}>clubInfo</Text>
        </Item>
      </SlickBar>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
`;

const MenuLabel = styled.label`
 width: 4rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Icon = styled.span<ShadowedProps>`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
   &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SlickBar = styled.ul<ShadowedProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  position: absolute;
  transition: all 0.5s ease;
`;

const Item = styled.a<ItemsProps>`
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
`;

const Text = styled.span<TextProps>`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1rem" : "0")};
  transition: all 0.3s ease;
  color:black;
  align-self: center;
`;

export default Menu;