import CardObras from "../components/CardObras";
import Container from "../components/Container";
import obra1 from "../public/obra1.png";
// import agroalas from "../public/agroalas.png";
// import bancaria from "../public/bancaria.png";
// import ploti from "../public/ploti.png";
// import plotii from "../public/plotii.png";
// import trapani from "../public/trapani.png";

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
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"AGROALAS"}
              videoSRC={"https://www.youtube.com/embed/Dv-Kh5q2P7g"}
            />

            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"PLOT II"}
              videoSRC={"https://www.youtube.com/embed/5T7OBdpCBlo"}
            />
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"PLOT I"}
              videoSRC={"https://www.youtube.com/embed/wUXUHbexBzI"}
            />

            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"ASOC. BANCARIA"}
              videoSRC={"https://www.youtube.com/embed/llRP1L66xo8"}
            />

            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"TRAPANI"}
              videoSRC={"https://www.youtube.com/embed/P2FW_NB-ZWU"}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
