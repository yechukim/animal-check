import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  width:420px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#fff;
  border-radius: 10px;
  margin:100px auto;
  padding:10px 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
function FormWrapper({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default FormWrapper;