import styled from 'styled-components';

const ToolBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #92e8ba;
  color: #ffff;
  height: 40px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: black;
  text-align: center;
`;

const Menu = () => {
  return (
    <ToolBar>
      <Logo>Elefy</Logo> 
      <div>Search <input /></div>
      <Avatar>U </Avatar>
    </ToolBar>
  );
}

export default Menu;