import React from "react";

export default function Katalog(props) {
    const { judul, subjudul, menu, note } = props;

    return (
        <div className="shadow pb-10">
            <h2 className="text-blue-100 bg-green-500 pt-2 font-sans text-xl font-bold pb-4 text-gray-800 text-center">
                {judul}
            </h2>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-normal tracking-tight text-gray-900">
                        {subjudul}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {menu.map((produk) => (
                        <div key={produk.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                            src={produk.gambar}
                            alt={produk.ketgambar}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700">
                                <a href={produk.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {produk.nama}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{produk.warna}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{produk.harga}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex flex-col items-center justify-center bg-red-100 shadow-md">
                        <h3 className="font-normal text-base">
                            *{note}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}