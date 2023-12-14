/**
 * TODO:
 *	{-Implement json schema that will separate, but sync:
 *		
 *each key will be the time/date
 *
 *		--Script
 *		--Location of Invention/Accomplishment
 *			(make an easing function that will spin the globe to that location) *spinToLocation(coordinates)*
 *		--file Locations for:
 *			---Audio (need to be able to derive the amount of time
 *			---Images?
 *		--Corresponding Theme
 *			ex:
 *				font type
 *				color scheme
 *				music?
 *		--
 *}
 *	
 *	{-Implement the globe
 *		create function that
 *			Introductory function
 *				intro slide fades out into space. earth zoomed out, zooms in, *earth spinning*, then we input spinToLocation(coordinates)
 *			spins the globe on it's axis (variable speed) this should be on in the beggining at random orgin
 *			spinToLocation(coordinates){
 *				we use d3.easeQubic() to spin the planet to this point on the globe, (the user may zoom in and out but not move the globe)
 *			}
 *
 *	}
 *
 *	{-Implement Timeline
 *		simply use the json file to output the events, onclick should scroll through and animate to that point, forward and backward
 *	}
 *	+++++++++++++++++++++++++++++++++++++
 *	Beggining(){
 *		introPage()
 *		fadeOut()
 *		Intro(
 *			*space*
 *			*earth is spinning, from random origin point at a constant speed*
 *			zooms into the earth
 *		)
 *	}
 *
 *	Loop(){
<<<<<<< HEAD
 *		spinToLocation()
 *	}
 *
=======
 *
 *	<-------- earth will be full screen with: 
 *	|		timeline opacity increases from 30% to 90-99%
 happening at*				visible scrolling through time (media comp & info with be hidden left/right respectfully).
 the same time->  spinToLocation(coords, d3.easeQubic())
 *		
 *		introduce era/accomplishment/location/time
 *		
 *		media display component will fullscreen with text have a backdrop blur with highlighted spoken text
 *
 *
 *
 *	}
 *
 * 
 * 
 * IDEAS:
 * 		history of embedded systems in aeronautics, nuclear, etc. whatever shit you're in
>>>>>>> 8a3973d (initial commit)
 * */


import * as React from "react"

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  ChakraProvider,
<<<<<<< HEAD
=======
	extendTheme
>>>>>>> 8a3973d (initial commit)
} from "@chakra-ui/react"

import "@fontsource/inter"
import "./Utils/SCSS/main.scss"

import { Home } from "./Pages/home"

<<<<<<< HEAD
export const App = () => (
  <ChakraProvider>
=======
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

export const App = () => (
  <ChakraProvider theme={theme}>
>>>>>>> 8a3973d (initial commit)
   	<BrowserRouter> 
		<Routes>
			<Route path="/" element={<Home/>}/>
		</Routes>
	</BrowserRouter>  
</ChakraProvider>
)
