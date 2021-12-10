import styled from 'styled-components';



export const Container = styled.div` 
background-color: #F5F5F5;
width: 100%;
display:flex;
justify-content: space-between;
align-items:center;


 @media(max-width: 768px) {
     height: 30vh;
     justify-content: center;
     flex-direction: column;
     justify-content: space-around;
}

 @media(max-width: 425px){
        background-color: yellow;
        }


`

export const BoxLogo = styled.div` 
width: 20% ;
display: flex;
justify-content: center;

img{
    width: 40%;
    border-radius: 20%;
    border:solid white;

 @media(max-width: 768px) {
      width: 100%;
    border-radius: 20%;
    border:solid white;

}
`


export const BoxIcons = styled.div`
display: flex;
width: 40%;
justify-content: space-around;

img{
  width: %;
height: 5vh;
}
`


export const ImgHeader = styled.section`
width: 100%;

border: solid green;
img{
    width: 100%;
}
`

