# FStreamX Design System

## Direction

FStreamX — premium OTT streaming platform with Netflix-inspired dark interface, red/blue accent dualism, and cinematic card-driven layout.

## Tone

Bold, immersive dark mode cinematic experience. Deep charcoal foundation with vivid streaming red (primary CTAs) and electric blue (secondary interactions) create dramatic, high-contrast visual hierarchy.

## Differentiation

Distinctive FStreamX branding (large X background, FS overlay, Stream text) combined with smooth card hover glow effects and red/blue accent dualism create an unmistakable streaming aesthetic.

## Color Palette

| Token           | OKLCH              | Role                                     |
| --------------- | ------------------ | ---------------------------------------- |
| background      | 0.12 0 0           | Deep charcoal: immersive dark foundation |
| foreground      | 0.93 0 0           | Near-white: high-contrast text           |
| card            | 0.17 0 0           | Elevated card surface                    |
| primary         | 0.58 0.22 25       | Vivid red: play buttons, featured CTAs   |
| accent          | 0.65 0.18 255      | Electric blue: secondary actions, hover  |
| muted           | 0.2 0 0            | Subtle surface: section dividers         |
| destructive     | 0.65 0.19 22       | High-contrast red: warnings              |

## Typography

- Display: **Space Grotesk** — bold modern sans-serif for hero/branding text, section headings, strong presence
- Body: **DM Sans** — clean modern sans-serif for UI labels, content descriptions, optimal legibility
- Mono: **Geist Mono** — technical monospace for admin/debug elements
- Scale: Hero `text-6xl md:text-7xl font-bold tracking-tight` | H2 `text-3xl md:text-4xl font-bold` | Label `text-xs md:text-sm font-semibold uppercase` | Body `text-base md:text-lg`

## Elevation & Depth

Cinematic depth through layered card surfaces: background (0.12), muted (0.2), card (0.17) with soft elevated shadows (0 8px 24px) and glow overlays on hover.

## Structural Zones

| Zone       | Background          | Border                 | Notes                                      |
| ---------- | ------------------- | ---------------------- | ------------------------------------------ |
| Header     | card (0.17)         | border-border (0.24)   | Sticky, elevated; logo + nav + search      |
| Hero       | background (0.12)   | —                      | Full-bleed featured content + poster image |
| Content    | background (0.12)   | —                      | Alternating sections with muted dividers   |
| Cards      | card (0.17)         | accent glow on hover   | Red/blue glow borders on interaction       |
| Footer     | muted (0.2)         | border-border (0.24)   | Secondary actions, legal links             |

## Spacing & Rhythm

24px section gaps, 16px card padding, 8px micro-spacing. Dense carousel grids (4-5 columns desktop, 2-3 tablet, 1 mobile) maintain momentum.

## Component Patterns

- Buttons: rounded-md, red primary (bg-primary + text-primary-foreground), blue secondary (bg-accent), smooth hover scale (1.02)
- Cards: rounded-lg (8px), bg-card, shadow-elevated, glow-red on hover with scale-up effect
- Badges: rounded-full (pill), text-xs font-semibold, red/blue variants for genre/status

## Motion

- Entrance: fade-in 0.4s + slide-up 0.4s on section load
- Hover: card-hover (scale-105 + glow-red) 0.3s cubic-bezier
- Carousel: smooth scroll, no bounce

## Constraints

- Red (#94271a / OKLCH 0.58 0.22 25) for all primary CTAs, never secondary actions
- Blue (#1e5fbf / OKLCH 0.65 0.18 255) for secondary, explore, contrast actions only
- No component color overrides — use semantic tokens exclusively
- Card radius 8px (rounded-lg) — balance cinematic softness with modern clarity
- Glow effects render only on dark mode; skip on light if ever needed

## Signature Detail

Red/blue dual-accent card glows on hover create the cinematic streaming signature — bold, deliberate, and instantly recognizable as premium OTT branding.
