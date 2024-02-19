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
        {
            //spawn
            x: -212,
            z: 181,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
            text: "Spawn",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Calibri,sans serif",
        },
        {
            //rumah utama
            x: 0,
            z: 600,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Rumah Utama (perang)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Calibri,sans serif",
        },
        {
            //rumah kedua
            x: 554,
            z: 13120,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "rumah kedua (es)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Calibri,sans serif",
        },
        {
            //rumah ketiga
            x: -900,
            z: 2660,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "rumah 3 (sejahtera)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Calibri,sans serif",
        },
        {
            //rumah keempat
            x: -13000,
            z: 21400,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "rumah 4",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Calibri,sans serif",
        },
        {
            //rumah kelima
            x: -23130,
            z: 26666,
            image: "custom.pin.home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "rumah 5 (sakura)",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 18px Calibri,sans serif",
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

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
