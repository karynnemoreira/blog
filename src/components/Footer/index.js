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

    

    const {paragraphfooter, githubfooter, linkedinfooter, codesandboxfooter, codepenfooter, instagramfooter} = data.alldata.footers[0];

    return (
<S.Container>
    <S.Paragraph>
         {paragraphfooter} 
    </S.Paragraph>
   

   <S.BoxIcons>    
<img src={githubfooter.url} alt=""/>
    <img src= {codesandboxfooter.url} alt=""/>
    <img src= {codepenfooter.url} alt=""/>
            <img src= {linkedinfooter.url} alt=""/>

<img src= {instagramfooter.url} alt=""/>
 </S.BoxIcons>


</S.Container>

    );
    }