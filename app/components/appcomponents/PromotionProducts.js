"use client";

import React, { useEffect, useState } from "react";
import { FaChevronDown as ChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const DigitalMobiCard = () => {
  return (
    <div className="grid grid-cols-12 gap-[20px] items-center justify-normal desktop:gap-[80px] w-full h-full">
      <div className="col-span-4 mobile:col-span-12 w-full">
        <Image
          src="/digital-mobi.png"
          alt="admin-benefit-1"
          className="w-[250px] desktop:w-[300px] h-auto shrink-0 mx-auto mobile:hidden"
          width={281}
          height={221}
        />
      </div>
      <div className="col-span-8 mobile:col-span-12 flex flex-col items-start gap-[43px] w-full mobile:gap-[22px] mob_gap">
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] fs_18px">
            → UPORABA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Enostavno in uporabno za vse: izbere sliko → izbere številko v
            imeniku → pošlje drugim
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → ZA KOGA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Najbližnji pokojniku → sorodnikom in znancem (npr zahvala ali
            obvestilo o pogrebu) in obratno, vsi ostali → najbližnjim svojcem
            (npr. kartico sožalja).
          </p>
        </div>

        <Image
          src="/digital-mobi.png"
          alt="admin-benefit-1"
          className="w-[150px] h-auto shrink-0 self-center mx-auto hidden mobile:block"
          width={150}
          height={221}
        />
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] fs_18px">
            <span className="text-[#EB1D1D]">→ ZAKAJ</span> SPLOH PROMOVIRATI?
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Digitalne kartice so novost na trgu, zato se o njih govori. Ker so
            žalujočim priročne in enostavne za uporabo, jih bodo pošiljali
            naprej in vas omenjali, ker jih brezplačno podarjate. Kartice bodo
            pripeljale v vašo trgovino kliente, ki jih sicer ne bi bilo (ker pri
            vas, ki ste vključeni v naš sistem se jih dobi, v sosednji
            cvetličarni pa pač ne).
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5 fs_18px">
            <span className="text-[#EB1D1D]">→ 1 MINUTA</span> VAŠEGA ČASA
          </p>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 ml-[22px]">
            Za izpolniti so 3 polja (katera osmrtnica, katera kartica,
            uporabnikov email). Vse je avtomatizirano; uporabnik dobi kartico na
            svoj račun in jo lahko takoj pošlje naprej.
          </p>
        </div>
      </div>
    </div>
  );
};

const AdministratorCard = () => {
  return (
    <div className="grid grid-cols-12  gap-[20px] items-start mobile:items-center justify-normal mobile:justify-center desktop:gap-[80px] w-full h-full">
      <div className="col-span-4 mobile:col-span-12 w-full">
        <Image
          src="/x-7-iphone.png"
          alt="admin-benefit-1"
          className="w-[250px] desktop:w-[300px] h-auto shrink-0 mx-auto mobile:hidden"
          width={281}
          height={221}
        />
      </div>
      <div className="col-span-8 mobile:col-span-12 flex flex-col items-start justify-between gap-[43px] mobile:gap-[22px]">
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → UPORABA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Nekdo bližnji postane skrbnik spominske strani, ki jo odtlej sam
            ureja. Kot ena oseba, ki skrbi za grob. Prevzema skrb za to, kaj je
            objavljeno, piše spomine, dodaja slike,...
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → KOMU JE NAMENJENO
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Samo najbližnji pokojniku → potreben je mrliški list (ali vaše
            osebno poznanstvo)
          </p>
        </div>

        <Image
          src="/x-7-iphone.png"
          alt="admin-benefit-1"
          className="w-[150px] h-auto shrink-0 self-center mx-auto hidden mobile:block"
          width={150}
          height={221}
        />

        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5 fs_18px">
            <span className="text-[#EB1D1D]">→ ZAKAJ</span> SPLOH PROMOVIRATI?
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Spominska stran je novost na trgu, zato se o njej govori - in s tem
            tudi o vas, ki to omogočate. V vašo trgovino bo pripeljala nove
            kliente, ki jih morda ne bi bilo in ker so skrbniki spominske lahko
            samo najbližji svojci, ti običajno ne kupijo zgolj en cvet.
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5 fs_18px">
            <span className="text-[#EB1D1D]">→ 1 MINUTA</span> VAŠEGA ČASA
          </p>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 ml-[22px]">
            In vaš klient postane skrbnik spominske strani. Brezplačno dobi
            nekaj koristnega in želenega v težkih trenutkih, ki jih trenutno
            preživlja. Nekaj, kar ohranja vez s pokojnim in istočasno zbližuje
            družino in jih med seboj tesneje povezuje, ko vsi skupaj
            soustvarjajo spominsko stran. Dolgo vam bodo hvaležni.
          </p>
        </div>
      </div>
    </div>
  );
};

const QRCodeInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-[20px] items-start mobile:items-center justify-normal mobile:justify-center desktop:gap-[80px] w-full h-full">
      <div className="col-span-4 mobile:col-span-12 w-full">
        <Image
          src="/qr-code.png"
          alt="admin-benefit-1"
          className="w-[250px] desktop:w-[300px] h-auto shrink-0 mx-auto mobile:hidden"
          width={281}
          height={221}
        />
      </div>
      <div className="col-span-8 mobile:col-span-12 flex flex-col items-start justify-between gap-[43px] mobile:gap-[22px]">
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → UPORABA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px]">
            Uporabnik si prenese QR kodo spominske (ali pa mu jo pošljete vi) →
            jo odnese graverju, izdelovalcu nalepk → kodo prilepi na spomenik.
            Vsakdo, ki jo poskenira na grobu, lahko dostopa do strani, prižge
            virtualno svečko ali drugače sodeluje na spominski strani. Seveda,
            spominsko se lahko tudi skrije pod geslo in je dostopna samo
            najbližnjim.
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → ZA KOGA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px]">
            Vsem. Kode so tudi za davno preminule. → Pomeni, da je vsak, ki
            stopi v trgovino tudi potencialna stranka.
          </p>
        </div>

        <Image
          src="/qr-code.png"
          alt="admin-benefit-1"
          className="w-[251px] h-auto shrink-0 self-center mx-auto hidden mobile:block"
          width={251}
          height={221}
        />
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5 fs_18px">
            <span className="text-[#EB1D1D]">→ ZAKAJ</span> SPLOH PROMOVIRATI?
          </p>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
            QR kode na spomenikih so popolna novost na trgu in tako zanimiva in
            uporabna, da se o njej zelo govori - in s tem tudi o vas, ki to
            omogočate. Pomeni močno reklamo najboljše vrste za cvetličarne, ki
            bodo to znale izkoristiti; pravi viralni marketing. Razumljivo je,
            da čez pol leta učinek reklamiranja tega produkta strankam, ne bo
            enak temu v oktobru. Splača se biti med prvimi.
            <br />
            Uporabnik hkrati postane skrbnik spominske strani. Brezplačno dobi
            nekaj koristnega in želenega v težkih trenutkih, ki jih trenutno
            preživlja. Nekaj, kar ohranja vez s pokojnim in istočasno zbližuje
            družino in jih med seboj tesneje povezuje, ko vsi skupaj
            soustvarjajo spominsko stran. Dolgo vam bodo hvaležni.
          </p>
        </div>
      </div>
    </div>
  );
};

const PublishingObituaries = () => {
  return (
    <div className="grid grid-cols-12 gap-[20px] items-start mobile:items-center justify-normal mobile:justify-center desktop:gap-[80px] w-full h-full">
      <div className="col-span-4 mobile:col-span-12 w-full">
        <Image
          src="/prva-c.png"
          alt="admin-benefit-1"
          className="w-[250px] desktop:w-[300px] h-auto shrink-0 mx-auto mobile:hidden"
          width={281}
          height={221}
        />
      </div>
      <div className="col-span-8 mobile:col-span-12 flex flex-col items-start justify-between gap-[43px] mobile:gap-[22px]">
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → UPORABA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Omogoči objavo na strani osmrtnic + objavo pogreba + izdelavo
            spominske strani + izdelavo digitalnih kartic + QR kod. Vse
            brezplačno za uporabnika.
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 fs_18px">
            → ZA KOGA
          </p>
          <p className="text-[16px] font-[400] text-[#3C3E41] leading-[27px] ml-[22px]">
            Najbližnji pokojniku (potrebno je priložiti mrliški list)
          </p>
        </div>
        <Image
          src="/prva-c.png"
          alt="admin-benefit-1"
          className="w-[150px] h-auto shrink-0 self-center mx-auto hidden mobile:block"
          width={150}
          height={221}
        />
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5 fs_18px">
            <span className="text-[#EB1D1D]">→ ZAKAJ</span> SPLOH PROMOVIRATI?
          </p>
          <p className="desktop:text-[18px] tablet:text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 ml-[22px]">
            Mnogi žalujoči čutijo dolžnost objaviti osmrtnico v različnih
            medijih, tudi tiskanih in radiu in v številnih občinah pogrebna
            podjetja zamujajo pri objavah oziroma jih izvajajo šele, ko je znan
            čas pogreba. Ni treba, da je tako. Osmrtnica se lahko objavi takoj
            in dan/čas pogreba se lahko doda tudi naknadno - in ta njihov
            problem lahko rešite vi; z objavo osmrtnice in/ali objavo samo
            pogreba. Hvaležni vam bodo. Cvetličarna, ki objavi osmrtnico je
            vedno uvrščena na prvo mesto in je poudarjena na strani osmrtnice,
            obenem pa pridobi v cvetličarno bližnjega pokojniku, ki običajno ne
            kupi samo en cvet. Splača se promovirati to korist za uporabnike.
          </p>
        </div>
        <div>
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5 fs_18px">
            <span className="text-[#EB1D1D]">→ 2 MINUTI</span> VAŠEGA ČASA
          </p>
        </div>
      </div>
    </div>
  );
};

const UniqueFeature = () => {
  return (
    <>
      <div className="text-center space-y-[80px] px-[10px] desktop:px-[100px] web_faq_data"> 
        <div className="space-y-4">
          <p className="text-[20px] font-[400] text-[#3090D5] leading-normal mb-2">
            DIGITALNI PRODUKTI
          </p>
          <h4 className="desktop:text-[40px] tablet:text-[36px] mobile:text-[24px] font-[400] text-[#3C3E41] mobile:leading-[28px] leading-[48px]">
            Edinstvena priložnost za <span className="font-[800]">močno</span>{" "}
            promocijo
          </h4>
          <p className="text-[24px] mobile:text-[18px] font-[700] text-[#3C3E41] leading-[48px] flex flex-col gap-1.5">
            cvetličarne, ki je ne omogoča nobena druga rešitev
          </p>
          <p className="text-[18px] mobile:text-[16px] font-[400] text-[#3C3E41] leading-[27px] mobile:leading-[24px] flex flex-col gap-1.5">
            Izkoristite to zelo učinkovito orodje za vašo promocijo!
          </p>
        </div>

        <div className="space-y-8 text-left">
          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
            Biti na seznamu cvetličarn, ko uporabniki prav to storitev iščejo ali
            imeti predstavitveno stran, <br /> ki vodi obiskovalce na vaše strani,
            je dobrodošlo in koristno. Lahko pa je bistveno več od tega.
          </p>

          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
            Samo naše rešitve omogočajo
            <ul className="list-disc marker:text-[#EB1D1D] ml-4">
              <li>
                najboljšo možno promocijo od ust do ust, ki je hkrati najcenejša.
              </li>
              <li>
                ustvarja ‘wow’ učinek, preseneti, osupne, ostane v spominu,
                postane tema pogovorov,
              </li>
              <li>
                omogoča obuditev zbledelih spominov, za kar vam bodo mnogi ostali
                dolgo iskreno hvaležni,{" "}
              </li>
              <li>
                in tesnejše povezovanje generacij in rodbin med seboj, kar je
                neprecenljivo.
              </li>
              <li>
                ustvarja veliko konkurenčno prednost v primerjavi s cvetličarno,
                ki ni vključena v naš sistem.
              </li>
            </ul>
          </p>

          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
            To so prave koristi za podjetje. Ponuja en kup orodij za privabljanje
            novih klientov in poglabljanje vezi z obstoječimi; daje možnost biti
            na pravem mestu, ko vas stranke potrebujejo. Prinaša tisto, kar drugi
            ne → rešitev.
          </p>

          <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
            Vsako darilo, ki ga boste podarili strankam šteje, je koristno,
            prinaša podjetju veliko več, kot tista minuta, ki je za to potrebna.
            Je uporabno orodje, most, ki zbližuje vaše podjetje in potrošnike.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="desktop:text-[40px] tablet:text-[34px] mobile:text-[24px] font-[400] text-[#3C3E41] mobile:leading-[28px] leading-[48px]">
            Zdaj na začetku je pravi trenutek in učinek največji
          </h4>
          <p className="text-[24px] mobile:text-[18px] font-[700] text-[#3C3E41] leading-[48px] flex flex-col gap-1.5">
            in hkrati priložnost za izkoriščenje vseh dodatnih ugodnosti
          </p>
          <p className="text-[18px] mobile:text-[16px] font-[400] text-[#3C3E41] leading-[27px] mobile:leading-[24px] flex items-center justify-center gap-1.5">
            ki jih omogoča otvoritvena akcija. Oglejte si jih{" "}
            <span className="underline text-[#3090D5]">
              <Link href="/c-priloznost">tukaj</Link>
            </span>
            .
          </p>
        </div>

        <p className="text-[16px] mobile:text-[14px] leading-[27px] mobile:leading-[24px] font-[400] text-[#3C3E41]">
          V primeru, da se konec oktobra ne odločite za nadaljevanje, se dostop do
          vaše strani prekine in enako privilegiji, vaša cvetličarna pa vseeno
          ostane brezplačno na listi lokalnih cvetličarn, vendar brez kontaktnih
          informacij. 
        </p>
      </div>

      {/* mobile */}
      <div className="text-center space-y-[80px] px-[10px] desktop:px-[100px] mob_faq_data">  
        <div className="max_width_337px">
          <div className="space-y-4">
            <p className="text-[20px] font-[400] text-[#3090D5] leading-normal pb_6px fs_14px max_w_324px">
              DIGITALNI PRODUKTI
            </p>
            <h4 className="desktop:text-[40px] tablet:text-[36px] mobile:text-[24px] font-[400] text-[#3C3E41] mobile:leading-[28px] leading-[48px] mb_23px mt_0px">
              Edinstvena priložnost za <span className="font-[700]">močno</span>{" "}
              promocijo cvetličarne
            </h4> 
            <p className="text-[18px] mobile:text-[16px] font-[400] text-[#3C3E41] leading-[27px] mobile:leading-[24px] flex flex-col gap-1.5 mt_0">
              ki je ne omogoča nobena druga rešitev
            </p>
          </div>

          <div className="space-y-8 text-left pt_64px">
            <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
              Biti na seznamu cvetličarn, ko uporabniki prav to storitev iščejo ali imeti predstavitveno stran, ki vodi obiskovalce na vaše strani, je dobrodošlo in koristno. Lahko pa je bistveno več od tega. 
            </p>

            <div className="detail_list">  
              <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5">
                Samo naše rešitve omogočajo 
              </p>
                <ul className="list-disc marker:text-[#EB1D1D] ml-4">
                  <li>
                    najboljšo možno promocijo od ust do ust, ki je hkrati najcenejša.
                  </li>
                  <li>
                    ustvarja ‘wow’ učinek, preseneti, osupne, ostane v spominu, postane tema pogovorov,
                  </li>
                  <li>
                    omogoča obuditev zbledelih spominov, za kar vam bodo mnogi ostali dolgo iskreno hvaležni,
                  </li>
                  <li>
                    in omogoča tesnejše povezovanje generacij in rodbin med seboj, kar je neprecenljivo.
                  </li>
                  <li>
                    ustvarja veliko konkurenčno prednost v primerjavi s cvetličarno, ki ni vključena v naš sistem.
                  </li>
                </ul> 
            </div>

            <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[24px] flex flex-col gap-1.5">
              To so prave koristi za podjetje. Ponuja en kup orodij za privabljanje novih klientov in poglabljanje vezi z obstoječimi; daje možnost biti na pravem mestu, ko vas stranke potrebujejo. Prinaša tisto, kar drugi ne → rešitev. 
            </p>

            <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[24px] flex flex-col gap-1.5">
              Vsako darilo, ki ga boste podarili strankam šteje, je koristno, prinaša podjetju več, kot tista minuta, ki je za to potrebna. Je uporabno orodje, most, ki zbližuje vaše podjetje in potrošnike.
            </p>
          </div>

          <div className="mt_93px">
            <h4 className="mobile:text-[24px] font-[400] text-[#3C3E41] mobile:leading-[28px]">
              Zdaj na začetku je pravi trenutek in učinek največji
            </h4>
            
            <p className="mobile:text-[16px] font-[400] text-[#3C3E41] leading-[24px] mobile:leading-[18px] flex items-center justify-center gap-1.5 mt_20px">
              in hkrati priložnost za vse dodatne ugodnosti, ki jih omogoča otvoritvena akcija (tukaj)
            </p>
          </div>

        </div>

        <p className="text-[16px] mobile:text-[14px] leading-[27px] mobile:leading-[24px] font-[400] text-[#3C3E41] mt_60px letter_spacing">
          V primeru, da se konec oktobra ne odločite za nadaljnje sodelovanje, se dostop do vaše strani prekine in enako privilegiji, vaša cvetličarna pa vseeno ostane brezplačno na listi lokalnih, vendar brez kontaktnih informacij. 
        </p>
        <p className="vodo_mobile_end">
          Izgubiti ne morete, če se pridružite, pa četudi samo za en mesec.
        </p>
      </div>
      {/* mobile */}
    </>
    
    

    
  );
};

const data = {
  products: [
    {
      question: "Digitalne mobi kartice",
      answer: <DigitalMobiCard />
    },
    {
      question: "Skrbnik",
      answer: <AdministratorCard />
    },
    {
      question: "QR kode za nagrobnike",
      answer: <QRCodeInfo />
    },
    {
      question: "Objavljanje osmrtnic",
      answer: <PublishingObituaries />
    },
    {
      question: "Edinstvena priložnost",
      answer: <UniqueFeature />
    }
  ]
};

function PromotionProducts() {
  const [visibleIndexes, setVisibleIndexes] = useState({
    0: true
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const customProducts = data?.products || [];

    if (customProducts.length > 0) {
      setProducts(customProducts);
    }
  }, [data]);

  return (
    <div
      className={`overflow-hidden relative flex items-center w-full mx-auto`}
    >
      <div className="h-full mx-auto w-full flex flex-col items-start tablet:items-center mobile:items-center">
        {products && products.length > 0
          ? products.map((product, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() =>
                    setVisibleIndexes((prev) => ({
                      ...prev,
                      [index]: !prev[index]
                    }))
                  }
                  className={`flex w-full justify-between items-center tablet:h-[58px] desktop:h-[78px] mobile:px-0`}
                >
                  <div
                    className={`flex font-variation-customOpt16 font-normal text-[18px] leading-6 text-[#1E2125] text-center 
                    `}
                  >
                    <h3 className="text-[20px] desktop:text-[24px] font-[700] text-[#3C3E41] leading-[48px]">
                      {products.length - 1 !== index && (
                        <span className="text-[#EB1D1D] mr-2">
                          {index + 4}.{" "}
                        </span>
                      )}
                      {product.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className="tablet:size-5 desktop:size-6"
                    color={visibleIndexes[index] ? "#EB1D1D" : "#3C3E41"}
                  />
                </button>
                {visibleIndexes[index] && (
                  <div className="py-12 mobile:py-6 w-full mobile_padding">{product?.answer}</div>
                )}
              </React.Fragment>
            ))
          : null}
      </div>
    </div>
  );
}

export default PromotionProducts;
