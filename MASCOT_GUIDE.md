# UniPact Mascot Brand & Implementation Guide

## 1. Overview & Concept

The official mascot for **UniPact** is a stylized 2D dragon representing youthful ambition, technical skill, collaborative spirit, and university talent. Rather than a fierce mythical beast, the UniPact dragon is approachable, curious, and modern, designed with clean geometric curves and minimal lines that integrate seamlessly into modern web interfaces.

### Core Attributes
- **Name:** "Pacty" (or "The UniPact Dragon")
- **Archetype:** The Ambitious Creator / Digital Pioneer
- **Tone:** Friendly, intelligent, capable, dependable, joyful
- **Primary Function:** Serves as a brand ambassador, contextual guide for empty states/onboarding, and the visual avatar for student talent categories (Engineering, Creative Media, and Management).

---

## 2. Visual Anatomy & Style Rules

The mascot follows a **Minimal Geometric Vector style**, prioritizing crisp vector clarity, scalable strokes, and zero visual clutter.

```
       /\___/\          <-- Soft, rounded horns with navy ring accents
      (  ^o^  )         <-- Expressive sparkling eyes with a cheerful, proud smile
      /  > <  \         <-- Compact chibi torso with cyan gradient body
     /|   _   |\        <-- Small stylized wings (sharp polygonal interior)
    (_|  / \  |_)       <-- Rounded sitting paws with clean grounding line
```

### Proportions & Silhouette
- **Chibi Scale:** The head represents approximately 40% of the total character height.
- **Roundness:** Sharp acute angles are reserved strictly for wing tips and horn edges; body contours, snout, and limbs must remain smoothly curved.
- **Outlines:** Bold continuous outlines in Deep Navy (`#0A1748`) at a consistent stroke weight (4px on a 128x128px artboard, 32px on a 1024x1024px canvas).
- **Geometric Accents:** Subtle floating geometric motifs (hexagons, diamonds, circles) orbit the dragon to reinforce the digital tech theme.

### Facial Emotion & Expression Rules
- **Lively Emotion:** Pacty must never have a blank, cold, or disconnected stare. The face must radiate warmth, focus, and enthusiasm.
- **Sparkling Eyes:** Dark navy pupils include bright light glints/sparkles to convey curiosity and intelligence.
- **Warm Smile & Cheeks:** A subtle curve to the mouth and soft cyan-light cheek accents provide an inviting, approachable demeanor.
- **Mood Variation:**
  - *Engineering:* Focused, proud, delighted problem-solver grin.
  - *Creative Media:* Eager, inspired, alert creative spark.
  - *Management:* Confident, upbeat leadership smile.

### Camera Perspective & Spatial Realism
- **3/4 Angle Standard:** Characters and props are rendered in a dynamic 3/4 perspective that gives three-dimensional depth within a 2D vector style.
- **Prop Spatial Logic:** Props must align realistically with the character's line of sight and hands:
  - **Laptops / Monitors:** The dragon faces and types on the keyboard while looking at the screen. The viewer sees the **outer back lid** of the laptop (adorned with a clean navy chassis and subtle glowing cyan emblem). The screen must **never** be turned backwards toward the viewer while the dragon types from behind.
  - **Cameras:** Held naturally with lens aimed forward or angled slightly toward the viewer.
  - **Tablets / Charts:** Angled naturally in a 3/4 posture toward the viewer for clear data visibility.

---

## 3. Color Token Mapping

All mascot artwork strictly adheres to the official UniPact frontend design system tokens.

| Element | Token Name | Hex Value | Usage in Mascot |
| :--- | :--- | :--- | :--- |
| **Outlines & Shadows** | `--navy-deep` | `#0A1748` | Primary line-art strokes, pupils, dark horn rings |
| **Secondary Accents** | `--navy` | `#0B1E63` | Wing framework, inner ears, deep shadow areas |
| **Primary Skin / Body** | `--cyan` | `#00AEEF` | Main torso, tail, head, facial skin |
| **Highlights & Belly** | `--cyan-light` | `#70D6FF` | Tummy patch, chest scales, horn tips, eye reflections |
| **Hover / Deep Tone** | `--cyan-deep` | `#0090C6` | Shading beneath limbs, wing membranes |
| **Floating Particles** | `--cyan` / `--border` | `#00AEEF` / `rgba(10,23,72,0.2)` | Floating code nodes, hexagons, and icons |

---

## 4. Talent Vertical Variations

The mascot is modular. While the base body posture remains consistent, hands and props swap out to represent different disciplines across the UniPact platform:

| Discipline | Prop & Orientation | Tagline | Asset |
| :--- | :--- | :--- | :--- |
| **Tech & Engineering** | Ultra-thin laptop angled in 3/4 view with the outer back lid facing viewer (glowing cyan emblem), dragon smiling warmly while typing | *"Build & Ship"* | `assets/mascot/talent/dragon-coding.jpg` |
| **Creative & Media** | Mirrorless digital camera with lens glass reflection & aperture motifs | *"Capture & Create"* | `assets/mascot/talent/dragon-camera.jpg` |
| **Strategy & Management** | Growth metrics tablet & official UP monogram lanyard badge | *"Lead & Scale"* | `assets/mascot/talent/dragon-management.jpg` |

---

## 5. Usage & Placement Guidelines

### Clear Space Requirements
Always maintain a minimum clear space around the mascot equal to the height of its horn ($X$).

### Minimum Sizing
- **Vector / SVG:** Minimum display width: 32px x 32px.
- **In-App Cards:** Standard display size: 160px x 160px to 220px x 220px.
- **Hero & Landing Pages:** 320px x 320px up to 480px x 480px.

### Don'ts (Strict Prohibitions)
- ❌ **Do not reverse prop orientation:** Never face a laptop screen toward the viewer while the character is typing behind it.
- ❌ **Do not use blank or emotionless expressions:** Avoid rigid, neutral stares; always maintain expressive, joyful, and confident facial emotion.
- ❌ **Do not change the core skin color** to green, red, or purple. The mascot is strictly an ambassador of UniPact Navy and Cyan.
- ❌ **Do not apply realistic drop shadows**, 3D embossing, or skeuomorphic textures to the 2D vector asset.
- ❌ **Do not stretch, skew, or flip** the character horizontally when props contain text or asymmetric logos.
- ❌ **Do not place the cyan body** directly over a cyan background without a white or navy container card.

---

## 6. Prompt Engineering Formula for New Variants

```text
A cute minimalist 2D flat vector baby dragon mascot based on the UniPact brand reference character, modern tech branding style. 
Deep navy blue (#0A1748) bold clean outlines, vibrant electric cyan (#00AEEF) body, soft cyan accents, small curved horns with navy stripes. 
Expressive, joyful, focused facial emotion with happy sparkling dark eyes and an enthusiastic proud smile. 
Correct 3/4 camera perspective: the dragon is holding [INSERT SPECIFIC PROP WITH LOGICAL ORIENTATION, e.g., typing on a laptop with the outer back lid and glowing emblem facing the viewer], 
representing [INSERT TALENT DISCIPLINE, e.g., Software Engineering]. 
Floating geometric shapes and data nodes in background, isolated on a solid pure white background, sticker style, Dribbble modern vector illustration.
```

---

## 7. Asset Implementation Standards

### File Organization
```
src/assets/mascot/ (and assets/mascot/)
├── base/
│   └── dragon-neutral.png
├── talent/
│   ├── dragon-coding.jpg          (3/4 angle, back of laptop lid, joyful expression)
│   ├── dragon-camera.jpg
│   └── dragon-management.jpg
└── animated/
    ├── dragon-typing.riv          (Rive animation file)
    ├── dragon-blink.json          (Lottie JSON animation file)
    └── preview.html               (Interactive browser preview)
```

### Integration Examples

#### 1. Lottie Animation (`dragon-blink.json`)
```html
<!-- Include Lottie Web Player -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>

<div id="pacty-blink" style="width: 200px; height: 200px;"></div>

<script>
  lottie.loadAnimation({
    container: document.getElementById('pacty-blink'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/assets/mascot/animated/dragon-blink.json'
  });
</script>
```

#### 2. Rive Animation (`dragon-typing.riv`)
```html
<!-- Include Rive Web Runtime -->
<script src="https://unpkg.com/@rive-app/canvas@2.9.1"></script>

<canvas id="pacty-typing" width="400" height="400"></canvas>

<script>
  const r = new rive.Rive({
    src: '/assets/mascot/animated/dragon-typing.riv',
    canvas: document.getElementById('pacty-typing'),
    autoplay: true,
    stateMachines: 'PactyCodingLoop',
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    }
  });
</script>
```
