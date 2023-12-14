<<<<<<< HEAD
import * as React from 'react'

export const Home = () => {
	return(
		<>
			this is a test
=======
/**
 * this should be where the introductory page should be displayed, with contact information and a button that fades the page and transitions to the 
 * Components/Pages/intro.jsx, after which we will create another page that will manage the Loop function (which will have:
 * info component: which will have asscociated audio
 * media display component: which will have asscociated video, images, gifs, etc. (we should make this component be able to be fullscreened on demand as well 
 * and source component.
 */

import * as React from 'react'

import {
	Box,
	Text,
	VStack
} from "@chakra-ui/react"

export const Home = () => {
	return(
		<>
			<Box justifyContent="center" mt={"33%"}>
				<VStack filter={"blur"} >//implement blur backdrop
					<Text>The History</Text>
						<Text>of</Text>
					<Text>Aerospace</Text> 
				</VStack>
			</Box>
>>>>>>> 8a3973d (initial commit)
		</>	
	)
}
