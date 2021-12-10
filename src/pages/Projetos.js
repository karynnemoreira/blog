import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div`
  width: 100%;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
 text-align: center;
  text-transform: uppercase;
background: linear-gradient(180deg, #A60061 14.285%,
		#B95393 14.285%, 28.57%, #D260A7 28.57%, 42.855%,
		#EDEDEB 42.855%, 57.14%, #E5ABD0 57.14%, 71.425%,
		#C74D52 71.425%, 85.71%, #8C1D00 85.71%); 
		
		p{
			font-size: 2vh;
		}
`

const Box = styled.div`
width: 50%;
display: flex;
flex-direction: column;
img{
  width: 70%;
height: 30vh;

`

const BoxButton = styled.button `
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

export default function Projetos() {

	const data = useStaticQuery(graphql`

query {
	alldata{
		projetos {
    imgproj1 {
      url
    }
    titleproj1
    paragraphproj1
    imgproj2{
      url
    }
    titleproj2
    paragraphoproj2
    imgproj3{
      url
    }
    titleproj3
    paragraphproj3
    imgproj4{
      url
    }
    titleproj4
    paragraphproj4
  }
 
  }
	}

`)

	const {
		imgproj1,
		titleproj1,
		paragraphproj1,
		imgproj2,
		titleproj2,
		paragraphproj2,
		imgproj3,
		titleproj3,
		paragraphproj3,
		imgproj4,
		titleproj4,
		paragraphproj4

	} = data.alldata.projetos[0];

	return (
		<Container>
			<Box>
				<h2> {titleproj1} </h2>
				<p> {paragraphproj1} </p>
				
				

        <a href="https://codesandbox.io/s/desafio-react-12-pagina-filmes-e-series-8m11i" target="_blank" > <img src={imgproj1.url} alt="github" /></a>


			</Box>

			<Box>
				<h2> {titleproj2} </h2>
				<p> não ta funcionando </p>				
				        <a href="https://agitated-morse-c6f025.netlify.app/" target="_blank" > <img src={imgproj2.url} alt="" /></a>


			</Box>

			<Box>
				<h2> {titleproj3} </h2>
				<p> {paragraphproj3} </p>
        <a href="https://modest-albattani-48a611.netlify.app/" target="_blank" > <img src={imgproj3.url} alt="" /></a>

			</Box>

			<Box>
				<h2> {titleproj4} </h2>
				<p> {paragraphproj4} </p>
				        <a href="https://vigilant-austin-ab84bf.netlify.app/" target="_blank" > <img src={imgproj4.url} alt="" /></a>

			</Box>

	            <BoxButton>
            <Link to="/"> <button> Voltar </button> </Link>
            </BoxButton>

		</Container>
	)
}