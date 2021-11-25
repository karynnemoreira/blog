import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


export function Main() {

  const data = useStaticQuery(graphql`
    query {
         alldata {
       mains {
    img1Main {
      url
    }
    btn1Main
    img2Main {
      url
    }
    btn2Main
    img3Main {
      url
    }
    btn3Main
    titlemain
    paragraphmain
    imgmainradius {
      url
    }
  }
  }
    }
      
      `)

  const {
    
    img1Main, 
    btn1Main,
    img2Main,
    btn2Main,
    img3Main,
    btn3Main,
    titlemain,
    paragraphmain,
    imgmainradius
  
  } = data.alldata.mains[0];

  return (
      <S.Container>
        <S.ContainerOne>
      
<S.Box1>
  <img src={img1Main.url} alt=""/>
  <button> {btn1Main} </button>
</S.Box1>

<S.Box2>
  <img src={img2Main.url} alt=""/>
  <button> {btn2Main} </button>
</S.Box2>

<S.Box3>
  <img src={img3Main.url} alt=""/>
  <button> {btn3Main} </button>
</S.Box3>

</S.ContainerOne>

<S.ContainerTwo>

<S.BoxContainerOne>
  <img src={imgmainradius.url} alt=""/>
</S.BoxContainerOne>

<S.BoxContainerTwo>
  <h2> {titlemain} </h2>
   <p> {paragraphmain} </p>

</S.BoxContainerTwo>

</S.ContainerTwo>

      </S.Container>

  );
}