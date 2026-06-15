// historier.js
const puslehistorier = [
  {
    "id": 1,
    "tittel": "Isen",
    "brikker_totalt": 3,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/01_isen_smelter_01.png", "tekst_nivaa_1": "En ny is.", "tekst_nivaa_2": "Ei jente pakker ut en krone-is.", "tekst_nivaa_3": "En fornøyd jente pakker spent ut en deilig krone-is i det varme solskinnet." },
      { "brikke_nr": 2, "bilde": "Puslebilder/01_isen_smelter_02.png", "tekst_nivaa_1": "Jenta ser en sommerfugl!", "tekst_nivaa_2": "Jenta ser på en sommerfugl og glemmer isen.", "tekst_nivaa_3": "Jenta blir plutselig distrahert av en fargerik sommerfugl og glemmer helt å spise isen sin." },
      { "brikke_nr": 3, "bilde": "Puslebilder/01_isen_smelter_03.png", "tekst_nivaa_1": "Isen har smeltet.", "tekst_nivaa_2": "Isen har smeltet og renner på hånden.", "tekst_nivaa_3": "Nå har isen smeltet helt i sola, og den renner nedover hånden hennes." }
    ]
  },
  {
    "id": 2,
    "tittel": "Fuglehuset",
    "brikker_totalt": 3,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/02_fuglehuset_01.png", "tekst_nivaa_1": "Ole og far snekrer.", "tekst_nivaa_2": "Ole og far snekrer et lite fuglehus.", "tekst_nivaa_3": "En gutt og pappaen hans samarbeider om å snekre et flott, lite fuglehus i tre." },
      { "brikke_nr": 2, "bilde": "Puslebilder/02_fuglehuset_02.png", "tekst_nivaa_1": "Far går i stigen.", "tekst_nivaa_2": "Far klatrer opp og henger huset i et tre.", "tekst_nivaa_3": "De klatrer forsiktig opp i en stige for å henge det nye fuglehuset høyt oppe i et stort tre." },
      { "brikke_nr": 3, "bilde": "Puslebilder/02_fuglehuset_03.png", "tekst_nivaa_1": "En fugl flytter inn.", "tekst_nivaa_2": "En liten blåmeis titter på huset.", "tekst_nivaa_3": "Kort tid etter flytter en liten blåmeis inn og titter nysgjerrig ut av det runde hullet." }
    ]
  },
  {
    "id": 3,
    "tittel": "Snømannen",
    "brikker_totalt": 3,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/03_snoemannen_01.png", "tekst_nivaa_1": "Vi ruller snøballer.", "tekst_nivaa_2": "To barn ruller tre store snøballer.", "tekst_nivaa_3": "Det snør tette korn, og to glade barn ruller tre store snøballer i hagen." },
      { "brikke_nr": 2, "bilde": "Puslebilder/03_snoemannen_02.png", "tekst_nivaa_1": "Det blir en snømann.", "tekst_nivaa_2": "Snømannen får nese av gulrot.", "tekst_nivaa_3": "Snøballene settes oppå hverandre, og snømannen pyntes med en gulrot-nese og stein-øyne." },
      { "brikke_nr": 3, "bilde": "Puslebilder/03_snoemannen_03.png", "tekst_nivaa_1": "Sola smelter bort snømannen.", "tekst_nivaa_2": "Sola kommer og snømannen blir borte.", "tekst_nivaa_3": "Solen kommer varmt frem på himmelen, og snømannen synker sammen til en trist, liten snøhaug." }
    ]
  },
  {
    "id": 4,
    "tittel": "Kveldsmaten",
    "brikker_totalt": 3,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/04_kveldsmaten_01.png", "tekst_nivaa_1": "Brød og pålegg.", "tekst_nivaa_2": "Det smøres leverpostei på en skive.", "tekst_nivaa_3": "En tom brødskive ligger klar på en fjøl, mens en hånd holder en kniv med leverpostei." },
      { "brikke_nr": 2, "bilde": "Puslebilder/04_kveldsmaten_02.png", "tekst_nivaa_1": "Tre skiver agurk.", "tekst_nivaa_2": "Skiven har fått leverpostei og tre agurker.", "tekst_nivaa_3": "Brødskiven har nå fått et jevnt lag med leverpostei og tre fine, grønne agurkskiver på toppen." },
      { "brikke_nr": 3, "bilde": "Puslebilder/04_kveldsmaten_03.png", "tekst_nivaa_1": "Alt er spist opp.", "tekst_nivaa_2": "Tallerkenen er tom, men en agurk falt av.", "tekst_nivaa_3": "Tallerkenen er helt tom, bortsett fra noen få brødsmuler og en enslig agurkskive som falt av." }
    ]
  },
  {
    "id": 5,
    "tittel": "Blomsten som vokser",
    "brikker_totalt": 4,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/05_blomsten_som_vokser_01.png", "tekst_nivaa_1": "Putt et frø i jorda.", "tekst_nivaa_2": "En hånd putter et lite frø i jorda.", "tekst_nivaa_3": "En forsiktig hånd graver et lite hull i den mørke jorda og putter i et lite, brunt frø." },
      { "brikke_nr": 2, "bilde": "Puslebilder/05_blomsten_som_vokser_02.png", "tekst_nivaa_1": "Gi vann til frøet.", "tekst_nivaa_2": "En rød vannkanne vanner den tørre jorda.", "tekst_nivaa_3": "En rød, blank vannkanne brukes til å vanne jorda slik at frøet får fuktighet til å vokse." },
      { "brikke_nr": 3, "bilde": "Puslebilder/05_blomsten_som_vokser_03.png", "tekst_nivaa_1": "En liten spire.", "tekst_nivaa_2": "En liten, grønn spire kommer opp av jorda.", "tekst_nivaa_3": "Etter noen dager titter en sårbar, lysegrønn liten spire opp over den fuktige jordoverflaten." },
      { "brikke_nr": 4, "bilde": "Puslebilder/05_blomsten_som_vokser_04.png", "tekst_nivaa_1": "En stor solsikke!", "tekst_nivaa_2": "En flott solsikke står i full blomst.", "tekst_nivaa_3": "Til slutt står en kjempefin og fargerik solsikke i full blomst og strekker seg stolt mot sola." }
    ]
  },
  {
    "id": 6,
    "tittel": "Bursdagsgaven",
    "brikker_totalt": 4,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/06_bursdagsgaven_01.png", "tekst_nivaa_1": "Bestefar pakker inn en gave.", "tekst_nivaa_2": "Bestefar pakker inn en bamse i fint papir.", "tekst_nivaa_3": "En snill bestefar pakker inn en myk bamse i et fargerikt gavepapir med en stor, rød sløyfe." },
      { "brikke_nr": 2, "bilde": "Puslebilder/06_bursdagsgaven_02.png", "tekst_nivaa_1": "Gratulerer med dagen!", "tekst_nivaa_2": "Han gir gaven til barnebarnet sitt.", "tekst_nivaa_3": "Han overrekker den store pakken til bursdagsbarnet sitt som smiler fra øre til øre." },
      { "brikke_nr": 3, "bilde": "Puslebilder/06_bursdagsgaven_03.png", "tekst_nivaa_1": "Lise river av papiret.", "tekst_nivaa_2": "Papiret flyr mens Lise åpner esken.", "tekst_nivaa_3": "Gavepapiret rives raskt av og flyr til alle kanter mens Lise nysgjerrig åpner boksen." },
      { "brikke_nr": 4, "bilde": "Puslebilder/06_bursdagsgaven_04.png", "tekst_nivaa_1": "Hun sover godt med bamsen.", "tekst_nivaa_2": "Nå sover Lise ligger mens hun holder i bamsen.", "tekst_nivaa_3": "Om kvelden ligger Lise i senga og holder hardt rundt sin nye bestevenn mens hun sover." }
    ]
  },
  {
    "id": 7,
    "tittel": "Det punkterte hjulet",
    "brikker_totalt": 4,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/07_det_punkterte_hjulet_01.png", "tekst_nivaa_1": "Ole sykler.", "tekst_nivaa_2": "Ole sykler fort og smiler.", "tekst_nivaa_3": "Ole er glad mens han tråkker på pedalene og sykler i full fart bortover veien." },
      { "brikke_nr": 2, "bilde": "Puslebilder/07_det_punkterte_hjulet_02.png", "tekst_nivaa_1": "Oi, en spiker!", "tekst_nivaa_2": "Hjulet ruller over en skarp spiker.", "tekst_nivaa_3": "Uheldigvis ruller det fremre sykkelhjulet over en skarp og rusten spiker som ligger skjult i veien." },
      { "brikke_nr": 3, "bilde": "Puslebilder/07_det_punkterte_hjulet_03.png", "tekst_nivaa_1": "Hjulet sier pssst.", "tekst_nivaa_2": "Det sier pssssst, og dekket blir flatt.", "tekst_nivaa_3": "Det høres et høyt \"psssssst\", og dekket blir helt flatt. Ole blir lei seg." },
      { "brikke_nr": 4, "bilde": "Puslebilder/07_det_punkterte_hjulet_04.png", "tekst_nivaa_1": "Han må trille sykkelen hjem.", "tekst_nivaa_2": "Han må leie sykkelen sin hjem.", "tekst_nivaa_3": "Siden hjulet er ødelagt, må Ole trille sykkelen sin ved siden av seg hele veien hjem." }
    ]
  },
  {
    "id": 8,
    "tittel": "Regnværsdagen",
    "brikker_totalt": 4,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/08_regnvaersdagen_01.png", "tekst_nivaa_1": "Det regner ute.", "tekst_nivaa_2": "Det pøser ned og blir store dammer.", "tekst_nivaa_3": "Kari titter ut av stuevinduet. Det pøser ned med regn, og store vanndammer har lagt seg på bakken." },
      { "brikke_nr": 2, "bilde": "Puslebilder/08_regnvaersdagen_02.png", "tekst_nivaa_1": "Kari tar på støvler.", "tekst_nivaa_2": "Kari kler på seg regntøy og gule støvler.", "tekst_nivaa_3": "Hun går ut i gangen og kler raskt på seg regnjakke, regnbukse og de tette, gule gummistøvlene sine." },
      { "brikke_nr": 3, "bilde": "Puslebilder/08_regnvaersdagen_03.png", "tekst_nivaa_1": "Hun hopper i dammen!", "tekst_nivaa_2": "Hun hopper midt i vanndammen.", "tekst_nivaa_3": "Kari tar rennefart og hopper med begge beina midt i den aller største vanndammen så gjørmevannet spruter." },
      { "brikke_nr": 4, "bilde": "Puslebilder/08_regnvaersdagen_04.png", "tekst_nivaa_1": "Nå var det godt med kakao.", "tekst_nivaa_2": "Støvlene tørker, og Kari drikker kakao.", "tekst_nivaa_3": "Etterpå henger det våte regntøyet til tørk på badet, mens hun koser seg med varm kakao i sofaen." }
    ]
  },
  {
    "id": 9,
    "tittel": "Tegningen",
    "brikker_totalt": 4,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/09_tegningen_01.png", "tekst_nivaa_1": "Et hvitt ark.", "tekst_nivaa_2": "Et hvitt ark ligger ved siden av farger.", "tekst_nivaa_3": "Et helt hvitt og urørt ark ligger klart på et trebord ved siden av en boks fulle av fargeblyanter." },
      { "brikke_nr": 2, "bilde": "Puslebilder/09_tegningen_02.png", "tekst_nivaa_1": "Per tegner et hus.", "tekst_nivaa_2": "Per tegner et hus og et tre.", "tekst_nivaa_3": "Per bruker en spiss blyant til å tegne det enkle omrisset av et stort hus og et tre." },
      { "brikke_nr": 3, "bilde": "Puslebilder/09_tegningen_03.png", "tekst_nivaa_1": "Han bruker fine farger.", "tekst_nivaa_2": "Huset og treet fargelegges med gult, rødt og grønt.", "tekst_nivaa_3": "Huset og treet blir fargelagt med sterke, glade farger. Han bruker grønt, brunt, rødt og gult." },
      { "brikke_nr": 4, "bilde": "Puslebilder/09_tegningen_04.png", "tekst_nivaa_1": "Han henger opp arket.", "tekst_nivaa_2": "Tegningen henges opp med en magnet på kjøleskapet.", "tekst_nivaa_3": "Den ferdige tegningen henges stolt opp med en magnet på kjøleskapsdøren så alle kan se den." }
    ]
  },
  {
    "id": 10,
    "tittel": "Bananskallet",
    "brikker_totalt": 4,
    "brikker": [
      { "brikke_nr": 1, "bilde": "Puslebilder/10_bananskallet_01.png", "tekst_nivaa_1": "Apen spiser banan.", "tekst_nivaa_2": "En ape skreller og spiser en gul banan.", "tekst_nivaa_3": "En sulten ape sitter på en sti i skogen og skreller og spiser en banan." },
      { "brikke_nr": 2, "bilde": "Puslebilder/10_bananskallet_02.png", "tekst_nivaa_1": "Apen kaster skallet.", "tekst_nivaa_2": "Apen kaster bananskallet bak seg.", "tekst_nivaa_3": "Uten å tenke seg om, kaster apen det glatte bananskallet bak ryggen sin og går." },
      { "brikke_nr": 3, "bilde": "Puslebilder/10_bananskallet_03.png", "tekst_nivaa_1": "En bjørnen kommer gående.", "tekst_nivaa_2": "En bjørn kommer og tråkker på skallet.", "tekst_nivaa_3": "Like etter kommer en travel bjørn gående, men fordi han ikke ser ned, tråkker han rett på det glatte skallet." },
      { "brikke_nr": 4, "bilde": "Puslebilder/10_bananskallet_04.png", "tekst_nivaa_1": "Bjørnen faller!", "tekst_nivaa_2": "Bjørnen faller på ryggen, og apen ler.", "tekst_nivaa_3": "Bjørnen sklir og faller overende på ryggen med beina i været, mens apen sitter i et tre og ler." }
    ]
  },
{
    "id": 11,
    "tittel": "Katten og fuglen",
    "brikker_totalt": 3,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/11_katten_og_fuglen_01.png",
        "tekst_nivaa_1": "Se en fugl.",
        "tekst_nivaa_2": "En liten fugl sitter på en gren.",
        "tekst_nivaa_3": "En søt, liten fugl sitter oppe på en tynn gren og synger en sang."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/11_katten_og_fuglen_02.png",
        "tekst_nivaa_1": "Se en katt.",
        "tekst_nivaa_2": "En sulten katt lister seg nærmere treet.",
        "tekst_nivaa_3": "En luskete, svart katt kommer snikende gjennom det grønne gresset."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/11_katten_og_fuglen_03.png",
        "tekst_nivaa_1": "Fuglen flyr.",
        "tekst_nivaa_2": "Fuglen ser katten og flyr sin vei.",
        "tekst_nivaa_3": "Heldigvis oppdager fuglen faren i tide, brer ut vingene og flyr høyt opp i lufta."
      }
    ]
  },
  {
    "id": 12,
    "tittel": "Hunden og pinnen",
    "brikker_totalt": 3,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/12_hunden_og_pinnen_01.png",
        "tekst_nivaa_1": "Kast en pinne.",
        "tekst_nivaa_2": "En gutt kaster en pinne av gårde.",
        "tekst_nivaa_3": "En blid gutt tar i og kaster en lang pinne langt utover den store sletta."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/12_hunden_og_pinnen_02.png",
        "tekst_nivaa_1": "Hunden løper.",
        "tekst_nivaa_2": "En hvit hund løper alt den kan.",
        "tekst_nivaa_3": "Den ivrige hunden setter opp farten og spretter etter pinnen i full galopp."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/12_hunden_og_pinnen_03.png",
        "tekst_nivaa_1": "Hunden har pinnen.",
        "tekst_nivaa_2": "Hunden kommer tilbake med pinnen i munnen.",
        "tekst_nivaa_3": "Kort tid etter kommer den stolte hunden luntende tilbake og avleverer pinnen."
      }
    ]
  },
  {
    "id": 13,
    "tittel": "Eplet i treet",
    "brikker_totalt": 3,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/13_eplet_i_treet_01.png",
        "tekst_nivaa_1": "Et rødt eple.",
        "tekst_nivaa_2": "Et stort, rødt eple henger høyt oppe.",
        "tekst_nivaa_3": "Høyt oppe på en green henger det et saftig og modent rødt eple."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/13_eplet_i_treet_02.png",
        "tekst_nivaa_1": "Vinden blåser.",
        "tekst_nivaa_2": "Vinden blåser hardt i det grønne treet.",
        "tekst_nivaa_3": "Plutselig begynner det å blåse opp, og et kraftig vindkast rister i greinene."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/13_eplet_i_treet_03.png",
        "tekst_nivaa_1": "Eplet faller ned.",
        "tekst_nivaa_2": "Eplet faller ned i det myke gresset.",
        "tekst_nivaa_3": "Eplet løsner fra kvisten, faller ned med et lite dunk og lander trygt i gresset."
      }
    ]
  },
  {
    "id": 14,
    "tittel": "Tannpussen",
    "brikker_totalt": 3,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/14_tannpussen_01.png",
        "tekst_nivaa_1": "Ta på krem.",
        "tekst_nivaa_2": "En jente tar tannkrem på børsten sin.",
        "tekst_nivaa_3": "Før leggetid trykker jenta forsiktig ut en liten stripe med hvit tannkrem."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/14_tannpussen_02.png",
        "tekst_nivaa_1": "Puss, puss.",
        "tekst_nivaa_2": "Hun pusser tennene godt foran speilet.",
        "tekst_nivaa_3": "Hun pusser grundig både oppe og nede mens skummet fyller hele munnen."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/14_tannpussen_03.png",
        "tekst_nivaa_1": "Et fint smil.",
        "tekst_nivaa_2": "Tennene er rene og jenta smiler bredt.",
        "tekst_nivaa_3": "Etter å ha skylt munnen med vann, viser hun frem et blendende hvitt og rent smil."
      }
    ]
  },
  {
    "id": 15,
    "tittel": "Båtturen",
    "brikker_totalt": 3,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/15_baatturen_01.png",
        "tekst_nivaa_1": "En rød båt.",
        "tekst_nivaa_2": "En rød båt ligger klar ved bryggen.",
        "tekst_nivaa_3": "En fin, rød robåt ligger og gynger rolig på vannet ved siden av trebryggen."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/15_baatturen_02.png",
        "tekst_nivaa_1": "Vi ror ut.",
        "tekst_nivaa_2": "To venner tar på vester og ror ut.",
        "tekst_nivaa_3": "To forventningsfulle venner tar på seg redningsvester og ror spent ut på fjorden."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/15_baatturen_03.png",
        "tekst_nivaa_1": "Få en fisk!",
        "tekst_nivaa_2": "De kaster ut snøret og får en stor fisk.",
        "tekst_nivaa_3": "Plutselig napper det i fiskestanga, og de drar opp en sprellende, stor torsk."
      }
    ]
  },
  {
    "id": 16,
    "tittel": "Gjørmehullet",
    "brikker_totalt": 4,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/16_gjoermehullet_01.png",
        "tekst_nivaa_1": "En ren gris.",
        "tekst_nivaa_2": "En rosa gris står og titter ut av bingen.",
        "tekst_nivaa_3": "En nydelig og helt ren rosa gris står nysgjerrig og titter over gjerdet sitt."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/16_gjoermehullet_02.png",
        "tekst_nivaa_1": "Se mye gjørme.",
        "tekst_nivaa_2": "Grisen ser en stor haug med våt gjørme.",
        "tekst_nivaa_3": "Ute på bakken har det samlet seg en diger, mørk og herlig dam med våt gjørme."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/16_gjoermehullet_03.png",
        "tekst_nivaa_1": "Grisen hopper.",
        "tekst_nivaa_2": "Grisen løper ut og hopper midt i dammen.",
        "tekst_nivaa_3": "Grisen tar løpefart, grynter lykkelig og kaster seg med magen først ned i søla."
      },
      {
        "brikke_nr": 4,
        "bilde": "Puslebilder/16_gjoermehullet_04.png",
        "tekst_nivaa_1": "En brun gris.",
        "tekst_nivaa_2": "Nå er hele grisen dekket av brun søle.",
        "tekst_nivaa_3": "Nå ligger grisen og ruller seg fornøyd, helt dekket av et tykt lag med brun gjørme."
      }
    ]
  },
  {
    "id": 17,
    "tittel": "Melkeglasset",
    "brikker_totalt": 4,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/17_melkeglasset_01.png",
        "tekst_nivaa_1": "Hent et glass.",
        "tekst_nivaa_2": "En gutt setter et tomt glass på bordet.",
        "tekst_nivaa_3": "En tørst gutt henter et blankt glass fra skapet og plasserer det på kjøkkenbordet."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/17_melkeglasset_02.png",
        "tekst_nivaa_1": "Hell hvit melk.",
        "tekst_nivaa_2": "Han heller kald melk opp i glasset sitt.",
        "tekst_nivaa_3": "Han tar en stor kartong fra kjøleskapet og heller hvit, kald melk forsiktig oppi."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/17_melkeglasset_03.png",
        "tekst_nivaa_1": "Oi, et uhell!",
        "tekst_nivaa_2": "Gutten dulter til glasset så det velter.",
        "tekst_nivaa_3": "Plutselig er han litt uoppmerksom, dulter borti kanten og velter hele glasset."
      },
      {
        "brikke_nr": 4,
        "bilde": "Puslebilder/17_melkeglasset_04.png",
        "tekst_nivaa_1": "Tørk opp alt.",
        "tekst_nivaa_2": "Melken renner utover, og han må tørke opp.",
        "tekst_nivaa_3": "Den hvite væsken flyter utover, og han må skynde seg å hente tørkerull for å vaske bordet."
      }
    ]
  },
  {
    "id": 18,
    "tittel": "Skoleturen",
    "brikker_totalt": 4,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/18_skoleturen_01.png",
        "tekst_nivaa_1": "Pakk en sekk.",
        "tekst_nivaa_2": "En jente legger en matpakke i sekken.",
        "tekst_nivaa_3": "En jente gjør seg klar til tur og putter en god nistepakke ned i den blå ryggsekken."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/18_skoleturen_02.png",
        "tekst_nivaa_1": "En stor buss.",
        "tekst_nivaa_2": "En stor, gul buss venter utenfor skolen.",
        "tekst_nivaa_3": "Ute i skolegården står en svær, gul turbuss og ruser motoren mens barna samler seg."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/18_skoleturen_03.png",
        "tekst_nivaa_1": "Gå inn i bussen.",
        "tekst_nivaa_2": "Barna går inn på rekke og finner plasser.",
        "tekst_nivaa_3": "Elevene lister seg inn inngangsdøren etter tur, setter seg ned og fester beltene."
      },
      {
        "brikke_nr": 4,
        "bilde": "Puslebilder/18_skoleturen_04.png",
        "tekst_nivaa_1": "Bussen kjører.",
        "tekst_nivaa_2": "Bussen kjører av gårde til den store skogen.",
        "tekst_nivaa_3": "Sjåføren tråkker på gassen, og bussen ruller av sted mot en spennende dag i skogen."
      }
    ]
  },
  {
    "id": 19,
    "tittel": "Fugleredet",
    "brikker_totalt": 4,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/19_fugleredet_01.png",
        "tekst_nivaa_1": "Et lite rede.",
        "tekst_nivaa_2": "Et koselig, lite rede ligger skjult i treet.",
        "tekst_nivaa_3": "Innimellom tette, grønne blader har en fuglemamma bygget et trygt og lunt rede."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/19_fugleredet_02.png",
        "tekst_nivaa_1": "Tre små egg.",
        "tekst_nivaa_2": "Det ligger tre små, blå egg oppi redet.",
        "tekst_nivaa_3": "Nedi den myke mosen i redet ligger det tre nydelige, lyseblå egg og venter."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/19_fugleredet_03.png",
        "tekst_nivaa_1": "Eggene sprekker.",
        "tekst_nivaa_2": "Eggene sprekker, og små unger titter ut.",
        "tekst_nivaa_3": "Etter noen uker sprekker plutselig skallene, og tre nakne små fugleunger titter fram."
      },
      {
        "brikke_nr": 4,
        "bilde": "Puslebilder/19_fugleredet_04.png",
        "tekst_nivaa_1": "Pip, gi oss mat!",
        "tekst_nivaa_2": "Ungene piper høyt og sperrer opp gapet.",
        "tekst_nivaa_3": "De tre små ungene piper alt de kan etter mat, mens mamma kommer flyvende med en mark."
      }
    ]
  },
  {
    "id": 20,
    "tittel": "Bålet",
    "brikker_totalt": 4,
    "brikker": [
      {
        "brikke_nr": 1,
        "bilde": "Puslebilder/20_baalkaffen_01.png",
        "tekst_nivaa_1": "Samle tørr ved.",
        "tekst_nivaa_2": "En dame samler pinner og tørr ved i skogen.",
        "tekst_nivaa_3": "En dame går rundt blant trærne og plukker tørre kvister for å lage et leirbål."
      },
      {
        "brikke_nr": 2,
        "bilde": "Puslebilder/20_baalkaffen_02.png",
        "tekst_nivaa_1": "Tenn på bålet.",
        "tekst_nivaa_2": "Hun bruker en fyrstikk til å tenne på veden.",
        "tekst_nivaa_3": "Hun danderer kvistene i en sirkel og tenner forsiktig på med en fyrstikk så det spraker."
      },
      {
        "brikke_nr": 3,
        "bilde": "Puslebilder/20_baalkaffen_03.png",
        "tekst_nivaa_1": "Svart kjele.",
        "tekst_nivaa_2": "En gammel, svart kjele settes over flammene.",
        "tekst_nivaa_3": "Hun fyller en sotete kaffekjele med friskt vann og plasserer den rett på de varme flammene."
      },
      {
        "brikke_nr": 4,
        "bilde": "Puslebilder/20_baalkaffen_04.png",
        "tekst_nivaa_1": "Drikk varm kaffe.",
        "tekst_nivaa_2": "Damen koser seg med rykende varm kaffe på turen.",
        "tekst_nivaa_3": "Mens røyken stiger opp mot himmelen, sitter hun på et reinsdyrskinn og nyter den varme drikken."
      }
    ]
  }
];