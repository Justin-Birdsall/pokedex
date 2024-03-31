import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Pokedex from "./componets/pokedex_animation";
import Hero from "./componets/Hero";

export default function Home(){


return(
    <>
    <Navbar>

    </Navbar>
    <Hero/>
    <Pokedex/>
    
    </>
);
}