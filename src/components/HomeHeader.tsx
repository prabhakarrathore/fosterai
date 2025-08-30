
import ParticleComponent from '../components/ParticleBackground';

const HomeHeader = () => {

    return (
        <div className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden md:h-[40vh]">
            {/* Particle Background */}
            <ParticleComponent id="particles-js" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center z-2 justify-center md:px-20 px-10">
                <div className="text-white z-3">
                    <h5 className="mb-3 text-primary font-semibold uppercase animate-slideInDown">From Classroom to Codebase</h5>
                    <h1 className="md:w-3/4 md:text-4xl text-3xl font-bold lg:text-6xl animate-slideInDown">Master IT skills with industry-standard courses</h1>
                    <a
                        href="/joining-form"
                        className="inline-block mt-4 py-3 px-5 bg-primary text-white animate-slideInRight hover:bg-white hover:text-primary"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
