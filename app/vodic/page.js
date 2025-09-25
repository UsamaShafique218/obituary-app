import Image from "next/image";

import { FAQHeader } from "@/app/components/appcomponents/Header";
import { FrequentlyAskedQuestionView2 } from "../components/appcomponents/FrequentlyAskedQuestionView";
import PromotionProducts from "../components/appcomponents/PromotionProducts";
import { FooterForFaq2 } from "../components/appcomponents/Footer";
import Link from "next/link";

import "./vodic.css";
import "./vodic-responsive.css"; 

import CommonFooter from "../components/appcomponents/CommonFooter";


function DriverPage() {
  const faqData = {
    faqs: [
      {
        question: "V enem stavku - kako dodam cvetličarno med lokalne?",
        answer: `Registriraj se → na strani Moj Račun klikni Dodaj cvetličarno → izpolni obrazec. Cvetličarna bo dodana takoj.`
      },
      {
        question:
          "Ne želim svoje strani, digitalnih produktov, samo vpis med lokalne",
        answer: `Seveda, niste edini. Stran ni potrebno izdelati/objaviti in digitalnih produktov ni potrebno omenjati.     `
      },
      {
        question: "Smo cvetličarna. Zakaj bi mi dodajali osmrtnice?",
        answer: `To je zgolj ena od možnosti, ki jih ponujamo cvetličarnam. Mnoge tega ne potrebujejo in se za to možnost ne bodo odločile.      `
      },
      {
        question: "Zanima me samo brezplačno.",
        answer:
          "Sredi oktobra vas bomo pozvali k sklenitvi naročnine in če se za to ne odločite, potem enostavo počakajte in konec oktobra bodo preostali privilegiji umaknjeni, vaša cvetličarna pa bo še naprej ostala brezplačno na listi lokalnih cvetličarn, a brez kontaktnih informacij in pojavljala se bo na spodnjem delu.      "
      },
      {
        question: "Kakšna bo cena po koncu promocije?",
        answer: `10€ mesečno za manjše kraje
                20€ mesečno za občine nad 20.000 prebivalcev
                30€ mesečno v Ljubljani
                V primeru letnega plačila se obračuna samo deset mesecev, zadnja dva meseca sta brezplačno. V primeru prekinitve pogodbe, vrnemo vnaprej plačane mesece nazaj.   `
      }
    ]
  };

  return (
    <div className="bg-[#F9EBD4] tablet:bg-[#F9EBD4] mobile:bg-[#F9EBD4] min-h-[100vh] vodic-mobile-wrapper">
      <FAQHeader />
      <div className="flex w-full flex-col  bg-[#D4E6F9]">
        <div className="bg-[#E0E9F3CC] h-[72px] tablet:h-[80px] desktop:h-[92.02px] desktop:-mt-10 tablet:-mt-3 mobile:-mt-2.5" />

            <div className="mobile_navbar">
              <div className="mobile_navbar_inner">
                <ul>
                  <li>
                    <a href="/c-faq">
                      CVETLIČARNE
                    </a>
                  </li>
                  <li>
                    <a href="/c-info">
                    POGREBNA PODJETJA
                    </a>
                  </li> 
                </ul>
              </div>
              
            </div>
          <div className="mobile:flex items-center justify-between hidden h-[30px] bg-[#36556C] px-3 d-none">
            <Link href="/c-faq">KAKO ZAČETI</Link>
            <Link href="/c-info">CENIK</Link>
            <Link href="/c-priloznost">PRILOŽNOST</Link>
          </div>

        {/* Hero section */}
        <div className="relative bg-[#E0E9F3CC] desktop:min-h-[485px] tablet:min-h-[400px] mobile:min-h-[400px] py-[30px] mobile:py-[20px] tablet:py-[25px] mob-hero-section">
          <div className="relative max-w-[1200px] w-full flex mx-auto justify-center items-center mob-hero-section-inner">
            <div className="relative desktop:max-w-[1400px] desktop:px-[30px] tablet:px-[10px] mobile:px-0 desktop:w-full tablet:w-full mx-auto flex flex-col items-center">
              <div className="relative w-full flex flex-col items-center gap-[30px] mobile:gap-[20px] tablet:gap-[25px]">
                <div
                  className="text-center desktop:w-[1000px] tablet:w-full mobile:w-full desktop:flex-shrink-0 tablet:mx-auto mobile:mx-auto desktop:mt-[98.84px] 
                    tablet:mt-[40px] mobile:mt-[20px] flex flex-col mobile:items-center tablet:items-center desktop:px-0 tablet:px-[10px] mobile:px-[15px] mt-40px"
                >
                  <h1 className="text-[#3C3E41] text-[40px] desktop:whitespace-nowrap mobile:text-[28px] tablet:text-[32px] mobile:text-center tablet:text-center leading-[48px] mobile:leading-[34px] tablet:leading-[38px] mobile:font-variation-customOpt28 font-variation-customOpt40 banner_heading">
                    Preprosti vodič
                  </h1>

                  <p className="text-[24px] mobile:text-[20px] tablet:text-[22px] mobile:text-center tablet:text-center mobile:leading-[28px] tablet:leading-[30px] leading-[48px] mobile:mt-[12px] tablet:mt-[15px] mt-[5px] font-bold mobile:font-variation-customOpt24 font-variation-customOpt24 text-[#3C3E41] line_height_32px mt-0">
                    za cvetličarne
                  </p>

                  <p className="mt-[16px] mobile:mt-[12px] tablet:mt-[15px] text-[#3C3E41] tablet:text-center mobile:text-center text-[18px] mobile:text-[16px] tablet:text-[17px] leading-[27px] mobile:leading-[24px] tablet:leading-[25px] font-variation-customOpt18 tab_web_text">
                    Vse našteto je brezplačno in traja{" "}
                    <br className="hidden mobile:block" /> do konca oktobra.
                    <br className="block mobile:hidden" />
                    Najkasneje do takrat <br className="hidden mobile:block" />{" "}
                    se vaši privilegiji bodisi avtomatsko ukinejo{" "}
                    <br className="hidden mobile:block" /> ali pa se sklene
                    naročnina.
                  </p>
                  <div className="banner_text">
                    <p className="mobile_text banner_mobile_text">
                      Vse spodaj našteto je brezplačno in traja do konca oktobra. Najkasneje do takrat se vaši privilegiji bodisi avtomatsko ukinejo ali pa se sklene naročnina.
                    </p>
                    <p className="mobile_text banner_mobile_text">
                      Prvi naročniki (to je ti, ki se odločajo že zdaj v prvem valu) imajo precej dodatnih ugodnosti in konkurenčnih prednosti v primerjavi s kasneje pridruženimi 
                      (in privilegije lahko bolje izkoristijo že na začetku, ko so bolj oglaševalsko odmevni).
                    </p>
                  </div>
                  

                  <p className="mt-[28px] mobile:mt-[16px] tablet:mt-[20px] text-[#3C3E41] tablet:text-center mobile:text-center text-[18px] mobile:text-[16px] tablet:text-[16px] leading-[27px] mobile:leading-[24px] tablet:leading-[25px] font-variation-customOpt18 mb-[20px] mobile:mb-[15px] tablet:mb-[18px] tab_web_text">
                    Prvi naročniki (to je ti, ki se odločajo že{" "}
                    <br className="hidden mobile:block" /> zdaj v prvem valu){" "}
                    <br className="hidden tablet:block mobile:hidden" /> imajo
                    cel kup dodatnih <br className="hidden mobile:block" />{" "}
                    ugodnosti in konkurenčnih prednosti{" "}
                    <br className="block tablet:hidden mobile:hidden" /> v{" "}
                    <br className="hidden mobile:block" />
                    primerjavi s kasneje pridruženimi{" "}
                    <br className="hidden mobile:block" />
                    <br className="hidden tablet:block mobile:hidden" /> (in
                    privilegije lahko bolje izkoristijo že na{" "}
                    <br className="hidden mobile:block" /> začetku, ko so
                    najbolj oglaševalsko odmevni).
                  </p> 
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30px] mobile:h-[20px] tablet:h-[25px] bg-transparent w-full tab_web_text" />
        </div>

        {/* List of local florists */}
        <div className="bg-[#F1EEE7] mobile_local_florists_wrapper">
          <div className="relative max-w-[1029px] tablet:max-w-[740px] py-[125px] tablet:py-[95px] mobile:py-[60px] px-[10px] mobile:px-1.5 w-full mx-auto pt-0px pb-0px mobile_local_florists_wrapper_inner">
            <div className="space-y-4">
              <h1 className="text-left desktop:text-[32px] flex desktop:flex-row flex-col desktop:items-start items-center gap-x-2 font-[400] text-[#3C3E41] desktop:leading-[32px] text-[28px] leading-[40px]">
                <span className="block mobile:text-center tab_web_text">
                  Vpis na seznam lokalnih cvetličarn{" "}
                </span>
                <span className="block mobile:text-center mobile_text fs_24px line_height_26px">
                  Vpis med lokalne cvetličarne
                </span>
                <span className="text-left text-[20px] font-[400] leading-[32px] desktop:text-[28px] mobile:leading-[40px] block fs_18px">
                  (predviden čas:{" "}
                  <span className="text-[#EB1D1D]">1 minuta</span>)
                </span> 
              </h1>
              <p className="hidden desktop:flex desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] gap-1.5">
                Najprej registrirajte svoje podjetje
                <span>
                  <Link href="/registracija">(tukaj)</Link>
                </span>
                .
              </p>
            </div>

            <div className="flex gap-[70px] desktop:gap-[100px] items-center">
              <div className="space-y-[70px] tablet:space-y-[60px] mobile:space-y-[60px] mt-[100px] tablet:mt-[55px] mobile:mt-[55px] mt_33px">
                <div className="flex gap-[70px] items-center w-full">
                  <div className="space-y-[10px]">
                    <h3 className="text-[20px] desktop:text-[24px] font-[700] text-[#3C3E41] leading-[48px] tab_web_text">
                      <span className="text-[#EB1D1D]">1.</span> Vpis na seznam
                      lokalnih cvetličarn usama
                    </h3>

                    <h3 className="text-[20px] desktop:text-[24px] font-[700] text-[#3C3E41] leading-[48px] mobile_text fs_18px line_height_32px fw_600 mt-0">
                      <span className="text-[#EB1D1D]">1.</span> Vpis na seznam
                    </h3>

                    <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 tab_web_text">
                      {/* Desktop */}
                      <span className="hidden desktop:block">
                        Na strani Moj račun lahko že takoj dodate svojo
                        cvetličarno in na seznamu lokalnih cvetličarn bo
                        objavljena takoj{" "}
                        <Link href="/cvetlicarne?city=Ljubljana">(tukaj)</Link>
                      </span>
                      <span className="hidden desktop:block">
                        Če imate več cvetličarn, dodate vsako posebej. Prikazane
                        bodo vsaka posebej. Enako, če želite oglaševati svoje
                        storitve v več občinah.
                      </span>

                      {/* Tablet */}
                      <span className="hidden tablet:block">
                        Najprej registrirajte svoje podjetje{" "}
                        <Link href="/registracija">(tukaj)</Link>. Na strani Moj
                        račun lahko že takoj dodate svojo cvetličarno in na
                        seznamu lokalnih cvetličarn bo objavljena takoj{" "}
                        <Link href="/cvetlicarne?city=Ljubljana">(tukaj)</Link>
                      </span>
                      <span className="hidden tablet:block">
                        Če imate več cvetličarn, dodate vsako posebej. Prikazane
                        bodo vsaka posebej. Enako, če želite oglaševati v več
                        občinah.
                      </span>

                      {/* Mobile */}
                      <span className="hidden mobile:block">
                        Registriraj se <Link href="/registracija">(tukaj)</Link>{" "}
                        in takoj lahko na strani Moj{" "}
                        <br className="hidden mobile:block" /> račun dodaš svojo
                        cvetličarno in na seznamu{" "}
                        <br className="hidden mobile:block" /> lokalnih bo
                        objavljena takoj{" "}
                        <Link href="/cvetlicarne?city=Ljubljana">(tukaj)</Link>.
                      </span>
                      <span className="hidden mobile:block">
                        Če imate več cvetličarn, dodate vsako posebej.{" "}
                        <br className="hidden mobile:block" /> Prikazane bodo
                        vsaka posebej. Enako, če želite{" "}
                        <br className="hidden mobile:block" /> oglaševati v več
                        občinah.
                      </span>
                    </p>


                    <div className="mobile_local_florists_text mt_10px">
                      <p className="mobile_text">
                        Registriraj se (tukaj) in takoj lahko na strani Moj račun dodaš svojo cvetličarno in na seznamu lokalnih bo objavljena takoj (tukaj).
                      </p>
                      <p className="mobile_text">
                        Če imate več cvetličarn, dodate vsako posebej. Prikazane bodo vsaka posebej. Enako, če želite oglaševati v več občinah. 
                      </p>
                    </div>

                    
                  </div>
                  <Image
                    src="/seznam-c.png"
                    alt="admin-benefit-1"
                    className="w-[180px] shrink-0 desktop:hidden tablet:block mobile:hidden"
                    width={281}
                    height={221}
                  />
                </div>
                <div className="space-y-[10px] mt_10px">
                  <h3 className="text-[20px] desktop:text-[24px] font-[700] text-[#3C3E41] leading-[48px] fs_18px line_height_32px fw_600 mt-0 letter_spacing_3px">
                    <span className="text-[#EB1D1D]">2.</span> Vaša cvetličarna na lokalnih osmrtnicah
                  </h3>
                  <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 tab_web_text">
                    {/* Desktop */}
                    <span className="hidden desktop:block">
                      Istočasno z vnosom na seznam lokalnih cvetličarn bo
                      omogočeno tudi objavljanje vaše trgovine na vseh lokalnih
                      osmrtnicah.
                    </span>
                    <span className="hidden desktop:block">
                      In ne samo to - v kolikor je cvetličarna sama vnesla
                      osmrtnico (se pravi, če še prej ni bila objavljena), potem
                      je ta cvetličarna posebej poudarjena in na prvem mestu med
                      lokalnimi cvetličarnami. Torej, zagotovljena je večja
                      vidnost.
                    </span>

                    {/* Tablet */}
                    <span className="hidden tablet:block">
                      Istočasno z vnosom na seznam lokalnih cvetličarn bo
                      omogočeno tudi objavljanje vaše trgovine na vseh lokalnih
                      osmrtnicah.
                    </span>
                    <span className="hidden tablet:block">
                      In ne samo to - v kolikor je cvetličarna sama vnesla
                      osmrtnico (se pravi, če še prej ni bila objavljena), potem
                      je ta cvetličarna posebej poudarjena in na prvem mestu med
                      lokalnimi cvetličarnami. Torej, zagotovljena je večja
                      vidnost.
                    </span>

                    {/* Mobile */}
                    <span className="hidden mobile:block">
                      Istočasno bo omogočeno tudi objavljanje vaše{" "}
                      <br className="hidden mobile:block" /> trgovine na vseh
                      lokalnih osmrtnicah.
                    </span>
                    <span className="hidden mobile:block">
                      In ne samo to - v kolikor je cvetličarna sama{" "}
                      <br className="hidden mobile:block" /> vnesla osmrtnico,
                      potem je posebej poudarjena{" "}
                      <br className="hidden mobile:block" /> in na prvem mestu
                      med lokalnimi cvetličarnami.{" "}
                      <br className="hidden mobile:block" /> Torej, zagotovljena
                      je večja vidnost.
                    </span>
                  </p>

                  <div className="mobile_local_florists_text mt_10px pb-0px">
                      <p className="mobile_text">
                        Istočasno bo omogočeno tudi objavljanje vaše trgovine na vseh lokalnih osmrtnicah. 
                      </p>
                      <p className="mobile_text">
                       In ne samo to - v kolikor je cvetličarna sama vnesla osmrtnico, potem je posebej poudarjena in na prvem mestu med lokalnimi cvetličarnami. Torej, zagotovljena je večja vidnost. 
                      </p>
                    </div>
                </div>
              </div>
              <Image
                src="/seznam-c.png"
                alt="admin-benefit-1"
                className="w-[235px] shrink-0 tablet:hidden mobile:hidden"
                width={281}
                height={221}
              />
            </div>

             
          </div>
        </div>

        {/* Own website section */}
        <div className="bg-[#FFFFFF] mob_own_website_sec">
          <div className="relative max-w-[1029px] tablet:max-w-[740px] desktop:py-[125px] tablet:py-[95px] mobile:py-[70px] px-[10px] w-full mx-auto mob_own_website_sec_inner">
            <div className="flex desktop:flex-row flex-col gap-[100px] desktop:items-center">
              <div className="hidden desktop:block w-[235px]" />
              <h1 className="mobile:text-center text-left desktop:text-[32px] font-[400] text-[#3C3E41] desktop:leading-[32px] text-[28px] leading-[40px] flex items-center desktop:items-start gap-x-2 flex-row mobile:flex-col">
                <span className="block">Lastna spletna stran </span>
                <span className="text-left text-[20px] font-[400] leading-[32px] desktop:ext-[28px] mobile:leading-[40px] block">
                  (predviden čas:{" "}
                  <span className="text-[#EB1D1D]">20 - 30 minut</span>)
                </span>
              </h1>
            </div>

            <div className="flex flex-row mobile:flex-col-reverse mobile:gap-0 tablet:gap-[70px] desktop:gap-[100px] tablet:items-start justify-normal mobile:justify-center items-center w-full h-full">
              <Image
                src="/vector.png"
                alt="admin-benefit-1"
                className="w-[180px] desktop:w-[235px] shrink-0 mt-[20px] tablet:mt-[55px] mobile:hidden"
                width={281}
                height={221}
              />

              <div className="space-y-[60px] tablet:space-y-[60px] mobile:space-y-[60px] mt-[20px] tablet:mt-[55px] mobile:mt-[55px] mt_10px">
                <div className="space-y-[10px]">
                  <h3 className="text-[20px] desktop:text-[24px] font-[700] text-[#3C3E41] leading-[48px] fs_18px fw_600 line_height_48px">
                    <span className="text-[#EB1D1D]">3.</span> Ustvarite si jo sami - enostavno je!
                  </h3>
                  <p className="desktop:text-[18px] text-[16px] font-[400] text-[#3C3E41] leading-[27px] flex flex-col gap-1.5 tab_web_text">
                    <span>
                      Obstoječ tekst in slike zamenjate s svojimi. Svojo{" "}
                      <br className="hidden mobile:block" /> stran lahko kasneje
                      dopolnjujete, spreminjate, prilagajate{" "}
                      <br className="hidden mobile:block" />
                      vsebino praznikom ali trenutnemu navdihu.
                    </span>
                    <span>
                      Predloga, na podlagi katere svojo stran izdelate,{" "}
                      <br className="hidden mobile:block" /> je{" "}
                      <span className="underline text-[#0A85C2]">tukaj</span>.
                      <br className="hidden mobile:block" /> Vaša stran bo
                      objavljena na naslovu{" "}
                      <br className="hidden mobile:block" />
                      osmrtnica.com/nasa-cvetlicarna
                    </span>
                    <span></span>
                  </p>

                  <div className="mob_own_website_sec_text mt_10px pb-0px">
                      <p className="mobile_text">
                        Obstoječ tekst in slike zamenjate s svojimi. Svojo stran lahko kasneje spreminjate, prilagajate vsebino praznikom ali trenutnemu navdihu. 
                      </p>
                      <p className="mobile_text">
                       Predloga, na podlagi katere svojo stran izdelate, je <span className="underline text-[#0A85C2]">tukaj</span>. Vaša stran bo objavljena na strani osmrtnica.com/nasa-cvetlicarna
                      </p>
                    </div>
                </div>

                <div className="mob_own_website_sec_img">
                    <Image
                  src="/vector.png"
                  alt="admin-benefit-1"
                  className="w-[187px] shrink-0 mx-auto hidden mobile:block"
                  width={281}
                  height={221}
                />
                </div>

                

                <p className="text-[14px] font-[400] text-[#6D778E] leading-[27px] flex flex-col gap-1.5 tab_web_text">
                  Lastna stran je uporabno informacijsko okno za manjše, ki
                  svoje spletne strani strani še nimajo in velike, katerim bo
                  predstavitvena stran vodila obiskovalce na njihove strani in
                  socialna omrežja. Naša stran ni nadomestilo ali konkurenca,
                  temveč podpora vaši spletni strani, ki bo pomagala graditi
                  vašo prepoznavnost. Pojavljanje na več platformah pomeni večjo
                  vidnost, širši doseg in več priložnosti za pritegnitev novih
                  strank, ki vas še ne poznajo.
                </p> 

                <p className="text-[#6D778E] text-[14px] own_website_endText mobile_text">
                  Lastna stran je uporabno informacijsko okno za manjše, ki svoje spletne  strani strani še nimajo in velike, katerim bo predstavitvena stran vodila obiskovalce na njihove strani in socialna omrežja. Naša stran ni nadomestilo ali konkurenca, temveč podpora vaši spletni strani, ki bo pomagala graditi vašo prepoznavnost. Pojavljanje na več platformah pomeni večjo vidnost, širši doseg in več  priložnosti za pritegnitev novih strank.
                </p>
              </div>
            </div>
          </div> 
        </div>

        {/* Secton Four */}
        <div className="bg-[#E7F0FA] mob_secton_four">
          <div className="relative max-w-[1029px] tablet:max-w-[740px] desktop:py-[125px] py-[75px] px-[10px] space-y-[60px] w-full mx-auto mob_secton_four_inner">
            <div className="text-left mobile:text-center space-y-3 desktop:space-y-4">
              <h1 className="text-[32px] leading-[32px] tablet:text-[28px] tablet:leading-[28px] mobile:text-[24px] mobile:leading-[24px] font-[400] text-[#3C3E41] ">
                Produkti za vašo promocijo{" "}
                <br className="hidden mobile:block" />
                <span className="desktop:text-[20px] desktop:leading-[32px] text-[18px] tablet:leading-[28px] mobile:leading-[24px] font-[400]">
                  (predviden čas:{" "}
                  <span className="text-[#EB1D1D]">1 minuta</span>)
                </span>
              </h1>

              <p className="desktop:text-[20px] leading-[48px] text-[16px] mobile:leading-[24px] font-[400] text-[#3C3E41] flex flex-col gap-1.5 tab_web_text">
                Dodatne možnosti za tiste, ki bodo to želeli izkoristiti -
                Brezplačna darila za vaše stranke
              </p>

              <p className="mobile_text text-[16px] mobile:leading-[24px] font-[400] text-[#3C3E41] mt_21px">
                Dodatne možnosti za tiste, ki bodo to želeli izkoristiti - Brezplačna darila za vaše stranke  
              </p>

            </div>

            <PromotionProducts />
          </div>
        </div>

        {/* FrequentlyAskedQuestion*/}
        <div className="relative w-full bg-[#FAF5EE] desktop:min-h-[485px] tablet:min-h-[600px] mobile:min-h-[500px] py-[30px] mobile:py-[20px] tablet:py-[25px] mob_own_website_sec_faqs_wrapper">
          <FrequentlyAskedQuestionView2 data={faqData} />
          
          <div className="own_website_sec_faqs_footer">
            <div className="own_website_sec_faqs_footer_inner">

            
             <p>Še več vprašanj in odgovorov je spa <span className="underline text-[#0A85C2]">tukaj</span></p>
            </div>
          </div>
        </div>


        <div className="mobile_navbar mobile_navbar_footer">
          <div className="mobile_navbar_inner">
            <ul>
              <li>
                <a href="/c-faq">
                  CVETLIČARNE
                </a>
              </li>
              <li>
                <a href="/c-info">
                POGREBNA PODJETJA
                </a>
              </li> 
            </ul>
          </div> 
        </div>
      </div>
      {/* <FooterForFaq2 /> */}

      <CommonFooter currentPage="/qr-kode" />
    </div>
  );
}

export default DriverPage;
