import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(230,35%,7%)",
        secondary: "hsl(232,77%,90%)",
        light: "hsl(0,0%,100%)",
      },
      fontFamily: {
        bellefaire: ["Bellefaire"],
        barlow: ["Barlow Condensed Regular"],
      },
      backgroundImage: {
        //Home  background image
        "desktop-background": `url('../assets/images/home/background-home-desktop.jpg')`,
        "tablet-background": `url('../assets/images/home/background-home-tablet.jpg')`,
        "mobile-background": `url('../assets/images/home/background-home-mobile.jpg')`,

        
        // Crew background image
        "crew-desktop-background": `url('../assets/images/crew/background-crew-desktop.jpg')`,
        "crew-tablet-background": `url('../assets/images/crew/background-crew-tablet.jpg')`,
        "creaw-mobile-backgroud": `url('../assets/images/crew/background-crew-tablet.jpg')`,
        "image-anousheh-ansari": `url('../assets/images/crew/image-anousheh-ansari.png)`,
        "image-douglas-hurley": `url('../assets/images/crew/image-douglas-hurley.png')`,
        "image-mark-shuttleworth": `url('../assets/images/crew/image-mark-shuttleworth.png')`,
        "image-victor-glover": `url('../assets/images/crew/image-victor-glover.png)`,

        // Destination background image,
        "background-destination-desktop": `url('../assets/images/destination/background-destination-desktop.jpg')`,
        "background-destination-tablet": `url('../assets/images/destination/background-destination-tablet.jpg')`,
        "background-destination-mobile": `url('../assets/images/destination/background-destination-mobile.jpg')`,
        "image-europa": `url('../assets/images/destination/image-europa.png')`,
        "image-mars": `url('../assets/images/destination/image-mars.png')`,
        "image-moon": `url('../assets/images/destination/image-moon.png')`,
        "image-titan": `url('../assets/images/destionation/imge-moon.png')`,

        // Technology background image
        "background-technology-desktop": `url('../assets/images/technology/background-technology-desktop.jpg')`,
        "background-technology-tablat": `url('../assets/images/technology/background-technology-tablet.jpg')`,
        "background-technology-mobile": `url('../assets/images/technology/background-technology-mobile.jpg')`,
        "image-launch-vehicle-landscape": `url('../assets/images/technology/image-launch-vehicle-landscape.jpg')`,
        "image-launch-vehicle-portrait": `url('../assets/images/technology/image-launch-vehicle-portrait.jpg')`,
        "image-space-capsule-landscape": `url('../assets/images/technology/image-space-capsule-landscape.jpg')`,
        "image-space-capsule-portrait": `url('../assets/images/technology/image-space-capsule-portrait.jpg')`,
        "image-spaceport-landscape": `url('../assets/images/technology/image-spaceport-landscape.jpg')`,
        "image-spaceport-portrait": `url('../assets/images/technology/image-spaceport-portrait.jpg')`,
      },
    },
  },
  plugins: [],
};
export default config;
