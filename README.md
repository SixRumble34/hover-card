# Hover Card Selector

A small HTML, CSS, and JavaScript project that creates an interactive card-selection interface.

The project features a central active card with two secondary cards hidden behind it. Hovering over the active card reveals the secondary cards, which can then be selected to become the new active card.

The visual design uses a black, white, and red color scheme with animated borders, card shadows, rotations, and layered card positioning.

## Features

- Three-card selection system
- One active card displayed in front
- Two secondary cards displayed behind the active card
- Secondary cards remain hidden until the active card is hovered
- Secondary cards can be clicked to become the active card
- Circular card rotation
- Animated red border around the active card
- Hover effects on secondary cards
- Secondary card titles remain visible when revealed
- Layered card positioning
- Responsive layout for smaller screens
- No external libraries or frameworks required

## How It Works

The application keeps track of which card is currently active using JavaScript.

The cards rotate in a circular order:

```text
CARD 1
  ↓
CARD 2
  ↓
CARD 3
  ↓
CARD 1