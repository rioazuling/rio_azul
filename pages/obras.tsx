import CardObras from "../components/CardObras";
import Container from "../components/Container";
import agroalas from "../public/agroalas.png";
import bancaria from "../public/bancaria.png";
import ploti from "../public/ploti.png";
import plotii from "../public/plotii.png";
import trapani from "../public/trapani.png";
import madpadel from "../public/madpadel.png";
import bradel from "../public/bradel.png";
import cofaral from "../public/cofaral.png";
import argenti from "../public/argenti.png";
export default function Obras() {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center max-w-3xl content-center mx-auto">
          <div className="flex flex-col mt-5 items-center">
            <h1 className="uppercase text-xl font-bold">Nuestras Obras</h1>
            <div className="h-2 w-16 sm:w-20 rounded-md s" />
          </div>
          {/*  */}
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4">
            <CardObras
              description={
                "Nave Agro-Industrial ubicada en la localidad de LAS CEJAS, CRUZ ALTA, TUCUMAN."
              }
              imageSRC={agroalas}
              title={"AGROALAS"}
              videoSRC={"https://www.youtube.com/embed/Dv-Kh5q2P7g"}
            />

            <CardObras
              description={
                " Nave Industrial Ubicada en Parque Logistico PLOT."
              }
              imageSRC={plotii}
              title={"PLOT II"}
              videoSRC={"https://www.youtube.com/embed/5T7OBdpCBlo"}
            />
            <CardObras
              description={
                "Nave Industrial Ubicada en Parque Logistico PLOT."
              }
              imageSRC={ploti}
              title={"PLOT I"}
              videoSRC={"https://www.youtube.com/embed/wUXUHbexBzI"}
            />

            <CardObras
              description={
                "Estructuras metálicas y cubiertas realizadas para el Complejo de Trabajadores Bancarios."
              }
              imageSRC={bancaria}
              title={"ASOC. BANCARIA"}
              videoSRC={"https://www.youtube.com/embed/llRP1L66xo8"}
            />

            <CardObras
              description={
                "Nave Agro-Industrial, utilizada para exportación de cítricos."
              }
              imageSRC={trapani}
              title={"TRAPANI"}
              videoSRC={"https://www.youtube.com/embed/P2FW_NB-ZWU"}
            />

            <CardObras
              description={
                "Estructura Metálica y cubiertas, utilizadas para deportes y recreación."
              }
              imageSRC={madpadel}
              title={"MAD PADEL CLUB"}
              videoSRC={"https://www.youtube.com/embed/5p6xT8MrPHA"}
             
            />

            <CardObras
              description={
                "Centro de Distribucion Farmaceutico en San Miguel de Tucumán."
              }
              imageSRC={bradel}
              title={"DEL PUEBLO FARMACIAS"}
              videoSRC={"https://www.youtube.com/embed/knW-sSHbEfM"}
              
            
            />
            

            <CardObras
              description={
                "Ampliación de Camara Frigorífica para Exportación ubicada en San Andrés, Tucumán."
              }
              imageSRC={argenti}
              title={"ARGENTILEMON"}
              videoSRC={"https://www.youtube.com/embed/KccKk4qS378"}
              
             
            />
             <CardObras
              description={
                "Centro de Distribucion Farmaceutico ubicado en Parque Industrial Tucumán."
              }
              imageSRC={cofaral}
              title={"COFARAL"}
              videoSRC={"https://www.youtube.com/embed/1_dFfp4slTc"}
              
              
           
            
              
            
            />
          </div>
        </div>
      </Container>
    </>
  );
}
