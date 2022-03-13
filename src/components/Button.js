import styled from 'styled-components'

const StyledButton = styled.button`

  padding:10px 25px;
  font-size:0.95em;
  margin:10px 0;
  border-radius:10px;
  border:none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #333;
  color:#fff;
  cursor:pointer;

`
function Button({ name, onClick }) {
  return (
    <StyledButton onClick={StyledButton}>
      {name}
    </StyledButton>
  );
}

export default Button;