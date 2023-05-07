## A projektről

A projekt egy végletekig leegyszerűsített álláskeresőt valósít meg. Igyekeztem amennyire lehet a hasznosságra is törekedni, de nyilvánvaló, hogy a pontszerzés volt az elsődleges szempont.

## Környezeti változók

A környezeti változókat kiszedtem, mind üres string. Ha szükséged lenne rájuk akkor a coospace feladatnál megtalálod őket.

## Minta userek

Készítettem két minta usert:

Munkavállaló: csaba@munka.hu  
Munkaadó: ceg@munka.hu

Mindkét felhasználó jelszava 123456

Ezeknek már vannak adatai, de természetesen te is létrehozhatos a saját felhasználóidat.

## User content

Arra kérnélek hogy ha bármit létrehozol az adatbázisban (pl. Hirdetést) az legyen nyomdafestéket tűrő, ugyanis mások is látják. A Mobil alkfejl. projektem is ezt az adatbázist használja, úgyhogy ott is látszódni fog az, amit létrehozol ezen az oldalon.

## Troubleshooting

Ha bármi problémád adódik kérlek írj Discordon a Kalkulusták szerón a kurzus szobájába.
Naponta többször megnézem, úgyhogy fogok tudni segíteni ha baj van. Érthető módon nem szeretném hogy lepontozzanak azért mert valami nem működik, aminek egyébként kellene.

## Pontozási segédlet

Készítettem egy pontozási segédletet, hogy ne tartson örökké a projekt pontozása:  
Az útvonalak az src/app mappában értendőek.

A szempontok a táblázaton megy végig sorban. Értelemszerűen a szubjektív részét kihagytam belőle.

1. Fordítási hibát nem találtam, de azért figyeld te is.  
2. Futtatási hibát nem találtam, de azért figyeld te is.
3. Az url-t fentebb megtalálod  
4. A modell osztályokat a `models` mappában találod
5. A fájlok és sorok hosszaira odafigyeltem, nincs olyan általam írt HTML vagy TS kód ami ezt megsértené.
6. A reszponzivitással próbálkoztam több-kevesebb sikerrel (inkább kevesebbel). Rád bízom
7. Attribútum direktíva nincs
8. A strukturális direktívákból az `ngIf`-et és az `ngFor`-t használtam. Példák
    - `ngIf: partials/navbar/navbar.component.html`
    - `ngFor: pages/home/home.component.html`
9. Pipe nincs
10. 5 féle Material elemet használtam:
    - MatButton: (`mat-raised-button`): `pages/home/home.component.html`
    - MatIcon: `pages/home/home.component.html`
    - MatInput: `pages/profile/profile.component.html`
    - MatToolTip: `pages/profile/profile.component.html`
    - Snackbar: `pages/profile/profile.component.ts`
11. Komponensek Angular formokkal:
    - `register-seeker`
    - `register-employer`
    - `login`
12. Nincs
13. Lifecycle hookok (1 db):
    - ngOnInit: `pages/home/home.component.html`
14. CRUD műveletekből mindegyik meg van valósítva, és mind a data serviceben (`services/data.service.ts`):
    - Create: `uploadEmployerData`
    - Read: `getAllOffers`
    - Update: `updateName`
    - Delete: `deleteQualification`
15. Megvan. lásd: `auth.service.ts` és `data.service.ts`
16. Megvan, lásd: `data.service.ts`, a környezeti változók a repoban üres stringek, coospacen mellékeltem a valós változókat.
17. Megvan, `data.service.ts`-ben:
    - `getQualifications`
    - `deleteQualification`
18. Megvan
19. Megvan, védem a belső oldalakat, illetve ha be vagy jelentkezve nem tudsz a loginra/registerre menni
