(function () {
  "use strict";

  var NOTICE = "https://e-licitatie.ro/pub/notices/c-notice/v2/view/100212215";
  var MIRROR = "https://www.licitatii-publice.ro/licitatie/CN1096592-servicii-dezvoltare-solutiei-it-active-necorporale-instruire-personal";
  var MIRROR2 = "https://ro.openprocurements.com/tender/servicii-de-dezvoltare-a-solutiei-it-active-necorporale-instruire-personal-in-cadrul-proiectului-seb/";
  var CONTACT = "https://www.primariasebes.ro/contact/";
  var FORMS = "https://www.primariasebes.ro/acte-si-formulare/";
  var CIVIL = "https://www.primariasebes.ro/e-administratie/spclep/stare-civila/";
  var BOOK = "https://www.primariasebes.ro/programari-online/";
  var TAX = "https://taxe.primariasebes.ro/index.php";
  var VHOME = "https://vintudejos.ro/";
  var VCONTACT = "https://vintudejos.ro/contact/";

  var UI = {
    ro: {
      title: "AVIACA — asistent scriptat",
      subtitle: "Prototip 92 Logics pentru Municipiul Sebeș și comuna Vințu de Jos. Răspunsurile sunt pregătite din anunțul SEAP și din paginile publice ale primăriilor. Nu este sistemul orașului și nu este o ofertă.",
      badgeScript: "Scriptat · offline · fără API",
      badgeNot: "Nu este un sistem oficial",
      noticeHead: "Anunț",
      lblBuyer: "Autoritate contractantă",
      valBuyer: "Municipiul Sebeș, Piața Primăriei nr. 1, 515800, Alba",
      lblNotice: "Anunț",
      lblRef: "Nr. referință",
      lblDeadline: "Termen oferte (ora locală SEAP)",
      lblContact: "Contact achiziție",
      lblValue: "Valoare estimată",
      valValue: "1.930.000 RON, fără TVA",
      srcHead: "Pagini folosite",
      placeholder: "Întrebați despre program, taxe, stare civilă sau AVIACA…",
      send: "Trimite",
      you: "Dumneavoastră",
      bot: "Asistent scriptat",
      chips: [
        "Ce este AVIACA?",
        "Programul Primăriei Sebeș",
        "Audiențe",
        "Taxe online Sebeș",
        "Stare civilă",
        "Programare acte identitate",
        "Contact Vințu de Jos",
        "Termenul licitației"
      ]
    },
    en: {
      title: "AVIACA — scripted assistant",
      subtitle: "A 92 Logics prototype for Sebeș Municipality and Vințu de Jos commune. Answers are prepared from the SEAP notice and public town-hall pages. It is not a city system and it is not a bid.",
      badgeScript: "Scripted · offline · no API",
      badgeNot: "Not an official system",
      noticeHead: "Notice",
      lblBuyer: "Contracting authority",
      valBuyer: "Municipiul Sebeș, Piața Primăriei no. 1, 515800, Alba",
      lblNotice: "Notice",
      lblRef: "Reference no.",
      lblDeadline: "Bid deadline (SEAP local time)",
      lblContact: "Procurement contact",
      lblValue: "Estimated value",
      valValue: "1,930,000 RON excluding VAT",
      srcHead: "Pages used",
      placeholder: "Ask about hours, taxes, civil status, or AVIACA…",
      send: "Send",
      you: "You",
      bot: "Scripted assistant",
      chips: [
        "What is AVIACA?",
        "Sebeș town hall hours",
        "Audiences",
        "Sebeș online taxes",
        "Civil status",
        "ID appointment",
        "Vințu de Jos contact",
        "Tender deadline"
      ]
    }
  };

  function P(html) { return "<p>" + html + "</p>"; }
  function A(href, label) { return '<a href="' + href + '" target="_blank" rel="noopener">' + label + "</a>"; }

  var KB = [
    {
      id: "hello",
      keys: ["buna", "salut", "hello", "hi", "hey", "buna ziua", "good morning", "good afternoon"],
      exact: true,
      ro: P("Bună ziua. Sunt un asistent <strong>scriptat</strong>, nu un sistem al Primăriei. Pot reda doar fapte din anunțul AVIACA și din paginile publice ale Sebeșului și Vințului de Jos. Alegeți o sugestie sau întrebați despre program, audiențe, taxe, stare civilă ori licitație."),
      en: P("Hello. I am a <strong>scripted</strong> assistant, not a town-hall system. I can only repeat facts from the AVIACA notice and the public Sebeș and Vințu de Jos pages. Use a suggestion, or ask about hours, audiences, taxes, civil status, or the tender."),
      src: []
    },
    {
      id: "scope",
      keys: ["aviaca", "asistent virtual", "virtual assistant", "despre proiect", "about the project", "obiectul", "scope"],
      ro: P("AVIACA înseamnă, în anunț, Asistent Virtual cu Inteligență Artificială pentru Cetățeni și Administrație, pentru Sebeș și Vințu de Jos.") +
        P("Obiectul procedurii este proiectarea, dezvoltarea, testarea și pilotarea aplicației, plus servicii de dezvoltare software, pachete software și instruirea personalului, în proiectul „Sebeș și Vințu de Jos Conectate pentru Viitor”.") +
        P("Anunțul spune că asistentul trebuie să ofere interfețe ușor de folosit, arbori conversaționali în limbaj natural, răspunsuri, linkuri relevante și, unde se fac solicitări online, formulare de completat. Scopul declarat este creșterea folosirii serviciilor electronice ale celor două primării.") +
        P("Detaliile tehnice sunt în caietul de sarcini, care nu este inclus aici. Nu pot confirma funcții care nu apar în textul anunțului."),
      en: P("In the notice, AVIACA means Virtual Assistant with Artificial Intelligence for Citizens and Administration, for Sebeș and Vințu de Jos.") +
        P("The procurement is to design, develop, test, and pilot that application, together with custom software development, software packages, and staff training, under the project “Sebeș și Vințu de Jos Conectate pentru Viitor”.") +
        P("The notice says the assistant should provide interfaces that are easy to use, natural-language conversation trees, answers, relevant links, and forms when an online request is made. The stated aim is higher use of the two town halls’ electronic services.") +
        P("Technical detail sits in the specifications (caiet de sarcini), which this prototype does not include. I will not confirm features that are not in the notice text."),
      src: [NOTICE, MIRROR, MIRROR2]
    },
    {
      id: "tender",
      keys: ["licitat", "tender", "ofert", "deadline", "termen", "depunere", "valoare", "value", "1.930", "1930000", "durata", "duration", "9 luni", "procedur", "seap", "limba", "romana", "cpv", "fonduri", "european", "regional", "clarific"],
      ro: P("Licitație deschisă, contract de servicii, fără loturi. Locul principal de executare: Municipiul Sebeș. Ofertele se depun în SEAP, în limba română, semnate cu semnătură electronică extinsă.") +
        P("Termenul publicat pentru primirea ofertelor și deschiderea lor: <strong>21.10.2026, ora 15:00</strong> (oră locală în anunț), în SEAP. Oferta trebuie menținută până la 21.01.2027 (3 luni).") +
        P("Valoarea totală estimată: <strong>1.930.000 RON fără TVA</strong>. Durata contractului: 9 luni, fără reînnoire. Facturare electronică: da. Achiziția este finanțată din fonduri UE: Programul Regional Centru 2021–2027, Acțiunea 1 / Intervenția 2.1.1, proiectul SEBEȘ ȘI VINȚU DE JOS CONECTATE PENTRU VIITOR.") +
        P("CPV principal 72230000-6 (software personalizat). CPV suplimentare publicate: 48900000-7 și 80500000-9 (formare). Criteriul de atribuire publicat: cel mai bun raport calitate–preț; prețul ofertei are pondere 30%. Factorii tehnici apar în oglinzile anunțului sub numele P2 (metodologie) și P3 (experiența experților-cheie), dar acele rânduri sunt repetate, așa că nu adun ponderile rămase.") +
        P("Clarificări: orice operator poate cere clarificări cu cel mult 18 zile înainte de termen; autoritatea publică un răspuns consolidat în a 11-a zi înainte de termen (Legea 98/2016, art. 160). Garanția de bună execuție publicată: 10% din prețul contractului, fără TVA. Media cifrei de afaceri pe 2023–2025: cel puțin 1.900.000 lei. Servicii similare în ultimii 3 ani, maximum 3 contracte, cumulat cel puțin 1.900.000 lei fără TVA.") +
        P("Acesta este un prototip 92 Logics, nu o ofertă."),
      en: P("Open procedure, services contract, not divided into lots. Main place of performance: Sebeș Municipality. Bids go through SEAP, in Romanian, signed with an extended electronic signature.") +
        P("Published deadline for receipt and opening: <strong>21 October 2026, 15:00</strong> (local time as printed on the notice), in SEAP. The bid must stay valid until 21 January 2027 (3 months).") +
        P("Estimated total value: <strong>1,930,000 RON excluding VAT</strong>. Contract length: 9 months, no renewal. Electronic invoicing: yes. EU-funded: Centru Regional Programme 2021–2027, Action 1 / Intervention 2.1.1, project SEBEȘ ȘI VINȚU DE JOS CONECTATE PENTRU VIITOR.") +
        P("Main CPV 72230000-6 (custom software). Extra CPVs published: 48900000-7 and 80500000-9 (training). Award criterion: best price-quality ratio; offer price weight 30%. Technical factors are named on the notice mirrors as P2 (methodology) and P3 (key experts’ similar experience), but those lines are repeated, so the remaining weights are not added up here.") +
        P("Clarifications: an operator may ask up to 18 days before the deadline; the authority publishes one consolidated answer on the 11th day before the deadline (Law 98/2016, art. 160). Published performance guarantee: 10% of the contract price, excluding VAT. Average turnover for 2023–2025: at least 1,900,000 lei. Similar services in the last 3 years, at most 3 contracts, at least 1,900,000 lei excluding VAT in total.") +
        P("This is a 92 Logics prototype, not a bid."),
      src: [NOTICE, MIRROR, MIRROR2]
    },
    {
      id: "buyer",
      keys: ["irimie", "daniel", "autoritate", "contracting", "cumparator", "buyer", "contact achiz", "email licitat", "procurement contact", "cif", "4331201"],
      ro: P("Autoritatea contractantă este <strong>Municipiul Sebeș</strong>, autoritate locală, servicii publice generale. CIF 4331201. Adresă: Piața Primăriei nr. 1, Sebeș, cod 515800, NUTS RO121 Alba.") +
        P("Persoana de contact din anunț: Daniel Toma Irimie. Telefon +40 753834217. Fax +40 258734187. E-mail publicat în oglinda anunțului: daniel.irimie@primariasebes.ro. Site: primariasebes.ro. Profilul cumpărătorului: e-licitatie.ro.") +
        P("Documentele sunt indicate ca disponibile la anunțul SEAP. Acest prototip nu depune oferte și nu trimite mesaje."),
      en: P("The contracting authority is <strong>Municipiul Sebeș</strong>, a local authority for general public services. Tax ID 4331201. Address: Piața Primăriei no. 1, Sebeș, postal code 515800, NUTS RO121 Alba.") +
        P("Notice contact: Daniel Toma Irimie. Phone +40 753834217. Fax +40 258734187. Email shown on the public notice mirror: daniel.irimie@primariasebes.ro. Website: primariasebes.ro. Buyer profile: e-licitatie.ro.") +
        P("Documents are listed as available on the SEAP notice. This prototype does not submit bids and does not send messages."),
      src: [NOTICE, MIRROR, MIRROR2]
    },
    {
      id: "hours",
      keys: ["program", "orar", "hours", "opening", "functionare", "cu publicul", "luni", "vineri", "cand e deschis", "when is it open", "open"],
      ro: P("Pe pagina de contact a Primăriei Sebeș, programul aparatului de specialitate, începând cu 1 februarie 2024, conform Dispoziției primarului nr. 22/2024: <strong>luni–joi 8:00–16:30, vineri 8:00–14:00</strong>. Același interval este publicat pentru lucrul cu publicul al aparatului, al Biroului Colectare Creanțe Bugetare, al compartimentului de relații publice și al Direcției Generale de Asistență Socială, Medicală și Comunitară.") +
        P("S.P.C.L.E.P. (evidența persoanelor), pe aceeași pagină: luni 8:00–12:00 și 14:00–16:30; marți–joi 8:30–12:00 și 14:00–16:30; vineri 8:30–12:00.") +
        P("Pentru Vințu de Jos, pagina de start și pagina de contact nu spun același program. Vezi sugestia „Contact Vințu de Jos”."),
      en: P("On the Sebeș town-hall contact page, specialist-staff hours from 1 February 2024, under the mayor’s order no. 22/2024: <strong>Monday–Thursday 8:00–16:30, Friday 8:00–14:00</strong>. The same span is published for public counters of the mayor’s staff, the budget-claims office, the public-relations unit, and the social, medical and community assistance directorate.") +
        P("S.P.C.L.E.P. (population records), on the same page: Monday 8:00–12:00 and 14:00–16:30; Tuesday–Thursday 8:30–12:00 and 14:00–16:30; Friday 8:30–12:00.") +
        P("For Vințu de Jos, the home page and the contact page do not print the same hours. See “Vințu de Jos contact”."),
      src: [CONTACT]
    },
    {
      id: "audience",
      keys: ["audient", "audience", "primar", "viceprimar", "nistor", "albu", "secretar", "vlad"],
      ro: P("Program de audiențe publicat pe pagina de contact Sebeș:") +
        "<ul><li>Primar Dorin Nistor: joi, ora 14:00</li><li>Viceprimar Dorin Albu: miercuri, ora 14:00</li><li>Secretar municipiu Cristina Elena Vlad: vineri, ora 9:00</li></ul>" +
        P("Pentru înscrierea în audiență, pagina cere apel la 0258 731004. Nu pot face programarea în locul dumneavoastră."),
      en: P("Audience hours published on the Sebeș contact page:") +
        "<ul><li>Mayor Dorin Nistor: Thursday, 14:00</li><li>Deputy mayor Dorin Albu: Wednesday, 14:00</li><li>Municipal secretary Cristina Elena Vlad: Friday, 9:00</li></ul>" +
        P("To be entered for an audience, the page says to call 0258 731004. I cannot book it for you."),
      src: [CONTACT]
    },
    {
      id: "phones",
      keys: ["telefon", "phone", "email", "secretariat", "adresa", "address", "fax", "relatii publice", "politie locala", "asistenta", "spclep", "contact sebes", "contact primar"],
      ro: P("Date de pe pagina de contact Sebeș: Piața Primăriei nr. 1, Sebeș, jud. Alba, cod 515800. E-mail secretariat@primariasebes.ro. E-mail pentru transmiterea cărților de identitate: documente@primariasebes.ro.") +
        "<ul><li>Primărie: 0258-731318, 0258-731004; fax 0258-734187; 0258-735565; investiții 0358-401146, 0358-401147</li><li>S.P.C.L.E.P. (acte de identitate): 0258-733727</li><li>Impozite persoane fizice: 0258-734881</li><li>Impozite persoane juridice: 0258-731132</li><li>Poliția locală: 0358-919</li><li>D.G.A.S.M.C.: 0258-731007</li><li>S.P.A.P.: 0258-730148</li><li>Relații publice: 0258-731006</li></ul>" +
        P("Responsabil Legea 544/2001, pe aceeași pagină: Radu Ioan (Dispoziția 6393/2008)."),
      en: P("From the Sebeș contact page: Piața Primăriei no. 1, Sebeș, Alba County, postal code 515800. Email secretariat@primariasebes.ro. Email for sending identity cards: documente@primariasebes.ro.") +
        "<ul><li>Town hall: 0258-731318, 0258-731004; fax 0258-734187; 0258-735565; investments 0358-401146, 0358-401147</li><li>S.P.C.L.E.P. (identity documents): 0258-733727</li><li>Tax, natural persons: 0258-734881</li><li>Tax, legal persons: 0258-731132</li><li>Local police: 0358-919</li><li>Social / medical / community directorate: 0258-731007</li><li>Property administration: 0258-730148</li><li>Public relations: 0258-731006</li></ul>" +
        P("Law 544/2001 officer, on the same page: Radu Ioan (order 6393/2008)."),
      src: [CONTACT]
    },
    {
      id: "forms",
      keys: ["formular", "form", "cerere", "atestare fiscala", "declaratie fiscala", "acte necesare", "download", "descarc"],
      ro: P("Pagina „Acte și formulare” listează, fără a lipi aici conținutul PDF-urilor:") +
        "<ul><li>Relații publice: cerere de informații publice și reclamație administrativă (Legea 544/2001)</li><li>Taxe și impozite: declarații fiscale pentru clădiri, teren, mijloace de transport, decizii de impunere, cereri și certificate de atestare fiscală (persoane fizice și juridice), taxe de reclamă/afișaj, scutire, impozit pe spectacole</li><li>Acord de funcționare și viză anuală</li><li>Oficiul juridic: teren aferent locuinței (art. 36, Legea 18/1991) și cereri de înregistrare/radiere vehicule</li></ul>" +
        P("Nu reproduc lista de acte din fișierele care nu au fost deschise. Descărcarea este pe " + A(FORMS, "pagina de formulare") + "."),
      en: P("The “Forms” page lists, without pasting the PDF contents here:") +
        "<ul><li>Public relations: a public-information request and an administrative complaint (Law 544/2001)</li><li>Local taxes: fiscal declarations for buildings, land, and vehicles, assessment decisions, requests and fiscal certificates (natural and legal persons), advertising taxes, exemptions, show tax</li><li>Operating agreement and annual visa</li><li>Legal office: land attached to a dwelling (art. 36, Law 18/1991) and vehicle registration/deregistration requests</li></ul>" +
        P("I do not copy document checklists from files that were not opened. Downloads are on the " + A(FORMS, "forms page") + "."),
      src: [FORMS]
    },
    {
      id: "tax",
      keys: ["taxa", "taxe", "taxes", "impozit", "tax", "plata", "payment", "ghiseul", "directia venituri", "inregistrare taxe"],
      ro: P("Portalul " + A(TAX, "taxe.primariasebes.ro") + " aparține Direcției venituri, Piața Primăriei nr. 1, 515800 Sebeș. Telefoane publicate acolo: 0258 731132, 700098, 734881. Fax 734187. E-mail directiavenituri@primariasebes.ro.") +
        P("Pagina spune că intrarea cere ID și parolă primite de la Direcția venituri. Pentru persoane fizice ID-ul este CNP-ul; pentru persoane juridice, codul de înregistrare fiscală. Dacă nu le aveți, trebuie completat, listat și depus formularul de înregistrare la sediul entității fiscale. Sistemul arată declarațiile depuse, plățile și sumele datorate.") +
        P("Plata online, pe aceeași pagină, cere un card înrolat 3D Secure (Visa, Visa Electron, MasterCard sau Maestro). Nu afișez sume, scadențe sau situația unui contribuabil: nu sunt în paginile citite.") +
        P("Meniul site-ului primăriei mai are o legătură etichetată plată online / Ghișeul.ro către ghiseul.ro/ghiseul/public. Nu am citit conținutul acelui site, deci nu descriu regulile lui."),
      en: P("The portal " + A(TAX, "taxe.primariasebes.ro") + " is the revenue directorate, Piața Primăriei no. 1, 515800 Sebeș. Phones printed there: 0258 731132, 700098, 734881. Fax 734187. Email directiavenituri@primariasebes.ro.") +
        P("The page says login needs an ID and password issued by the revenue directorate. For a natural person the ID is the personal numeric code; for a legal person, the fiscal registration code. If you do not have them, the registration form must be filled in, printed, and filed at the fiscal office. The system shows filed declarations, payments, and amounts due.") +
        P("Online payment, on the same page, needs a 3D Secure card (Visa, Visa Electron, MasterCard, or Maestro). I do not show amounts, due dates, or a taxpayer’s balance: they are not on the pages read.") +
        P("The town-hall menu also links a label “online payment / Ghișeul.ro” to ghiseul.ro/ghiseul/public. That site was not read, so its rules are not described."),
      src: [TAX, CONTACT]
    },
    {
      id: "idbook",
      keys: ["programare", "appointment", "carte de identitate", "buletin", "identity", "hub.mai", "acte identitate", "ghiseu mai"],
      ro: P("Pagina " + A(BOOK, "Programări online") + " conține un singur îndemn verificat: „Faceți click aici pentru a efectua programarea la ghișeu în vederea obținerii actelor de identitate”, cu legătura http://hub.mai.gov.ro. Meniul site-ului etichetează aceeași acțiune „Programare ghișeu (acte identitate)” către hub.mai.gov.ro.") +
        P("Nu descriu pașii din hub, pentru că pagina hub nu a fost citită. Telefonul S.P.C.L.E.P. de pe pagina de contact este 0258-733727. E-mail pentru transmiterea cărților de identitate: documente@primariasebes.ro."),
      en: P("The " + A(BOOK, "online appointments") + " page has one verified line: a link to book a counter appointment to obtain identity documents, pointing to http://hub.mai.gov.ro. The site menu labels the same action “counter appointment (identity documents)” and points to hub.mai.gov.ro.") +
        P("Steps inside that hub are not described, because the hub page was not read. The S.P.C.L.E.P. phone on the contact page is 0258-733727. Email for sending identity cards: documente@primariasebes.ro."),
      src: [BOOK, CONTACT]
    },
    {
      id: "civil",
      keys: ["stare civila", "civil status", "casator", "naster", "deces", "divort", "nunta", "birth", "marriage", "death", "divorce"],
      ro: P("Pagina de stare civilă a Primăriei Sebeș este o listă de fișe de descărcat, nu un text cu pași. Titlurile publicate acoperă, între altele: înregistrare nou-născut, recunoașterea paternității, schimbarea numelui, transcrierea actelor din străinătate, căsătorie (cetățeni români, cetățean străin, domiciliu în străinătate), divorț prin acord, deces, rectificare și completare.") +
        P("Nu copiez actele necesare din fișierele care nu au fost deschise. Lista este la " + A(CIVIL, "Stare civilă") + ". Programul cu publicul al S.P.C.L.E.P. este cel de pe pagina de contact (vezi programul)."),
      en: P("The Sebeș civil-status page is a list of downloadable sheets, not a step-by-step text. Published titles include, among others: registering a newborn, recognition of paternity, name change, transcribing records made abroad, marriage (Romanian citizens, a foreign citizen, residence abroad), divorce by agreement, death, rectification, and completion.") +
        P("Required-document lists inside those files were not opened, so they are not copied. The list is at " + A(CIVIL, "Civil status") + ". S.P.C.L.E.P. counter hours are the ones on the contact page (see hours)."),
      src: [CIVIL, CONTACT]
    },
    {
      id: "vintu",
      keys: ["vintu", "vințu", "vintudejos", "comuna", "cazan", "muntean"],
      ro: P("Ambele pagini publice citite dau aceeași adresă și aceleași contacte pentru Primăria comunei Vințu de Jos: strada Lucian Blaga nr. 47, tel. 0258739234, fax 0258739640, e-mail vintudejos@ab.e-adm.ro.") +
        P("Programul <strong>nu coincide</strong> între pagini, așa că nu aleg una ca oficială:") +
        "<ul><li>Pagina de start: funcționare, relații cu publicul și casierie luni–joi 08:00–16:30, vineri 08:00–14:00</li><li>Pagina de contact: funcționare și relații cu publicul luni–vineri 8:00–16:00; casierie luni–vineri 08:00–16:00</li></ul>" +
        P("Pagina primarului o numește pe Cazan Simona Maria. Pagina secretarului o numește pe Muntean Claudia Lavinia (și, în încheiere, Muntean Lavinia Claudia). Nu am un program de audiențe pentru Vințu de Jos pe paginile citite.") +
        P("Textul de prezentare de pe prima pagină spune că comuna are 8.527 hectare, pe malul Mureșului, cam la 10 km de Sebeș pe DN7. Cifra de locuitori de acolo este recensământul din 2002 (5.295). Nu o tratez ca populație actuală. Restul paginii de start conține și text străin, nefolosit aici."),
      en: P("Both public pages that were read give the same address and contacts for Vințu de Jos town hall: Lucian Blaga street no. 47, phone 0258739234, fax 0258739640, email vintudejos@ab.e-adm.ro.") +
        P("The <strong>hours do not match</strong> across pages, so neither set is picked as the official one:") +
        "<ul><li>Home page: operation, public desk, and cashier Monday–Thursday 08:00–16:30, Friday 08:00–14:00</li><li>Contact page: operation and public desk Monday–Friday 8:00–16:00; cashier Monday–Friday 08:00–16:00</li></ul>" +
        P("The mayor page names Cazan Simona Maria. The secretary page names Muntean Claudia Lavinia (and, at the close, Muntean Lavinia Claudia). No audience schedule for Vințu de Jos was on the pages read.") +
        P("The home-page description says the commune covers 8,527 hectares, on the Mureș, about 10 km from Sebeș on DN7. The population figure there is the 2002 census (5,295). It is not treated as the current population. The rest of the home page also contains unrelated foreign text, which is not used."),
      src: [VHOME, VCONTACT]
    },
    {
      id: "limits",
      keys: ["ce nu", "what can you not", "limite", "limits", "nu stii", "refuse", "sursa", "sources"],
      ro: P("Nu răspund la: cuantumuri de impozit, solduri personale, dosare în lucru, pași din PDF-uri nedeschise, pași de pe hub.mai.gov.ro, conținutul caietului de sarcini, funcții AVIACA care nu sunt în anunț, și statistici care nu sunt pe paginile citite.") +
        P("Dacă două pagini se contrazic, arăt ambele. Pentru un caz concret, sunați numerele de pe pagina de contact."),
      en: P("I do not answer: tax amounts, personal balances, live case files, steps inside PDFs that were not opened, steps on hub.mai.gov.ro, the specifications booklet, AVIACA features that are not in the notice, or statistics that are not on the pages read.") +
        P("If two pages disagree, both are shown. For a real case, call the numbers on the contact page."),
      src: []
    }
  ];

  var REFUSE = [
    {
      keys: ["cat platesc", "cat costa", "cuantum", "suma datorata", "sold", "how much", "tax rate", "tarif", "lei pe mp", "scadent"],
      ro: P("Nu am cuantumul impozitului, scadența sau soldul dumneavoastră. Paginile citite descriu doar portalul și telefoanele, nu tarifele. Consultați " + A(TAX, "taxe.primariasebes.ro") + " după autentificare sau Direcția venituri (0258 731132 / 700098 / 734881)."),
      en: P("I do not have your tax amount, due date, or balance. The pages read describe the portal and the phones, not the rates. Use " + A(TAX, "taxe.primariasebes.ro") + " after login, or the revenue directorate (0258 731132 / 700098 / 734881)."),
      src: [TAX]
    },
    {
      keys: ["cnp", "parola mea", "my password", "dosarul meu", "status cerere", "unde e cererea"],
      ro: P("Nu pot căuta un dosar, un CNP sau o parolă. Acest prototip nu este legat de registrul primăriei."),
      en: P("I cannot look up a file, a personal numeric code, or a password. This prototype is not connected to the town hall’s register."),
      src: []
    },
    {
      keys: ["rag", "ocr", "50%", "50 %", "dms", "voice", "vocal"],
      ro: P("Aceste funcții (RAG, OCR, reduceri procentuale, acces la DMS) nu sunt în textul anunțului pe care l-am verificat. Caietul de sarcini nu este inclus, deci nu le confirm și nu le infirm."),
      en: P("Those features (RAG, OCR, percentage time cuts, DMS access) are not in the notice text that was checked. The specifications booklet is not included, so they are neither confirmed nor denied."),
      src: [NOTICE, MIRROR]
    }
  ];

  var FALLBACK = {
    ro: P("Nu am acest răspuns în anunțul AVIACA sau în paginile publice citite, așa că nu îl inventez. Pot vorbi despre obiectul AVIACA, termenul și contactul de achiziție, programul și telefoanele Sebeș, audiențe, formulare (doar titluri), portalul de taxe, lista de stare civilă, programarea pentru acte de identitate și contactul Vințu de Jos.") +
      P("Pentru un caz care nu e pe site, sunați secretariatul Sebeș la 0258-731004 sau secretariat@primariasebes.ro."),
    en: P("That is not in the AVIACA notice or the public pages that were read, so it is not invented. I can cover the AVIACA scope, the tender deadline and procurement contact, Sebeș hours and phones, audiences, form titles, the tax portal, the civil-status list, identity-document booking, and the Vințu de Jos contact.") +
      P("For a case that is not on the website, call the Sebeș secretariat at 0258-731004 or email secretariat@primariasebes.ro."),
    src: [CONTACT, NOTICE]
  };

  var lang = "ro";
  var thread = [];

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9%]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function hasKey(q, k) {
    if (k.indexOf(" ") !== -1) return q.indexOf(k) !== -1;
    var parts = q.split(" ");
    for (var i = 0; i < parts.length; i++) {
      var w = parts[i];
      if (w === k) return true;
      if (k.length >= 5 && w.indexOf(k) === 0) return true;
    }
    return false;
  }

  function score(item, q) {
    var n = 0;
    for (var i = 0; i < item.keys.length; i++) {
      var k = norm(item.keys[i]);
      if (!k) continue;
      if (hasKey(q, k)) n += k.indexOf(" ") === -1 ? 2 : Math.min(6, k.split(" ").length + 1);
    }
    return n;
  }

  function answer(text) {
    var q = norm(text).trim();
    if (!q) return FALLBACK;
    if (q.split(/\s+/).length <= 3) {
      var greet = KB[0];
      if (score(greet, q) > 0 && q.length < 24) return greet;
    }
    var i;
    for (i = 0; i < REFUSE.length; i++) {
      if (score(REFUSE[i], q) >= 2) return REFUSE[i];
    }
    var best = null;
    var bestScore = 0;
    var second = 0;
    for (i = 0; i < KB.length; i++) {
      var s = score(KB[i], q);
      if (s > bestScore) {
        second = bestScore;
        bestScore = s;
        best = KB[i];
      } else if (s > second) {
        second = s;
      }
    }
    if (!best || bestScore < 2) return FALLBACK;
    if (second >= 3 && second >= bestScore - 1) {
      /* keep the single best hit; overlapping words like "contact" should not merge essays */
    }
    return best;
  }

  function applyLang() {
    var pack = UI[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (pack[key] != null && typeof pack[key] === "string") el.textContent = pack[key];
    });
    var input = document.getElementById("q");
    input.placeholder = pack.placeholder;
    document.getElementById("lang-ro").setAttribute("aria-pressed", lang === "ro" ? "true" : "false");
    document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    renderChips();
    renderLog();
  }

  function renderChips() {
    var box = document.getElementById("chips");
    box.innerHTML = "";
    UI[lang].chips.forEach(function (label) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.addEventListener("click", function () { ask(label); });
      box.appendChild(b);
    });
  }

  function renderLog() {
    var log = document.getElementById("log");
    log.innerHTML = "";
    thread.forEach(function (item) {
      var wrap = document.createElement("div");
      wrap.className = "msg " + item.role;
      var who = document.createElement("div");
      who.className = "who";
      who.textContent = item.role === "user" ? UI[lang].you : UI[lang].bot;
      var bubble = document.createElement("div");
      bubble.className = "bubble";
      if (item.role === "user") {
        bubble.textContent = item.text;
      } else {
        var body = item.ro && item.en ? item[lang] : item.text;
        bubble.innerHTML = body;
        if (item.src && item.src.length) {
          var src = document.createElement("div");
          src.className = "src";
          src.innerHTML = (lang === "ro" ? "Sursă: " : "Source: ") + item.src.map(function (u) {
            return '<a href="' + u + '" target="_blank" rel="noopener">' + u.replace(/^https?:\/\//, "") + "</a>";
          }).join("<br>");
          bubble.appendChild(src);
        }
      }
      wrap.appendChild(who);
      wrap.appendChild(bubble);
      log.appendChild(wrap);
    });
    log.scrollTop = log.scrollHeight;
  }

  function ask(text) {
    var clean = String(text || "").trim();
    if (!clean) return;
    thread.push({ role: "user", text: clean });
    var hit = answer(clean);
    thread.push({ role: "bot", ro: hit.ro, en: hit.en, src: hit.src || [] });
    renderLog();
    document.getElementById("q").value = "";
  }

  document.getElementById("lang-ro").addEventListener("click", function () { lang = "ro"; applyLang(); });
  document.getElementById("lang-en").addEventListener("click", function () { lang = "en"; applyLang(); });
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    ask(document.getElementById("q").value);
  });

  thread.push({
    role: "bot",
    ro: P("Bună ziua. Sunt un prototip <strong>scriptat de 92 Logics</strong>, nu asistentul orașului. Răspund doar din anunțul SEAP AVIACA (100212215) și din paginile publice ale Primăriei Sebeș și ale comunei Vințu de Jos. Dacă sursa nu acoperă întrebarea, o refuz."),
    en: P("Hello. I am a <strong>92 Logics scripted prototype</strong>, not the city’s assistant. I answer only from SEAP notice AVIACA (100212215) and the public pages of Sebeș town hall and Vințu de Jos commune. If those sources do not cover the question, I refuse it."),
    src: [NOTICE]
  });
  applyLang();
})();
