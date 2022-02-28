---
title: Sistema di indicizzazione geodati GeoBacklight
autore: Domizia D'Erasmo
licenza: CC BY 4.0 International
livello: avanzato
tags: [open standard, data set geospaziali]
img: ./geoblacklight.png
date: 2022-02-28
sommario: "GeoBlacklight è un software open-source Ruby on Rails (RoR) ideato per ospitare contenuti geospaziali come data set GIS e mappe cartacee digitalizzate. Nato nel 2014 come collaborazione tra il Massachusetts Institute of Technology (MIT), l'Università di Priceton e quella di Stanford, GeoBlacklight è basato sul software open source BlackLight ed è un progetto con licenza Apache 2.0..."
---

## GeoBlacklight

GeoBlacklight è un software open-source [Ruby on Rails](https://rubyonrails.org/) (RoR) ideato per ospitare contenuti geospaziali come data set GIS e mappe cartacee digitalizzate. Nato nel 2014 come collaborazione tra il [Massachusetts Institute of Technology](https://web.mit.edu/) (MIT), l'Università di [Priceton](https://www.princeton.edu/) e quella di [Stanford](https://www.stanford.edu/), GeoBlacklight è basato sul software open source [BlackLight](https://projectblacklight.org/) ed è un progetto con [licenza Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html).

GeoBlacklight non ha un modello di finanziamento, il suo sviluppo è portato avanti dagli utenti che ne fanno parte e che offrono il loro tempo libero per portare avanti il progetto.

Attulamente sono numerosissime le istituzioni che hanno aderito alla condivisione dei propri data set attraverso GeoBlacklight. Per un elenco in continuo aggiornamento: [https://geoblacklight.org/#showcase](https://geoblacklight.org/#showcase).

### Obiettivi

L'obiettivo principale di GeoBlacklight è quello di farsi ponte tra le biblioteche digitali e le _community_ geospaziali unendo le risorse e le conoscenze di entrambi i campi per migliorare l'esperienza della ricerca di data set geospaziali sul web. Per raggiungere questo scopo GBL ha attivato una collaborazione con il portale di condivisione di metadati multi istituzionali [OpeGeoMetadata](https://github.com/OpenGeoMetadata), il quale mira a condividere data set geospaziali in formato aperto, utilizzando GitHub come _repository_ comune per tutte le istituzioni che ne fanno uso.

Rispetto a BlackLight GeoBlacklight ha le seguenti funzionalità:

- possibilità di condurre ricerche spaziali attraverso un algoritmo di rilevanza spaziale.
- possibilità di download per servizi web geospaziali.
- possibilità di visualizzare i risultati delle ricerche su una mappa.
- possibilità di estendere il software a nuovi tipi di data set e funzionalità.

### Installazione

È possibile installare il software GeoBlacklight seguendo la guida nel _repository_ di GitHub al link [https://github.com/geoblacklight/geoblacklight/wiki/Installation](https://github.com/geoblacklight/geoblacklight/wiki/Installation).

### Indicizzare un data set su GeoBlacklight

Per indicizzare i propri data set GIS attraverso GeoBlacklight vengono richiesti i seguenti metadati minimi:

- un riquadro di delimitazione dell'area di riferimento dei dati geo spaziali;
- un titolo e una descrizione del data set;

Attraverso GeoBlacklight possono essere condivisi anche dati staticisti che vengono resi disponibili tramite un URL.
Recentemente è stata introdotta la possibilità di condividere [oggetti IIIF](https://commons.wikimedia.org/wiki/Commons:International_Image_Interoperability_Framework) per permettere alle istituzioni che ne fanno uso di utilizzare questo software.

**N.B.** È disponibile un elenco di tutorial per facilitare l'immisione/creazione dei data set su GeoBlacklight, così come la navigazine come utente: [https://geoblacklight.org/tutorials.html](https://geoblacklight.org/tutorials.html).

Dal punto di vista UI GeoBlacklight si pone come un software _user-friendly_ che permette di navigare attraverso un'interfaccia intuitiva. Inoltre, la comunità GeoBlacklight aiuta attivamente gli utenti finali:

- nella creazione di _repository_ centrali per l'immagazzinamento di risorse geospaziali; - nel rendere i data set accessibili a tutti gli utenti indipendentemente dal loro livello di esperienza;
- permettendo di ricercare in maniera semplice le informazioni sfruttando una ricerca per parola chiave (con possibilità di combinazione di due parole);
- garantendo metadati coerenti e di alta qualità;
- offrendo la possibilità di esportare facilmente le risorse;
- fornendo chiare informazioni circa le licenze che corredano i data set, garantendo agli utenti di prendere visione del tipo di utilizzo che potranno fare dei dati scaricati.
