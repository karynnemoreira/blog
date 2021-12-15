import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'


const Container = styled.div`
  width: 100%;
background: linear-gradient(180deg, #A60061 14.285%,
		#B95393 14.285%, 28.57%, #D260A7 28.57%, 42.855%,
		#EDEDEB 42.855%, 57.14%, #E5ABD0 57.14%, 71.425%,
		#C74D52 71.425%, 85.71%, #8C1D00 85.71%);  
`
const Box = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
img{
	width: 50%;
	border-radius: 20%;

  @media(max-width: 1600px) {
      width: 40%;
}

  @media(max-width: 1440px) {
      width: 50%;
}

      @media(max-width: 768px) {
        width: 80%;
}

  @media(max-width: 568px) {
        width: 90%;
       
}


}
p{
	color: #FFF;
	font-size: 4vh;
		margin: 2rem;
		background-color: black;

 @media(max-width: 1600px) {
      width: 60%;
	  font-size: 3vh;
}

  @media(max-width: 1440px) {
      width: 50%;
	  font-size: 4vh;
}

      @media(max-width: 768px) {
		font-size: 3vh;
}


`
const BoxOne = styled.div`
display: flex;
width: 60%;
text-align: center;
align-items: center;
justify-content: space-around;
margin-top: 2rem;
`
const BoxTwo = styled.div`
display: flex;
width: 60%;
text-align: center;
align-items: center;
justify-content: space-around;
`
const BoxThree = styled.div`
display: flex;
width: 60%;
text-align: center;
align-items: center;
justify-content: space-around;

`
const BoxFour = styled.div`
display: flex;
width: 60%;
text-align: center;
align-items: center;
justify-content: space-around;
`
const BoxFive = styled.div`
display: flex;
width: 60%;
text-align: center;
align-items: center;
justify-content: space-around;
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



export default function Sobre() {

	const data = useStaticQuery(graphql`

query {
	alldata{
		sobres {
    paragraphboxone
    imgboxone {
      url
    }
    paragraphboxtwo
    imgboxtwo {
      url
    }
    paragraphboxthree
    imgboxthree {
      url
    }
    paragraphboxfour
    imgboxfour{
      url
    }
    paragraphboxfive
    imgboxfive{
      url
    }
  }
 
  }
	}

`)

	const {
		paragraphboxone,
		imgboxone,
		paragraphboxtwo,
		imgboxtwo,
		paragraphboxthree,
		imgboxthree,
		paragraphboxfour,
		imgboxfour,
		paragraphboxfive,
		imgboxfive
	} = data.alldata.sobres[0];

	return (
		<Container>

			<Box>
				<BoxOne>
					<p> {paragraphboxone} </p>
					<img src={imgboxone.url} alt="De repente 30" />
				</BoxOne>

				<BoxTwo>
					<img src={imgboxtwo.url} alt="eletrotécnica" />
					<p> {paragraphboxtwo} </p>
				</BoxTwo>

				<BoxThree>
					<p> {paragraphboxthree} </p>
					<img src={imgboxthree.url} alt="comércio" />
				</BoxThree>

				<BoxFour>
					<img src={imgboxfour.url} alt="vai na web" />
					<p> {paragraphboxfour} </p>
				</BoxFour>

				<BoxFive>
					<p> {paragraphboxfive} </p>
					<img src={imgboxfive.url} alt="eu no foguete" />
				</BoxFive>

			</Box>

			<BoxButton>
				<Link to="/"> <button> Voltar </button> </Link>
			</BoxButton>

		</Container>
	)
}
