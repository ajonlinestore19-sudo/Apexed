"use client"
import Image from "next/image"

export default function GlowEffects() {
    return (
        <>
        <div className="absolute inset-0 -z-10">
            <Image src="/assets/glow-right.webp" alt="glow-effect" fill />
        </div>
        <div className="absolute inset-0 -z-10 opacity-5">
            <Image src="/assets/graph.webp" alt="graph" fill />
        </div>
        <div className="absolute inset-0 -z-10">
            <Image src="/assets/glow-left.webp" alt="glow-effect" fill />
        </div>
        </>
    )
}