import Navbar from "./components/Navbar"
import Solution from "./components/Solution"
import Header from "./components/Header"
import GlowEffects from "./components/GlowEffects"
import Problem from "./components/Problem"
import Process from "./components/Process"
import Services from "./components/Services"
import Packages from "./components/Packages"
import FAQ from "./components/FAQ"
import Team from "./components/Team"
import Footer from "./components/Footer"

export default function Home() {
    return (
        <main className="overflow-hidden">
            <GlowEffects />
            <Navbar />
            <Header />
            <Problem />
            <Solution />
            <Process />
            <Services />
            <Packages />
            <FAQ />
            <Team />
            <Footer />
        </main>
    )
}