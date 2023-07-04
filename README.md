Social Media App - Frontend

Ovaj projekat je frontend aplikacija za društvenu mrežu izgrađenu koristeći 
React.js. Omogućuje korisnicima da se prijave, pregledaju objave drugih korisnika, stvaraju vlastite objave i komentare, kao i interakciju s drugim korisnicima.
Tehnologije

Ovaj projekt koristi sljedeće tehnologije i biblioteke:

    React.js: Biblioteka za izgradnju korisničkog interfejsa.
    Redux Toolkit: Biblioteka za upravljanje globalnim stanjem aplikacije.
    Axios: Biblioteka za slanje HTTP zahteva s klijenta.
    Sass: CSS preprocesor za stilizaciju komponenti.
    Tailwind CSS: CSS okvir za brzo stiliziranje i izgradnju responsivnih app.
    Formik: Biblioteka za upravljanje formama i validaciju.
    Yup: Biblioteka za definisanje i proveru sheme podataka.
    React Icons: Biblioteka ikona za korištenje unutar React komponenti.

Struktura projekta

U nastavku je prikazana struktura projekta:

```
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── ...
│   ├── components/
│   │   ├── PostList.js
│   │   ├── PostItem.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Profile.js
│   │   ├── PostDetail.js
│   │   └── ...
│   ├── store/
│   │   ├── actions/
│   │   ├── reducers/
│   │   ├── store.js
│   │   └── ...
│   ├── services/
│   │   ├── api.js
│   │   └── ...
│   ├── utils/
│   │   ├── FileParser.js
│   │   └── ...
│   ├── styles/
│   │   ├── main.scss
│   │   └── ...
│   ├── AppLayout.js
│   └── index.js
├── public/
├── .gitignore
├── package.json
└── README.md
```

    src/components/: Direktorij koji sadrži reusable komponente.
    src/pages/: Direktorij koji sadrži komponente za svaku stranicu aplikacije.
    src/store/: Direktorij koji sadrži akcije, reducere i konfiguraciju Redux Toolkit-a.
    src/services/: Direktorij koji sadrži HTTP servise za komunikaciju s API-jem.
    src/styles/: Direktorij koji sadrži stilove aplikacije.
    src/AppLayout.js: Glavna komponenta aplikacije koja definise rutiranje.
    src/index.js: Glavna datoteka koja inicijalizira React aplikaciju.
    public/: Direktorij koji sadrži javne datoteke poput index.html i ostale statičke resurse.
    .gitignore: Datoteka koja definira koje datoteke
