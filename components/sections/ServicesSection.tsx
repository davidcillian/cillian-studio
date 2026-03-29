"use client"

import { Box, Brain, Gamepad2, GraduationCap } from "lucide-react"
import { services, type Service } from "@/lib/data"

const iconMap = {
  Box,
  Brain,
  Gamepad2,
  GraduationCap,
} as const

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon]

  return (
    <div className="group bg-white/[0.03] border border-white/5 rounded-xl p-8 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300">
      <div className="mb-5">
        <Icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-semibold text-[#f2f2f2] mb-3">
        {service.title}
      </h3>

      <p className="text-[#888] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-[#aaa]">
            <span className="text-blue-500 mt-0.5 shrink-0">&#8226;</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-[#f2f2f2] font-bold tracking-tight mb-10 sm:mb-12 text-2xl sm:text-3xl md:text-4xl">
          Was wir bieten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
