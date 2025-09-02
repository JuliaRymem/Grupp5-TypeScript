# A) Introduktion till Interfaces och Types i TypeScript

I TypeScript vill vi ofta beskriva hur våra data ska se ut. Då kan vi använda
interfaces och types. Det gör koden tydligare och hjälper oss att upptäcka
fel redan innan vi kör programmet.

---

## Vad är ett interface?

Ett interface är som en ritning för ett objekt.
Det säger vilka fält objektet måste ha och vilken typ varje fält ska ha.

###### Exempel: Här vill vi vara säkra på att alla personer i vår kod alltid har samma form, så att vi inte glömmer viktiga uppgifter som *age*.

```ts
interface Person {
  name: string;
  age: number;
}

const anna: Person = { name: "Anna", age: 25 }; // fungerar
const bjorn: Person = { name: "Björn" };        // fel: age saknas
```

---

## Vad är ett type alias?

Ett type alias ger ett namn till en typ.
Det kan vara ett objekt (som ett interface), men också en union, dvs. flera tillåtna värden.

Exempel: Här vill vi begränsa vilka roller en användare kan ha, för att undvika stavfel och för att hålla oss till bestämda val.

```ts
type Role = "admin" | "user" | "guest";

let r: Role = "admin";  // fungerar
r = "hacker";           // fel: "hacker" är inte ett tillåtet värde
```

---

---

# B) Vanliga fel och felsökning

Här vill vi visa tre vanliga misstag en nybörjare kan göra när man jobbar med interfaces och types i TypeScript.
Vi visar den kod som orsakar felet, TypeScripts felmeddelande och en enkel lösning.

---

## Skriva fel värde i en union

En union betyder att man bara får välja mellan vissa bestämda värden.
Om man skriver något annat blir det fel.

```ts
type ContactType = "Private" | "Company";

interface Contact {
  type: ContactType;
  address: string;
  phone: string;
}

// FEL: "Business" är inte ett tillåtet värde
const bad: Contact = {
  type: "Business",
  address: "Storgatan 1",
  phone: "070-1234567",
};
```

**Felmeddelande:**

```
Type '"Business"' is not assignable to type '"Private" | "Company"'.
```

**Förklaring och lösning:**
Vi har sagt att *type* bara kan vara *"Pritave"* eller *"Company"*
TypeScript stoppar oss från att skriva något annat.
Så här ska det se ut:

```ts
// RÄTT: "Company" är ett av de tillåtna värdena
const ok: Contact = {
  type: "Company",
  address: "Storgatan 1",
  phone: "070-1234567",
};
```

---

## Glömma ett fält i ett interface

Ett interface säger vilka fält som måste finnas i ett objekt.
Om man glömmer ett fält säger TypeScript till direkt.

```ts
interface Contact {
  type: "Private" | "Company";
  address: string; // måste finnas
  phone: string;   // måste finnas
}

const bad: Contact = {
  type: "Private",
  // FEL: vi glömde "address"
  phone: "070-1234567",
};
```

**Felmeddelande:**

```
Property 'address' is missing in type '{ type: "Private"; phone: string; }'
but required in type 'Contact'.
```

**Förklaring och lösning:**
Interfacet kräver att vi har *address* Vi skrev inte med det, därför blir det fel.
Så här ska det se ut:

```ts
const ok: Contact = {
  type: "Private",
  address: "Storgatan 12",
  phone: "070-1234567",
};
```

---

## Använda filter men inte skriva ut resultatet

Array-funktioner som *filter* gör en ny lista.
Om man inte sparar eller skriver ut den händer inget man kan se.

```ts
const contactBook: Contact[] = [
  { type: "Private", address: "Storgatan 1", phone: "070-111111" },
  { type: "Company", address: "Industrigatan 2", phone: "070-222222" }
];

// FEL: vi filtrerar men gör inget med resultatet
contactBook.filter(c => c.type === "Company");
```

**Felmeddelande:**
Inget fel från TypeScript, men vi ser inget resultat.

**Förklaring och lösning:**
*filter* skapar en ny lista, men vi varken sparar den eller skriver ut den.
Så här ska det se ut:

```ts
// RÄTT: logga eller spara resultatet
const companies = contactBook.filter(c => c.type === "Company");
console.table(companies);
```

---

---



# C) Kontaktbok i TypeScript

Vi har gjort ett enkelt kontaktboks-program. Programmet låter dig visa en lista med kontakter och filtrera dem efter typer - privat eller företag.


## Hur vi använder interfaces och types i uppgiften

- Interface (Contact) används för att bestämma vilka fält en kontakt måste ha - exempelvis address och phone.
- Type (ContactType) används för att begränsa *type* till endast "Private" eller "Company"
- På så sätt får vi tydliga regler och TypeScript säger till om vi glömmer något eller skriver fel.


## Instruktioner för att köra programmet

1. Klona ner projektet från GitHub:

   ```bash
   git clone https://github.com/JuliaRymem/Grupp5-TypeScript.git
   cd Grupp5-TypeScript
   ```
2. Installera beroenden:

   ```bash
   npm install
   ```
3. Starta utvecklingsservern:

   ```bash
   npm run dev
   ```
4. Öppna länken som visas i terminalen (localhost)
5. Nu ska du kunna:

   - Se alla kontakter listade på sidan.
   - Välja i rullgardinsmenyn om du vill se alla kontakter, bara privata kontakter eller bara företag.

---

---



# D) Övningsuppgift

Ändra/modifiera koden så att du byter ut filtrering (dropdown-menyn) mot en sökfunktion.
Användaren ska kunna skriva in ett sökord

### Ledtrådar:

- Skapa ett input-fält istället för select-menyn.
-
