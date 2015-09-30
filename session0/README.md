# JavaScript ist doch keine echte Programmiersprache, oder?

Doch, allerdings mit einigen kontraintuitiven Konzepten. Für einen guten ersten 
Überblick siehe [Doug Crockford: JavaScript: The Good
Parts](https://www.youtube.com/watch?v=hQVTIJBZook) (Video). Für 
fortgeschrittene Inhalte siehe
[You Don't Know JS (book series)] (https://github.com/getify/You-Dont-Know-JS).

Wir befassen uns hier in ein paar Fingerübungen mit Funktionen, Scope 
und Closures -- damit die im Workshop noch folgenden Code-Beispiele und 
-Übungen sich auch JavaScript-Neulingen leichter erschließen.

## Funktionen

Funktionen sind das wohl wichtigste Sprachkonstrukt in JavaScript. Schauen 
wir uns den folgenden Code an:

    ;(function() {
        console.log('Hello World!')
    })();

Und spielen ein wenig damit herum:

- Chrome-Browser öffnen
- JavaScript-Konsole öffnen (z.B. unter Anzeigen -> Entwickler -> 
  JavaScript-Konsole)
- auf <http://jsfiddle.net/> gehen
- dort das obige Code-Fragment eingeben
- und auf "Run" klicken.

In der Gruppe erarbeiten wir, was das Code-Fragment tut. Und bauen den Code 
so um, sodass folgende Ziele erreicht werden:

- Ausführung und Definition der Funktion voneinander trennen,
- der Funktion einen beliebigen String übergeben, den diese dann ausgibt,
- in der Funktion überprüfen, ob es sich beim übergebenen Wert tatsächlich um
 einen String handelt

## Variablen, Scope und Closures

Variablen in JavaScript leben immer im Scope einer Funktion, nicht in dem 
eines Code-Blocks. Schauen wir uns folgenden Code an:

    (function() {
        var a = 'Hello World!';
        console.log(a);
        function foo() {
            a = 'What up?';
            console.log(a)
        }
        foo();
        console.log(a)
    })();

Schauen wir uns außerdem folgenden Code an:

    for (var i = 0; i < 10; i++) {
       setTimeout(
           function(){
               console.log(i);
           },
           100
       );
    }
    
Wieder erarbeiten wir gemeinsam, was in den beiden Code-Beispielen passiert. 
Das erste Beispiel bauen wir nun so um, dass die letzte Log-Ausgabe wieder 
'Hello World' lautet. Das zweite Beispiel so, dass die Zahlen von 1 bis 10 
augegeben werden.
