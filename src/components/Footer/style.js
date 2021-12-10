import styled from 'styled-components';

export const Container = styled.div` 
width: 100%;
background-color: #F5F5F5;
`


export const Paragraph = styled.p `
width: 100%;
font-size: 3vh;
{
background-color: #F5F5F5;

    width: 92%;
  animation: go-back 3s infinite alternate;
}

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

` 

export const BoxIcons = styled.div `
display: flex;
width: 100%;
justify-content: space-around;

img{
  width: %;
height: 5vh;
}
`

