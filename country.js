class Country {
    constructor(name, language, greeting, color ) {
        this.name = name;
        this.language = language; 
        this.greeting = greeting;
        this.color = color; 
    }

}
    
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let bangladesh = new Country("Bangladesh", "Bengali", "Ōhē biśba",["red", "green", "gold"] );
let france = new Country("France", "French", "Bonjour le monde", ["blue", "white", "red"]);

let CountriesList = [usa, mexico, algeria, bangladesh, france]; 


function DisplayColorsAndCountryInfo() {
    let UserInput = document.getElementById("CountryList").value; 

    for(c of CountriesList) {
        if(c.name === UserInput) {
            document.getElementById("Color1").style.backgroundColor = c.color[0]; 
            document.getElementById("Color2").style.backgroundColor = c.color[1]; 
            document.getElementById("Color3").style.backgroundColor = c.color[2]; 
            document.getElementById("CountryName").innerText = c.name; 
            document.getElementById("OfficialLanguage").innerText = c.language; 
            document.getElementById("HelloWorld").innerText = c.greeting; 
        }
    }
}
// for(let c = 0; c < CountriesList.length; c++ ) {
//     if(c.name === UserInput) {
//         document.getElementById("Color1").style.backgroundColor = c.color[0]; 
//         document.getElementById("Color2").style.backgroundColor = c.color[1]; 
//         document.getElementById("Color3").style.backgroundColor = c.color[2]; 
//         document.getElementById("CountryName").innerText = c.name; 
//         document.getElementById("OfficialLanguage").innerText = c.language; 
//         document.getElementById("HelloWorld").innerText = c.greeting; 
//     }
