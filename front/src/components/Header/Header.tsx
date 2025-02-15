"use client";

import { useLoggin } from "@/context/logginContext";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CardUser from "./CardUser";
import Switcher from "../Switcher";
import ContadorVisitas from "../visits/visits";

const Header = () => {
  const { userData } = useLoggin();

  return (
    <header className="sticky top-0 w-full h-[10rem] bg-grisOscuro text-white z-50 flex justify-between items-center px-6">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/HE.png"
            alt="ETIMA"
            width={120}
            height={50}
            className="hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <ContadorVisitas />
      </div>
      <nav className="flex items-center justify-center text-[1rem] uppercase">
  <div className="flex flex-wrap gap-6 items-center">
    {userData?.userData.role.name === "Administrador" ? (
      <>
          <Link href="/mencionManagement" className="hover:text-mostaza text-center block">
            Registro <br /> de Menciones
          </Link>
        {/* <Link href="/clientlist" className="hover:text-mostaza text-center block">
          Historial <br /> de Clientes
        </Link>
        <Link href="/employee" className="hover:text-mostaza text-center block">
          Crear <br /> Empleados
        </Link> */}
        <Link href="/testimonialsadmin" className="hover:text-mostaza text-center block">
          Aprobar <br /> Testimonios
        </Link>
      </>
    ) : (
      <>
        <Link href="/" className="hover:text-mostaza text-center block">
          Home
        </Link>
        <Link href="/rooms" className="hover:text-mostaza text-center block">
          Oportunidades <br /> de Estudio
        </Link>
        <Link href="/facilities" className="hover:text-mostaza text-center block">
          Servicios <br /> Estudiantiles
        </Link>
        <Link href="/contact" className="hover:text-mostaza text-center block">
          Contacto
        </Link>
        <Link href="/nosotros" className="hover:text-mostaza text-center block">
          Acerca <br /> de...
        </Link>
      </>
    )}
  </div>
</nav>

      <div className="space-x-4 flex items-center">
        {userData?.token ? (
          <CardUser />
        ) : (
          <>
            <Link href="/login">
              <button className="bg-mostaza hover:bg-grisClaro">Iniciar Sesión</button>
            </Link>
            <Link href="/register">
              <button className="bg-mostaza hover:bg-grisClaro">Registrarse</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
