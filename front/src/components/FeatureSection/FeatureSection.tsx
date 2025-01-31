import Image from "next/image";
import Link from "next/link";

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/fotosetima/fondo2.jpg"
            alt="Habitación de lujo"
            className="w-[35rem]"
            width={400}
            height={200}
          />
        </div>
        <article>
          <div>
            <h3 className="text-mostaza">Escuela Técnica Isaías Medina Angarita</h3>
            <h2 className="text-[2.5rem] font-light uppercase">
              La Mejor Escuela Técnica de Venezuela
            </h2>
            <p>
              Un plan de estudio dirigido a la Formación de Técnicos Profesionales Aptos para los Cambios<br />
              y las Nuevas Tecnologías del Siglo XXI, con Unidad de Producción Innovadora.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-wrap w-40">
                <h4 className="text-mostaza text-[4rem]">25</h4>
                <span className="text-mostaza text-[2.5rem]">+</span>
                <p>Aulas Recuperadas</p>
              </div>
              <div>
                <h4 className="text-mostaza text-[4rem]">4.9</h4>
                <p>Calificación de los Estudiantes y Representantes</p>
              </div>
            </div>
          </div>
          <div className=" h-[1.5px] bg-mostaza my-5"></div>
          <div>
            <button className="bg-mostaza border-mostaza uppercase py-2 px-4 hover:bg-grisClaro transition-all">
              <Link href="/rooms">Más Información</Link>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeatureSection;
