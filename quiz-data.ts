export type TopicId = 'demokrati' | 'ideologier' | 'grundlagar' | 'begrepp' | 'eu'

export const topics: { id: TopicId; label: string; description: string }[] = [
  { id: 'demokrati', label: 'Demokrati & diktatur', description: 'Folkstyre, rättigheter och motsatsen' },
  { id: 'ideologier', label: 'Ideologier', description: 'Konservatism, liberalism, socialism' },
  { id: 'grundlagar', label: 'Grundlagar', description: 'Sveriges viktigaste lagar' },
  { id: 'begrepp', label: 'Begrepp', description: 'Ordlistan: Val – demokrati' },
  { id: 'eu', label: 'EU-samarbete', description: 'Arbetsblad: Fatta EU' },
]

export type MultipleChoiceQuestion = {
  id: string
  topic: TopicId
  question: string
  options: string[]
  answer: number
  explanation: string
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 'd1',
    topic: 'demokrati',
    question: 'Vad betyder ordet demokrati?',
    options: ['Folkstyre', 'Ensamstyre', 'Kungastyre', 'Statsstyre'],
    answer: 0,
    explanation: 'Demokrati betyder folkstyre – makten ska utgå från folket.',
  },
  {
    id: 'd2',
    topic: 'demokrati',
    question: 'Vad kallas det att du inte behöver berätta för någon vad du har röstat på?',
    options: ['Parlamentarism', 'Valhemlighet', 'Rättssäkerhet', 'Majoritetsprincip'],
    answer: 1,
    explanation: 'Valhemlighet betyder att din röst är hemlig och bara du vet vad du har valt.',
  },
  {
    id: 'd3',
    topic: 'demokrati',
    question: 'Vilka har rätt att rösta i Sveriges allmänna val enligt kompendiet?',
    options: [
      'Alla som bor i Sverige och fyllt 16 år',
      'Alla som betalar skatt',
      'Svenska medborgare som fyllt 18 år',
      'Svenska medborgare som fyllt 20 år',
    ],
    answer: 2,
    explanation: 'Allmän rösträtt innebär att alla svenska medborgare som fyllt 18 år får rösta.',
  },
  {
    id: 'd4',
    topic: 'demokrati',
    question: 'Vad kallas det att valresultatet avgör vem som får bilda regering?',
    options: ['Monarki', 'Direkt demokrati', 'Maktdelning', 'Parlamentarism'],
    answer: 3,
    explanation: 'Parlamentarism betyder att regeringen måste ha stöd av riksdagen, som väljs av folket.',
  },
  {
    id: 'd5',
    topic: 'demokrati',
    question: 'Maktdelningen delar makten i tre delar. Vilken del är dömande?',
    options: ['Riksdagen', 'Regeringen', 'Domstolarna', 'Kungen'],
    answer: 2,
    explanation: 'Riksdagen är lagstiftande, regeringen styrande och domstolarna dömande.',
  },
  {
    id: 'd6',
    topic: 'demokrati',
    question: 'Vilken del av makten är lagstiftande?',
    options: ['Riksdagen', 'Regeringen', 'Domstolarna', 'Kommunen'],
    answer: 0,
    explanation: 'Riksdagen stiftar (bestämmer) lagarna i Sverige.',
  },
  {
    id: 'd7',
    topic: 'demokrati',
    question: 'Vilket land nämns i kompendiet som exempel på direkt demokrati?',
    options: ['Sverige', 'Schweiz', 'Tyskland', 'Norge'],
    answer: 1,
    explanation: 'Schweiz använder ofta folkomröstningar – ett exempel på direkt demokrati.',
  },
  {
    id: 'd8',
    topic: 'demokrati',
    question: 'Vad innebär censur?',
    options: [
      'Att alla får skriva vad de vill',
      'Att man röstar i hemlighet',
      'Att makthavarna kontrollerar media och tar bort det de inte gillar',
      'Att domstolen dömer rättvist',
    ],
    answer: 2,
    explanation: 'Vid censur kontrolleras radio, tv och tidningar av dem som sitter vid makten.',
  },
  {
    id: 'd9',
    topic: 'demokrati',
    question: 'Vad betyder rättssäkerhet?',
    options: [
      'Att polisen alltid har rätt',
      'Att ingen kan fängslas utan orsak och att alla får en rättvis rättegång',
      'Att alla måste följa sin religion',
      'Att man får rösta från 18 år',
    ],
    answer: 1,
    explanation: 'Rättssäkerhet skyddar oss mot att bli häktade utan orsak och ger rätt till rättvis rättegång.',
  },
  {
    id: 'd10',
    topic: 'demokrati',
    question: 'Ordet politik kommer från grekiskans pólis. Vad betyder pólis?',
    options: ['Folk', 'Makt', 'Stadsstat', 'Lag'],
    answer: 2,
    explanation: 'Pólis betyder stadsstat, och politik betyder ungefär "det som rör staten".',
  },
  {
    id: 'd11',
    topic: 'demokrati',
    question: 'Vilket av följande nämns som ett exempel på en diktatur i historien?',
    options: ['Schweiz', 'Sovjetunionen', 'Danmark', 'Finland'],
    answer: 1,
    explanation: 'Kompendiet nämner Sovjetunionen och Tyskland under andra världskriget.',
  },
  {
    id: 'd12',
    topic: 'demokrati',
    question: 'Vad betyder envälde?',
    options: ['Att folket bestämmer', 'Att EN person styr', 'Att flera partier samarbetar', 'Att kungen är statschef'],
    answer: 1,
    explanation: 'I en diktatur styr ofta en enda person med envälde.',
  },
  {
    id: 'i1',
    topic: 'ideologier',
    question: 'Vad är en ideologi?',
    options: [
      'En lag som är svår att ändra',
      'En idé om hur samhället är och ska vara',
      'Ett politiskt parti',
      'En sorts folkomröstning',
    ],
    answer: 1,
    explanation: 'En ideologi är en idé om hur samhället ska vara och hur det ska förändras till det bättre.',
  },
  {
    id: 'i2',
    topic: 'ideologier',
    question: 'Vilken ideologi vill bevara samhället och förändra det långsamt?',
    options: ['Liberalism', 'Socialism', 'Konservatism', 'Fascism'],
    answer: 2,
    explanation: 'Konservatism kommer från "konservera" = bevara. Den bygger på erfarenhet och tradition.',
  },
  {
    id: 'i3',
    topic: 'ideologier',
    question: 'Liberalism kommer från latinets "liber". Vad betyder det?',
    options: ['Frihet', 'Bok', 'Folk', 'Jämlikhet'],
    answer: 0,
    explanation: 'Liber = frihet. Liberalismen betonar den enskilda människans frihet.',
  },
  {
    id: 'i4',
    topic: 'ideologier',
    question: 'Vad vill socialismen enligt kompendiet?',
    options: [
      'Att kungen ska ha all makt',
      'Att produktionsmedlen ska ägas gemensamt av folket',
      'Att varje individ ska klara sig helt själv',
      'Att lagarna ska bygga på heliga texter',
    ],
    answer: 1,
    explanation: 'Socialismen sätter kollektivet före individen – det gemensamma är viktigast.',
  },
  {
    id: 'i5',
    topic: 'ideologier',
    question: 'Vilken ideologi är nationalistisk och hyllar en stark stat och ledare med oinskränkt makt?',
    options: ['Liberalism', 'Fascism', 'Konservatism', 'Socialism'],
    answer: 1,
    explanation: 'Fascismen vill ha en stark stat, ledare och parti med oinskränkt (obegränsad) makt.',
  },
  {
    id: 'i6',
    topic: 'ideologier',
    question: 'Vad kännetecknar fundamentalism?',
    options: [
      'Att stat och religion hålls isär',
      'Att landets lagar utgår från heliga böcker eller texter',
      'Att folket röstar om allt',
      'Att individen alltid går först',
    ],
    answer: 1,
    explanation: 'Fundamentalism skiljer inte mellan stat och religion.',
  },
  {
    id: 'i7',
    topic: 'ideologier',
    question: 'Vilka är de tre "klassiska" ideologierna?',
    options: [
      'Feminism, ekologism, nazism',
      'Demokrati, diktatur, monarki',
      'Konservatism, liberalism, socialism',
      'Kommunism, fascism, liberalism',
    ],
    answer: 2,
    explanation: 'De tre klassiska ideologierna är konservatism, liberalism och socialism.',
  },
  {
    id: 'g1',
    topic: 'grundlagar',
    question: 'Hur många grundlagar har Sverige?',
    options: ['Två', 'Tre', 'Fyra', 'Femton'],
    answer: 2,
    explanation:
      'Regeringsformen, successionsordningen, tryckfrihetsförordningen och yttrandefrihetsgrundlagen.',
  },
  {
    id: 'g2',
    topic: 'grundlagar',
    question: 'Vilken av dessa är INTE en grundlag?',
    options: ['Regeringsformen', 'Riksdagsordningen', 'Successionsordningen', 'Tryckfrihetsförordningen'],
    answer: 1,
    explanation: 'Riksdagsordningen är "nästan en grundlag" – den har en mellanställning sedan 1974.',
  },
  {
    id: 'g3',
    topic: 'grundlagar',
    question: 'Vad krävs för att ändra en grundlag?',
    options: [
      'Att regeringen bestämmer det',
      'Att kungen skriver under',
      'Två likadana beslut i riksdagen med ett allmänt val emellan',
      'En folkomröstning med minst 90 % ja',
    ],
    answer: 2,
    explanation: 'Det ska vara svårt så att riksdagen inte fattar förhastade beslut som skadar demokratin.',
  },
  {
    id: 'g4',
    topic: 'grundlagar',
    question: 'Vad bestämmer successionsordningen?',
    options: ['Hur val går till', 'Vem som kan ärva tronen', 'Vad tidningar får skriva', 'Hur många utskott riksdagen har'],
    answer: 1,
    explanation: 'Successionsordningen bestämmer tronföljden.',
  },
  {
    id: 'g5',
    topic: 'grundlagar',
    question: 'Vilket år beslutade riksdagen att även en kvinna ska kunna ärva tronen?',
    options: ['1921', '1974', '1979', '1995'],
    answer: 2,
    explanation: 'År 1979 ändrades successionsordningen så att även kvinnor kan ärva tronen.',
  },
  {
    id: 'g6',
    topic: 'grundlagar',
    question: 'Vilket massmedium är det enda som får förhandsgranskas av staten?',
    options: ['Tidningar', 'Film på bio', 'Radio', 'Webben'],
    answer: 1,
    explanation: 'Enligt yttrandefrihetsgrundlagen är film på bio undantaget.',
  },
  {
    id: 'g7',
    topic: 'grundlagar',
    question: 'Hur många utskott har riksdagen?',
    options: ['4', '15', '29', '349'],
    answer: 1,
    explanation: 'Riksdagsordningen reglerar hur riksdagens 15 utskott ska tillsättas och arbeta.',
  },
  {
    id: 'g8',
    topic: 'grundlagar',
    question: 'Vilken grundlag beskriver hur landet ska styras och hur den offentliga makten fördelas?',
    options: ['Regeringsformen', 'Tryckfrihetsförordningen', 'Successionsordningen', 'Riksdagsordningen'],
    answer: 0,
    explanation: 'Regeringsformen utgör grunden för vår demokrati.',
  },
  {
    id: 'g9',
    topic: 'grundlagar',
    question: 'Vilken grundlag skyddar rätten att uttrycka sig i radio, tv och på webben?',
    options: ['Regeringsformen', 'Successionsordningen', 'Yttrandefrihetsgrundlagen', 'Tryckfrihetsförordningen'],
    answer: 2,
    explanation: 'Yttrandefrihetsgrundlagen gäller radio, tv och annan teknisk upptagning.',
  },
  {
    id: 'g10',
    topic: 'grundlagar',
    question: 'Vad krävs för att en prins eller prinsessa ska få gifta sig och behålla rätten till tronen?',
    options: ['Kyrkans godkännande', 'Riksdagens röstning', 'Regeringens samtycke', 'En folkomröstning'],
    answer: 2,
    explanation: 'Utan regeringens samtycke förlorar de rätten att ärva tronen.',
  },
  {
    id: 'g11',
    topic: 'grundlagar',
    question: 'Vad räknas som brott mot tryckfrihetsförordningen?',
    options: ['Att kritisera regeringen', 'Att starta en egen tidning', 'Hets mot folkgrupp', 'Att skriva en bok'],
    answer: 2,
    explanation: 'Tryckfriheten skyddar oss också mot förtal, kränkningar och t.ex. hets mot folkgrupp.',
  },
  {
    id: 'b1',
    topic: 'begrepp',
    question: 'Vem är statschef i Sverige?',
    options: ['Statsministern', 'Talmannen', 'Kungen', 'Riksdagen'],
    answer: 2,
    explanation: 'Kungen är statschef men har inte någon politisk makt.',
  },
  {
    id: 'b2',
    topic: 'begrepp',
    question: 'Vem leder arbetet i regeringen?',
    options: ['Kungen', 'Statsministern', 'Talmannen', 'Oppositionen'],
    answer: 1,
    explanation: 'Statsministern leder regeringen – Sveriges högsta verkställande myndighet.',
  },
  {
    id: 'b3',
    topic: 'begrepp',
    question: 'Vad är en republik?',
    options: ['Ett land med kung eller drottning', 'Ett land med president', 'Ett land utan lagar', 'Ett land med bara ett parti'],
    answer: 1,
    explanation: 'En republik har president, inte kung eller drottning. Ett land med kung kallas monarki.',
  },
  {
    id: 'b4',
    topic: 'begrepp',
    question: 'Vad betyder mandat?',
    options: [
      'Antal platser ett parti får i riksdagen',
      'En lag som riksdagen beslutar',
      'En undersökning av vad folket tycker',
      'Ett geografiskt område',
    ],
    answer: 0,
    explanation: 'Ju fler röster ett parti får, desto fler mandat (platser) får det.',
  },
  {
    id: 'b5',
    topic: 'begrepp',
    question: 'Hur många valkretsar är Sverige indelat i?',
    options: ['15', '21', '29', '290'],
    answer: 2,
    explanation: 'Sverige har 29 valkretsar, ofta samma som län, t.ex. Jönköpings län.',
  },
  {
    id: 'b6',
    topic: 'begrepp',
    question: 'Vad betyder opposition?',
    options: ['Flertal', 'Motståndare', 'Allmän mening', 'Fåtal'],
    answer: 1,
    explanation: 'Oppositionen är motståndarna – de partier som inte sitter i regeringen.',
  },
  {
    id: 'b7',
    topic: 'begrepp',
    question: 'Vad är en opinionsundersökning?',
    options: [
      'En undersökning av vad folket tycker',
      'En rättegång',
      'När riksdagen röstar',
      'En ny grundlag',
    ],
    answer: 0,
    explanation: 'T.ex. vilket parti man skulle rösta på vid ett visst tillfälle.',
  },
  {
    id: 'b8',
    topic: 'begrepp',
    question: 'Vad betyder majoritet?',
    options: ['Fåtal', 'Flertal', 'Motståndare', 'Kung'],
    answer: 1,
    explanation: 'Majoritet = flertal. Motsatsen är minoritet = fåtal.',
  },
  {
    id: 'b9',
    topic: 'begrepp',
    question: 'Vad är representativ demokrati?',
    options: [
      'Alla röstar direkt om varje beslut',
      'Vi röstar på partier som representerar oss i t.ex. riksdagen',
      'En person bestämmer allt',
      'Kungen väljer regeringen',
    ],
    answer: 1,
    explanation: 'Sverige har representativ demokrati – partierna företräder väljarna.',
  },
  {
    id: 'b10',
    topic: 'begrepp',
    question: 'Vad är riksdagen?',
    options: [
      'Sveriges högsta domstol',
      'Kungens rådgivare',
      'Sveriges parlament och högsta beslutande församling',
      'En myndighet som leds av statsministern',
    ],
    answer: 2,
    explanation: 'Riksdagen är Sveriges parlament och den högsta beslutande församlingen.',
  },
  {
    id: 'b11',
    topic: 'begrepp',
    question: 'Vad är ett exempel på direkt demokrati?',
    options: ['Folkomröstning', 'Riksdagsval', 'Regeringsbildning', 'Opinionsundersökning'],
    answer: 0,
    explanation: 'Vid en folkomröstning bestämmer folket direkt i en fråga.',
  },
]

export type Keyword = { label: string; matches: string[] }

export type OpenQuestion = {
  id: string
  topic: TopicId
  question: string
  hint?: string
  keywords: Keyword[]
  exampleAnswer: string
}

export const openQuestions: OpenQuestion[] = [
  {
    id: 'od1',
    topic: 'demokrati',
    question: 'Vad är typiskt för en demokrati? Nämn minst fyra punkter!',
    keywords: [
      { label: 'Fria val', matches: ['fria val', 'val'] },
      { label: 'Allmän rösträtt', matches: ['rösträtt', 'rösta'] },
      { label: 'Yttrande- och tryckfrihet', matches: ['yttrande', 'tryckfrihet'] },
      { label: 'Mänskliga rättigheter', matches: ['mänskliga', 'lika värde', 'lika mycket värda'] },
      { label: 'Rättssäkerhet', matches: ['rättssäker', 'rättegång'] },
      { label: 'Mötes- och föreningsfrihet', matches: ['mötesfrihet', 'förening', 'möten'] },
      { label: 'Maktdelning', matches: ['maktdelning', 'domstol'] },
    ],
    exampleAnswer:
      'I en demokrati är det folket som bestämmer genom fria och hemliga val. Det finns allmän rösträtt, vilket betyder att alla medborgare över 18 år får rösta. Alla har yttrande- och tryckfrihet, så man får säga och skriva vad man tycker utan censur. De mänskliga rättigheterna gäller och alla är lika mycket värda. Det finns rättssäkerhet – ingen kan sättas i fängelse utan orsak. Man har mötes- och föreningsfrihet, och makten är uppdelad mellan riksdag, regering och domstolar.',
  },
  {
    id: 'od2',
    topic: 'demokrati',
    question: 'När tror du att direkt demokrati fungerar bättre än representativ demokrati?',
    hint: 'Tänk på hur många som ska bestämma och hur svår frågan är.',
    keywords: [
      { label: 'Få personer / litet område', matches: ['få ', 'liten', 'litet', 'små', 'klass', 'by'] },
      { label: 'Enkel fråga (ja/nej)', matches: ['enkel', 'ja eller nej', 'ja/nej', 'tydlig'] },
      { label: 'Folkomröstning', matches: ['folkomröstning'] },
      { label: 'Viktig fråga för alla', matches: ['viktig', 'alla berörs', 'påverkar alla'] },
    ],
    exampleAnswer:
      'Direkt demokrati fungerar bättre när det är få personer som ska bestämma, till exempel i en klass eller en liten by, eftersom alla då kan vara med och rösta direkt. Det fungerar också bra när frågan är enkel och går att svara ja eller nej på, eller när frågan är så viktig att alla bör få säga sitt, som vid en folkomröstning. I ett stort land med många svåra frågor är representativ demokrati bättre, eftersom politikerna har tid att sätta sig in i frågorna.',
  },
  {
    id: 'od3',
    topic: 'demokrati',
    question: 'Beskriv skillnaderna mellan demokrati och diktatur. Försök få med så många olikheter som möjligt.',
    keywords: [
      { label: 'Vem som har makten', matches: ['folket', 'en person', 'få personer', 'fåtal', 'envälde'] },
      { label: 'Val', matches: ['val'] },
      { label: 'Censur / tryckfrihet', matches: ['censur', 'tryckfrihet'] },
      { label: 'Yttrande- och åsiktsfrihet', matches: ['yttrande', 'åsikt'] },
      { label: 'Ett parti / flera partier', matches: ['parti'] },
      { label: 'Rättssäkerhet', matches: ['rättssäker', 'rättegång', 'bortförd'] },
      { label: 'Mötes- och föreningsfrihet', matches: ['möte', 'förening'] },
    ],
    exampleAnswer:
      'I en demokrati utgår makten från folket genom fria val, men i en diktatur har en person eller en liten grupp tagit makten själva. I en demokrati finns flera partier och många åsikter, medan det i en diktatur oftast bara finns ett parti och en tillåten åsikt. I en demokrati finns yttrande- och tryckfrihet, men i en diktatur finns censur och man får inte kritisera makten. I en demokrati finns rättssäkerhet, men i en diktatur kan man bli bortförd utan anledning. Dessutom finns det mötes- och föreningsfrihet i en demokrati, vilket saknas i en diktatur.',
  },
  {
    id: 'oi1',
    topic: 'ideologier',
    question: 'Vad är en politisk ideologi?',
    keywords: [
      { label: 'Idé om samhället', matches: ['idé', 'ide'] },
      { label: 'Hur samhället ska vara', matches: ['samhälle'] },
      { label: 'Förändring till det bättre', matches: ['förändr', 'bättre'] },
    ],
    exampleAnswer:
      'En politisk ideologi är en samling idéer om hur samhället är och hur det borde vara. Den beskriver också hur man ska förändra samhället till det bättre. Exempel är konservatism, liberalism och socialism.',
  },
  {
    id: 'oi2',
    topic: 'ideologier',
    question: 'Förklara hur sambandet mellan en politisk ideologi och makt hänger ihop.',
    hint: 'Vad händer när ett parti med en viss ideologi vinner valet?',
    keywords: [
      { label: 'Parti', matches: ['parti'] },
      { label: 'Vinna val / få makt', matches: ['makt', 'vinner', 'val'] },
      { label: 'Lagar och beslut', matches: ['lag', 'beslut', 'bestämma', 'styra'] },
    ],
    exampleAnswer:
      'Partierna bygger sin politik på olika ideologier. När ett parti vinner valet och får makten kan det fatta beslut och stifta lagar som följer partiets ideologi. Därför påverkar ideologin hur samhället styrs – till exempel om man satsar mer på individens frihet eller på det gemensamma. Utan makt kan en ideologi inte förändra samhället, och makten behöver en ideologi för att veta vart den ska.',
  },
  {
    id: 'oi3',
    topic: 'ideologier',
    question: 'Kan du koppla någon av de "klassiska" ideologierna till något land?',
    hint: 'Det finns inget enda rätt svar – motivera ditt val.',
    keywords: [
      { label: 'Nämner en ideologi', matches: ['konservat', 'liberal', 'socialis'] },
      { label: 'Nämner ett land', matches: ['sverige', 'usa', 'kina', 'storbritannien', 'norge', 'kuba', 'land'] },
      { label: 'Motiverar', matches: ['eftersom', 'därför', 'för att'] },
    ],
    exampleAnswer:
      'USA kan kopplas till liberalism eftersom landet betonar individens frihet, till exempel yttrandefrihet och ekonomisk frihet att starta företag. Storbritannien kan kopplas till konservatism eftersom landet håller fast vid traditioner som kungahuset. Kuba har präglats av socialism eftersom staten äger mycket av produktionen.',
  },
  {
    id: 'oi4',
    topic: 'ideologier',
    question: 'Ta reda på vad feminism, kommunism, nazism och ekologism innebär.',
    keywords: [
      { label: 'Feminism – jämställdhet', matches: ['jämställ', 'kvinnor', 'kön'] },
      { label: 'Kommunism – klasslöst samhälle', matches: ['klass', 'gemensam', 'staten äger'] },
      { label: 'Nazism – rasism/diktatur', matches: ['ras', 'hitler', 'diktatur'] },
      { label: 'Ekologism – miljö', matches: ['miljö', 'natur', 'klimat'] },
    ],
    exampleAnswer:
      'Feminism vill att kvinnor och män ska ha samma rättigheter, makt och möjligheter – alltså jämställdhet. Kommunism vill ha ett klasslöst samhälle där allt ägs gemensamt. Nazism är en rasistisk och antidemokratisk ideologi som menar att vissa folk är mer värda än andra och vill ha en diktatur med en stark ledare, som i Tyskland under Hitler. Ekologism sätter miljön och naturen i centrum och vill att vi lever hållbart.',
  },
  {
    id: 'og1',
    topic: 'grundlagar',
    question: 'Vilka är Sveriges grundlagar?',
    keywords: [
      { label: 'Regeringsformen', matches: ['regeringsform'] },
      { label: 'Successionsordningen', matches: ['succession'] },
      { label: 'Tryckfrihetsförordningen', matches: ['tryckfrihet'] },
      { label: 'Yttrandefrihetsgrundlagen', matches: ['yttrandefrihet'] },
    ],
    exampleAnswer:
      'Sverige har fyra grundlagar: regeringsformen, successionsordningen, tryckfrihetsförordningen och yttrandefrihetsgrundlagen. Riksdagsordningen är nästan en grundlag men har en mellanställning.',
  },
  {
    id: 'og2',
    topic: 'grundlagar',
    question: 'Vad gör en grundlag så annorlunda från en "vanlig" lag?',
    keywords: [
      { label: 'Svårare att ändra', matches: ['svår', 'ändra'] },
      { label: 'Två beslut', matches: ['två beslut', 'två gånger'] },
      { label: 'Val emellan', matches: ['val'] },
      { label: 'Skyddar demokratin', matches: ['demokrati', 'skydd'] },
    ],
    exampleAnswer:
      'En grundlag är mycket svårare att ändra än en vanlig lag. För att ändra en grundlag måste riksdagen fatta två likadana beslut med ett allmänt val emellan. En vanlig lag kan ändras med ett enda beslut. Grundlagarna bestämmer hur landet ska styras och skyddar demokratin och våra rättigheter.',
  },
  {
    id: 'og3',
    topic: 'grundlagar',
    question: 'Varför är grundlagarna så viktiga för Sverige?',
    keywords: [
      { label: 'Skyddar demokratin', matches: ['demokrati'] },
      { label: 'Fri- och rättigheter', matches: ['rättighet', 'frihet'] },
      { label: 'Hur landet styrs', matches: ['styr'] },
    ],
    exampleAnswer:
      'Grundlagarna är viktiga eftersom de bestämmer hur Sverige ska styras och hur makten fördelas. De skyddar våra fri- och rättigheter, som yttrandefrihet och tryckfrihet. Utan grundlagar skulle någon som får makten lättare kunna ta bort demokratin.',
  },
  {
    id: 'og4',
    topic: 'grundlagar',
    question: 'Varför är en grundlag så svår att ändra?',
    keywords: [
      { label: 'Förhastade beslut', matches: ['förhastad', 'snabbt', 'för snabbt'] },
      { label: 'Skydda demokratin', matches: ['demokrati', 'skydd'] },
      { label: 'Väljarna får säga sitt (val)', matches: ['val', 'väljar', 'folket'] },
    ],
    exampleAnswer:
      'En grundlag ska vara svår att ändra för att skydda demokratin. Riksdagen ska inte kunna fatta förhastade beslut som tar bort människors fri- och rättigheter. Eftersom det måste vara ett val mellan de två besluten får väljarna chans att säga sitt innan ändringen blir verklighet.',
  },
  {
    id: 'oe1',
    topic: 'eu',
    question: 'EU består av många olika länder. Varför tror du att länderna har valt att samarbeta med varandra?',
    keywords: [
      { label: 'Fred', matches: ['fred', 'krig'] },
      { label: 'Handel / ekonomi', matches: ['handel', 'ekonomi', 'pengar'] },
      { label: 'Starkare tillsammans', matches: ['starkare', 'tillsammans'] },
      { label: 'Gemensamma problem', matches: ['problem', 'miljö', 'klimat', 'flykting'] },
    ],
    exampleAnswer:
      'Länderna har valt att samarbeta för att bevara freden i Europa efter andra världskriget. Tillsammans blir de starkare, både ekonomiskt och politiskt. Det blir lättare att handla med varandra och lösa problem som går över gränser, till exempel miljö, brottslighet och flyktingar.',
  },
  {
    id: 'oe2',
    topic: 'eu',
    question: 'Vad kan ett land vinna på att samarbeta med andra länder? Nämn och förklara två saker.',
    keywords: [
      { label: 'Handel', matches: ['handel', 'handla', 'export', 'import'] },
      { label: 'Säkerhet / fred', matches: ['fred', 'säker'] },
      { label: 'Fri rörlighet', matches: ['resa', 'jobba', 'studera', 'rörlighet'] },
      { label: 'Förklarar', matches: ['eftersom', 'därför', 'för att'] },
    ],
    exampleAnswer:
      'Ett land kan vinna på handel, eftersom det blir enklare och billigare att sälja och köpa varor när det inte finns tullar mellan länderna. Det ger fler jobb och bättre ekonomi. Ett land kan också vinna säkerhet, för att länder som samarbetar nära sällan går i krig mot varandra och kan hjälpa varandra vid kriser.',
  },
  {
    id: 'oe3',
    topic: 'eu',
    question: 'Filmen tar upp flyktingsituationen i Europa. Varför blev detta en fråga som flera EU-länder behövde samarbeta om?',
    keywords: [
      { label: 'Många människor', matches: ['många', 'stort antal'] },
      { label: 'Öppna gränser', matches: ['gräns'] },
      { label: 'Ett land klarar inte själv', matches: ['ensam', 'själv', 'inte klara'] },
      { label: 'Fördela ansvaret', matches: ['fördela', 'ansvar', 'rättvis'] },
    ],
    exampleAnswer:
      'Väldigt många människor flydde till Europa samtidigt, och det var för många för att ett enskilt land skulle klara av det själv. Eftersom EU-länderna har öppna gränser mellan sig påverkar det som händer i ett land även de andra. Därför behövde länderna samarbeta för att fördela ansvaret rättvist och ta emot människorna på ett bra sätt.',
  },
  {
    id: 'oe4',
    topic: 'eu',
    question: 'Vad betyder det att EU-länderna har ett gemensamt ansvar? Förklara med egna ord.',
    keywords: [
      { label: 'Alla hjälps åt', matches: ['hjälp', 'tillsammans', 'alla'] },
      { label: 'Dela på bördan', matches: ['dela', 'fördela'] },
      { label: 'Inte bara ett land', matches: ['inte bara', 'ensam'] },
    ],
    exampleAnswer:
      'Gemensamt ansvar betyder att alla länder i EU hjälps åt med problemen, istället för att ett land får ta hela ansvaret ensamt. Man delar på bördan, till exempel genom att flera länder tar emot flyktingar eller bidrar med pengar.',
  },
  {
    id: 'oe5',
    topic: 'eu',
    question: 'Varför kan det uppstå konflikter när flera länder ska bestämma tillsammans?',
    keywords: [
      { label: 'Olika åsikter', matches: ['åsikt', 'tycker olika', 'olika'] },
      { label: 'Egna intressen', matches: ['intresse', 'sitt eget', 'sig själv'] },
      { label: 'Olika förutsättningar', matches: ['ekonomi', 'befolkning', 'förutsättning'] },
    ],
    exampleAnswer:
      'Det kan uppstå konflikter eftersom länderna har olika åsikter, traditioner och förutsättningar. Varje land vill skydda sina egna intressen och sina invånare. Ett beslut som är bra för ett land kan vara dåligt för ett annat, och därför kan det vara svårt att komma överens.',
  },
  {
    id: 'oe6',
    topic: 'eu',
    question:
      'Du är ledare för ett EU-land som redan tagit emot många som söker skydd. EU vill att ni tar emot ännu fler. Vilka argument kan du använda för att säga ja – och för att säga nej?',
    keywords: [
      { label: 'Ja: humanitet / mänskliga rättigheter', matches: ['hjälpa', 'mänskliga', 'skydd', 'ansvar'] },
      { label: 'Ja: arbetskraft', matches: ['arbetskraft', 'jobb', 'arbeta'] },
      { label: 'Nej: resurser (bostäder, skola, vård)', matches: ['bostad', 'skola', 'vård', 'resurs', 'kostar', 'pengar'] },
      { label: 'Nej: andra länder borde ta mer', matches: ['andra länder', 'rättvis', 'redan'] },
    ],
    exampleAnswer:
      'Ja: Vi har ett ansvar att hjälpa människor som flyr från krig, och det följer de mänskliga rättigheterna. Fler människor kan också bidra med arbetskraft i framtiden, och vi visar att vi tar EU-samarbetet på allvar. Nej: Vi har redan tagit emot många och har inte tillräckligt med bostäder, skolor och vård för att ge alla ett bra mottagande. Det är rättvisare om andra länder som tagit emot färre gör mer först.',
  },
  {
    id: 'oe7',
    topic: 'eu',
    question: 'Vad tror du skulle hända om varje EU-land bara tänkte på sig självt och inte samarbetade med de andra?',
    keywords: [
      { label: 'Svårare att lösa problem', matches: ['problem', 'svår'] },
      { label: 'Orättvisa', matches: ['orättvis', 'vissa länder'] },
      { label: 'Konflikter / sämre fred', matches: ['konflikt', 'krig', 'bråk'] },
      { label: 'Sämre handel / ekonomi', matches: ['handel', 'ekonomi'] },
    ],
    exampleAnswer:
      'Om varje land bara tänkte på sig självt skulle det bli svårare att lösa stora problem som klimatet och flyktingkriser. Vissa länder skulle få ta mycket större ansvar än andra, vilket blir orättvist. Det skulle kunna leda till fler konflikter, sämre handel och i värsta fall att EU faller isär.',
  },
  {
    id: 'oe8',
    topic: 'eu',
    question:
      'Jämför EU-samarbetet med ett grupparbete i skolan. Vad kan hända om några i gruppen gör mycket medan andra nästan inte hjälper till?',
    keywords: [
      { label: 'Orättvist', matches: ['orättvis'] },
      { label: 'Irritation / konflikter', matches: ['arg', 'irriter', 'bråk', 'konflikt', 'sur'] },
      { label: 'Sämre resultat', matches: ['sämre', 'resultat'] },
      { label: 'Koppling till EU', matches: ['eu', 'länder', 'land'] },
    ],
    exampleAnswer:
      'Om några gör allt arbete blir det orättvist, och de som jobbar mycket blir irriterade och kanske slutar vilja samarbeta. Resultatet kan bli sämre. Det är likadant i EU: om några länder tar emot alla flyktingar eller betalar mest, medan andra inte bidrar, kan det leda till konflikter och att samarbetet blir svagare.',
  },
  {
    id: 'oe9',
    topic: 'eu',
    question: 'Ibland måste ett land följa regler som det själv inte tycker är bäst. Varför kan ett land ändå välja att vara med i ett samarbete?',
    keywords: [
      { label: 'Fördelarna är större', matches: ['fördel', 'vinner', 'mer att vinna'] },
      { label: 'Handel / ekonomi', matches: ['handel', 'ekonomi'] },
      { label: 'Påverka inifrån', matches: ['påverka', 'säga sitt'] },
      { label: 'Kompromiss', matches: ['kompromiss', 'ge och ta'] },
    ],
    exampleAnswer:
      'Ett land kan välja att vara med eftersom fördelarna med samarbetet är större än nackdelarna, till exempel bättre handel, säkerhet och möjlighet att resa och arbeta i andra länder. Som medlem kan landet också påverka besluten. Samarbete handlar om kompromisser – man får inte alltid som man vill, men man vinner mer tillsammans.',
  },
  {
    id: 'oe10',
    topic: 'eu',
    question: 'Vilket är viktigast i ett samarbete: att få bestämma själv eller att komma överens med andra? Förklara hur du tänker.',
    hint: 'Ta ställning och motivera – visa gärna att du ser båda sidor.',
    keywords: [
      { label: 'Tar ställning', matches: ['viktigast', 'jag tycker', 'jag tror', 'anser'] },
      { label: 'Motiverar', matches: ['eftersom', 'därför', 'för att'] },
      { label: 'Ser båda sidor', matches: ['samtidigt', 'å andra sidan', 'men'] },
    ],
    exampleAnswer:
      'Jag tycker att det viktigaste är att komma överens med andra, eftersom ett samarbete inte fungerar om alla bara vill bestämma själva. Samtidigt är det viktigt att varje land får säga sitt och att man lyssnar på varandra, annars känns det orättvist. Den bästa lösningen är en kompromiss där alla får något.',
  },
  {
    id: 'oe11',
    topic: 'eu',
    question:
      'EU-länderna är olika när det gäller ekonomi, befolkning och politik. Varför kan dessa skillnader göra det svårt att hitta en lösning som alla accepterar?',
    keywords: [
      { label: 'Ekonomi', matches: ['ekonomi', 'rik', 'fattig', 'pengar'] },
      { label: 'Befolkning', matches: ['befolkning', 'invånare', 'stor', 'liten'] },
      { label: 'Politik', matches: ['politik', 'regering', 'parti', 'åsikt'] },
      { label: 'Olika behov', matches: ['behov', 'intresse'] },
    ],
    exampleAnswer:
      'Ett rikt land har lättare att betala för gemensamma lösningar än ett fattigare land, så de tycker olika om hur kostnader ska fördelas. Ett land med stor befolkning kan ha andra behov än ett litet land. Länderna har dessutom regeringar med olika politik och värderingar. Eftersom alla har olika behov och intressen blir det svårt att hitta en lösning som passar alla.',
  },
  {
    id: 'oe12',
    topic: 'eu',
    question:
      'Utmaning: Förklara för en person som aldrig hört talas om EU – varför finns EU och varför behöver länderna samarbeta? Skriv ungefär 5–7 meningar.',
    keywords: [
      { label: 'Fred efter kriget', matches: ['fred', 'krig'] },
      { label: 'Handel', matches: ['handel', 'handla'] },
      { label: 'Fri rörlighet', matches: ['resa', 'jobba', 'studera', 'rörlighet'] },
      { label: 'Gemensamma problem', matches: ['miljö', 'klimat', 'flykting', 'problem'] },
      { label: 'Starkare tillsammans', matches: ['tillsammans', 'starkare'] },
    ],
    exampleAnswer:
      'EU är ett samarbete mellan många länder i Europa. Det startade efter andra världskriget för att länderna skulle bevara freden och aldrig mer kriga mot varandra. Idag samarbetar länderna bland annat om handel, så att det blir enklare att köpa och sälja varor. Människor kan också resa, studera och jobba i andra EU-länder. Länderna behöver samarbeta eftersom många problem, som klimatet och flyktingkriser, går över gränserna. Tillsammans blir länderna starkare än om de var ensamma.',
  },
]

export const glossary: { term: string; definition: string }[] = [
  { term: 'Demokrati', definition: 'Folket bestämmer.' },
  { term: 'Direkt demokrati', definition: 'Folket bestämmer direkt, t.ex. genom folkomröstning.' },
  { term: 'Representativ demokrati', definition: 'Vi röstar på partier som representerar oss i riksdagen, kommunen eller regionen.' },
  { term: 'Diktatur', definition: 'En eller ett fåtal bestämmer.' },
  { term: 'Fascism', definition: 'Nationalistisk ideologi som hyllar en stark stat, ledare och parti med oinskränkt makt.' },
  { term: 'Fundamentalism', definition: 'Lagar och politik utgår från heliga böcker/texter. Skiljer inte på stat och religion.' },
  { term: 'Grundlagar', definition: 'Bestämmer hur landet styrs: regeringsformen, tryckfrihetsförordningen, yttrandefrihetsgrundlagen, successionsordningen.' },
  { term: 'Ideologi', definition: 'Idé om hur samhället ska vara.' },
  { term: 'Konservatism', definition: 'Ideologi som står för bevarande.' },
  { term: 'Liberalism', definition: 'Ideologi som står för individens frihet.' },
  { term: 'Socialism', definition: 'Kollektivet är viktigare än individen. Det gemensamma.' },
  { term: 'Regering', definition: 'De som vann valet och styr landet. Leds av statsministern.' },
  { term: 'Riksdag', definition: 'Högsta beslutande församlingen – Sveriges parlament.' },
  { term: 'Opposition', definition: 'Motståndare – partierna som inte sitter i regeringen.' },
  { term: 'Opinion', definition: 'Allmän mening, åsikter.' },
  { term: 'Opinionsundersökning', definition: 'Undersökning av vad folket tycker, t.ex. vilket parti man skulle rösta på.' },
  { term: 'Majoritet', definition: 'Flertal.' },
  { term: 'Minoritet', definition: 'Fåtal.' },
  { term: 'Mandat', definition: 'Antal platser ett parti får i riksdagen.' },
  { term: 'Monarki', definition: 'Land med kung eller drottning.' },
  { term: 'Republik', definition: 'Land med president, inte kung eller drottning.' },
  { term: 'Regeringsform', definition: 'Grundlag om hur landet ska styras.' },
  { term: 'Statschef', definition: 'Kungen i Sverige.' },
  { term: 'Statsminister', definition: 'Leder arbetet i regeringen.' },
  { term: 'Successionsordning', definition: 'Grundlagen som bestämmer tronföljden.' },
  { term: 'Valkrets', definition: 'Geografiskt område som får ett visst antal mandat. Sverige har 29.' },
]
