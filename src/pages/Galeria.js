import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'



const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

background: linear-gradient(180deg, #A60061 14.285%,
		#B95393 14.285%, 28.57%, #D260A7 28.57%, 42.855%,
		#EDEDEB 42.855%, 57.14%, #E5ABD0 57.14%, 71.425%,
		#C74D52 71.425%, 85.71%, #8C1D00 85.71%);  

		img{
			margin-left: 4%;
			margin-top: 1rem;
			width: 15%;
			height: 35vh;
			border-radius: 10%;
		}
`

const BoxButton = styled.button`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
border: none;
background: linear-gradient(293deg, rgba(31,0,36,1) 0%, rgba(148,81,97,0.896796218487395) 35%, rgba(255,0,61,1) 100%);
button {
	box-shadow:inset -23px 1px 16px -8px #efdcfb;
	background:linear-gradient(to bottom, #dfbdfa 5%, #bc80ea 100%);
	background-color:#dfbdfa;
	border-radius:11px;
	border:2px solid #c584f3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:9px 12px;
	text-decoration:none;
	text-shadow:2px 4px 1px #9752cc;
}
Button:hover {
	background:linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%);
	background-color:#bc80ea;
}
Button:active {
	position:relative;
	top:1px;
}
`


export default function Galeria() {

  const data = useStaticQuery(graphql`

query {
	alldata{
  galerias {
    foto1 {
      url
    }
    foto2 {
      url
    }
    foto3 {
      url
    }
    foto4 {
      url
    }
    foto5 {
      url
    }
    foto6 {
      url
    }
    foto7 {
      url
    }
    foto8 {
      url
    }
    foto9 {
      url
    }
    foto10 {
      url
    }
           foto11 {
      url
    }
    foto12 {
      url
    }
    foto13 {
      url
    }
    foto14 {
      url
    }
    foto15 {
      url
    }
    foto16 {
      url
    }
     foto17 {
      url
    }
        foto18 {
      url
    }
    foto19 {
      url
    }
     foto20 {
      url
    }
    foto21 {
      url
    }
   foto22 {
      url
    }
    foto23 {
      url
    }
    foto24 {
      url
    }
    foto25 {
      url
    }
    foto26{
      url
    }
  }
	}
}



`)

  const { foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, foto21, foto22, foto23, foto24, foto25, foto26 } = data.alldata.galerias[0];

  return (
    <Container>
      <div>
        <h2> Galeria de Fotos Aleatórias </h2>
        <p> Animais, Pessoas e Momentos Especiais </p>
      </div>

      <div>
        <img src={foto1.url} alt="" />
        <img src={foto2.url} alt="" />
        <img src={foto3.url} alt="" />
        <img src={foto4.url} alt="" />
        <img src={foto5.url} alt="" />
        <img src={foto6.url} alt="" />
        <img src={foto7.url} alt="" />
        <img src={foto8.url} alt="" />
        <img src={foto9.url} alt="" />
        <img src={foto10.url} alt="" />

        <img src={foto11.url} alt="" />
        <img src={foto12.url} alt="" />
        <img src={foto13.url} alt="" />
        <img src={foto14.url} alt="" />
        <img src={foto15.url} alt="" />
        <img src={foto16.url} alt="" />
        <img src={foto17.url} alt="" />
        <img src={foto18.url} alt="" />
        <img src={foto19.url} alt="" />
        <img src={foto20.url} alt="" />
        <img src={foto21.url} alt="" />
        <img src={foto22.url} alt="" />
        <img src={foto23.url} alt="" />
        <img src={foto24.url} alt="" />
        <img src={foto25.url} alt="" />
        <img src={foto26.url} alt="" />

      </div>



      <BoxButton>
        <Link to="/"> <button> Voltar </button> </Link>
      </BoxButton>

    </Container>


  )

}

