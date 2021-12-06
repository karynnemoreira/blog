import styled from 'styled-components';



export const Container = styled.div` 
width: 100%;
background: linear-gradient(180deg, #A60061 14.285%,
		#B95393 14.285%, 28.57%, #D260A7 28.57%, 42.855%,
		#EDEDEB 42.855%, 57.14%, #E5ABD0 57.14%, 71.425%,
		#C74D52 71.425%, 85.71%, #8C1D00 85.71%);
display: flex;
flex-direction: column;
img{
    width: 50%;
}
`

export const ContainerTwo = styled.div` 
margin-top: 1rem;
width: 100%;
display: flex;
`


export const BoxContainerOne = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: center;
img{
    border-radius: 50%;
}
`

export const BoxContainerTwo = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
color: white;


p{
    width: 60%;
    font-size: 4vh;
}

`
export const ContainerOne = styled.div` 
width: 100%;
display: flex;
margin-top: 7rem;
`


export const Box1 = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: static;

img{
 width: 50% ;
 border-radius: 20%;
}
button{
     width: 40%;
    height: 8vh;
    bottom: 6rem;
    position: relative;
background-color: red;
}
`

export const Box2 = styled.div` 

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
display:flex;
flex-direction: column;
position: static;

img{
     width: 60%;
   border-radius: 20%;

}
button{
     width: 30%;
    height: 8vh;
    bottom: 4rem;
    position: relative;
background-color: red;
}
`
export const Box3 = styled.div` 
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
display:flex;
flex-direction: column;
position: static;

img{
    width: 80%;
   border-radius: 20%;


}
button{
    width: 40%;
    height: 8vh;
    bottom: 4rem;
position: relative;
background-color: red;

}
`

