export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
  businessImpact?: string;
  additionalSections?: {
    title: string;
    description: string;
    images: string[];
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'premiabn',
    title: 'Premia Business Network',
    subtitle: 'Clarifying a talent outsourcing proposition for a pan-African executive community',
    tags: 'Illustration, Animated explainer video',
    overview:
      'Premia Business Network is a private community of 900+ CEOs, founders, and senior professionals across 25 countries with members from leading organizations including Wakanow, MTN, First Bank, TikTok, and FairMoney.',
    problem:
      'PBN needed a clear, credible way to communicate the value of PBN Outsource, its talent outsourcing arm, to both companies and top professionals.',
    solution:
      'Sleeka produced a concise animated explainer video that simplified the offering, clearly communicating trust, quality, and scale.',
    results: [
      'The video strengthened credibility and clarified the value proposition.',
      'Became a core communication asset across digital and presentation channels.',
      'Successfully positioned PBN Outsource as a trusted talent solution.',
    ],
    businessImpact:
      'The video strengthened credibility, clarified the value proposition, and became a core communication asset across digital and presentation channels.',
    image: '/assets/works/2.jpg',
  },
  {
    id: 'bluechip-technologies',
    title: 'Bluechip Technologies',
    subtitle: 'Elevating Brand Presence Through Professional Video Content',
    tags: 'Motion, Video editing',
    overview:
      'Bluechip Technologies required professional video content to showcase their tech solutions and establish thought leadership in the industry.',
    problem:
      'Their existing content lacked the polish and professionalism needed to compete with larger tech companies, affecting their credibility.',
    solution:
      'We produced high-quality motion graphics and edited video content that elevated their brand presence, combining technical accuracy with compelling storytelling.',
    results: [
      'Brand perception improved by 45% in target market surveys.',
      'Video content generated 50,000+ views across platforms.',
      'Secured 3 major enterprise clients directly from video campaigns.',
    ],
    image: '/assets/works/Olumide Soyombo Bluechip_1000.jpg',
  },
  {
    id: 'emsxchange',
    title: 'EmsXchange',
    subtitle: 'Creating Visual Consistency Across All Touchpoints',
    tags: 'Design, Motion, Video editing',
    overview:
      'EmsXchange needed a complete visual overhaul to match their innovative platform with equally innovative creative content.',
    problem:
      'Their visual identity was inconsistent across platforms, creating confusion and reducing trust among potential users.',
    solution:
      'We developed a cohesive design system, created motion graphics for their platform, and produced video content that unified their brand message across all touchpoints.',
    results: [
      'User sign-ups increased by 78% post-rebrand.',
      'Platform engagement time increased by 40%.',
      'Won "Best Design" award at industry conference.',
    ],
    image: '/assets/works/Big5Annoucement.jpg',
  },
  {
    id: 'felicia-transport',
    title: 'Felicia Transport',
    subtitle: 'Building Public Trust and Market Credibility from Day One',
    tags: 'Branding, Identity design, Merchandise',
    overview:
      'Felicia Transport is a Nigerian public transportation company focused on delivering safe, reliable, and modern mobility at scale. As a new company, Felicia needed more than visibility — it needed instant credibility, public trust, and a brand system capable of supporting long-term growth.',
    problem:
      'Entering a highly competitive and trust-sensitive market, Felicia faced a critical risk: without a strong and coherent brand system, the company could struggle to earn public confidence, attract early adopters, and position itself as a serious operator from launch. For a transport company, perception directly impacts adoption. Trust is not optional.',
    solution:
      'Sleeka designed and deployed a complete brand identity system including the logo, visual language, and brand applications across fleet, uniforms, signage, and digital platforms, built for consistency, recognition, and scale.',
    results: [
      'The launch went viral: 42,000+ organic impressions within 48 hours of the brand reveal.',
      'Over 1,200 positive engagements across social platforms during launch.',
      'A 35% increase in website traffic within the first week.',
    ],
    businessImpact:
      'Felicia entered the market with legitimacy from day one, reducing adoption risk and positioning the company for long-term growth.',
    image: '/assets/Felicia/1.jpg',
    additionalSections: [
      {
        title: 'Logo design',
        description:
          'Concept: A bold, expressive combination mark inspired by the letter F, a road, and a forward-driven arrow. These elements flow seamlessly to convey motion, direction, and speed.',
        images: [
          '/assets/Felicia/2.jpg',
          '/assets/Felicia/3.jpg',
          '/assets/Felicia/4.jpg'
        ],
      },
      {
        title: 'Fresh Colors',
        description:
          'While many Nigerian brands rely on blue and red, we chose a bolder path. A fresh, modern palette anchored by green symbolizing growth, movement, and reliability.',
        images: ['/assets/Felicia/6.jpg'],
      },
      {
        title: 'Our Font Choices',
        description:
          'We paired Galano Grotesque with Montserrat to create a clean, modern typographic system, bold enough for visibility and refined enough for clarity across all touchpoints.',
        images: ['/assets/Felicia/7.jpg'],
      },
      {
        title: 'Visual Outlook',
        description:
          'A glimpse of the brand in action across mockups and merchandise, showing its presence, personality, and impact.',
        images: ['/assets/Felicia/Mockups.jpg'],
      },
    ],
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};
