# ✅ Komplette Anleitung: Mod Engine 2 Workflow für Elden Ring (mit Convergence)

## 1️⃣ Grundvoraussetzungen

- **Gekaufte Elden Ring PC-Version (Steam)**
- **Elden Ring muss einmal komplett gestartet worden sein** (wegen Save-Dateien)
- **Elden Ring: Shadow of the Erdtree Version** (Convergence braucht das!)

## 2️⃣ Downloads

### Mod Engine 2
- **Mod Engine 2 (aktuelle Version)**
  → https://github.com/soulsmods/ModEngine2/releases

### Hauptmods
- **Convergence Mod**
  → https://www.nexusmods.com/eldenring/mods/3419

### Zusatzmods (Optional)
- **Minimalist HUD**
  → Beispiel: https://www.nexusmods.com/eldenring/mods/1100

- **No Intro Logos**
  → Beispiel: https://www.nexusmods.com/eldenring/mods/58

- **Elden Reshade – Cinematic FX**
  → Beispiel: https://www.nexusmods.com/eldenring/mods/48

## 3️⃣ Ordnerstruktur anlegen

### Beispielstruktur für Mod Engine 2:

```
EldenRing\
├── ModEngine2\
│   ├── mod\
│   │   ├── convergence (hier kommt alles von Convergence rein)
│   │   ├── menu (für HUD & Logos)
│   │   │   ├── minimalist_hud_files
│   │   │   └── no_intro_files
│   ├── modengine2_launcher.exe
│   ├── config_eldenring.toml
```

### 💡 WICHTIG:

- **Immer zuerst Convergence in den mod-Ordner kopieren**
- **HUD und Intro-Dateien NUR in den menu-Unterordner**

## 4️⃣ Mod Engine 2 konfigurieren

### In der Datei `config_eldenring.toml` folgendes prüfen/anpassen:

```toml
[options]
loadLooseParams = true
blockNetwork = true
useModOverrideDirectory = true

[paths]
mod = "mod"
```

### Erklärung der Einstellungen:

- **`blockNetwork = true`** sorgt dafür, dass Elden Ring offline läuft und du keinen Ban bekommst
- **`loadLooseParams = true`** aktiviert alle Parameter-Dateien der Mods
- **`useModOverrideDirectory = true`** ermöglicht das Überschreiben von Spieledateien

## 5️⃣ Reshade installieren

1. **Reshade Setup starten**
2. **Elden Ring auswählen**
3. **DirectX 12 auswählen**
4. **Presets (Cinematic FX) aktivieren**

### 💡 Hinweis:
- **Reshade-Dateien liegen separat im Elden Ring Hauptordner**, nicht in Mod Engine 2

## 6️⃣ Spiel starten

1. **Mod Engine 2 Ordner öffnen**
2. **`modengine2_launcher.exe` doppelklicken**
3. **Elden Ring startet jetzt mit allen Mods aus dem mod-Ordner**

### ⚠️ Wichtige Hinweise:
- **Kein Easy Anti Cheat**
- **Kein Multiplayer**
- **Offline-Modus erforderlich**

## 7️⃣ Sicherung & Tipps

### Backup erstellen:
- **Backup von `AppData\Roaming\EldenRing` machen** (Savegames)

### Steam-Einstellungen:
- **Kein automatisches Update über Steam** → Elden Ring ggf. auf manuell stellen

### Vorteile von Mod Engine 2:
- **Läuft ohne Änderungen am Hauptspielordner**
- **Einfaches Ein-/Ausschalten von Mods**
- **Keine Gefahr von VAC-Bans**

## ✅ Schnell-Checkliste

| Punkt | Erledigt? ✅ |
|-------|-------------|
| Mod Engine 2 geladen | |
| Convergence im Mod-Ordner | |
| HUD/Logos im menu-Ordner | |
| config_eldenring.toml geprüft | |
| Reshade installiert | |
| Spieltest gemacht | |

## 🔧 Troubleshooting

### Häufige Probleme:

1. **Spiel startet nicht**
   - Prüfe ob Elden Ring einmal normal gestartet wurde
   - Prüfe Mod Engine 2 Version

2. **Mods werden nicht geladen**
   - Prüfe Ordnerstruktur
   - Prüfe `config_eldenring.toml`

3. **Performance-Probleme**
   - Deaktiviere Reshade temporär
   - Prüfe Mod-Konflikte

## 📚 Weitere Ressourcen

- [Mod Engine 2 GitHub](https://github.com/soulsmods/ModEngine2)
- [Convergence Mod Page](https://www.nexusmods.com/eldenring/mods/3419)
- [Elden Ring Modding Discord](https://discord.gg/soulsmods) 