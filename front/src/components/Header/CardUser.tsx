"use client";

import { useState } from "react";
import Link from "next/link";
import { useLoggin } from "@/context/logginContext";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import ClickOutside from "../ClickOutside";
const CardUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userData, setUserData } = useLoggin();
  const router = useRouter();
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-6"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-white">
            {userData?.userData.name}
          </span>
          <span className="block text-xs text-white">
            {userData?.userData.role.name}
          </span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/user01.svg"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="Usuario"
          />
        </span>

        <svg
          className="hidden sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill="currentColor"
          />
        </svg>
      </Link>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 flex w-52 flex-col rounded-sm shadow-mostaza bg-grisOscuro">
          
          
          {userData?.userData.role.name === "Representante" && (
          <ul className="flex flex-col gap-3 border-mostaza">
            
            <li>
              <Link
                href={`/dashboard/clients/${userData?.userData.id}`}
                className="flex items-center gap-4 px-6 py-7.5 text-sm font-medium text-white hover:text-mostaza lg:text-base"
              >
                <svg
                  className="text-white"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                    fill="currentColor"
                  />
                </svg>
                Mi Perfil
              </Link>
            </li>    
            
            <li>
              <Link
                href="/testimonials"
                className="flex items-center mb-3 gap-3.5 px-6 py-7.5 text-sm font-medium text-white hover:text-mostaza lg:text-base"
              >
                <svg
                  className="text-white"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2h36a4 4 0 014 4v52a4 4 0 01-4 4H12a4 4 0 01-4-4V6a4 4 0 014-4z"
                    fill="#f5f5f5"
                    stroke="#333"
                  />
                  <path
                    d="M16 2v60M24 10h16M24 18h16M24 26h16M24 34h16M24 42h16M24 50h16"
                    stroke="#333"
                  />
                  <path
                    d="M6 10h4M6 18h4M6 26h4M6 34h4M6 42h4M6 50h4"
                    stroke="#888"
                  />
                </svg>
                Tu Testimonio
              </Link>
            </li>
          </ul>
          )}



          <button
            className="flex items-center gap-2 px-2 py-2 text-sm font-medium bg-mostaza lg:text-base"
            onClick={() => {
              localStorage.removeItem("sessionStart");
              setUserData(null);
              signOut();
              router.push("/");
            }}
          >
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                fill="currentColor"
              />
              <path
                d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                fill="currentColor"
              />
            </svg>
            Cerrar Sesión
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default CardUser;
