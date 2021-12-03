import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from "styled-components";


const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFF;  
`;

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

      <S.ContainerTwo>

        <S.BoxContainerOne>
          <img src={imgmainradius.url} alt="" />
        </S.BoxContainerOne>

        <S.BoxContainerTwo>
          <p> {paragraphmain} </p>

        </S.BoxContainerTwo>

      </S.ContainerTwo>

      <S.ContainerOne>

        <S.Box1>
          <img src={img1Main.url} alt="" />
          <button>  <StyledLink to="/Sobre"> {btn1Main} </StyledLink> </button>

        </S.Box1>

        <S.Box2>
          <img src={img2Main.url} alt="" />

          <button>  <StyledLink to="/Projetos"> {btn2Main} </StyledLink> </button>

        </S.Box2>

        <S.Box3>
          <img src={img3Main.url} alt="" />

          <button>  <StyledLink to="/Galeria"> {btn3Main} </StyledLink> </button>

        </S.Box3>

      </S.ContainerOne>

    </S.Container>

  );
}