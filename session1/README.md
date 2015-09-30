# What? Is? this?

## Das sieht aber nicht wie bei MS Frontpage aus hier …

Nein, tut es nicht.

Moderne Web-Entwicklung ist deutlich mehr als Texte und 
Grafiken in einem WYSIWYG-Editor zusammenzuwerfen. Mit HTML, Javascript 
und CSS lassen sich heutzutage komplexe Applikationen bauen, die im Browser 
laufen. Der Browser ist dabei eher als eine universellen Laufzeitumgebung für
verteilte Web-Applikationen denn als Anzeigeprogramm für HTML-Seiten zu 
verstehen.

Um komplexen Code zu bauen, benötigen wir ein adäquates Tooling. Wir setzen wir 
für den ersten Teil unseres Beispielprojekts eine Infrastruktur aus Node, NPM
und Grunt auf. Damit können wir dann erste Schritte in Richtung 
Entwicklungs-, und Build-Setup unternehmen.

## Node, NPM und Grunt installieren

Wir benötigen Node.js also sowie NPM. Die Installation ist hier 
betriebssystemabhängig Zudem brauchen wir ein global verfügbares Grunt, 
installiert mittels:

```
npm install -g grunt 
```

## Flip the cat!

Und jetzt unsere lokalen Build-Abhängigkeiten installieren:

```
npm install
```

Das Projekt lokal im Browser laufen lassen:

```
grunt
```

## Flip it sideways!

Und jetzt seid ihr dran: Macht, dass die Katze sich horizontal dreht (auf der
 X-Achse), nicht vertikal!

```
grunt dev
```
