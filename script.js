// Vowel positions in the trapezoid (x, y coordinates)
// x: 0 (front) to 100 (back)
// y: 0 (close) to 100 (open)

const vowelData = {
    en: {
        name: "English",
        vowels: {
            'i': { x: 10, y: 10, label: 'i (see)' },
            'ɪ': { x: 20, y: 25, label: 'ɪ (sit)' },
            'e': { x: 15, y: 40, label: 'e (day)' },
            'ɛ': { x: 25, y: 50, label: 'ɛ (bed)' },
            'æ': { x: 30, y: 70, label: 'æ (cat)' },
            'ə': { x: 50, y: 45, label: 'ə (about)' },
            'ʌ': { x: 55, y: 60, label: 'ʌ (cup)' },
            'ɜː': { x: 45, y: 50, label: 'ɜː (bird)' },
            'ɑ': { x: 70, y: 85, label: 'ɑ (father)' },
            'ɔ': { x: 80, y: 60, label: 'ɔ (thought)' },
            'o': { x: 85, y: 40, label: 'o (go)' },
            'ʊ': { x: 90, y: 25, label: 'ʊ (foot)' },
            'u': { x: 95, y: 10, label: 'u (food)' }
        }
    },
    es: {
        name: "Spanish",
        vowels: {
            'i': { x: 10, y: 15, label: 'i (piso)' },
            'e': { x: 20, y: 45, label: 'e (peso)' },
            'a': { x: 50, y: 85, label: 'a (casa)' },
            'o': { x: 80, y: 45, label: 'o (oso)' },
            'u': { x: 90, y: 15, label: 'u (luna)' }
        }
    },
    fr: {
        name: "French",
        vowels: {
            'i': { x: 10, y: 10, label: 'i (lit)' },
            'y': { x: 15, y: 10, label: 'y (lune)' },
            'e': { x: 15, y: 40, label: 'e (été)' },
            'ø': { x: 20, y: 40, label: 'ø (feu)' },
            'ɛ': { x: 20, y: 55, label: 'ɛ (mère)' },
            'œ': { x: 25, y: 55, label: 'œ (peur)' },
            'a': { x: 45, y: 85, label: 'a (chat)' },
            'ɔ': { x: 80, y: 60, label: 'ɔ (porte)' },
            'o': { x: 85, y: 40, label: 'o (beau)' },
            'u': { x: 90, y: 10, label: 'u (fou)' }
        }
    },
    de: {
        name: "German",
        vowels: {
            'i': { x: 10, y: 10, label: 'i (Bier)' },
            'y': { x: 15, y: 10, label: 'y (über)' },
            'e': { x: 15, y: 40, label: 'e (Beet)' },
            'ø': { x: 20, y: 40, label: 'ø (schön)' },
            'ɛ': { x: 20, y: 55, label: 'ɛ (Bett)' },
            'a': { x: 45, y: 85, label: 'a (Vater)' },
            'ɔ': { x: 80, y: 60, label: 'ɔ (oft)' },
            'o': { x: 85, y: 40, label: 'o (Boot)' },
            'u': { x: 90, y: 10, label: 'u (Fuß)' }
        }
    },
    it: {
        name: "Italian",
        vowels: {
            'i': { x: 10, y: 15, label: 'i (vino)' },
            'e': { x: 20, y: 40, label: 'e (sera)' },
            'ɛ': { x: 25, y: 50, label: 'ɛ (bello)' },
            'a': { x: 50, y: 85, label: 'a (casa)' },
            'ɔ': { x: 75, y: 50, label: 'ɔ (cosa)' },
            'o': { x: 80, y: 40, label: 'o (volo)' },
            'u': { x: 90, y: 15, label: 'u (luna)' }
        }
    }
};

// Simple phonetic conversion rules (basic examples - can be expanded)
const phoneticRules = {
    en: {
        'see': ['s', 'i'],
        'sit': ['s', 'ɪ', 't'],
        'cat': ['k', 'æ', 't'],
        'cup': ['k', 'ʌ', 'p'],
        'food': ['f', 'u', 'd'],
        'bed': ['b', 'ɛ', 'd'],
        'about': ['ə', 'b', 'ɑ', 't'],
        'bird': ['b', 'ɜː', 'd'],
        'father': ['f', 'ɑ', 'ð', 'ə'],
        'thought': ['θ', 'ɔ', 't'],
        'foot': ['f', 'ʊ', 't'],
        'day': ['d', 'e'],
        'go': ['g', 'o']
    },
    es: {
        'casa': ['k', 'a', 's', 'a'],
        'peso': ['p', 'e', 's', 'o'],
        'piso': ['p', 'i', 's', 'o'],
        'oso': ['o', 's', 'o'],
        'luna': ['l', 'u', 'n', 'a'],
        'mesa': ['m', 'e', 's', 'a'],
        'mina': ['m', 'i', 'n', 'a'],
        'solo': ['s', 'o', 'l', 'o'],
        'agua': ['a', 'g', 'u', 'a']
    },
    fr: {
        'lit': ['l', 'i'],
        'lune': ['l', 'y', 'n'],
        'été': ['e', 't', 'e'],
        'feu': ['f', 'ø'],
        'mère': ['m', 'ɛ', 'ʁ'],
        'peur': ['p', 'œ', 'ʁ'],
        'chat': ['ʃ', 'a'],
        'porte': ['p', 'ɔ', 'ʁ', 't'],
        'beau': ['b', 'o'],
        'fou': ['f', 'u']
    },
    de: {
        'bier': ['b', 'i', 'ʁ'],
        'über': ['y', 'b', 'ɐ'],
        'beet': ['b', 'e', 't'],
        'schön': ['ʃ', 'ø', 'n'],
        'bett': ['b', 'ɛ', 't'],
        'vater': ['f', 'a', 't', 'ɐ'],
        'oft': ['ɔ', 'f', 't'],
        'boot': ['b', 'o', 't'],
        'fuß': ['f', 'u', 's']
    },
    it: {
        'vino': ['v', 'i', 'n', 'o'],
        'sera': ['s', 'e', 'r', 'a'],
        'bello': ['b', 'ɛ', 'l', 'l', 'o'],
        'casa': ['k', 'a', 's', 'a'],
        'cosa': ['k', 'ɔ', 's', 'a'],
        'volo': ['v', 'o', 'l', 'o'],
        'luna': ['l', 'u', 'n', 'a']
    }
};

let currentLanguage = 'en';
let animationTimeout = null;

// Convert vowel position to SVG coordinates
function vowelToSVG(x, y) {
    // Map 0-100 to trapezoid shape
    const topWidth = 400;  // Width at top (front to back)
    const bottomWidth = 500;  // Width at bottom
    const height = 300;  // Trapezoid height

    const topLeft = 100;
    const topY = 50;

    // Interpolate width based on y position
    const currentWidth = topWidth + (bottomWidth - topWidth) * (y / 100);
    const leftMargin = topLeft - ((bottomWidth - topWidth) / 2) * (y / 100);

    return {
        x: leftMargin + (currentWidth * (x / 100)),
        y: topY + (height * (y / 100))
    };
}

// Render vowel diagram
function renderDiagram() {
    const svg = document.getElementById('vowel-diagram');
    const vowelPoints = document.getElementById('vowel-points');
    const gridLines = document.getElementById('grid-lines');

    // Clear existing elements
    vowelPoints.innerHTML = '';
    gridLines.innerHTML = '';

    // Draw horizontal grid lines
    for (let i = 0; i <= 100; i += 50) {
        const start = vowelToSVG(0, i);
        const end = vowelToSVG(100, i);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', start.x);
        line.setAttribute('y1', start.y);
        line.setAttribute('x2', end.x);
        line.setAttribute('y2', end.y);
        line.setAttribute('stroke', '#ddd');
        line.setAttribute('stroke-width', '1');
        gridLines.appendChild(line);
    }

    // Render vowels for current language
    const vowels = vowelData[currentLanguage].vowels;
    Object.entries(vowels).forEach(([symbol, data]) => {
        const pos = vowelToSVG(data.x, data.y);

        // Create circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', pos.x);
        circle.setAttribute('cy', pos.y);
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', '#3498db');
        circle.setAttribute('class', 'vowel-point');
        circle.setAttribute('data-vowel', symbol);

        // Create label
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', pos.x);
        text.setAttribute('y', pos.y - 12);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('class', 'vowel-label');
        text.textContent = symbol;

        // Add tooltip
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = data.label;
        circle.appendChild(title);

        vowelPoints.appendChild(circle);
        vowelPoints.appendChild(text);
    });
}

// Create tongue shape based on vowel position
function createTongueShape(x, y) {
    // Map vowel position to tongue contour
    const pos = vowelToSVG(x, y);

    // Create a curved tongue shape that reaches toward the vowel position
    // Front vowels: tongue bunched forward
    // Back vowels: tongue bunched backward
    // High vowels: tongue raised
    // Low vowels: tongue lowered

    const tongueBase = 'M 100 350';
    const tongueTip = x < 30 ? 'Q 120 340, 140 330' : x < 70 ? 'Q 180 340, 220 330' : 'Q 250 340, 300 330';
    const tongueBody = `Q ${pos.x - 50} ${pos.y + 30}, ${pos.x} ${pos.y + 20}`;
    const tongueBack = `Q ${pos.x + 80} ${pos.y + 40}, ${450 + (100 - y) * 0.5} ${320 + y * 0.3}`;
    const tongueRoot = 'Q 480 340, 500 350';

    return `${tongueBase} ${tongueTip} ${tongueBody} ${tongueBack} ${tongueRoot}`;
}

// Animate vowel path
function animateVowelPath(vowels) {
    const animationLayer = document.getElementById('animation-layer');
    animationLayer.innerHTML = '';

    const validVowels = vowels.filter(v => vowelData[currentLanguage].vowels[v]);

    if (validVowels.length === 0) return;

    // Draw path
    const pathData = validVowels.map((vowel, i) => {
        const data = vowelData[currentLanguage].vowels[vowel];
        const pos = vowelToSVG(data.x, data.y);
        return `${i === 0 ? 'M' : 'L'} ${pos.x} ${pos.y}`;
    }).join(' ');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('stroke', '#e74c3c');
    path.setAttribute('stroke-width', '3');
    path.setAttribute('fill', 'none');
    path.setAttribute('class', 'vowel-path');
    animationLayer.appendChild(path);

    // Create animated tongue that morphs smoothly between positions
    const animatedTongue = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    animatedTongue.setAttribute('fill', 'rgba(255, 100, 100, 0.4)');
    animatedTongue.setAttribute('stroke', '#e74c3c');
    animatedTongue.setAttribute('stroke-width', '2.5');
    animatedTongue.setAttribute('class', 'animated-tongue-morph');
    animationLayer.appendChild(animatedTongue);

    // Create moving circle indicator
    const movingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    movingCircle.setAttribute('r', '12');
    movingCircle.setAttribute('fill', '#e74c3c');
    movingCircle.setAttribute('class', 'moving-indicator');
    movingCircle.style.opacity = '0';
    animationLayer.appendChild(movingCircle);

    // Create moving label
    const movingLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    movingLabel.setAttribute('text-anchor', 'middle');
    movingLabel.setAttribute('class', 'moving-label');
    movingLabel.setAttribute('fill', '#e74c3c');
    movingLabel.style.fontWeight = 'bold';
    movingLabel.style.fontSize = '16px';
    movingLabel.style.opacity = '0';
    animationLayer.appendChild(movingLabel);

    // Animate smoothly through each vowel
    const duration = 600; // ms per vowel
    const pauseDuration = 200; // pause at each vowel

    validVowels.forEach((vowel, index) => {
        const data = vowelData[currentLanguage].vowels[vowel];
        const pos = vowelToSVG(data.x, data.y);
        const tongueShape = createTongueShape(data.x, data.y);

        setTimeout(() => {
            // Fade in on first vowel
            if (index === 0) {
                animatedTongue.style.opacity = '0';
                movingCircle.style.opacity = '0';
                movingLabel.style.opacity = '0';

                setTimeout(() => {
                    animatedTongue.style.transition = 'opacity 0.3s ease-in-out';
                    movingCircle.style.transition = 'opacity 0.3s ease-in-out';
                    movingLabel.style.transition = 'opacity 0.3s ease-in-out';
                    animatedTongue.style.opacity = '1';
                    movingCircle.style.opacity = '0.9';
                    movingLabel.style.opacity = '1';
                }, 50);
            }

            // Smooth transition to new position
            animatedTongue.style.transition = `d ${duration}ms ease-in-out`;
            movingCircle.style.transition = `cx ${duration}ms ease-in-out, cy ${duration}ms ease-in-out`;
            movingLabel.style.transition = `x ${duration}ms ease-in-out, y ${duration}ms ease-in-out`;

            animatedTongue.setAttribute('d', tongueShape);
            movingCircle.setAttribute('cx', pos.x);
            movingCircle.setAttribute('cy', pos.y);
            movingLabel.setAttribute('x', pos.x);
            movingLabel.setAttribute('y', pos.y + 30);
            movingLabel.textContent = vowel;

            // Add static markers that stay visible
            setTimeout(() => {
                const staticCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                staticCircle.setAttribute('cx', pos.x);
                staticCircle.setAttribute('cy', pos.y);
                staticCircle.setAttribute('r', '8');
                staticCircle.setAttribute('fill', '#ff6b6b');
                staticCircle.setAttribute('opacity', '0.6');
                animationLayer.appendChild(staticCircle);

                const staticLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                staticLabel.setAttribute('x', pos.x);
                staticLabel.setAttribute('y', pos.y - 15);
                staticLabel.setAttribute('text-anchor', 'middle');
                staticLabel.setAttribute('fill', '#c0392b');
                staticLabel.style.fontWeight = 'bold';
                staticLabel.style.fontSize = '14px';
                staticLabel.textContent = vowel;
                animationLayer.appendChild(staticLabel);
            }, duration);

        }, index * (duration + pauseDuration));
    });

    // Fade out at the end
    const totalTime = validVowels.length * (duration + pauseDuration) + 500;
    setTimeout(() => {
        animatedTongue.style.transition = 'opacity 0.5s ease-out';
        movingCircle.style.transition = 'opacity 0.5s ease-out';
        movingLabel.style.transition = 'opacity 0.5s ease-out';
        animatedTongue.style.opacity = '0';
        movingCircle.style.opacity = '0';
        movingLabel.style.opacity = '0';
    }, totalTime);
}

// Get phonetic transcription
function getPhonetics(word) {
    const lowerWord = word.toLowerCase();
    return phoneticRules[currentLanguage][lowerWord] || [];
}

// Event listeners
document.getElementById('language-select').addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    document.getElementById('current-lang').textContent = vowelData[currentLanguage].name;
    renderDiagram();
    document.getElementById('phonetic-display').innerHTML = '';
    document.getElementById('animation-layer').innerHTML = '';
});

document.getElementById('visualize-btn').addEventListener('click', () => {
    const word = document.getElementById('word-input').value.trim();
    if (!word) return;

    const phonetics = getPhonetics(word);
    const vowels = phonetics.filter(p => vowelData[currentLanguage].vowels[p]);

    if (phonetics.length === 0) {
        document.getElementById('phonetic-display').innerHTML =
            `<p class="error">Word "${word}" not found in dictionary. Try: ${Object.keys(phoneticRules[currentLanguage]).join(', ')}</p>`;
        return;
    }

    document.getElementById('phonetic-display').innerHTML =
        `<p><strong>Phonetic:</strong> [${phonetics.join('')}]</p>
         <p><strong>Vowels:</strong> ${vowels.join(', ') || 'none'}</p>`;

    if (vowels.length > 0) {
        animateVowelPath(vowels);
    }
});

// Enter key support
document.getElementById('word-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('visualize-btn').click();
    }
});

// Initialize
renderDiagram();
document.getElementById('current-lang').textContent = vowelData[currentLanguage].name;
