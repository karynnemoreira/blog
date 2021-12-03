import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


export function Header() {

  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
         logoheader {
      url
    }
    
    github {
      url
    }
    codesandbox{
      url
    }
    codepen{
      url
    }
    linkedin{
      url
    }
    instagram{
      url
    }
  
           }
      }
    }
      `)

  const {
    logoheader,
    github,
    codesandbox,
    codepen,
    linkedin,
    instagram


  } = data.alldata.headers[0];

  return (
      <S.Container>
        <S.BoxLogo>
          <img src={logoheader.url} alt="" />
        </S.BoxLogo>

        

        <S.BoxIcons>
          <img src={github.url} alt="" />
          <img src={codesandbox.url} alt="" />
          <img src={codepen.url} alt="" />
          <img src={linkedin.url} alt="" />
          <img src={instagram.url} alt="" />


        </S.BoxIcons>
      </S.Container>

  );
}