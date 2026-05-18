---
name: Cillian Studio
description: Creative Technology Studio Wien — japanisch-inspirierter Minimalismus, Sumi-Ink Wärme, eine einzige Signalfarbe
version: 1.0
colors:
  bg: "#1a1612"
  bg-elevated: "#241f19"
  bg-card: "#2e2822"
  bg-deep: "#0f0c09"
  ink: "#ece5d4"
  ink-2: "#a9a191"
  ink-3: "#6b6456"
  line: "rgba(236,229,212,0.12)"
  line-2: "rgba(236,229,212,0.22)"
  signal: "#c94a28"
  paper: "#f0eee9"
  paper-2: "#e8e4d8"
  ink-light: "#1a1612"
typography:
  h1:
    fontFamily: Inter Tight
    fontSize: clamp(72px, 10vw, 180px)
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.045em"
  h2:
    fontFamily: Inter Tight
    fontSize: clamp(36px, 5vw, 56px)
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-0.025em"
  h3:
    fontFamily: Inter Tight
    fontSize: clamp(22px, 2.5vw, 28px)
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: Inter Tight
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter Tight
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.65
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
    textTransform: uppercase
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 400
    letterSpacing: "0.1em"
    textTransform: uppercase
  serif-accent:
    fontFamily: Fraunces
    style: italic
    usage: "Pull-Quotes und Chapter-Headings ausschliesslich. NIE im Fliesstext."
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 48px
  2xl: 64px
  section: 96px
  paddingX: max(32px, 4vw)
  maxWidth: 1600px
rounded:
  none: 0px
  note: "Ueberall scharfe Ecken. Kein border-radius auf Cards, Buttons, Images oder Modals."
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    borderRadius: 0
    fontFamily: JetBrains Mono
    fontSize: 12px
    letterSpacing: 0.08em
    textTransform: uppercase
    padding: "12px 28px"
    hover: "opacity 0.8"
  button-secondary:
    backgroundColor: transparent
    borderColor: "{colors.line-2}"
    textColor: "{colors.ink-2}"
    borderRadius: 0
    fontFamily: JetBrains Mono
    fontSize: 12px
    letterSpacing: 0.08em
    textTransform: uppercase
    padding: "12px 28px"
    hover: "border-color: {colors.ink-3}, color: {colors.ink}"
  card:
    backgroundColor: none
    border: "1px solid {colors.line}"
    borderRadius: 0
    note: "Keine Card-Backgrounds — nur Hairlines als Raster"
  input:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-2}"
    borderRadius: 0
    fontFamily: Inter Tight
    fontSize: 14px
    focus: "border-color: {colors.ink-3}"
  nav:
    backgroundColor: "rgba(28,23,20,0.88)"
    backdropFilter: "blur(14px) saturate(130%)"
    borderBottom: "rgba(236,229,212,0.10)"
  image:
    objectFit: cover
    borderRadius: 0
    note: "Edge-to-edge, kein Rounding, kein Shadow"
---

## Overview

Cillian Studio ist ein Creative Technology Studio in Wien — 3D-Visualisierung, KI-Agenten (DSGVO-konform) und Gamification. Das visuelle System ist an japanischen Druckmedien orientiert: präzise Editorialität, warme Sumi-Ink Töne, maximale Stille.

Das Design kommuniziert Kompetenz durch Zurückhaltung. Kein generisches Dark-Theme, kein blauer Tech-Akzent, keine Oberflächen-Effekte als Selbstzweck.

Drei Felder. Eine Stimme. Ein System.

## Colors

Das Farbsystem basiert auf einem **Sumi-Ink Wärmespektrum** — nie reines Schwarz.

- **bg** `#1a1612` — Kurocha 黒茶, Seiten-Background
- **bg-elevated** `#241f19` — Aikuro 藍黒, erhöhte Flächen, Form-Backgrounds
- **bg-card** `#2e2822` — Binroji 檳榔子, Cards (sehr sparsam einsetzen)
- **bg-deep** `#0f0c09` — Footer-Background
- **ink** `#ece5d4` — Washi 和紙, primäre Schrift
- **ink-2** `#a9a191` — Ash, Sekundär-Text, Beschreibungen
- **ink-3** `#6b6456` — Stone, Marginalien, Labels, Icons
- **signal** `#c94a28` — Shu 朱/Vermillion, **einzige Akzentfarbe, max 5% pro Section**
- **paper** `#f0eee9` — Light-Modus für Print-Dokumente (Briefpapier, Rechnung)

**80/15/5 Ratio:** ~80% bg/ink, 15% ink-2/ink-3 Sekundär, max 5% signal.

**Verbotene Farben:** Kein `#000000` oder `#0a0a0a`. Kein Blau (`#3b82f6` oder ähnlich). Kein Lila, Cyan oder Gradient.

## Typography

Drei Schriften mit strikt getrennten Rollen:

| Schrift | Rolle | Verboten für |
|---|---|---|
| **Inter Tight** | Alle Headings, Body-Text | Code, Labels, Mono-Daten |
| **JetBrains Mono** | Labels, Tags, Marginalien, Status, Section-Nummern | Fliesstext |
| **Fraunces** | Pull-Quotes, Chapter-Headings (kursiv) | Body-Text, regulaere Headings, aufrecht |

Schriftgewichte: Inter Tight 300 (leicht/sekundaer), 500 (primary headings), 400 (body). Kein 700/800/900.

Alle Mono-Labels: 10–11px, `.08em` letter-spacing, uppercase, `color: var(--ink-3)`.

## Layout

- **Max-Width:** 1600px, `margin: 0 auto`
- **Horizontal Padding:** `max(32px, 4vw)` — responsive, nie cramped
- **Section-Abstand:** 96px oben und unten
- **Grid-System:** CSS Grid bevorzugt, Fukinsei-Prinzip (asymmetrische Proportionen: `1.1fr 1fr`, `1fr 3fr`)
- **Engawa:** Schmale Hairline-Trenner statt Karte-Hintergruende

Jede Section hat:
- **Tate-Folio** links (vertikale Section-Nummer, `writing-mode: vertical-rl`, mono 10px)
- **Masthead:** 1fr/3fr Grid — Mono-Kicker links, H2 + Beschreibung rechts
- Hairlines (`border-top: 1px solid var(--line)`) statt Card-Hintergruende

## Elevation & Depth

Kein Glassmorphism auf Content-Flächen. **Header-Blur ist OK** als funktionale Navigation-Affordance.

Tiefe nur durch Background-Stufen:
1. `--bg` (#1a1612) — Basis-Ebene
2. `--bg-elevated` (#241f19) — Formulare, erhoehte Flächen
3. `--bg-card` (#2e2822) — nur wenn absolut noetig
4. Hairlines `var(--line)` und `var(--line-2)` als Trennelemente

Keine Box-Shadows auf Content-Elementen.

## Shapes

**Ueberall scharfe Ecken** — `border-radius: 0` auf allem:
- Cards, Panels, Modals
- Buttons (alle Varianten)
- Input-Felder
- Images (edge-to-edge object-cover, kein Rounding)
- Lightbox-Steuerungen

Einzige Ausnahme: Live-Status-Punkt im Header (7px Kreis).

Das Kintsugi-Tick-Element: 10×10px Quadrat, `transform: rotate(45deg)`, `background: var(--signal)` — eine Position pro Section.

## Components

### Masthead-Pattern
```
§ 0N — Section-Name          ← Mono 11px, .08em, ink-3
H2 Titel.  Leichterer Teil.  ← Inter Tight 500, clamp(36px..56px)
Beschreibung max 60ch.       ← Inter Tight 400, 16px, ink-2
```

### Tate-Folio
Vertikale Section-Nummern links neben Content:
- `writing-mode: vertical-rl`, Mono 10px, `.22em` letter-spacing, uppercase, ink-3

### Buttons
Primary: ink-Background, bg-Text, kein Border-Radius, Mono 12px uppercase
Secondary: transparent Background, line-2 Border, ink-2 Text — Hover: ink-3 Border + ink Text

### Form-Inputs
`bg-elevated` Background, `line-2` Border, kein Border-Radius. Focus: Border-Color → `ink-3` (kein blauer Ring).

### Social/Icon Links
`color: var(--ink-3)`, Hover: `color: var(--ink-2)`. Keine farbigen Icons (kein blaues LinkedIn, kein rotes YouTube).

### Navigation
Header-Background: `rgba(28,23,20,.88)` + `backdrop-filter: blur(14px)`. Nav-Items: Mono 10px, .08em, numbered (01/02/03...). Live-Status: 7px Kreis, `var(--signal)` mit Glow-Animation.

## Do's and Don'ts

**Tu:**
- Sumi-Ink Wärmespektrum — nie reines `#000`
- Hairlines statt Card-Backgrounds
- Tate-Folio fuer alle Section-Nummern
- Mono-Labels fuer alle Meta-Daten und Marginalien
- Exakt eine Shu-Signal-Stelle pro Section
- Edge-to-edge Bilder, kein Rounding
- Asymmetrische Grids (1.1fr/1fr, 1fr/3fr) — Fukinsei
- Einmalige Hero-Animations bei Seitenload (Framer Motion)

**Lass es:**
- ❌ Kein `#000000` oder `#0a0a0a`
- ❌ Kein Blau, Lila, Cyan — kein `#3b82f6` oder aehnlich
- ❌ Kein Glassmorphism auf Content-Flächen
- ❌ Kein `border-radius` auf Cards, Buttons, Images
- ❌ Keine Scroll-Trigger-Animationen (`whileInView`)
- ❌ Kein Fraunces aufrecht oder im Body-Text
- ❌ Nicht mehr als eine Shu-Akzent-Stelle pro Section
- ❌ Kein reines Weiss — Light-Modus immer `var(--paper)` (#f0eee9)
- ❌ Kein `background-color` auf Content-Cards — nur Hairlines
- ❌ Keine gefaerbten Social-Icons (immer `var(--ink-3)`)
