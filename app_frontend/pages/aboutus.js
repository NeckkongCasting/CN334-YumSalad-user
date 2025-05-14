import { useEffect } from "react";

export default function AboutUs() {

    return (
        <div>
            <div
                className="relative w-full h-[250px] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        'url("https://png.pngtree.com/thumb_back/fh260/background/20240725/pngtree-the-concept-of-new-farming-or-smart-farming-agricultural-technology-image_15917909.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-4xl font-bold text-white z-10">
                    ABOUT US
                </h1>
            </div>

            <div className="flex justify-center px-4 py-10">
                <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg max-w-4xl w-full p-8">
                    <p className="text-lg text-white leading-relaxed text-center">
                        Our mission is simple: to connect you with the freshest, most
                        delicious organic vegetables and healthy foods while supporting small,
                        local farms. We believe in the power of sustainable agriculture and
                        the importance of knowing where your food comes from. We partner with
                        dedicated farmers who are passionate about growing high-quality
                        produce using environmentally friendly practices.
                        <br />
                        <br />
                        Then, we transform these crops into a variety of healthy and
                        convenient meals, making it easy for you to enjoy the goodness of
                        farm-fresh food every day. By choosing us, you're not just eating
                        well—you’re contributing to a healthier planet and a stronger
                        community.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-center">
                Our Team
            </h2>

            <div className="flex flex-wrap justify-center gap-8 px-4 pb-12">
                {[
                    {
                        name: "Prompiriya Sathapornpanich",
                        id: "6610742048",
                    },
                    {
                        name: "Matthew Tangjitmotana",
                        id: "6610742238",
                    },
                    {
                        name: "Kunlapanat Detchwongboonsri",
                        id: "6610742378",
                    },
                ].map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-4 w-[200px] text-center transition transform hover:scale-105"
                    >
                        <img
                            src="https://th.bing.com/th/id/R.ce9dd1615321df47b7b7f3f3f4e6a73b?rik=ZXTMSGi4dy2qMQ&riu=http%3a%2f%2fnoblesfonteinprojects.co.za%2fwp-content%2fuploads%2f2023%2f06%2fprofile4.jpg&ehk=PcnywifoTVWdZz6jjUzwh4p631a45EEDggSfBLh58cc%3d&risl=&pid=ImgRaw&r=0"
                            alt={member.name}
                            className="rounded-full w-[100px] h-[100px] object-cover mx-auto mb-3"
                        />
                        <p className="font-medium text-gray-700">{member.id}</p>
                        <p className="text-sm text-gray-600">{member.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
