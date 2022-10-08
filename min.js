const quotes = [
  "Nasze życie jest takim, jakim uczyniły je nasze myśli.",
  "Nigdy nie rezygnuj z marzenia, tylko dlatego, że zrealizowanie go wymaga czasu. Czas i tak upłynie.",
  "W życiu nie chodzi o to, by siebie odnaleźć. W życiu chodzi o to, aby siebie samego stworzyć.",
  "Zawsze dostajemy to, co jest nam potrzebne, a nie to, co jak myślimy, jest nam potrzebne.",
  "Śpiewaj jakby nikt nie słuchał. Kochaj jakby nikt nigdy Cię nie zranił. Tańcz jakby nikt nie patrzył. I żyj tak jakby to było niebo na ziemi. ",
  "Ludzie zapomną, co mówiłeś. Ludzie zapomną, co zrobiłeś. Ale ludzie nigdy nie zapomną, jak się przy tobie czuli.",
  "Sukces jest sumą małych wysiłków, powtarzanych dzień po dniu.",
  "Jeśli nie potrafisz latać, biegnij. Jeśli nie potrafisz biegać, chodź. Jeśli nie potrafisz chodzić, czołgaj się. Cokolwiek jednak robisz, poruszaj się do przodu.",
];
const authors = [
  "Marek Aureliusz",
  "Earl Nightingale",
  "George Bernard Shaw",
  "Katie Byron",
  "Mark Twain",
  "Maya Angelou",
  "Robert Collier",
  "Martin Luther King",
];

const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

btn.addEventListener("click", function () {
    
  for (let i = 0; i < quotes.length; i++){

      const i = Math.floor(Math.random() * quotes.length);

      quote.textContent = quotes[i];
      author.textContent = authors[i];
     
  }


    
  

   



 
  
});
