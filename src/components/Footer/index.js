import React from "react";
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'



export function Footer() {

  const data = useStaticQuery(graphql`
    query {
         alldata {
       footers {
    paragraphfooter
    githubfooter {
      url
    }
    linkedinfooter {
      url
    }
    codesandboxfooter {
      url
    }
    codepenfooter {
      url
    }
    instagramfooter {
      url
    }
  }
  }
    }
    
      
      `)



  const { paragraphfooter, githubfooter, linkedinfooter, codesandboxfooter, codepenfooter, instagramfooter } = data.alldata.footers[0];

  return (
    <S.Container>
      <S.Paragraph>
        {paragraphfooter}
      </S.Paragraph>


      <S.BoxIcons>
        <a href="https://github.com/karynnemoreira" target="_blank" > <img src={githubfooter.url} alt="github" /></a>
        <a href="https://codesandbox.io/u/karynnemoreira" target="_blank" > <img src={codesandboxfooter.url} alt="codesandbox" /></a>
        <a href="https://codepen.io/Karynne" target="_blank" >  <img src={codepenfooter.url} alt="codepen" /></a>
        <a href="https://www.linkedin.com/in/karynne-moreira-4865905a/" target="_blank" > <img src={linkedinfooter.url} alt="linkedin" /></a>
        <a href="https://www.instagram.com/munizkary/" target="_blank" > <img src={instagramfooter.url} alt="instagram" /></a>

      </S.BoxIcons>


    </S.Container>

  );
}