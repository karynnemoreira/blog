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
        <a href="https://github.com/karynnemoreira" target="_blank" > <img src={github.url} alt="github" /></a>
        <a href="https://codesandbox.io/u/karynnemoreira" target="_blank" > <img src={codesandbox.url} alt="codesandbox" /></a>
        <a href="https://codepen.io/Karynne" target="_blank" >  <img src={codepen.url} alt="codepen" /></a>
        <a href="https://www.linkedin.com/in/karynne-moreira-4865905a/" target="_blank" > <img src={linkedin.url} alt="linkedin" /></a>
        <a href="https://www.instagram.com/munizkary/" target="_blank" > <img src={instagram.url} alt="instagram" /></a>


        </S.BoxIcons>
      </S.Container>

  );
}