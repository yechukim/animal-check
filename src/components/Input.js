import styled from 'styled-components'

const Wrapper = styled.div`
  margin:5px 10px;
`
const StyledInput = styled.input`
  width:300px;
  height:40px;
  font-size:0.9em;
  outline:none;
  padding:5px;
  border: 1px solid #111;
  color:#111;
  font-family: 'Do Hyeon';

  ::placeholder {
    color: #a5a5a5;
  }
  & + & {
    margin-top:10px;
  }

`
const Label = styled.div`
  margin-bottom:8px;
  font-size:0.9em;
  color:#111;

`
function Input({ label, placeholder, name, value, onChange }) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledInput
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
}

export default Input;