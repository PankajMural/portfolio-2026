const PROJECTS = {
  // heroImage & gallery: use image paths (.jpg, .png, .webp) or video paths (.mp4, .webm, .mov)
  "brand-identity": {
    slug: "Emirates Ayra Icon System ",
    title: "Ayra Iconography System",
    shortDescription:
      "To unify the Emirates Group’s vast digital and physical ecosystem, we needed a new, universal icon family for the Ayra Design System. The goal was to replace fragmented assets with a cohesive library of simple, rounded line icons that felt premium, welcoming, and distinctly aligned with the Emirates brand. ",
    overview:
      "This project established the visual foundation for the Emirates Group's digital ecosystem. Starting with core booking platforms and premium travel services, I designed a cohesive icon family that prioritized clarity and brand elevation. The system's success led to organic adoption beyond digital products—corporate marketing later extended it across global campaigns and physical airport environments, making it the Group's universal visual language.",
    services: ["Design Systems", "Iconography", "Visual Identity"],
    industries: "Aviation, Travel & Tourism, Enterprise",
    challenge:
      "The Emirates Group operates a massive ecosystem spanning digital products,global marketing campaigns, and physical airport touchpoints. Over time, this led to a fragmented visual language with inconsistent icon usage. The challenge was to architect a unified, premium, and highly scalable icon system (Ayra) from the ground up—one that could seamlessly bridge digital interfaces, marketing materials, and physical signage without losing clarity or craft at any size.",
    whatIDid:
      "<ul class=\"project-case__services\"><li><strong>Architected the System:</strong> Built the Ayra icon system from scratch, establishing a robust foundation of grids, keylines, and optical balance rules.</li><li><strong>Defined Core Principles:</strong> Standardized the visual language with a 1.2px centered stroke and 1px rounded corners to ensure a premium, approachable feel.</li><li><strong>Scaled the Library:</strong> Designed and delivered over 600 custom vector icons, ensuring legibility and consistency across multiple sizes (16px to 48px+).</li><li><strong>Drove Cross-Functional Adoption:</strong> Created comprehensive documentation, enabling seamless adoption across digital products, marketing teams, and physical airport signage.</li></ul>",
    heroImage: "images/projects/Ayra-Icons/icon-grid copy.mp4",
    gallery: [
      "images/projects/Ayra-Icons/Icons-Cover-01.jpg",
      { type: "text", content: "<div class='project-case__gallery-text'><h3 class='project-case__gallery-heading'>Strategy & Comprehensive Audit</h3><p>Before designing a single vector, we conducted a deep-dive audit of the existing website and legacy design systems. We identified the most frequently used icons, common sizes, and overall usage patterns to ensure we were designing for actual user needs.</p><p>Crucially, we aligned with internal stakeholders to establish a shared language. By defining our visual tone early—focusing on the right balance of playfulness, line weight, and roundness—we set clear expectations and mitigated friction for the rest of the project.</p></div>" },
      ,
       "images/projects/Ayra-Icons/Icon-Grid-01.mp4",
      { type: "text", content: "<div class='project-case__gallery-text'><h3 class='project-case__gallery-heading'>The Foundation: Grid & Geometry</h3><p>To ensure the icon family remained visually stable and cohesive, we established strict foundational rules:</p><ul class=\"project-case__services\"><li><strong>The Grid & Keylines:</strong> We utilized keylines based on basic geometric shapes (squares, circles, and rectangles) to maintain optical balance. This ensures that a complex icon and a simple icon look perfectly weighted when placed side-by-side in a UI.</li><li><strong>Stroke & Corners:</strong> The primary building block is a <strong>1.2px centered stroke</strong>. To maintain a modern, friendly aesthetic, corners are primarily rounded at a <strong>1px radius</strong>, with documented exceptions for optical corrections on specific shapes.</li></ul></div>" },
      ,
     "images/projects/Ayra-Icons/Fill-Outline-01.mp4",
      { type: "text", content: "<div class='project-case__gallery-text'><h3 class='project-case__gallery-heading'>Execution & Scaling the Library</h3><p>With the foundation locked, we moved into vectorization and scaling. We didn't just design for a single size; every icon was rigorously tested at 16px, 24px, 32px, and 48px. We manually adjusted strokes and simplified complex shapes to ensure the icons remained perfectly legible, even at the smallest sizes.</p><h3 class='project-case__gallery-heading'>Impact & Ecosystem Adoption</h3><p>The final deliverable was a fully functioning, scalable library of <strong>600+ custom vector icons</strong>. By providing clear usage guidelines and a structured Figma component library, we accelerated design and engineering velocity. Today, the Ayra icon system is the universal visual standard, seamlessly adopted across Emirates' core digital products, global marketing campaigns, and even physical airport signage.</p></div>" }
      ,
      "images/projects/Ayra-Icons/Icons.mp4",
    ],
  },
  "e-commerce": {
    slug: "e-commerce",
    title: "A11y Annotation Toolkit",
    shortDescription:
      " A bespoke Figma system that translates complex WCAG guidelines into actionable design annotations, bridging the gap between inclusive design and engineering.",
    overview:
      "Accessibility often becomes an expensive afterthought, creating friction across product teams. To break this cycle, I spearheaded an operational shift to embed inclusive design directly into our daily workflow. By translating complex compliance guidelines into a visual, designer-first language, we transformed accessibility from a stressful late-stage checklist into a seamless, foundational design principle.",
    overviewLink: {
      label: "Read the detailed case study on Medium",
      url: "https://medium.com/@pankajdesignhub/building-the-a11y-annotation-toolkit-a-designers-journey-to-streamline-accessibility-1a9fd8cfec34",
    },
    services: ["Accessibility Strategy", "Design Systems", "Developer Handoff", "UX Governance"],
    industries: "Aviation, Enterprise, Digital Products",
    challenge:
      "Retrofitting accessibility late in development caused costly delays and endless bug bounces between QA, frontend, and design. Designers lacked a clear, actionable way to communicate complex WCAG requirements to engineers, making inclusive design feel like an overwhelming compliance hurdle rather than a core product feature.",
    whatIDid:
      "<ul class=\"project-case__services\"><li><strong>Audited & Filtered WCAG:</strong> Analyzed all 78 WCAG 2.1 criteria and isolated the 38 directly influenced by UI/UX design decisions, giving designers clear, manageable ownership.</li><li><strong>Architected the Toolkit:</strong> Built a bespoke Figma annotation system featuring flexible Arrow, Lasso, and Detail stamps to visually map focus order, contrast, and screen reader logic without cluttering the canvas.</li><li><strong>Categorized for Clarity:</strong> Grouped annotations into three intuitive pillars: Visual Design, Screen Reader Support, and Keyboard Accessibility.</li><li><strong>Drove Adoption & Culture Shift:</strong> Led hands-on workshops and VoiceOver demonstrations to upskill the team, ultimately reducing QA accessibility testing time by 30% and eliminating late-stage design rework.</li></ul>",
    heroImage: "images/projects/A11y/Ay11-2.mp4",
    gallery: ["images/projects/A11y/accessility_1.mp4"],
  },
  "agency-portfolio": {
    slug: "agency-portfolio",
    title: "Emirates Executive — Private Aviation",
    shortDescription:
      "Transforming a generic website into a luxury digital experience that matches the exclusivity of private jet travel for world leaders and C-suite executives.",
    overview:
      "Emirates Executive serves heads of state and ultra-high-net-worth individuals—a discerning audience that judges quality by what is not there as much as by what is. The existing single-page website failed to communicate the exclusivity and bespoke service of the product. I led a complete strategic redesign, moving from a cramped single-page layout to a sophisticated multi-page architecture that balances immersive storytelling with performance, SEO, and scalability.",
    services: ["UX Strategy", " Interaction Design", " Content Strategy", " Visual Design"],
    industries: "Aviation, Luxury Travel, Premium Services",
    challenge:
      "The existing website was generic, outdated, and structurally flawed. A single scrolling page buried critical information, lacked clear CTAs, and couldn't showcase the depth of the private jet experience. The core challenge was translating physical luxury—privacy, exclusivity, bespoke service—into digital interaction for an audience where trust and quality matter more than price.",
    whatIDid:
      "<ul class=\"project-case__services\"><li><strong>Conducted Comprehensive UX Audit:</strong> Identified critical failures including buried CTAs, poor SEO performance, lack of responsive design, and insufficient luxury storytelling.</li><li><strong>Validated Architecture Decision:</strong> Mapped multi-page vs. single-page against eight criteria (SEO, scalability, performance, content organization), turning design opinion into evidence-based stakeholder buy-in.</li><li><strong>Restructured Information Architecture:</strong> Replaced the single-page design with a focused 4-page structure (Homepage, Experience, Aircraft, Contact) to reduce cognitive overload and enable progressive storytelling.</li><li><strong>Designed Immersive Digital Experience:</strong> Integrated 3D aircraft walkthrough, interactive seat-map inspired navigation, and contextual media (photography/video embedded within narrative sections) to help users visualize the private jet experience.</li><li><strong>Crafted Luxury Content Strategy:</strong> Redesigned information into digestible feature-based storytelling blocks with short cinematic videos (10-15 sec), real-life usage scenarios, and progressive content reveal.</li><li><strong>Built Conversion-Focused Booking Flow:</strong> Introduced a modular request flow designed to feel like a concierge dialogue rather than a form submission, with floating action buttons ensuring booking access across all devices.</li></ul>",
    heroImage: "images/projects/Executive-Jet/Exe-Jet-Cover-720p.mp4",
    gallery: ["", "", "", ""],
  },
  "product-landing": {
    slug: "Kerzner Multi-Brand Design System",
    title: "Kerzner Multi-Brand Design System",
    shortDescription:
      "One design system. Seven luxury brands. Built a unified component library for Atlantis, One&Only, Bab Al Shams, and Mazagan within a fixed development contract, enabling distinct luxury brand identities through tokenized theming.",
    overview:
      "Kerzner International operates multiple luxury hospitality brands—Atlantis (Dubai and The Palm), One&Only Resorts, Bab Al Shams Desert Resort, and Mazagan—each demanding a distinct premium identity. The challenge: architect a single design system serving all brands while working within a development agency's fixed component contract. Every visual decision balanced brand uniqueness with strict reusability, ensuring production-ready delivery with zero room for post-handoff revisions.",
    services: ["Design Systems", "Multi-Brand Architecture", "Component Library Design ", "Visual Design ",],
    industries: "Hospitality, Luxury Travel, Tourism, eCommerce, Premium Resorts",
    challenge:
      "The development contract limited the number of components that could be built. Each Kerzner brand—Atlantis, One&Only, Bab Al Shams, and Mazagan—needed unique visual expression through type, imagery, button shapes, and spacing without creating duplicate components. Visuals had to be production-ready before handoff",
    whatIDid:
      "<ul class=\"project-case__services\"><li><strong>Conducted Component & Pattern Audit:</strong> Catalogued every UI pattern needed across Atlantis, One&Only, Bab Al Shams, and Mazagan, checking each against the agency's fixed component count and merging near-duplicates before visual design.</li><li><strong>Performed Accessibility Audit:</strong> Reviewed existing brand sites against WCAG 2.1 standards, identifying contrast, focus management, and semantic structure gaps that were baked into the new component specifications from day one.</li><li><strong>Defined Visual Language & Brand Tokens:</strong> Set Atlantis's core visual direction (color, typography, imagery, button style) and mapped which properties needed to flex per brand, then remocked components against early token sets for One&Only, Bab Al Shams, and Mazagan to validate cross-brand scalability.</li><li><strong>Coordinated Daily with Dev Agency:</strong> Partnered with the contracted development team throughout the design process—validating component feasibility, clarifying specs in real-time, and ensuring every visual decision aligned with their fixed library constraints to prevent scope creep.</li><li><strong>Designed Hi-Fi Components to Spec:</strong> Built every approved pattern from wireframe to production-ready visual design, delivering finished assets and component specs matching the agency's fixed library requirement exactly—no extra components, no renegotiation.</li></ul>",
    heroImage: "images/projects/Atlatis/Atlantis-Home-01.mp4",
    gallery: ["images/projects/Atlatis/14.png", ],
  },
};
