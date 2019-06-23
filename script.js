var bucket = [
    
" &#128514; Er morsomst",
" &#128524; Selv tror den er morsomst",    
" &#128526; Har mest følgere på instagram",
" &#128716; Er best i senga",    
" &#128118; Har hatt sex med flest som er yngre enn seg selv",    
" &#128400; Får mest oppmerksomhet på byen",    
" &#128133; Er mest opptatt av utseeende",    
" &#128572; Er mest fornøyd med eget utseende",    
" &#129316; Er minst HTG på fylla",
" &#127814; Er mest HTG på fylla",
" 😬 Har fineste smilet",
"🙄 Er mest overlegen",
"🚵🏻Er mest sporty",
"🎖Har hatt sex med flest",
"🏅Har hatt flest orgasmer",
"🐗Er mest vill",
"🍕Har best kropp",
"✈️Er mest spontan",
"👰🏼Er mest uskyldig",
"😏Lager de sykeste lydene i senga",
"💰Har størst lommebok",
"👗Har finest antrekk",
"👯Er den minst mainstreame personen",
"🍑Har finest rumpe",
"💇🏻Har finest frisyre",
"👀Har de vakreste øynene",
"👤Er mest cocky",
"🍒Er den største sofagrisen",
"👆Er festens høyeste",
"🕵🏻Du har et lite øye til",
"💩Er mest dyp",
"👪Du får vakreste barn sammen med",
"📚Er mest skoleflink ",
"🚿Har shavet og er forberedt på alt ",
"👠Får alltid fylleangst",
"🍻Er den største fylliken",
"💋Er den beste til å kysse ",
"🔥Gir best strippeshow ",
"😹Har spenstig latter ",
"😼Har lyst å komme i buksene på i kveld",
"😾Blir raskest sjalu",
"🌮Har den høyeste snapscoren",
"👵🏼Har hatt sex med flest eldre",
"🔼Har hatt trekant",
"🆙Har hatt sex på den sykeste plassen",
"🎧Har best musikksmak",
"🌎Har hatt sex i flest land",
"🎤Synger finest",
"😵Synger jævligst",
"🐭Snuser mest",
"🐾Tar med seg noen hjem i kveld",
"💏Får kjæreste i år",
"🙋🏻Blir gravid først",
"😷Spyr i kveld",
"✏️Slutter på studiet",
"🍷Blir mest drita i kveld ",
"👨🏻Har flest løsunger",
"💍Får det feteste bryllupet",
"💄Har finest lepper",
"👟Har den fineste klesstilen generelt",
"💼Er mest klar for arbeidslivet",
"👓Kler briller best",
"🦄Sklir rett inn i militæret",
"🐓Tygger mest tyggis",
"🐴Rir mest",
"🌵Stikker først hjem fra byen",
"🌷Lukter best ",
"☀️Lyser opp rommet",
"🍌Runker mest",
"🍉Tar seg mest på brystene",
"🌽Digger netflix and chill",
"🍇Hooker oftest",
"🍾Drikker raskest",
"🏆Stalker flest instagramprofiler",
"🎗Gir ut flest likes på insta",
"🎷Drikker mest energidrikk",
"🎮Er en svett gamer ",
"🎬Er mest fotogen ",
"🚒Har blitt pumpa",
"🚗Er den verste sjåføren",
"✝ Ute etter bråk ikveld",
"⛺️Har hatt sex i telt",
"🏝Du ville vært på en øde øy med ",
"📽Har flest selfies på telefonen sin ",
"🆔Brukt fake-ID",
"💙Har hatt sex utendørs ",
"⏰Er oftest forsinket",
"📞Har kortest telefonsamtale",
"⏳Er mest ubesluttsom",
"🔮Debuterte i yngst alder",
"📍Er minst flink å bruke prevensjon",
"🚽Ender opp på Luksusfellen",
"🛍Er mest pirkete",
"🃏Jukser mest ",
"💌Har hatt kjønnssykdommer",
"🎭Har mest humørsvingninger ",
"⚾️Har størst baller",
"🍣Er svigermors drøm",
"🛀🏻Får blackout ikveld",
"💎Skal ta bånski sammen med deg",


];

for (var i=0;i<=0;i++) {
    bucket.push(i);
}

function getRandomFromBucket() {
   var randomIndex = Math.floor(Math.random()*bucket.length);
   return bucket.splice(randomIndex, 1)[0];
}

// will pick a random number between 0 and 10, and can be called 10 times

var count = 1;




function myFunction(){
   document.getElementById("p1").innerHTML = (getRandomFromBucket());}
 /*
    if (count == 10) {
    
     alert("10 sprsm ferdig, skål 1 slurk!");
     
  }
else{
   count++; 
  };   
}

*/



