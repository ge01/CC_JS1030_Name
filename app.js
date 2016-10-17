/*jshint multistr:true */
var text = "Amee Human friend of Anakin Skywalker in The Phantom Menace. Amee Was portrayed by George Lucass daughter Amee Katie Lucas, credited as Jenna Green de Amee";
var myName = "Amee";
var hits = [];

// Loop through each letter in var text
for (var i = 0; i <= text.length; i++){
    // If character in var text is an 'A'
    if(text[i]==='A'){
        // Move name into hits array
        for(var j=i; j<(i + myName.length); j++){
            hits.push(text[j]);    
        }    
    }     
}

if (hits.length === 0){
    console.log("Your name wasn't found")
} else{
    console.log(hits);    
}