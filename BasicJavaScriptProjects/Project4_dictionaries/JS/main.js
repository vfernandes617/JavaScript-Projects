function my_Dictionary() {
    var Animal={
        Species:"Cat",
        Color:"blonde",
        Breed:"American shorthair",
        Age:4,
        Sound:"Meow"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}
//this code should delete the dictionary sound and come back undefined//