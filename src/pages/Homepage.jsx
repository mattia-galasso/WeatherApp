import "../assets/css/homepage.css";
import HeroContent from "../components/HeroContent";

export default function Homepage() {
    return (
    <>
        <section className="hero">
            {/* BACKGROUND IMAGE */}
            <div className="hero-bg"></div>

            {/* BACKGROUND GRADIENT EFFECT */}
            <div className="hero-overlay"></div>

            {/* WEATHER CONTENTS */}
            <div className="hero-content">
                <HeroContent />
            </div>
        </section>
    </>
    )
}