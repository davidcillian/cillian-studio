"use client"

import Image from "next/image"

const clients = [
  { name: "CreARTive Vienna", logo: "/images/clients/creartive-vienna.png" },
  { name: "Goodcare IT Services", logo: "/images/clients/goodcare-it.png" },
]

export function ClientsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-white/40 mb-12">
          Bisherige Kunden
        </p>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={60}
                className="object-contain h-14 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
