import { graphql } from 'gatsby'
import React from 'react'
import {
  ContentWrapperStyled,
  PriceWrapper,
  PriceWrapperContent,
} from '../assets/styles/pages/cennik.styles'
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading'
import { SEO } from './SEO'

export const Head = () => (
  <>
    <SEO
      title="Cennik usług stomatologicznych w Stomatolog spółdzielnia Dentysta Gdańsk"
      description="Cennik usług w Stomatolog spółdzielnia lekarska. konkurencyjne ceny połączone z jakością. Dentysta zaprasza do korzystania z usług w Gdańsku"
    />
  </>
)

const Cennik = ({
  data: { priceSZ, priceCh, priceEn, pricePr, priceSD, priceHie },
}) => (
  <ContentWrapperStyled
    initial={{
      opacity: 0,
      x: -300,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    exit={{
      opacity: 0,
      x: 300,
    }}
    transition={{
      type: 'spring',
      duration: 0.8,
      stiffness: 75,

      delay: 0.4,
    }}
  >
    {console.log(priceHie)}
    <HighlightedHeading>Cennik</HighlightedHeading>
    <PriceWrapper>
      <h3>Stomatologia Zachowawcza</h3>
      <PriceWrapperContent>
        <li>
          <p>Konsultacja stomatologiczna</p>
          <p>{priceSZ.konsultacjaStomatologiczna}</p>
        </li>
        <li>
          <p>Przegląd stomatologiczny plus punktowe zdjęcie RTG</p>
          <p>{priceSZ.przegldStomatologicznyPlusPunktoweZdjcieRtg}</p>
        </li>
        <li>
          <p>Wypełnienie kompozytowe małe</p>
          <p>{priceSZ.wypenienieKompozytoweMae}</p>
        </li>
        <li>
          <p>Wypełnienie kompozytowe duże</p>
          <p>{priceSZ.wypenienieKompozytoweDue}</p>
        </li>
        <li>
          <p>Onlay bezpośredni</p>
          <p>{priceSZ.onlayBezporedni}</p>
        </li>
        <li>
          <p>Wypełnienie kompozytowe po leczeniu kanałowym: przedtrzonowce </p>
          <p>{priceSZ.wypenienieKompozytowePoLeczeniuKanaowymP}</p>
        </li>
        <li>
          <p>Wypełnienie kompozytowe po leczeniu kanałowym: trzonowce</p>
          <p>{priceSZ.wypenienieKompozytowePoLeczeniuKanaowymT}</p>
        </li>
        <li>
          <p>Odbudowa zęba przed leczeniem kanałowym </p>
          <p>{priceSZ.ozPrzedLeczeniemKanaowymUmoliwiajca}</p>
        </li>
        <li>
          <p>Odbudowa zęba ze wzmocnieniem z wkładu z włókna szklanego</p>
          <p>{priceSZ.ozZeWzmocnieniemZWkaduZWknaSzklanego}</p>
        </li>
        <li>
          <p>
            Licówka kompozytowa wykonywana w gabinecie stomatologicznym na
            jednej wizycie
          </p>
          <p>{priceSZ.licwkaKompozytowaWykonywanaWGabinecie}</p>
        </li>
        <li>
          <p>Opatrunek czasowy(glass-jonomer)</p>
          <p>{priceSZ.opatrunekCzasowyglassJonomer}</p>
        </li>
        <li>
          <p>Szynowanie zębów przy użyciu taśmy z włókna szklanego</p>
          <p>{priceSZ.szPrzyUyciuTamyZWknaSzklanego}</p>
        </li>
        <li>
          <p>Znoszenie nadwrażliwości szyjek zębowych</p>
          <p>{priceSZ.znoszenieNadwraliwociSzyjekZbowych}</p>
        </li>
        <li>
          <p>2 pierwsze korekty wypełnienia</p>
          <p>{priceSZ.pierwszeKorektyWypenienia}</p>
        </li>
        <li>
          <p>Kolejna korekta wypełnienia</p>
          <p>{priceSZ.kolejnaKorektaWypenienia}</p>
        </li>
        <li>
          <p>Korekta wypełnienia z innego gabinetu</p>
          <p>{priceSZ.korektaWypenieniaZInnegoGabinetu}</p>
        </li>
        <li>
          <p>Odbudowa zęba techniką flow injection</p>
          <p>{priceSZ.odbudowaZbaTechnikFlowInjection}</p>
        </li>
        <li>
          <p>Odbudowa wszystkich zębów w danym łuku techniką flow injection</p>
          <p>{priceSZ.oZhZbwWDanymUkuTechnikFlow}</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Stomatologia Dziecięca</h3>
      <PriceWrapperContent>
        <li>
          <p>Wizyta adaptacyjna dziecka</p>
          <p>{priceSD.wizytaAdaptacyjnaDziecka}</p>
        </li>
        <li>
          <p>Leczenie amputacyjne u dzieci</p>
          <p>{priceSD.leczenieAmputacyjneUDzieci}</p>
        </li>
        <li>
          <p>Wypełnienie w zębie mlecznym</p>
          <p>{priceSD.wypenienieWZbieMlecznym}</p>
        </li>
        <li>
          <p>Leczenie bólowe w zębie mlecznym</p>
          <p>{priceSD.leczenieBloweWZbieMlecznym}</p>
        </li>
        <li>
          <p>Lakowanie zębów mlecznych, stałych</p>
          <p>{priceSD.lakowanieZbwMlecznychStaych}</p>
        </li>
        <li>
          <p>Lakierowanie zębów mlecznych 2x łuk</p>
          <p>{priceSD.lakierowanieZbwMlecznych2xUk}</p>
        </li>
        <li>
          <p>Usunięcie zęba mlecznego</p>
          <p>{priceSD.usunicieZbaMlecznego}</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Higiena i Estetyka</h3>
      <PriceWrapperContent>
        <li>
          <p>Skaling</p>
          <p>{priceHie.skaling}</p>
        </li>
        <li>
          <p>Piaskowanie</p>
          <p>{priceHie.piaskowanie}</p>
        </li>
        <li>
          <p>Fluoryzacja</p>
          <p>{priceHie.fluoryzacja}</p>
        </li>
        <li>
          <p>
            Skaling + piaskowanie + czyszczenie przestrzeni między zębami +
            fluoryzacja + polerowanie zębów
          </p>
          <p>{priceHie.spCzyszczeniePmzFPolerowanie}</p>
        </li>
        <li>
          <p>Wybielanie nakładkowe</p>
          <p>{priceHie.wybielanieNakadkowe}</p>
        </li>
        <li>
          <p>Wybielanie zęba martwego</p>
          <p>{priceHie.wybielanieZbaMartwego}</p>
        </li>
        <li>
          <p>Kiretaz zamknięty</p>
          <p>{priceHie.kiretazZamknity}</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Chirurgia</h3>
      <PriceWrapperContent>
        <li>
          <p>Usuniecie zęba stałego</p>
          <p>{priceCh.usuniecieZbaStaego}</p>
        </li>
        <li>
          <p>Usunięcie zęba stałego drogą dłutowania zewnątrzzębodołowego </p>
          <p>{priceCh.usunicieZbaStaegoDDZewntrzzbodoowego}</p>
        </li>
        <li>
          <p>Usunięcie zęba mlecznego</p>
          <p>{priceCh.usunicieZbaMlecznego}</p>
        </li>
        <li>
          <p>Usunięcie zęba ósmego górnego</p>
          <p>{priceCh.usunicieZbaSmegoGrnego}</p>
        </li>
        <li>
          <p>Usunięcie zęba ósmego dolnego</p>
          <p>{priceCh.usunicieZbaSmegoDolnego}</p>
        </li>
        <li>
          <p>
            Dłutowanie częściowo lub całkowicie zatrzymanego zęba ósmego
            dolnego, ułożonego poziomo lub poprzecznie, powikłanego obecnością
            torbieli
          </p>
          <p>{priceCh.dCLubCZatrzymanegoZbaSmegoDolnego}</p>
        </li>
        <li>
          <p>Germektomia</p>
          <p>{priceCh.germektomia}</p>
        </li>
        <li>
          <p>Opatrunek chirurgiczny lub szycie do zabiegu</p>
          <p>{priceCh.opatrunekChirurgicznyLubSzycieDoZabiegu}</p>
        </li>
        <li>
          <p>
            Szycie chirurgiczne nićmi rozpuszczalnymi (na życzenie pacjenta)
          </p>
          <p>{priceCh.szycieChirurgiczneNimiRozpuszczalnymi}</p>
        </li>
        <li>
          <p>Zdjęcie szwów i wizyta kontrolna po zabiegu</p>
          <p>{priceCh.zdjcieSzwwIWizytaKontrolnaPoZabiegu}</p>
        </li>
        <li>
          <p>Szycie chirurgiczne po zabiegu wykonanym nie w naszej klinice</p>
          <p>{priceCh.szycieChirurgicznePoZWNieWNaszejKlinice}</p>
        </li>
        <li>
          <p>
            Opatrunek chirurgiczny po zabiegu wykonanym nie w naszej klinice
          </p>
          <p>{priceCh.opatrunekChirurgicznyPoZabieguWykonanym}</p>
        </li>
        <li>
          <p>Podcięcie wędzidełka wargi górnej/ dolnej/ wędzidełka języka</p>
          <p>{priceCh.podcicieWWiGrnejDolnejWdzideka}</p>
        </li>
        <li>
          <p>Usunięcie zmiany</p>
          <p>{priceCh.usunicieZmiany}</p>
        </li>
        <li>
          <p>Nacięcie ropnia</p>
          <p>{priceCh.nacicieRopnia}</p>
        </li>
        <li>
          <p>Badanie histopatologiczne</p>
          <p>{priceCh.badanieHistopatologiczne}</p>
        </li>
        <li>
          <p>Pokrycie mnogich recesji z przeszczepem tkanek miękkich</p>
          <p>{priceCh.pokrycieMnogichRecesjiTanekMikkich}</p>
        </li>
        <li>
          <p>Przeszczep tkanek miękkich z podniebienia</p>
          <p>{priceCh.przeszczepTkanekMikkichZPodniebienia}</p>
        </li>
        <li>
          <p>Augmentacja po usunięciu/ usunięcie pod implant</p>
          <p>{priceCh.augmentacjaPoUsuniciuUsuniciePodImplant}</p>
        </li>
        <li>
          <p>Odbudowa kości</p>
          <p>{priceCh.odbudowaKoci}</p>
        </li>
        <li>
          <p>Zabieg podniesienia dna zatoki metodą otwartą</p>
          <p>{priceCh.zabiegPodniesieniaDnaZatokiMetodOtwart}</p>
        </li>

        <li>
          <p>Zabieg podniesienia dna zatoki metodą zamkniętą</p>
          <p>{priceCh.zabiegPodniesieniaDnaZatokiMetodZamknit}</p>
        </li>
        <li>
          <p>Wszczepienie implantu</p>
          <p>{priceCh.wszczepienieImplantu}</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Endodoncja</h3>
      <PriceWrapperContent>
        <li>
          <p>Doraźna pomoc w bólu </p>
          <p>{priceEn.doranaPomocWBlu}</p>
        </li>
        <li>
          <p>
            Opatrunki czasowe (glass-jonomer) pomiędzy wizytami endodonycznymi
          </p>
          <p>{priceEn.oCGlassJonomerPomidzyWizytami}</p>
        </li>
        <li>
          <p>Zdjęcie kontrolne po leczeniu endodontycznym</p>
          <p>{priceEn.zdjecieKontrolnePoLeczeniuEndodontycznym}</p>
        </li>
        <li>
          <p>
            Dezynfekcja chemiczna oraz ultradźwiękowa kanałów korzeniowych ( w
            trakcie leczenia kanałowego powikłanego stanem zapalnym)
          </p>
          <p>{priceEn.dCOrazUltradwikowaKanawKorzeniowych}</p>
        </li>
        <li>
          <p>Leczenie kanałowe pierwotne: siekacze, kły </p>
          <p>{priceEn.leczenieKanaowePierwotneSiekaczeKy}</p>
        </li>
        <li>
          <p>Leczenie kanałowe pierwotne: przedtrzonowce</p>
          <p>{priceEn.leczenieKanaowePierwotnePrzedtrzonowce}</p>
        </li>
        <li>
          <p>Leczenie kanałowe pierwotne: trzonowce</p>
          <p>{priceEn.leczenieKanaowePierwotneTrzonowce}</p>
        </li>
        <li>
          <p>Leczenie kanałowe wtórne: siekacze, kły</p>
          <p>{priceEn.leczenieKanaoweWtrneSiekaczeKy}</p>
        </li>
        <li>
          <p>Leczenie kanałowe wtórne: przedtrzonowce</p>
          <p>{priceEn.leczenieKanaoweWtrnePrzedtrzonowce}</p>
        </li>
        <li>
          <p>Leczenie kanałowe wtórne: trzonowce</p>
          <p>{priceEn.leczenieKanaoweWtrneTrzonowce}</p>
        </li>
        <li>
          <p>Usunięcie starego wkładu koronowo-korzeniowego z kanału</p>
          <p>{priceEn.uSWkaduKoronowoKorzeniowegoZKanau}</p>
        </li>
        <li>
          <p>Usunięcie złamanego narzędzia z kanału korzeniowego</p>
          <p>{priceEn.uZNarzdziaZKanauKorzeniowego}</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
    <PriceWrapper>
      <h3>Protetyka</h3>
      <PriceWrapperContent>
        <li>
          <p>Konsultacja protetyczna z planem leczenia</p>
          <p>{pricePr.konsultacjaProtetycznaZPlanemLeczenia}</p>
        </li>
        <li>
          <p>Korona cyrkonowa w odcinku bocznym</p>
          <p>{pricePr.koronaCyrkonowaWOdcinkuBocznym}</p>
        </li>
        <li>
          <p>Korona porcelanowa w odciku przednim</p>
          <p>{pricePr.koronaPorcelanowaWOdcikuPrzednim}</p>
        </li>
        <li>
          <p>Korona na implancie z łącznikiem protetycznym</p>
          <p>{pricePr.koronaNaImplancieZCznikiemProtetycznym}</p>
        </li>
        <li>
          <p>Korona tymczasowa wykonana przez technika</p>
          <p>{pricePr.koronaTymczasowaWykonanaPrzezTechnika}</p>
        </li>
        <li>
          <p>Indywidualny dobór koloru i malowanie koron w laboratorium</p>
          <p>{pricePr.iDKoloruIMalowanieKoronWLaboratorium}</p>
        </li>
        <li>
          <p>Inlay, onlay,overlay: ceramika hybrydowa</p>
          <p>{pricePr.inlayOnlayoverlayCeramikaHybrydowa}</p>
        </li>
        <li>
          <p>Wkład koronowo-korzeniowy lany: pojedynczy</p>
          <p>{pricePr.wkadKoronowoKorzeniowyLanyPojedynczy}</p>
        </li>
        <li>
          <p>Wkład koronowo-korzeniowy lany: dzielony</p>
          <p>{pricePr.wkadKoronowoKorzeniowyLanyDzielony}</p>
        </li>
        <li>
          <p>Wkład z włókna szklanego z odbudową zrębu zęba</p>
          <p>{pricePr.wkadZWknaSzklanegoZOdbudowZrbuZba}</p>
        </li>
        <li>
          <p>Licówka ceramiczna malowana ręcznie</p>
          <p>{pricePr.licwkaCeramicznaMalowanaRcznie}</p>
        </li>
        <li>
          <p>Usuniecie starego metalowego wkładu lanego lub ankera</p>
          <p>{pricePr.uSMetalowegoWkaduLanegoLubAnkera}</p>
        </li>
        <li>
          <p>Uzupełnienie tymczasowe</p>
          <p>{pricePr.uzupenienieTymczasowe}</p>
        </li>
        <li>
          <p>Proteza szkieletowa</p>
          <p>{pricePr.protezaSzkieletowa}</p>
        </li>
        <li>
          <p>Proteza akrylowa</p>
          <p>{pricePr.protezaAkrylowa}</p>
        </li>
        <li>
          <p>Przeźroczyste podniebienie w protezie</p>
          <p>{pricePr.przeroczystePodniebienieWProtezie}</p>
        </li>
        <li>
          <p>Korona teleskopowa</p>
          <p>{pricePr.koronaTeleskopowa}</p>
        </li>
        <li>
          <p>Wkład kulowy</p>
          <p>{pricePr.wkadKulowy}</p>
        </li>
        <li>
          <p>Szyna relaksacyjna</p>
          <p>{pricePr.szynaRelaksacyjna}</p>
        </li>
        <li>
          <p>Deprogramacja przed leczeniem protetycznym</p>
          <p>{pricePr.deprogramacjaPrzedLeczeniemProtetycznym}</p>
        </li>
        <li>
          <p>Rejestracja zwarcia wg Koisa + zdjęcia + analiza zwarcia</p>
          <p>{pricePr.rZWgKoisaZdjciaAnalizaZwarcia}</p>
        </li>
        <li>
          <p>Wax-up</p>
          <p>{pricePr.waxUp}</p>
        </li>
        <li>
          <p>Mock-up</p>
          <p>{pricePr.mockUp}</p>
        </li>
        <li>
          <p>Cementowanie pracy protetycznej z innego gabinetu</p>
          <p>{pricePr.cementowaniePracyProtetycznejZInnegoGabinetu}</p>
        </li>
      </PriceWrapperContent>
    </PriceWrapper>
  </ContentWrapperStyled>
)

export const query = graphql`
  query {
    priceCh: contentfulCennikChirurgia {
      augmentacjaPoUsuniciuUsuniciePodImplant
      badanieHistopatologiczne
      dCLubCZatrzymanegoZbaSmegoDolnego
      germektomia
      nacicieRopnia
      odbudowaKoci
      opatrunekChirurgicznyLubSzycieDoZabiegu
      opatrunekChirurgicznyPoZabieguWykonanym
      podcicieWWiGrnejDolnejWdzideka
      pokrycieMnogichRecesjiTanekMikkich
      przeszczepTkanekMikkichZPodniebienia
      szycieChirurgiczneNimiRozpuszczalnymi
      szycieChirurgicznePoZWNieWNaszejKlinice
      usunicieZbaMlecznego
      usunicieZbaSmegoDolnego
      usunicieZbaSmegoGrnego
      usunicieZbaStaegoDDZewntrzzbodoowego
      usunicieZmiany
      usuniecieZbaStaego
      wszczepienieImplantu
      zabiegPodniesieniaDnaZatokiMetodOtwart
      zabiegPodniesieniaDnaZatokiMetodZamknit
      zdjcieSzwwIWizytaKontrolnaPoZabiegu
    }
    priceEn: contentfulCennikEndodoncja {
      dCOrazUltradwikowaKanawKorzeniowych
      doranaPomocWBlu
      leczenieKanaowePierwotnePrzedtrzonowce
      leczenieKanaowePierwotneSiekaczeKy
      leczenieKanaowePierwotneTrzonowce
      leczenieKanaoweWtrnePrzedtrzonowce
      leczenieKanaoweWtrneSiekaczeKy
      leczenieKanaoweWtrneTrzonowce
      oCGlassJonomerPomidzyWizytami
      uSWkaduKoronowoKorzeniowegoZKanau
      uZNarzdziaZKanauKorzeniowego
      zdjecieKontrolnePoLeczeniuEndodontycznym
    }
    priceHie: contentfulCennikHigienaIEstetyka {
      fluoryzacja
      kiretazZamknity
      piaskowanie
      skaling
      spCzyszczeniePmzFPolerowanie
      wybielanieNakadkowe
      wybielanieZbaMartwego
    }
    pricePr: contentfulCennikProtetyka {
      cementowaniePracyProtetycznejZInnegoGabinetu
      demontaStaregoMostuProtetycznego
      deprogramacjaPrzedLeczeniemProtetycznym
      iDKoloruIMalowanieKoronWLaboratorium
      inlayOnlayoverlayCeramikaHybrydowa
      konsultacjaProtetycznaZPlanemLeczenia
      koronaCyrkonowaWOdcinkuBocznym
      koronaNaImplancieZCznikiemProtetycznym
      koronaPorcelanowaWOdcikuPrzednim
      koronaTeleskopowa
      koronaTymczasowaWykonanaPrzezTechnika
      licwkaCeramicznaMalowanaRcznie
      mockUp
      protezaAkrylowa
      protezaSzkieletowa
      przeroczystePodniebienieWProtezie
      rZWgKoisaZdjciaAnalizaZwarcia
      szynaRelaksacyjna
      uSMetalowegoWkaduLanegoLubAnkera
      uzupenienieTymczasowe
      waxUp
      wkadKoronowoKorzeniowyLanyDzielony
      wkadKoronowoKorzeniowyLanyPojedynczy
      wkadKulowy
      wkadZWknaSzklanegoZOdbudowZrbuZba
    }
    priceSD: contentfulCennikStomatologiaDziecieca {
      lakierowanieZbwMlecznych2xUk
      lakowanieZbwMlecznychStaych
      leczenieAmputacyjneUDzieci
      leczenieBloweWZbieMlecznym
      usunicieZbaMlecznego
      wizytaAdaptacyjnaDziecka
      wypenienieWZbieMlecznym
    }
    priceSZ: contentfulCennikStomatologiaZachowawcza {
      kolejnaKorektaWypenienia
      konsultacjaStomatologiczna
      korektaWypenieniaZInnegoGabinetu
      licwkaKompozytowaWykonywanaWGabinecie
      oZhZbwWDanymUkuTechnikFlow
      odbudowaZbaTechnikFlowInjection
      onlayBezporedni
      opatrunekCzasowyglassJonomer
      ozPrzedLeczeniemKanaowymUmoliwiajca
      ozZeWzmocnieniemZWkaduZWknaSzklanego
      pierwszeKorektyWypenienia
      przegldStomatologicznyPlusPunktoweZdjcieRtg
      szPrzyUyciuTamyZWknaSzklanego
      wypenienieKompozytoweDue
      wypenienieKompozytoweMae
      wypenienieKompozytowePoLeczeniuKanaowymP
      wypenienieKompozytowePoLeczeniuKanaowymT
      znoszenieNadwraliwociSzyjekZbowych
    }
  }
`
export default Cennik
