
// --- Service Data ---

export interface Service {
  id: string
  title: string
  description: string
  icon: "Box" | "Brain" | "Gamepad2" | "GraduationCap"
  features: string[]
}

export const services: Service[] = [
  {
    id: "3d-visualisierung",
    title: "3D-Visualisierung",
    description:
      "Fotorealistische Renderings, Echtzeit-Visualisierungen und optimierte 3D-Pipelines — beschleunigt durch KI-gestützte Workflows.",
    icon: "Box",
    features: [
      "KI-gestützte 3D-Produktion",
      "Unreal Engine 5 Integration",
      "Asset-Optimierung & Pipeline",
    ],
  },
  {
    id: "ki-agenten",
    title: "KI-Agenten",
    description:
      "Selbst-gehostete KI-Systeme für Unternehmen — DSGVO-konform, ohne Cloud-Abhängigkeit, mit intelligenter Automatisierung.",
    icon: "Brain",
    features: [
      "Lokale LLMs (DSGVO-konform)",
      "RAG & Model-Routing",
      "n8n Workflow-Automatisierung",
    ],
  },
  {
    id: "gamification",
    title: "Gamification",
    description:
      "Spielerische Mechaniken, die Motivation und Engagement steigern — von Vertrieb über Kundenbindung bis Mitarbeitermotivation.",
    icon: "Gamepad2",
    features: [
      "Gamification-Design & Mechaniken",
      "Integration in bestehende Systeme",
      "Consulting & Strategie",
    ],
  },
  {
    id: "training",
    title: "Training & Workshops",
    description:
      "Praxisnahe Kurse zu 3D und KI — als VHS-Kurs, WKO-Workshop oder maßgeschneiderter Firmenworkshop.",
    icon: "GraduationCap",
    features: [
      "3D-Workshops (Blender, UE5)",
      "KI-Workshops (lokale AI, n8n)",
      "Firmenworkshops (VHS Wien, WKO)",
    ],
  },
]

// --- Project Data ---

export const recentProjects = [
  {
    id: "project-monk",
    clientName: "Demo",
    clientLogo: "Demo",
    projectTitle: "Monk",
    projectType: "Demo",
    completionDate: "2025",
    teamSize: "1 Artist",
    description:
      "Ein Demoprojekt von David Scherngell, das einen stilisierten Charakter im Pixar-Look zeigt. Der Fokus lag auf High-End Character Design und lebendiger Ausstrahlung.",
    technologies: ["Blender", "Marvelous Designer", "ZBrush", "Substance Painter", "Cycles"],
    images: [
      "/images/monk/monk-3d-character-blender-marvelous-designer-zbrush-render-1.jpg",
      "/images/monk/monk-3d-character-blender-marvelous-designer-zbrush-render-2.jpg",
      "/images/monk/monk-3d-character-blender-marvelous-designer-zbrush-render-3.jpg"
    ],
    results: [
      "Stylized Character Design",
      "Realistische Stoffsimulation mit Marvelous Designer",
      "Detailliertes Sculpting in ZBrush",
      "Photorealistisches Rendering in Cycles"
    ],
    artists: [
      { name: "David Scherngell", image: "/images/david-scherngell.jpeg" }
    ],
  },
  {
    id: "project-1",
    clientName: "Demo",
    clientLogo: "Demo",
    projectTitle: "Low-Poly Train",
    projectType: "Blender Demoprojekt",
    completionDate: "2025",
    teamSize: "2 Artists",
    description:
      "Ein Demoprojekt in Blender von David Scherngell und Daniel Abada. Minimalistischer Ansatz mit nur einer Textur und Coloramp für die gesamte Szene. Fokus auf Low-Poly-Ästhetik und effiziente Texturierung.",
    technologies: ["Blender"],
    images: [
      "/images/Low-Poly_Train/1.jpg",
      "/images/Low-Poly_Train/2.jpg",
      "/images/Low-Poly_Train/3.jpg",
      "/images/Low-Poly_Train/4.jpg"
    ],
    results: [
      "Komplette Szene mit nur einer Textur und Coloramp texturiert",
      "Effizienter Low-Poly Workflow demonstriert",
      "Atmosphärische Beleuchtung und Komposition",
      "Minimalistischer aber wirkungsvoller visueller Stil"
    ],
    artists: [
      { name: "David Scherngell", image: "/images/david-scherngell.jpeg" },
      { name: "Daniel Abada", image: "/images/Daniel_Abada.jpeg" }
    ],
  },
  {
    id: "project-2",
    clientName: "David Scherngell",
    clientLogo: "Demo",
    projectTitle: "The Old Deep",
    projectType: "Unreal Engine Demoprojekt",
    completionDate: "2025",
    teamSize: "1 Artist",
    description:
      "Ein Demoprojekt in Unreal Engine 5.6 von David Scherngell. Verwendete Tools: UE5.6, Blender, Maya, Substance Painter, Underwater Blueprint von Karim Aboushousha.",
    technologies: ["Unreal Engine 5.6", "Blender", "Maya", "Substance Painter", "Underwater Blueprint", "Quixel"],
    images: [
      "/images/the-old-deep/1.jpg",
      "/images/the-old-deep/2.jpg",
      "/images/the-old-deep/3.jpg"
    ],
    results: [
      "Unterwasserumgebung durch Underwater Blueprint umgesetzt",
      "Vegetation mit Quixel Assets realisiert",
      "Prozedurale Shader und Lighting für Tiefsee-Atmosphäre"
    ],
    artists: [
      { name: "David Scherngell", image: "/images/david-scherngell.jpeg" }
    ],
  },
  {
    id: "project-4",
    clientName: "GearWorks Production",
    clientLogo: "Tool",
    projectTitle: "Omninode Crane",
    projectType: "Blender Geometry Nodes Tool",
    completionDate: "2022",
    teamSize: "1 Developer",
    description:
      "Erstellt von GearWorks Production. Omninode Crane ist ein prozedurales Kran-Asset, das mit Blender Geometry Nodes entwickelt wurde. Es entstand beim Austesten der Geometry Nodes und ist als Produkt auf SuperHiveMarket erhältlich.",
    technologies: ["Blender", "Geometry Nodes"],
    images: [
      "/images/omninode-crane/1.jpg",
      "/images/omninode-crane/2.jpg"
    ],
    results: [
      "Prozedurales Kran-Asset in Blender entwickelt",
      "Verfügbar als Produkt auf SuperHiveMarket",
      "Schnelle, flexible Kran-Anpassung für jedes Szenario",
      "Effiziente Animation: Bewegungen einfach und flüssig",
      "100% prozedural – keine externen Modelle nötig",
      "Vollständig anpassbare Struktur und Bewegung"
    ],
    productLink: "https://superhivemarket.com/products/omninode-crane?search_id=41130834",
    artists: [
      { name: "GearWorks Production", image: "/images/gearworks-icon.png?v=2" }
    ],
  },
  {
    id: "project-5",
    clientName: "CreArtive Vienna",
    clientLogo: "/images/creartive-vienna/logo.png",
    projectTitle: "Kaiserkrone",
    projectType: "3D-Animation & Videoproduktion",
    completionDate: "2022",
    teamSize: "2 Artists, 1 Technical Artist",
    description:
      "Für CreArtive Vienna wurde ein Video der Kaiserkrone der Kaiserlichen Schatzkammer erstellt. Zum Einsatz kamen Blender für die 3D-Visualisierung und Premiere für den Videoschnitt.",
    technologies: ["Blender", "Premiere Pro"],
    images: [
      "/images/creartive-vienna/1.jpg"
    ],
    results: [
      "3D-Modellierung und Animation der Kaiserkrone",
      "Videoproduktion für die Kaiserliche Schatzkammer",
      "Team: 2 Artists, 1 Technical Artist"
    ],
    artists: [
      { name: "David Scherngell", image: "/images/david-scherngell.jpeg" },
      { name: "Daniel Abada", image: "/images/Daniel_Abada.jpeg" },
      { name: "GearWorks Production", image: "/images/gearworks-icon.png?v=2" }
    ],
  },
]

export const galleryImages = [
  "/images/monk/monk-3d-character-blender-marvelous-designer-zbrush-render-1.jpg",
  "/images/Low-Poly_Train/1.jpg",
  "/images/the-old-deep/1.jpg",
  "/images/creartive-vienna/1.jpg",
  "/images/omninode-crane/1.jpg",
  "/images/omninode-crane/2.jpg",
  "/images/Low-Poly_Train/2.jpg",
  "/images/the-old-deep/2.jpg",
  "/images/monk/monk-3d-character-blender-marvelous-designer-zbrush-render-2.jpg",
  "/images/Low-Poly_Train/3.jpg",
]
