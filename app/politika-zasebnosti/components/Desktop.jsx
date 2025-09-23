"use client";

import React from "react";

export const Desktop = () => {
    return (
        <main className="">
            <div>
                <h1 className="font-medium text-[24px] leading-[27px] tracking-[0] mb-[25px]">Politika zasebnosti</h1>

                <div className="flex flex-col gap-y-8 text-[16px] leading-[27px] font-light">
                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">1. Uvodne določbe</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Ta politika zasebnosti opisuje, kako družba Aleja 8, Saša Dolinšek s.p., Trg svobode 32, 1420 Trbovlje kot upravljavec osebnih podatkov obdeluje osebne podatke uporabnikov v zvezi z uporabo spletne strani{" "}
                        </p>
                        <p>www.osmrtnica.com.</p>
                        <p>
                            Politika zasebnosti velja za vse uporabnike Spletne strani, ne glede na to, ali dostopajo kot registrirani uporabniki ali kot obiskovalci.</p>
                        <p >Politika je skladna z GDPR in Zakonom o varstvu osebnih podatkov.</p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">2. Vrste osebnih podatkov</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">Upravljavec zbira in obdeluje naslednje osebne podatke:</p>
                        <ul className="list-disc marker:textgray-400 pl-5">
                            <li>
                                podatki ob registraciji: ime, priimek, e-naslov, geslo, podatki podjetja (če gre za poslovni račun),
                            </li>
                            <li>
                                podatki, ki jih uporabniki vnesejo ob objavi vsebin (osmrtnice, sožalja, žalne knjige, virtualne svečke, sožalja, zgodbe, fotografije in druge vsebine na spominski strani),
                            </li>
                            <li>
                                podatki o pokojnikih (ime, priimek, datum rojstva in smrti, fotografija, biografski zapisi),
                            </li>
                            <li>
                                podatki o uporabi spletne strani (IP-naslovi, podatki o napravah, brskalnikih, datum in ura dostopa, zgodovina iskanja znotraj strani).
                            </li>
                            <li>
                                podatki podjetij (ime podjetja, naziv cvetličarne ali pogrebne enote, elektronski naslov, naslov, sedež)
                            </li>
                        </ul>
                    </section>

                    <section className="">
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">3. Namen obdelave</h2>
                        <ul className="list-disc marker:textgray-400 pl-5">
                            <li>
                                zagotavljanje storitev Spletne strani (objava osmrtnic, sožalij, vpisov na spominske strani, na sezname podjetij),
                            </li>
                            <li>upravljanje registracije in uporabniških računov,</li>
                            <li>
                                omogočanje registracije podjetjem (cvetličarne, pogrebna podjetja) za objavo svojih vsebin in ponudb,
                            </li>
                            <li>omogočanje objave in upravljanja oglaševalskih vsebin</li>
                            <li>omogočanje prikazovanja lokalnih vsebin</li>
                            <li>
                                obveščanje uporabnikov o novostih in spremembah v zvezi s storitvami,
                            </li>
                            <li>
                                zagotavljanje varnosti Spletne strani, preprečevanja zlorab in odkrivanja nepooblaščenih dostopov,
                            </li>
                            <li>izpolnjevanja zakonskih obveznosti upravljavca.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">4. Pravna podlaga</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">Pravna podlaga za obdelavo osebnih podatkov temelji na:</p>
                        <ul className="list-disc marker:textgray-400 pl-5">
                            <li>privolitvi posameznika (ob registraciji in uporabi določenih storitev),</li>
                            <li>
                                pogodbenem razmerju med uporabnikom in upravljavcem (npr. ob sklenitvi naročnine ali objavi osmrtnice),
                            </li>
                            <li>
                                zakonitem interesu upravljavca (zagotavljanje varnosti, preprečevanje zlorab, izboljšanje uporabniške izkušnje),
                            </li>
                            <li>izpolnjevanju zakonskih obveznosti, ki veljajo za upravljavca.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] ">5. Hramba osebnih podatkov</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Osebni podatki se hranijo toliko časa, kolikor je nujno potrebno za dosego namenov, zaradi katerih so bili zbrani
                        </p>
                        <ul className="list-disc marker:textgray-400 pl-5">
                            <li>
                                Osebni podatki se hranijo toliko časa, kolikor je nujno potrebno za dosego namenov, zaradi katerih so bili zbrani
                            </li>
                            <li>
                                Podatki, ki jih vnesejo uporabniki ob objavi osmrtnic, sožalij, zapisov v žalnih knjigah in podobnih vsebin, se hranijo trajno, saj so namenjeni javni objavi in ohranjanju spomina.
                            </li>
                            <li>
                                Podatki, zbrani na podlagi privolitve, se hranijo do preklica privolitve.
                                <ul className="">
                                    <li>- osebni podatki ob registraciji: do izbrisa računa,</li>
                                    <li>- spominske vsebine: trajno, razen če se zahteva izbris,</li>
                                    <li>- tehnični podatki: razumno obdobje za zagotavljanje varnosti.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] ">6. Pravice uporabnikov</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">Uporabniki imajo pravico:</p>
                        <ul className="list-disc marker:textgray-400 pl-5">
                            <li>dostopati do svojih osebnih podatkov,</li>
                            <li>zahtevati popravek netočnih ali nepopolnih podatkov,</li>
                            <li>zahtevati omejitev obdelave,</li>
                            <li>zahtevati izbris osebnih podatkov (razen kadar hramba temelji na zakonu),</li>
                            <li>
                                vložiti ugovor zoper obdelavo podatkov, kadar se obdelava izvaja na podlagi zakonitega interesa,
                            </li>
                            <li>prenesti osebne podatke k drugemu upravljavcu.</li>
                        </ul>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Uporabniki lahko svoje pravice uveljavljajo s pisno zahtevo na elektronski naslov upravljavca.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">7. Posredovanje osebnih podatkov tretjim osebam</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljavec osebnih podatkov ne posreduje tretjim osebam, razen če to zahtevajo veljavna zakonodaja, sodne odločbe ali če je to nujno za izvajanje storitev (npr. ponudnikom gostovanja strežnikov, vzdrževanja informacijskih sistemov, pravnim ali računovodskim svetovalcem). Vsi pogodbeni obdelovalci osebnih podatkov so zavezani k spoštovanju veljavne zakonodaje o varstvu podatkov in te Politike zasebnosti.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">8. Uporaba piškotkov in podobnih tehnologij</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Spletna stran uporablja piškotke za izboljšanje uporabniške izkušnje, delovanje spletne strani, analizo prometa in zagotavljanje varnosti. Uporabniki so ob prvem obisku obveščeni o uporabi piškotkov in lahko sami odločijo, katere kategorije piškotkov dovolijo. Podrobne informacije o piškotkih so dostopne v posebnem dokumentu »Politika piškotkov«.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">9. Uporaba storitve bunny.net</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Za delovanje in optimizacijo naše spletne strani uporabljamo storitve ponudnika bunny.net (BunnyWay, informacijske storitve d.o.o., Dunajska cesta 165, 1000 Ljubljana, Slovenija).
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0] mb-6">bunny.net deluje kot pogodbeni obdelovalec podatkov v skladu z 28. členom GDPR.</p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">Pri uporabi njihovih storitev se lahko obdelujejo naslednji osebni podatki:</p>
                        <ul className="list-disc marker:textgray-400 pl-5 mb-6">
                            <li>IP naslovi in podatki o povezavi,</li>
                            <li>informacije o uporabnikovem brskalniku (User-Agent),</li>
                            <li>URL naslov strani, s katere je uporabnik prišel (referrer),</li>
                            <li>tehnični podatki potrebni za dostavo in varnost vsebine.</li>
                        </ul>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0] ">
                            Obdelava se izvaja izključno za namen zagotavljanja varnega in hitrega delovanja spletne strani, preprečevanja zlorab, ter optimizacije dostave vsebin.
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0] ">
                            Z bunny.net imamo sklenjen Data Processing Agreement (DPA), ki zagotavlja varovanje osebnih podatkov v skladu z zahtevami GDPR. Več o obdelavi podatkov pri bunny.net si lahko preberete tukaj:
                        </p>
                        <a href="https://bunny.net/gdpr/" className="underline underline-offset-4">https://bunny.net/gdpr/</a>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">10. Javnost vsebin</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Uporabniki se morajo zavedati, da so vse vsebine, ki jih vnesejo na spletno stran (osmrtnice, spominske strani, sožalja, zapisi v žalnih knjigah, prižgane svečke ipd.), javno dostopne vsem obiskovalcem.
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljavec ne more zagotoviti, da tretje osebe teh podatkov ne bodo shranjevale, delile ali uporabljale na način, na katerega nima vpliva.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">11. Spremembe Politike zasebnosti</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljavec si pridržuje pravico, da Politiko zasebnosti kadarkoli spremeni ali dopolni. Vse spremembe začnejo veljati z dnem objave na spletni strani. Nadaljnja uporaba spletne strani po objavi sprememb pomeni, da uporabnik s spremembami soglaša.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">12. Moderiranje in pravica do izbrisa vsebin</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Ker so objavljene vsebine javnega značaja, upravljavec skrbi za dostojanstvo in spoštljivost. Upravljavec lahko brez predhodnega obvestila izbriše vsebine, ki so žaljive, politične, komercialne, sovražne ali na kakršen koli način neprimerne.
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Na zahtevo svojcev ima upravljavec pravico izbrisati sporne vsebine ali celotno spominsko stran.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">13. Obdelava podatkov za namen varnosti</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Poleg podatkov, ki jih vnesejo uporabniki, upravljavec obdeluje tudi tehnične podatke (IP naslove, dnevnike dostopov, podatke o napravah) z namenom preprečevanja zlorab, zaščite pred vdori in zagotavljanja varnega delovanja spletne strani. Ti podatki se hranijo toliko časa, kot je nujno potrebno za odkrivanje varnostnih incidentov.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">14. Posebne določbe glede podatkov o pokojnih oseb</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Podatki in vsebine, ki se nanašajo na pokojne osebe (ime, priimek, datum rojstva in smrti, fotografije, biografski zapisi), se obdelujejo na podlagi vnosa uporabnikov in se objavljajo z namenom obveščanja in ohranjanja spomina.
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljavec ne preverja točnosti ali avtentičnosti podatkov, si pa pridržuje pravico, da ob prejemu pritožbe takšne podatke odstrani.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">15. Pravica do pozabe in omejitve obdelave</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Posamezniki lahko zahtevajo izbris osebnih podatkov, razen kadar to ni skladno z zakonodajo ali kadar prevlada javni interes (npr. ohranjanje zgodovinskega spomina).
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Pri podatkih o pokojnih osebah si upravljavec pridržuje pravico presojati med javnim interesom in pravicami svojcev.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">16. Odgovornost uporabnikov za podatke tretjih oseb</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Če uporabnik vnese osebne podatke tretjih oseb (npr. svojcev, podpisnikov sožalij), je sam odgovoren, da ima za to ustrezno pravno podlago oziroma privolitev.
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljavec ne odgovarja za primere, ko uporabnik vnese podatke brez soglasja, vendar si pridržuje pravico odstraniti takšne podatke na zahtevo posameznika.
                        </p>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljalec si pridržuje pravico, da občasno sam objavi osmrtnice, pri čemer se poslužuje javnih virov.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-medium text-[16px] leading-[27px] tracking-[0] mb-[5px]">17. Izključitev odgovornosti</h2>
                        <p className="font-light text-[16px] leading-[27px] tracking-[0]">
                            Upravljavec ne odgovarja za škodo, ki bi uporabniku nastala zaradi vnosa napačnih, nepopolnih ali neažurnih podatkov ob registraciji oziroma uporabi spletne strani.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

