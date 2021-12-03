import styled from 'styled-components';



export const Container = styled.div` 
background-color: #F5F5F5;

width: 100%;
display:flex;
justify-content: space-between;
align-items:center;
`

export const BoxLogo = styled.div` 
width: 20% ;
display: flex;
justify-content: center;

img{
    width: 40%;
    border-radius: 20%;
    border:solid white;
}
`


export const BoxIcons = styled.div` 
width: 40%;

display:flex;
justify-content: space-around;

img{
    width: 8%;
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

