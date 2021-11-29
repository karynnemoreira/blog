import styled from 'styled-components';



export const Container = styled.div` 
width: 100%;
background: rgb(179,58,180);
background: linear-gradient(90deg, rgba(179,58,180,1) 0%, rgba(253,179,29,1) 50%, rgba(69,149,252,1) 100%);
display: flex;
flex-direction: column;
img{
    width: 50%;
}
`

export const ContainerTwo = styled.div` 
margin-top: 5rem;
width: 100%;
display: flex;
`


export const BoxContainerOne = styled.div`
width: 50%;
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
h2{
        font-size: 5vh;

}
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
   &:hover{
       width: 70%;
    }
}
button{
    width:  ;
    position: relative;

    bottom: 7rem;
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
       &:hover{
       width: 70%;
    }
}
button{
    width: ;
    position: relative;

    bottom: 4rem;
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
  &:hover{
       width: 95%;
    }

}
button{
    width: ;
    bottom: 2rem;
position: relative;
}
`

