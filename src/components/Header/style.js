import styled from 'styled-components';



export const Container = styled.div` 
width: 100%;
border: solid red;
display:flex;
justify-content: space-around;
align-items:center;
`

export const BoxLogo = styled.div` 
width: 20%;

img{
    width: 35%;
    border-radius: 10%;
}
`

export const BoxContent = styled.div` 
width: 40%;
display:flex;
justify-content: space-around;
h2{
    text-transform: uppercase;
    font-size: 2vh;
}
`

export const BoxIcons = styled.div` 
width: 20%;

display:flex;
justify-content: space-around;

img{
    width: 11%;
    border-radius: 50%;
}
`

export const ImgHeader = styled.section`
width: 100%;

border: solid green;
img{
    width: 100%;
}
`

