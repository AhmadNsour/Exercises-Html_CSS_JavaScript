function SuperHeroN(power,gender,name){
    this.power =power ;
    this.gender=gender;
    this.name=name;
    this.nameChange= function(name){
        this.name=name;
    }
}
  var supeHero1 = new SuperHeroN(80,"male","Ahmad");
///////////////////////////////////////////////////
function SongN(songName, bandName){
        this.songName = songName;
        this.bandName = bandName;

    this.countName=function(totalNumberOfWords){
        var totalNumberOfWords = (this.songName).split(" ").length;
        return totalNumberOfWords;
    }
}
    inTheEnd = new SongN("in The End","linkin Park");
    $("body").append("<h1>"+ inTheEnd.songName +"</h1>")

////////////////////////////////////////////////////
function CatsP (tiredness,hunger,lonliness,happiness){
        this.tiredness=tiredness;
        this.hunger=hunger;
        this.lonliness=lonliness;
        this.happiness=happiness;
    
        this.sleepC= function(hunger){
        if (this.hunger <=5){
        this.hunger +=6;
        }
        else{
        this.hunger +=10
        }
        return hunger;
}
}
var kety = new CatsP(7,5,8,9);
////////////////////////////////////////

function BookList(numberOfBooksMarkedAsRead,numberOfMarkedNotReadYet,referenceToTheNextBookToRead,referenceToTheCurrentBookBeingRead,referenceToTheLstBookRead,arrayOfAllTheBook,Book){
    this.numberOfBooksMarkedAsRead=numberOfBooksMarkedAsRead;
    this.numberOfMarkedNotReadYet=numberOfMarkedNotReadYet;
    this.referenceToTheNextBookToRead=referenceToTheNextBookToRead;
    this.referenceToTheCurrentBookBeingRead=referenceToTheCurrentBookBeingRead;
    this.referenceToTheLstBookRead=referenceToTheLstBookRead;
    this.arrayOfAllTheBooks=arrayOfAllTheBook;
    this.BookR=Book.read;
    this.BookD=Book.readDate;
    this.BookA=Book.author;
    this.BookL=Book.title;
    this.BookG=Book.genre;
}
function Book(title,genre,author,read,readDate){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=read;
        this.readDate=readDate;
}
var BookNl= new Book("A","C","EW",true,"Aza");
bookN = new BookList(12,4,"Book3","book2","book1",[1,12,12],BookNl);
console.log(BookNl);
console.log(bookN)
//////////////////////////////////////////////
// Advanced Game

