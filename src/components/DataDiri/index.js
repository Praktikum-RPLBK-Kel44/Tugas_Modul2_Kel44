import React from "react";

export default function DataDiri(props) {
    const { judul, kami, quotes, author } = props;

    return (
        <div className="bg-green-50 shadow pb-10">
            <div className="pt-4 item-center">
                <h2 className="font-sans text-xl font-bold pb-4 text-gray-800 text-center underline">
                    {judul}
                </h2>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                    <th
                                        scope="col"
                                        className="px-10 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                                    >
                                        Nama
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                                    >
                                        NIM
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold text-black-500 uppercase tracking-wider"
                                    >
                                        EMAIL
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-bold text-black-500 uppercase tracking-wider"
                                    >
                                        Github
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {kami.map((saya) => (
                                    <tr key={saya.email}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{saya.nama}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {saya.nim}
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-500">
                                            {saya.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                            {saya.github}
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>                  
                <div className="flex flex-col py-8 items-center justify-center bg-red-50 shadow-md">
                    <h3 className="font-normal text-xl">{quotes}</h3>
                    <p>-{author}</p>
                </div>
            </div>
        </div>
    );
}