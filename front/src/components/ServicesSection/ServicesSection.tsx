"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Service = {
  name: string;
  icon: string;
  photos: string[];
  route: string;
};

const ServicesSection = () => {
  const [visibleService, setVisibleService] = useState<string | null>(null);

  const services: Service[] = [
    {
      name: "Servicio de Transporte",
      icon: "/bus.png",
      photos: ["/fotosetima/uno.jpg", "/fotosetima/dos.jpg", "/fotosetima/tres.jpg"],
      route: "breakfast",
    },
    {
      name: "Unidad de Producción",
      icon: "/up.png",
      photos: ["/fotosetima/cuatro.jpg", "/fotosetima/cinco.jpg", "/fotosetima/seis.jpg"],
      route: "gym",
    },
    {
      name: "Comedor",
      icon: "/comedor.png",
      photos: ["/fotosetima/7.jpg", "/fotosetima/8.jpg", "/fotosetima/9.jpg"],
      route: "swimming",
    },
   
  ];

  const handleMouseEnter = (name: string) => {
    setVisibleService(name);
  };

  const handleMouseLeave = () => {
    setVisibleService(null);
  };

  return (
    <section className="text-white bg-grisOscuro p-10">
      <div className="container mx-auto text-center">
        <div className="mb-[2rem]">
          <h2 className="text-[2.5rem] uppercase">Servicios Estudiantil</h2>
          <span className="font-secondary text-white">
            Cada momento, cada día en nuestra Institución. <br /> Escuela Técnica para todos,
            aseguramos la mejor formación con los servicios disponibles.
          </span>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {services.map((service, index) => (
            <Link
              key={service.name}
              href={`/services/${service.route}`}
              className="relative flex flex-col items-center justify-between w-[300px] h-[150px] min-h-[150px] transition-transform duration-300 hover:scale-110 border border-t-yellow-300 py-4 z-10"
              onMouseEnter={() => handleMouseEnter(service.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={60}
                  height={60}
                  className="mb-2"
                />
              </div>
              <h3 className="text-[1rem]">{service.name}</h3>


              {visibleService === service.name && (
                <div
                  className={`absolute top-full mt-4 bg-grisOscuro p-4 shadow-lg ${
                    index === 0
                      ? "left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none"
                      : index === services.length - 1
                      ? "right-1/2 transform translate-x-1/2 lg:right-0 lg:transform-none"
                      : "left-1/2 transform -translate-x-1/2"
                  }`}
                  style={{
                    boxShadow: "0 4px 15px rgb(182, 150, 99)",
                    maxWidth: "calc(100vw - 48px)",
                  }}
                >
                  <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
                    {service.photos.map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="w-[250px] h-[150px] flex-shrink-0 overflow-hidden border-2 border-grisClaro"
                        style={{ width: "250px", height: "150px"}}
                      >
                        <Image
                          src={photo}
                          alt={`${service.name} Foto ${photoIndex + 1}`}
                          width={250}
                          height={150}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>


        
      </div>
    </section>
  );
};

export default ServicesSection;
