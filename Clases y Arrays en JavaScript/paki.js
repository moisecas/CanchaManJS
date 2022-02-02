var imagenes = [];
imagenes["cauchin"]="jugador1.png";
imagenes["pokacho"]="jugador2.png";
imagenes["tocinauro"]="jugador3.png";

class Pakiman 
{
    constructor(n, v, a)
    {
        this.imagen=new Image();
        this.nombre=n;
        this.vida=v;
        this.ataque=a;

        this.imagen.src=imagenes[this.nombre]; 
                 
    } 
    hablar()
    {
        alert(this.nombre); 
    }
    mostrar()
    {
       document.body.appendChild(this.imagen);
       document.write("<p>");
       document.write("<strong>" + this.nombre + "</strong> <br/>");
       document.write("Vida: " + this.vida + "<br/>");
       document.write("Ataque: " + this.ataque);
       document.write("<p>" + "<hr/>");


    }

}
var cauchin = new Pakiman("cauchin", 100, 30);
var pokacho = new Pakiman("pokacho", 100, 90);
var tocinauro = new Pakiman("tocinauro", 100, 40);
console.log(cauchin, pokacho, tocinauro); 

pokacho.mostrar(); 
cauchin.mostrar();
tocinauro.mostrar();

 

 
