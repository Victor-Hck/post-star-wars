"use client";

import { Props } from "@/types/Tipos";
import Image from "next/image";

export const Banner = ({titulo, texto, avatar, botao}: Props) => {
    return(
        <div className="flex flex-wrap justify-center gap-6 p-4 bg-linear-to-b from-gray-900 via-gray-800 to-blue-900">
            <div className="flex flex-col md:flex-row bg-gray-200 rounded-lg shadow-md overflow-hidden w-full md:w-3/4 lg:w-2/3">
                <div className="flex justify-center items-center w-full md:w-1/3 p-4">
                    <Image
                        src={avatar}
                        alt="Banner Star Wars"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
                <div className="p-6 flex flex-col justify-between w-full md:w-2/3 text-gray-900">
                    <h1 className="text-xl font-bold mb-2">{titulo}</h1>
                    <p className="text-gray-700 mb-4">{texto}</p>
                    <div>
                        <button
                            onClick={() => {
                                window.open("https://www.starwars.com/", "_blank");}
                            }
                            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition cursor-pointer self-start">
                            {botao}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};