import GlowEffects from "../components/GlowEffects"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

export default function Contact() {
    return (
        <main className="overflow-hidden">
            <GlowEffects />
            <Navbar />
            <ContactForm />
            <Footer />
        </main>
    )
}