// ─────────────────────────────────────────────────────────────────────────────
// ASSET UPLOAD PATHS (confirmed from your file screenshots)
// ─────────────────────────────────────────────────────────────────────────────
// PBN  →  /public/assets/works/pbn/
//   pbn-intro.mp4   pbn-final.mp4
//   sketch-1.jpg    sketch-2.jpg    style-1.jpg    style-2.jpg
//
// BLUECHIP  →  /public/assets/works/bluechip/
//   bluechip-summit.mp4    bluechip-summit.jpg    bluechip-founder.mp4
//
// EMSXCHANGE  →  /public/assets/works/ems/
//   ems-kinetic.mp4
//   ems-giveaway.jpg   ems-milestone.jpg   ems-dday.jpg   ems-countdown.jpg
//   (Big5Annoucement.jpg already exists at /assets/works/Big5Annoucement.jpg)
// ─────────────────────────────────────────────────────────────────────────────

export interface VideoAsset {
  label: string;
  file: string;
  poster?: string;
}

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
  showHeroImage?: boolean;   // set false to skip the hero image block
  businessImpact?: string;
  introVideo?: VideoAsset;   // single video shown right after header (PBN, EmsXchange)
  videos?: VideoAsset[];     // multiple stacked videos (Bluechip)
  finalVideo?: VideoAsset;   // shown at very bottom after extra sections (PBN)
  additionalSections?: {
    title: string;
    description: string;
    images: string[];        // always stacked one per row — no grid
  }[];
}

export const caseStudies: CaseStudy[] = [

  // ── Premia Business Network ──────────────────────────────────────────────
  {
    id: 'premiabn',
    title: 'Premia Business Network',
    subtitle: 'Clarifying a talent outsourcing proposition for a pan-African executive community',
    tags: 'Illustration, Animated explainer video',
    image: '/assets/works/pbn/style-1.jpg', // fallback only — hero image is hidden
    showHeroImage: false,                   // NO hero image; intro video is the first visual

    introVideo: {
      label: 'Intro Video',
      file: '/assets/works/pbn/pbn-intro.mp4',
    },

    overview:
      'Premia Business Network is a private community of 900+ CEOs, founders, and senior professionals across 25 countries, with members from leading organizations including Wakanow, MTN, First Bank, TikTok, and FairMoney.',
    problem:
      'PBN needed a clear, credible way to communicate the value of PBN Outsource, its talent outsourcing arm, to both companies and top professionals. The goal was to simplify the offering, build trust, and position PBN Outsource as a reliable talent solution across the continent.',
    solution:
      'Sleeka produced a concise animated explainer video that simplified the offering and clearly communicated trust, quality, and scale. The creative approach focused on strong visual storytelling — highlighting the reliability, expertise, and network reach of PBN Outsource — making the content easily digestible for corporate decision makers.',
    results: [
      '900+ executives reached through digital distribution of the explainer video',
      '75% average video view completion rate, showing high engagement among the target audience',
      '50+ direct inquiries from companies interested in PBN Outsource services within the first month',
      'Increased brand recognition among professionals across 25 countries, with a measurable uptick in social mentions and engagement',
      '1 animated explainer video became the core asset driving all communications',
    ],
    businessImpact:
      'The explainer video strengthened credibility, clarified the value proposition, and became a core communication asset across digital and presentation channels. It successfully positioned PBN Outsource as a trusted pan-African talent solution, resulting in measurable leads and expanded brand awareness across its target markets.',

    // Brand materials — stacked one by one in this order
    additionalSections: [
      {
        title: 'Sketches + Styleframes',
        description: 'Here are some quick sketches and style frames we used for the animation.',
        images: [
          '/assets/works/pbn/sketch-1.jpg',
          '/assets/works/pbn/style-1.jpg',
          '/assets/works/pbn/sketch-2.jpg',
          '/assets/works/pbn/style-2.jpg',
        ],
      },
    ],

    finalVideo: {
      label: 'Final Video',
      file: '/assets/works/pbn/pbn-final.mp4',
    },
  },

  // ── Bluechip Technologies ────────────────────────────────────────────────
  {
    id: 'bluechip-technologies',
    title: 'Bluechip Technologies',
    subtitle: 'Driving visibility for the Bluechip AI and Data Summit',
    tags: 'Motion, Video editing',
    image: '/assets/works/bluechip/bluechip-summit.jpg',
    showHeroImage: false, // No hero image — videos are the first visuals

    // Two videos stacked: Event Video then Founder Video
    videos: [
      {
        label: 'Event Video',
        file: '/assets/works/bluechip/bluechip-summit.mp4',
        poster: '/assets/works/bluechip/bluechip-summit.jpg',
      },
      {
        label: 'Founder Video',
        file: '/assets/works/bluechip/bluechip-founder.mp4',
        poster: '/assets/works/bluechip/bluechip-summit.jpg',
      },
    ],

    overview:
      "Bluechip Technologies is one of Africa's leading technology solutions companies, helping organizations leverage data, artificial intelligence, and digital transformation.",
    problem:
      'For their AI and Data Summit, they needed compelling promotional content to create awareness, communicate the value of the summit, build anticipation, and drive attendance from professionals and industry leaders.',
    solution:
      'Sleeka produced a motion video introducing the AI and Data Summit and a short invitation video featuring a co-founder personally inviting professionals to attend. The content was optimized for digital promotion to increase visibility ahead of the event.',
    results: [
      '2,000+ professionals attended the AI and Data Summit',
      '1 flagship motion video used as the core promotional asset for the event',
      '1 founder invitation video that strengthened credibility and executive-led promotion',
    ],
    businessImpact:
      'The campaign increased awareness and helped drive strong attendance for the AI and Data Summit, while positioning Bluechip Technologies as a leader in conversations around AI and data innovation.',

    // No additional brand materials for Bluechip
  },

  // ── EmsXchange ───────────────────────────────────────────────────────────
  {
    id: 'emsxchange',
    title: 'EmsXchange',
    subtitle: 'Driving engagement and brand visibility through a 5 year anniversary campaign',
    tags: 'Design, Motion, Video editing',
    image: '/assets/works/Big5Annoucement.jpg',
    showHeroImage: true, // Hero image shows first, then kinetic video below it

    introVideo: {
      label: 'Kinetic Motion Video',
      file: '/assets/works/ems/ems-kinetic.mp4',
      poster: '/assets/works/Big5Annoucement.jpg',
    },

    overview:
      'EmsXchange is a trading company that enables users to exchange cryptocurrencies and gift cards quickly and securely. As the company approached its 5 year anniversary, it wanted to celebrate the milestone while strengthening brand visibility and engaging its growing community.',
    problem:
      "EmsXchange needed a campaign that would celebrate its five year milestone while generating strong audience engagement online. The goal was to create content that could capture attention, encourage community participation, and amplify the brand's visibility across social media.",
    solution:
      'Sleeka developed a focused anniversary campaign combining brand strategy, content planning, and visual storytelling. We created a series of promotional designs including announcement, countdown, giveaway, milestone, and D-Day visuals to build momentum toward the celebration. The campaign was reinforced with a kinetic motion video released to amplify the milestone moment.',
    results: [
      '120,000+ campaign reach driven through ads and giveaway promotion',
      '3,000+ user interactions including reposts, tags, and giveaway participation',
      'Hundreds of community reposts significantly expanding organic visibility',
      '9 campaign designs and 1 kinetic motion video used across the anniversary promotion',
    ],
    businessImpact:
      "The anniversary campaign transformed EmsXchange's 5 year milestone into a high engagement marketing moment, expanding brand visibility, activating community participation, and strengthening the company's presence across social media.",

    // Brand materials — stacked one by one
    additionalSections: [
      {
        title: 'Campaign Designs',
        description:
          '9 promotional designs built momentum across every phase of the anniversary — from announcement through to D-Day.',
        images: [
          '/assets/works/Big5Annoucement.jpg',
          '/assets/works/ems/ems-giveaway.jpg',
          '/assets/works/ems/ems-milestone.jpg',
          '/assets/works/ems/ems-dday.jpg',
          '/assets/works/ems/ems-countdown.jpg',
        ],
      },
    ],
  },

  // ── Felicia Transport (unchanged) ────────────────────────────────────────
  {
    id: 'felicia-transport',
    title: 'Felicia Transport',
    subtitle: 'Building Public Trust and Market Credibility from Day One',
    tags: 'Branding, Identity design, Merchandise',
    image: '/assets/works/VanDesign.jpg',
    showHeroImage: true,
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
    additionalSections: [
      {
        title: 'Logo design',
        description:
          'Concept: A bold, expressive combination mark inspired by the letter F, a road, and a forward-driven arrow. These elements flow seamlessly to convey motion, direction, and speed.',
        images: ['/assets/Felicia/2.jpg', '/assets/Felicia/3.jpg', '/assets/Felicia/4.jpg'],
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
