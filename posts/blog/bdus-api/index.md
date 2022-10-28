---
title: "BDUS API: accedere in maniera programmatica ai dati"
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: avanzato
tags: [coding, api, cronologia]
img: ./tempo.jpg
date: 2022-10-29
sommario: DA FARE
---

## Introduzione

Questo post introduce e descrive in maniera molto sintetica alcuni dei concetti base che stanno dietro all'API della piattaforma Bradypus per le banche dati online.

L'acronimo API sta per [Application Programming Interface](https://it.wikipedia.org/wiki/Application_programming_interface), ovvero una interfaccia che permette ad un software di comunicare con un'altro software. Diversamente dallo User Interface (UI) che permette l'interazione tra software e uomo, lo API affronta solo la comunicazione macchina-macchina, o software-software, se si preferisce.

Ma perché è stato necessario creare una API per il software di gestione di banche dati Bradypus? La risposta è semplice: per offrire una ulteriore porta di accesso ai dati, che non fosse unicamente quella del browser e dell'interfaccia di utilizzo di Bradypus. In maniera più semplice, l'API di Bradypus esiste per offrire un accesso ai dati contenuti in una banca dati Bradypus, senza dovere neccessariamente usare Bradypus.

Al di là del gioco di parole, è fondamentale per la conservazione a lungo termine dei vostri dati non intrappollarli in software o formati che prevedono una sola porta di ingresso (e di uscita) e un solo formato di ingresso (e di uscita). Altrettanto importante è anche non bloccare i propri dati in uno strumento (software o formato) che preveda un solo utilizzo possibile e che non consenta una comunicazione più fluida e condivisa con altri strumenti (software).

## Qualche esempio

Qualche esempio potrebbe dare un'idea su usi possibili dei dati contenuti in una banca dati di Bradypus. Il primo è il portale Buddhist and Islamic Archaeological Data from Ghazni, Afghanistan ([https://ghazni.bdus.cloud/](https://ghazni.bdus.cloud/)), un progetto dell'Orientale Università di Napoli che mira a pubblicare online e ad accesso libero i dati relativi alle missioni archeologiche italiane a Ghazni in Afghanistan. Il portale presenta in maniera ragionata e secondo percorsi prestabiliti una grande quantità di dati che sono schedati e vengono aggiornati in una banca dati Bradypus ([https://bdus.cloud/db/#/ghazni](https://bdus.cloud/db/#/ghazni)). Il portale èdunque una mappa, arricchita di testi intriduttivi e molti altri elaborati grafici di dati che vengono estratti in tempo reale dalla banca dati online. Il software del sito comunica in tempo reale con il software della banca dati, proprio attraverso lo API.

Un secondo progetto è quello dell'Archaeological Atlas of Coptic Literature ([https://atlas.paths-erc.eu/](https://atlas.paths-erc.eu/)) un progetto finanziato da ERC con base alla Sapienza, che pubblica online e ad accesso aperto una quantità rilevantissima di dati relativi ai testi, manoscritti, autori e contesti archeologici della letteratura in lingua copta nell'Egitto tardoantico e medievale. Ancora una volta i data set sono gestiti in maniera centralizzata e online in una banca dati Bradypus ([https://bdus.cloud/db/#/paths](https://bdus.cloud/db/#/paths)), ma vengono presentati al grande pubblico attraverso un portale personalizzato che, ancora una volta premette una navigazione ragionata e guidata dei dati. Ancora una volta la comunicazione in tempo reale tra i due software è garantita dalla presenza dell'API.

Un ultimo esempio, potrebbe riguardare chi non ha dimestichezza o velleità di programmazione ma vuole avere accesso ai dati remoti con altri software che non siano Bradypus. Basti un esempio tra i moltissimi che si possono fare, ovvero l'uso dei dati attraverso programmi GIS, come per esempio QGIS. L'esigenza a collegarsi ad una banca dati per analizzarne i dati è piuttosto frequente e anche in questo caso è una comunicazione tra software, quello GIS che visualizza e analizza e la banca dati Bradypus che li contiene. Lo API è lo strumento che realizza in maniera semplificata questa interazione.
Tanti altri scenari di utilizzo con software terzi sono possibili, ma non è possibile qui farne un elenco. Si vuole solo aggiungere che anche le applicazioni per dispositivi mobili (le app) possono usare i dati di una banca dati remota attraverso lo API. Grandissima parte (se non tutte) delle applicazioni che abbiamo installate nei nostri disposivi non contengono dati bensì si collegano a una banca dati remota e ne scaricano la parte che serve al loro funzionamentoper lo stretto tempo necessario dell'utilizzo.

Come funziona: sistema degli URL

Come funziona: json

Come funziona: ShortSQL

## Rifermenti
- Bradypus, documentazione ufficiale: [https://docs.bdus.cloud/](https://docs.bdus.cloud/)
- Buddhist and Islamic Archaeological Data from Ghazni, Afghanistan: [https://ghazni.bdus.cloud/](https://ghazni.bdus.cloud/)
- Archaeological Atlas of Coptic Literature: [https://atlas.paths-erc.eu/](https://atlas.paths-erc.eu/)