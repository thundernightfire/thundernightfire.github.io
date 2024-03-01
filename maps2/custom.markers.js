/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [


        // Example 2: Marker with text
        {
            // rumah 1
            x: 13,
            z: 79,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Rumah 1 (perang) 13 79 79",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // stronghold 1
            x: -39,
            z: 222,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Stronghold 1 -39 34 222",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // ex villager sharpness
            x: -354,
            z: 411,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "-354 76 411",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // es balok
            x: -117,
            z: -367,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "-177 99 -367",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // bekas mansion
            x: 1282,
            z: -642,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "1282 88 -642",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // badlands terracota me ded because freestyle rip nether armor
            x: 1000,
            z: 719,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "1000 81 719",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // bekas jalan-jalan
            x: -79,
            z: -595,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "-79 76 -595",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // rumah 2
            x: 66,
            z: 1644,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Rumah 2 (es) 66 80 1644",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // rumah 3
            x: -122,
            z: 319,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Rumah 3 (sejahtera) -122 63 319",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // intersection
            x: -121,
            z: 1648,
            image: "../intersection.png",
            imageAnchor: [0.5, 0.5],
            imageScale: 0.06,
        },
        {
            // rumah 4
            x: -1614,
            z: 2672,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Rumah 4 -1614 63 2672",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // rumah 5
            x: -2878,
            z: 3313,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Rumah 5 (sakura) -2878 54 3313",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            // stronghold 2
            x: -1653,
            z: 1928,
            image: "../netherportal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.03,
            text: "Stronghold 2 -1653 36 1928",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
