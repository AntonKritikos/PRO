window.addEventListener("load",function()
{
   var contentArray =
   {
      subject1:{
         id:"subject1",
         title:"Johnny Depp",
         content:"Volledige naam John Christopher Depp II <br>Bijnaam: Mr. Stench (‘Meneer Stank’; zoals hij zichzelf noemt) <br>Geboren: 9 juni 1963, Owensboro (Kentucky), Verenigde Staten <br> Bekend als: acteur"
      },
      subject2:{
         id:"subject2",
         title:"Nicolas Cage",
         content:"Volledige naam: Nicholas Kim Coppola<br>Bijnaam: Nick<br>Geboren: 7 januari 1964, Long Beach, Verenigde Staten<br>Bekend als: filmacteur<br>Privé: voor de 3e keer getrouwd, twee zoons<br>Opvallende uitspraak: ‘Misschien kunnen we wat leren van geweld om te voorkomen dat mensen gewelddadig worden.’"
      },
      subject3:{
         id:"subject3",
         title:"Brad Pitt",
         content:"Volledige naam: William Bradley Pitt<br>Bijnaam:	Pittler (op school) en Brad the cad (‘boefje’)<br>Geboren: 18 december 1963, Shawnee (Oklahoma), Verenigde Staten<br>Bekend als: acteur<br>Privé: woont samen met actrice Angelina Jolie en hun vier kinderen	<br>Opvallende uitspraak: ‘Succes legt de nadruk op de verkeerde dingen. Je komt met meer weg, terwijl je juist bij jezelf te rade zou moeten gaan.’"
      },
      subject4:{
         id:"subject4",
         title:"Ryan Gosling",
         content:"Volledige naam: Ryan Thomas Gosling<br>Geboren: 12 november 1980, London, Ontario (Canada) <br>Bekend als: acteur (ook muzikant, producent en regisseur)<br>Bijnaam: Trouble <br>Privé	: Woont samen met Eva Mendes en dochter Esmeralda Amada<br>Opvallende uitspraak: “Acteren is niet zo moeilijk. Mensen maken er veel toestanden over, maar je probeert gewoon je tekst natuurlijk uit te spreken.”"
        
      }
   };
   var slidesClickArray =
   {
   welcome:{
      clickId:"welcome",
      addId:"welcome",
      addClasses:"screen welcome hiddenLeft",
      removeId:"scan",
      removeClasses:"screen scan"
   },   
   scannedButton:{
      clickId:"scannedButton",
      addId:"scanned",
      addClasses:"screen scan hiddenTop",
      removeId:"scanned",
      removeClasses:"screen scanned"
   },   
   backButton:{
      clickId:"backButton",
      addId:"scanned",
      addClasses:"screen scanned hiddenBottom",
      removeId:"scan",
      removeClasses:"screen scan",
   },   
   notification:{
      clickId:"notification",
      addId:"notification",
      addClasses:"screen notification hiddenBottom",
      removeId:"",
      removeClasses:""
   } 
   };
   document.getElementById(slidesClickArray.welcome.clickId).addEventListener("mousedown",function()
      {
         document.getElementById(slidesClickArray.welcome.addId).className = slidesClickArray.welcome.addClasses;
         document.getElementById(slidesClickArray.welcome.removeId).className = slidesClickArray.welcome.removeClasses;
      });
   document.getElementById("scannedButton").addEventListener("mousedown",function()
      {
         document.getElementById("scan").className = "screen scan hiddenLeft";
         document.getElementById("scanned").className = "screen scanned";
      });
   document.getElementById("backButton").addEventListener("mousedown",function()
      {
         document.getElementById("scanned").className = "screen scanned hiddenRight";
         document.getElementById("scan").className = "screen scan";
      });
   document.getElementById("notification").addEventListener("mousedown",function()
      {
         document.getElementById("scanned").className = "screen scan hiddenLeft";
         document.getElementById("scanned").className = "screen scanned";
         document.getElementById("notification").className = "screen notification hiddenBottom";
      });
   document.getElementById("subject1").addEventListener("mousedown",function()
      {
         document.getElementById("scan").className = "screen scan";
         document.getElementById("subject1").className = "screen content hiddenRight";
      });
   document.getElementById("subject2").addEventListener("mousedown",function()
      {
         document.getElementById("scan").className = "screen scan";
         document.getElementById("subject2").className = "screen content hiddenRight";
      });
   document.getElementById("subject3").addEventListener("mousedown",function()
      {
         document.getElementById("scan").className = "screen scan";
         document.getElementById("subject3").className = "screen content hiddenRight";
      });
   document.getElementById("subject4").addEventListener("mousedown",function()
      {
         document.getElementById("scan").className = "screen scan";
         document.getElementById("subject4").className = "screen content hiddenRight";
      });
   document.getElementById("subject1Button").addEventListener("mousedown",function()
   {
      document.getElementById("subject1").className = "screen content";
      document.getElementById("scanned").className = "screen scanned hiddenLeft";
   });
   document.getElementById("subject3Button").addEventListener("mousedown",function()
   {
      document.getElementById("subject3").className = "screen content";
      document.getElementById("scanned").className = "screen scanned hiddenLeft";
   });
   document.getElementById("subject4Button").addEventListener("mousedown",function()
   {
      document.getElementById("subject4").className = "screen content";
      document.getElementById("scanned").className = "screen scanned hiddenLeft";
   });
   document.getElementById("subject2Button").addEventListener("mousedown",function()
   {
      document.getElementById("subject2").className = "screen content";
      document.getElementById("scanned").className = "screen scanned hiddenLeft";
   });
      
   document.getElementById(contentArray.subject1.id).innerHTML = "<h1>"+contentArray.subject1.title+"</h1><br><h2>"+contentArray.subject1.content+"</h2><h1 class='subjectBack'>Tik om terug te gaan.</h1>";
   document.getElementById(contentArray.subject2.id).innerHTML = "<h1>"+contentArray.subject2.title+"</h1><br><h2>"+contentArray.subject2.content+"</h2><h1 class='subjectBack'>Tik om terug te gaan.</h1>";
   document.getElementById(contentArray.subject3.id).innerHTML = "<h1>"+contentArray.subject3.title+"</h1><br><h2>"+contentArray.subject3.content+"</h2><h1 class='subjectBack'>Tik om terug te gaan.</h1>";
   document.getElementById(contentArray.subject4.id).innerHTML = "<h1>"+contentArray.subject4.title+"</h1><br><h2>"+contentArray.subject4.content+"</h2><h1 class='subjectBack'>Tik om terug te gaan.</h1>";
});