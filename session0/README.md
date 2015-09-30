# JavaScript ist doch keine echte Programmiersprache, oder?

Doch, allerdings mit einigen kontraintuitiven Konzepten. Für einen guten ersten 
Überblick siehe [Doug Crockford: JavaScript: The Good
Parts](https://www.youtube.com/watch?v=hQVTIJBZook).

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

## Scope und Closures

todo
