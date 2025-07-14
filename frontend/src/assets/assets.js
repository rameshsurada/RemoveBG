import logo from "/src/assets/logo.webp"
import hero from "/src/assets/hero.png"
import credits1 from "../assets/credits1.png"
import credits from "../assets/credits.png"
import  original from "../assets/original.png"
import bgremove from "./bgremove.png"


export const assets = {
    logo, hero, credits1,credits,original,bgremove
   
}

export const steps = [
    {
        step : "Step 1",
        title : "Select an image",
        description : `First, choose the image you want to remove background from by clicking on Start from a photo. Your image format can be PNG or JPG.
We support all image dimensions.`
    }, {
        step: "Step 2",
        title: "Let magic remove the background",
        description: `Our tool automatically removes the background from your image.
        Next, you can choose a background color.
        Our most popular options are white and transparent backgrounds, but you can pick any color you like.`
    }, {
        step : "Step 3",
        title : "Download your image",
        description: `After selecting a new background color, download your photo and you're done! You can also save your picture in the Photoroom App by creating an account.
`
    }
]


export const plans = [
{
id: "Basic",
name: "Basic Package",
price: 149,
credits: "100 credits",
description: "Best for personal use",
popular: false
},
{

id: "Premium",
name: "Premium Package",
price: 349,
credits: "300 credits",
description: "Best for business use",
popular: true
},
{
     id: "Ultimate",
name: "Ultimate Package",
price: 799,
credits: "1000 credits",
description: "Best for enterprise use",
popular: false
}
];


export const testimonials = [
    {id: 1,
quote: "We are impressed by the AI and think it's the best choice on the market.", author: "Donald Trump",
handle: "@_donald_trump"}, {
    id: 2,
quote: "RemoveBG is leaps and bounds ahead of the competition. A thousand times better. It simplified the whole process.",
author: "Elon Musk",
handle: "@elon_musk"

}, {
 id: 3,
quote: "We were impressed by its ability to account for pesky, feathery hair without  making an image look jagged and amateurish.",
author: "Cristiano Ronaldo",
handle: "@Cristiano_ronaldo"
}
]


