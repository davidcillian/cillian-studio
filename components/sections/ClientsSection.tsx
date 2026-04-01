"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

const clients = [
  {
    name: "CreARTive Vienna",
    logo: "/images/clients/creartive-vienna.png",
    url: "https://www.creartive-vienna.com/",
    description: "Digitaler Innovationshub für kreative Kunst- und Kulturprojekte in Wien.",
  },
  {
    name: "Goodcare IT Services",
    logo: "/images/clients/goodcare-it.png",
    url: "https://goodcare.at/",
    description: "Anbieter von Open-Source-Lösungen und Alternativen zu Microsoft-Produkten.",
  },
]

export function ClientsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#f2f2f2] mb-4">
          Unternehmen, die mir vertrauen
        </h2>
        <p className="text-center text-[#888] text-sm mb-12">
          Ausgewählte Kunden aus bisherigen Projekten
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.03] border border-white/5 rounded-xl p-8 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center text-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={280}
                height={120}
                className="object-contain h-24 w-auto mb-6"
              />
              <h3 className="text-lg font-semibold text-[#f2f2f2] mb-2 flex items-center gap-2">
                {client.name}
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors duration-300" />
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                {client.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
