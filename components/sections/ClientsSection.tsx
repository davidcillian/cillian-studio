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
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={280}
                height={120}
                className="object-contain h-28 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
