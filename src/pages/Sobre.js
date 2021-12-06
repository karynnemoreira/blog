import React from 'react'

import { Link } from 'gatsby'

import styled from "styled-components"



const Container = styled.div`
  width: 100%;
background: linear-gradient(180deg, #A60061 14.285%,
		#B95393 14.285%, 28.57%, #D260A7 28.57%, 42.855%,
		#EDEDEB 42.855%, 57.14%, #E5ABD0 57.14%, 71.425%,
		#C74D52 71.425%, 85.71%, #8C1D00 85.71%);  
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


export default function Sobre() {
    return (
        <Container>
    
	            <BoxButton>
            <Link to="/"> <button> Voltar </button> </Link>
            </BoxButton>

        </Container>
    )
}
