import { assests } from "../../../assets/assets";
import Image from "next/image";
export default function team() {
    return (
        <div>
            <section className="text-center py-10">
                <h1 className="text-yellow-500 text-6xl font-semibold mb-2 ">Meet our bear team</h1>
                <p className="text-gray-600 text-2xl mb-8 text-center py-10">Our philosophy is simple, hire great people and give them the resources and support to do their best work</p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <div className="bg-white rounded-lg p-5 shadow-lg w-56 text-center">
                        <Image src={assests.ton} alt="Wijit Nildee Image" className="w-36 h-36 rounded-md object-cover mx-auto mb-4" />
                        <h4 className="text-lg text-gray-800 font-medium">Wijit Nildee</h4>
                        <p className="text-gray-600 text-sm">Dev/Web Design</p>
                        <p className="text-yellow-500 text-sm hover:text-red-400 hover:underline"><a href="mailto:kawkawza20@gmail.com">kawkawza20@gmail.com</a></p>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-lg w-56 text-center">
                        <Image src={assests.bank} alt="Sorakit Wongkunta Image" className="w-36 h-36 rounded-md object-cover mx-auto mb-4" />
                        <h4 className="text-lg text-gray-800 font-medium">Sorakit Wongkunta</h4>
                        <p className="text-gray-600 text-sm">Dev/Web Design</p>
                        <p className="text-yellow-500 text-sm hover:text-red-400 hover:underline"><a href="mailto:htoo24653@gmail.com">htoo24653@gmail.com</a></p>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-lg w-56 text-center">
                        <Image src={assests.atom} alt="Sirawich Eamsaard Image" className="w-36 h-36 rounded-md object-cover mx-auto mb-4" />
                        <h4 className="text-lg text-gray-800 font-medium">Sirawich Eamsaard</h4>
                        <p className="text-gray-600 text-sm">Payments Support</p>
                        <p className="text-yellow-500 text-sm hover:text-red-400 hover:underline"><a href="mailto:atom.2446@gmail.com">atom.2446@gmail.com</a></p>
                    </div>
                    <div className="bg-white rounded-lg p-5 shadow-lg w-56 text-center">
                        <Image src={assests.first} alt="Yanaphat Jumpaburee Image" className="w-36 h-36 rounded-md object-cover mx-auto mb-4" />
                        <h4 className="text-lg text-gray-800 font-medium">Yanaphat Jumpaburee</h4>
                        <p className="text-gray-600 text-sm">Specialized Support</p>
                        <p className="text-yellow-500 text-sm hover:text-red-400 hover:underline"><a href="mailto:yanaphatjum@gmail.com">yanaphatjum@gmail.com</a></p>
                    </div>
                </div></section>
        </div>

    );
}
