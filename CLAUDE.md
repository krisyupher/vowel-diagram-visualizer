# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Vowel Pronunciation Path Visualizer** - an interactive web application that visualizes how vowels move through articulatory space across different languages. It uses the IPA vowel trapezoid to show vowel positions based on tongue height (close/mid/open) and tongue position (front/central/back).

The application is a standalone HTML/CSS/JS project with no build system or dependencies.

## Running the Application

Open [index.html](index.html) directly in a web browser. No build step or server required.

## Project Structure

- **[index.html](index.html)** - Main HTML structure with SVG trapezoid diagram
- **[script.js](script.js)** - All application logic including vowel data, rendering, and animation
- **styles.css** - CSS styling (referenced but not yet created)

## Architecture

### Vowel Data Structure

The core of the application is the `vowelData` object in [script.js](script.js), which maps language codes to vowel inventories:

```javascript
vowelData = {
  [languageCode]: {
    name: "Language Name",
    vowels: {
      [IPASymbol]: { x: 0-100, y: 0-100, label: 'example word' }
    }
  }
}
```

- **x coordinate**: 0 (front) to 100 (back) - horizontal tongue position
- **y coordinate**: 0 (close) to 100 (open) - vertical tongue height
- Coordinates are mapped to the SVG trapezoid using `vowelToSVG()` function

### Phonetic Rules

The `phoneticRules` object provides simplified phonetic transcriptions for specific words in each language. These are used to:
1. Display IPA transcription when a user enters a word
2. Extract vowel sequences for visualization
3. Provide example words for users

**Important**: This is a basic dictionary system, not a full grapheme-to-phoneme converter. Only pre-defined words can be visualized.

### Coordinate System & SVG Mapping

The trapezoid shape is fundamental to the design:
- Top edge (y=0): 400px wide, representing close vowels
- Bottom edge (y=100): 500px wide, representing open vowels
- The `vowelToSVG()` function interpolates width based on y position to maintain the trapezoid shape
- This reflects the actual shape of the articulatory vowel space

### Animation System

When visualizing a word:
1. Vowel phonemes are extracted from the word's phonetic transcription
2. A red path is drawn connecting consecutive vowels in the SVG
3. Animated circles appear at each vowel position sequentially (0.5s delay between each)
4. CSS animation `fadeInOut` is applied to create the visual effect

## Supported Languages

Currently supports 5 languages with different vowel inventories:
- **en** (English): 13 vowels including schwa, extensive diphthongs
- **es** (Spanish): 5 vowels - simple symmetrical system
- **fr** (French): 10 vowels including front rounded vowels (y, ø, œ)
- **de** (German): 9 vowels including umlauts
- **it** (Italian): 7 vowels with open/close e and o distinctions

## Adding New Languages

To add a new language:

1. Add language option to the `<select>` in [index.html](index.html#L19-L25)
2. Add vowel inventory to `vowelData` in [script.js](script.js#L5-L75)
3. Add phonetic rules to `phoneticRules` in [script.js](script.js#L78-L137)

When positioning vowels, refer to the IPA vowel chart. The coordinate system maps directly to standard phonetic vowel space.

## Adding New Words

Add entries to the appropriate language in the `phoneticRules` object at [script.js](script.js#L78-L137). Format:

```javascript
'word': ['phoneme1', 'phoneme2', ...]
```

Only include phonemes that exist in that language's vowel inventory, or consonants that won't be visualized (they're filtered out during animation).
