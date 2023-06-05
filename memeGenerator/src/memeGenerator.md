
# Scrimba - Meme Generator

The Meme Generator is a great tool that helps your excerise retention when it come to complex ReactJs principles. In this process, we learned how to use {useState}, {useEffect}, adding EventListners in form, fetch API, the usage of state and props.

## Initialize Project
This project was initialized using 
To deploy this project run

```bash
  npm create vite@latest
```

## Components
Below are 3 comoponets that add to the static potrayal of the webpage.

 - Header
 - Meme

 ### Header
- consist with <img /> and <h2> and <h4> tags
- We used the `lebron.png` as the logo of the Meme Generator

 ### Meme
- const of 2 input props and button 
- This where functionality of webpage dwells
- This is where the logic of that consist of useState, useEffect and fecth API

#### useState
-  State is similar to declaring variables from within a component in a the helps way for React to remember saved values from within a component. This is reflective in the declaring `meme`, for this consist with topText, bottomText and randomImage. As the user generates the text for the image, webpage can remember the text as the images are generated


#### useEffects
- The useEffect is a toool that helps interact with content where React does not usual control over. UseEffect assists with rendering or perfomace of the component that its in. 
- We see this tool being applicable to the usage of the API. Usually React would have arrayed-objects that are preloaded to assist withn rendering process, in this instance, we do not have to have pre-loaded content. We were able to interact with API without any issues 
- useEffect interacts well arrays
- Usually includes dependcies (in this case it was an array)

The useEffect helped simplify any potential complexies.  

#### API Reference

#### Get all items

```http
 https://api.imgflip.com/get_memes
```

## Acknowledgements

 - [Scrimba](https://scrimba.com/dashboard#overview)








