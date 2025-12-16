# Vowel Pronunciation Path Visualizer

An interactive web application that visualizes how vowels move through articulatory space across different languages. Watch the tongue glide smoothly between vowel positions in real-time, mapped onto an anatomical representation of the vocal tract.

![Vowel Diagram Visualizer](https://img.shields.io/badge/status-active-success.svg)
![Languages](https://img.shields.io/badge/languages-5-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Features

- **Interactive Vowel Trapezoid**: IPA vowel chart showing tongue height (close/mid/open) and position (front/central/back)
- **Anatomical Visualization**: Sagittal view of the mouth and vocal tract showing lips, teeth, palate, and pharynx
- **Smooth Tongue Animation**: Watch the tongue morph and glide between vowel positions in real-time
- **Multi-language Support**: Explore vowel systems across 5 languages:
  - 🇬🇧 English (13 vowels)
  - 🇪🇸 Spanish (5 vowels)
  - 🇫🇷 French (10 vowels)
  - 🇩🇪 German (9 vowels)
  - 🇮🇹 Italian (7 vowels)
- **Word-based Visualization**: Type any supported word to see its vowel sequence animated
- **Educational Tool**: Perfect for linguistics students, language learners, and phonetics enthusiasts

## Demo

Simply type a word (e.g., "cat", "father", "thought" in English, or "casa", "mesa" in Spanish) and watch:

1. The phonetic transcription appear
2. The vowel path drawn across the trapezoid
3. The tongue smoothly morphing between positions
4. Static markers showing each vowel position

## Getting Started

### Installation

No installation required! This is a pure HTML/CSS/JavaScript application.

1. Clone or download this repository:
```bash
git clone https://github.com/yourusername/vowel-diagram-visualizer.git
cd vowel-diagram-visualizer
```

2. Open `index.html` in any modern web browser

That's it! No build process, no dependencies, no server needed.

### Usage

1. **Select a language** from the dropdown menu
2. **Type a word** from the available dictionary (see supported words below)
3. **Click "Visualize"** or press Enter
4. **Watch the animation** showing how your mouth moves through the vowels

### Supported Words by Language

**English**: see, sit, cat, cup, food, bed, about, bird, father, thought, foot, day, go

**Spanish**: casa, peso, piso, oso, luna, mesa, mina, solo, agua

**French**: lit, lune, été, feu, mère, peur, chat, porte, beau, fou

**German**: bier, über, beet, schön, bett, vater, oft, boot, fuß

**Italian**: vino, sera, bello, casa, cosa, volo, luna

## How It Works

### The Vowel Trapezoid

The trapezoid shape represents the articulatory vowel space based on:
- **X-axis (horizontal)**: Tongue position from front (0) to back (100)
- **Y-axis (vertical)**: Tongue height from close/high (0) to open/low (100)

The trapezoid is wider at the bottom because there's more space for tongue movement when the mouth is open.

### Coordinate System

Each vowel is positioned using coordinates that map to actual tongue positions:
```javascript
'i': { x: 10, y: 10 }  // Front, close (as in "see")
'ɑ': { x: 70, y: 85 }  // Back, open (as in "father")
```

The `vowelToSVG()` function interpolates these coordinates onto the trapezoid shape.

### Animation System

The animation uses CSS transitions for smooth, continuous movement:
- A single tongue shape that morphs between positions
- 600ms transition duration between vowels
- 200ms pause at each vowel position
- Static markers left behind to show the complete path

## Project Structure

```
vowel-diagram-visualizer/
├── index.html          # Main HTML structure with SVG diagram
├── styles.css          # All styling and responsive design
├── script.js           # Vowel data, rendering logic, and animations
├── README.md           # This file
└── CLAUDE.md          # Developer guidance for AI assistants
```

## Customization

### Adding New Words

Edit the `phoneticRules` object in `script.js`:

```javascript
phoneticRules: {
  en: {
    'newword': ['n', 'u', 'w', 'ɜː', 'd'],
    // ... more words
  }
}
```

### Adding New Languages

1. Add the language option to the `<select>` in `index.html`
2. Add vowel inventory to `vowelData` in `script.js`:
```javascript
pt: {
  name: "Portuguese",
  vowels: {
    'i': { x: 10, y: 15, label: 'i (piso)' },
    // ... more vowels
  }
}
```
3. Add phonetic rules to `phoneticRules`

### Adjusting Animation Speed

In `script.js`, modify the animation timing:

```javascript
const duration = 600;      // ms per vowel transition
const pauseDuration = 200; // ms pause at each vowel
```

## Browser Compatibility

Works on all modern browsers that support:
- SVG
- CSS transitions
- ES6 JavaScript

Tested on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Educational Use

This tool is ideal for:
- **Phonetics courses**: Demonstrating articulatory phonetics
- **Language learning**: Understanding how vowels differ across languages
- **Speech therapy**: Visualizing tongue positions
- **Self-study**: Exploring IPA vowels interactively

## Technical Details

### Technologies Used
- **HTML5** for structure
- **CSS3** for styling and transitions
- **Vanilla JavaScript** for logic (no frameworks)
- **SVG** for scalable graphics

### Key Features
- Fully client-side (no server needed)
- No external dependencies
- Responsive design
- Smooth 60fps animations

## Contributing

Contributions are welcome! Areas for improvement:

- Add more languages (Japanese, Arabic, Russian, etc.)
- Expand word dictionaries
- Add diphthong visualization
- Include audio pronunciations
- Add a grapheme-to-phoneme converter for automatic transcription

## License

MIT License - feel free to use this project for educational purposes, modify it, or integrate it into your own applications.

## Acknowledgments

- IPA vowel chart based on the International Phonetic Alphabet
- Anatomical diagram inspired by standard phonetics textbooks
- Vowel positions sourced from phonetic research literature

## Contact

Have questions or suggestions? Feel free to open an issue or submit a pull request!

---

**Enjoy exploring the fascinating world of vowel articulation!** 🗣️✨
