import cat1 from '../assets/img/cat-1.jpg';
import cat2 from '../assets/img/cat-2.jpg';
import cat3 from '../assets/img/cat-3.jpg';
import cat4 from '../assets/img/cat-4.jpg';

const Services = () => {
    return (
        <div className="container mx-auto sm:pt-0 md:pb-12 sm:px-10 lg:px-10">
            <div className="text-center mb-10">
                <h6 className="section-title bg-white text-center text-primary px-3 inline-block font-extrabold mb-2">SERVICES</h6>
                <h1 className="text-4xl font-bold">Services</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Side: 3 Images */}
                <div className="grid grid-cols-1 col-span-2  gap-6">
                    {/* Top Image: Full Width */}
                    <div className="relative overflow-hidden">
                        <a href="#" className="block h-full">
                            <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={cat1} alt="IT Helpdesk and Staff Support" />
                            <div className="bg-white text-center absolute bottom-0 right-0 py-2 px-3 m-1">
                                <h5 className="m-0 font-bold">IT Helpdesk and Staff Support</h5>
                            </div>
                        </a>
                    </div>
                    {/* Bottom Left and Right Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative overflow-hidden">
                            <a href="#" className="block h-full">
                                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={cat2} alt="Internship & Training" />
                                <div className="bg-white text-center absolute bottom-0 right-0 py-2 px-3 m-1">
                                    <h5 className="m-0 font-bold">App and Web Development</h5>
                                </div>
                            </a>
                        </div>
                        <div className="relative overflow-hidden">
                            <a href="#" className="block h-full">
                                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={cat3} alt="Internship & Training" />
                                <div className="bg-white text-center absolute bottom-0 right-0 py-2 px-3 m-1">
                                    <h5 className="m-0 font-bold">Internship & Training</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Large Image */}
                <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
                    <a href="#" className="block h-full">
                        <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={cat4} alt="Cloud Computing" />
                        <div className="bg-white text-center absolute bottom-0 right-0 py-2 px-3 m-1">
                            <h5 className="m-0 font-bold">Cloud Computing</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
