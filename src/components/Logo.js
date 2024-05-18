import styled from 'styled-components'

const Logo = () =>{
    return <Wrapper>
        <span>BespoJKe</span>
    </Wrapper>
}

const Wrapper = styled.h3`
margin-bottom:0;
span{
    color:var(--clr-primary-5);
}
`;

export default Logo;