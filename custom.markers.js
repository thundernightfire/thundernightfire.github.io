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

        // Example 1: Simple marker
        // {
        //     x: -200,
        //     z: -200,
        //     image: "custom.pin.png",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 0.5,
        // },

        // Example 2: Marker with text

        // Rumah
        {
            //spawn
            x: -212,
            z: 181,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Spawn",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        {
            //rumah 1
            x: 0,
            z: 600,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            text: "Rumah 1 (bekas perang)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        {
            //rumah 2
            x: 554,
            z: 13120,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            text: "Rumah 2 (es)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        {
            //rumah kuro
            x: 2791,
            z: -821,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            text: "Rumah Kuro Taiyo",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        {
            //rumah 3
            x: -900,
            z: 2660,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            text: "Rumah 3 (sejahtera)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        {
            //rumah 4
            x: -13000,
            z: 21400,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            text: "Rumah 4",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        {
            //rumah 5
            x: -23130,
            z: 26666,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.1,
            text: "Rumah 5 (sakura)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 16,
            font: "bold 16px Calibri,sans serif",
        },
        
        // Example 3: Text only
        // {
        //     x: 200,
        //     z: 200,
        //     text: "Text only", 
        //     textColor: "yellow", 
        //     offsetX: 0,
        //     offsetY: 0, 
        //     font: "bold 50px Calibri,sans serif",
        // },
        
        // --nether--
        {
            //portal 1
            x: -932,
            z: -2933,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 2
            x: -603,
            z: -4753,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 3
            x: -303,
            z: 1796,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 4 ex villager sharpness
            x: -2774,
            z: 3233,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 5
            x: 10367,
            z: -5146,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 6 terracota ded
            x: 7995,
            z: 5749,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 7 bekas warden yg sama rafi
            x: 5613,
            z: 3559,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
            text: "warden pertama x (sama rafi)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 14,
            font: "bold 14px Calibri,sans serif",
        },
        {
            //portal 8 es villager
            x: -22779,
            z: 43056,
            image: "netherportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        
        //--stronghold--
        {
            //portal 1
            x: -161,
            z: 1841,
            image: "endportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },
        {
            //portal 2
            x: -13272,
            z: 15391,
            image: "endportal.png",
            imageAnchor: [0.5, 0.8],
            imageScale: 0.03,
        },


        // do not delete the following two closing brackets
        
    ]
}
