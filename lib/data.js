// All copy and content data ported verbatim from
// HandoffUS/design_handoff_website/Ultimate Solutions.dc.html

export const COPY = {
  cta: "Book A Consultation",
  cta2: "See Our Projects",
  heroEyebrow: "Intelligent By Design · Dubai, Since 2007",
  heroTitle: "Technology That Disappears Into The Experience",
  heroLead: "We seamlessly integrate intelligent technology into your home, creating effortless experiences where comfort, design and connectivity work beautifully together.",
  statsTitle: "Nearly Two Decades Of Intelligent Living",
  statsLead: "Founded in Dubai in 2007 with a belief that even the most sophisticated technology should feel simple and intuitive to use — designed around you.",
  catTitle: "Six Disciplines, One Cohesive Environment",
  catLead: "Lighting, climate, entertainment, networking, security and communications are designed together, around the architecture and the interiors, so your home behaves as one.",
  processTitle: "The Ultimate Solutions Experience",
  processLead: "Every project begins with understanding the client, not the technology. Five stages, from first conversation to years of aftercare.",
  depthTitle: "Why The Technology Strategy Comes First",
  depthLead: "The interface a client lives with for a decade is decided while the walls are still open. Early involvement is the difference between integration and installation.",
  projTitle: "Selected Work",
  projLead: "Private residences and landmark developments across Dubai and the wider UAE.",
  ctaBandTitle: "Book A Consultation",
  ctaBandLead: "Tell us about the property and the stage it is at. We will tell you what is still worth deciding.",
  ctaBandBtn: "Book A Consultation",
  prodTitle: "What We Design And Integrate",
  prodLead: "Six disciplines, specified as one system. Choose a discipline to see how it behaves in the room and what it asks of the build.",
  asideTitle: "Not Sure Where To Start?",
  asideLead: "Send the property and the stage the project is at, and we will come back with a considered starting point.",
  contactTitle: "Tell Us About Your Home",
  contactLead: "Send us your enquiry and we reply within one working day.",
  formTitle: "Book A Consultation",
  formField: "About the project",
  formPlaceholder: "Tell us about your project.",
};

export const PROCESS = [
  { num: "01", title: "Consultation", deliverable: "Vision brief",
    desc: "We begin by listening: how you live, how you use your spaces, your priorities, and how you want the home to feel and function." },
  { num: "02", title: "Design", deliverable: "Technology strategy",
    desc: "We translate that vision into a considered technology strategy, designed around the architecture, the interiors and the way you live." },
  { num: "03", title: "Installation And Integration", deliverable: "Coordinated install",
    desc: "Technology is integrated into the architecture and the finishes, with careful thought given to placement, performance and how it looks." },
  { num: "04", title: "Commissioning And Handover", deliverable: "Client walkthrough",
    desc: "Every system is tested and fine-tuned, then we walk you through it and tailor the experience to your preferences." },
  { num: "05", title: "Aftercare", deliverable: "Ongoing support",
    desc: "Our relationship does not end at handover. We stay involved through support, maintenance, upgrades and enhancements." },
];

export const CATS = [
  {
    id: "control", label: "Control", icon: "scenes", eyebrow: "01 · Integrated Control Systems",
    title: "Every System, One Command",
    lead: "Lighting, climate, entertainment and security all sit behind the same control layer, reached from a wall plate, screen, phone, iPad or a voice command.",
    h1: "Mobile and remote control",
    p1: "The same app that runs a room in person runs it from anywhere: arriving home, checking a villa while travelling, or letting a guest in from another country. Remote access is built into the network design.",
    h2: "Voice and gesture, where they help",
    p2: "Voice control is added to rooms where hands are occupied or a switch is out of reach, and gesture control where a touch panel would be the wrong answer, such as a kitchen island, neither replaces the wall plate nor any other smart device, which stays the primary interface.",
    h3: "One household, one login",
    p3: "Every discipline in the home answers to the same account structure, with access rights held per person and bounded by schedule where needed, so a guest, a contractor and an owner each see only what applies to them.",
    delivers: ["Mobile and Remote Control Capabilities", "Voice and Gesture-Control Solutions"],
    specs: [{ k: "Control", v: "KNX, Crestron, Lutron, IP" }, { k: "Interfaces", v: "App, voice, gesture, panel" }, { k: "Voice", v: "Room-scoped, opt-in" }, { k: "Access", v: "Per-person, schedulable" }, { k: "Coordination", v: "All disciplines" }, { k: "Handover", v: "As-built configuration" }],
    faqs: [
      { q: "Does voice control replace the wall plate?", a: "No. The plate stays the primary interface because it works without an internet connection and without being heard correctly. Voice is added where it helps, not as a replacement." },
      { q: "Can I control the house while travelling?", a: "Yes, through the same app used at home, with the same access rights that apply on site." },
      { q: "Who can see or change what?", a: "Access is set per person. An owner sees everything; a guest or contractor sees only what they are given, and only for as long as they need it." },
    ],
  },
  {
    id: "entertainment", label: "Entertainment", icon: "audio", eyebrow: "02 · Entertainment & Media",
    title: "Sound And Picture, Built In",
    lead: "Entertainment is delivered as part of the architecture rather than as a set of boxes. The best result is a room that sounds and looks exceptional without announcing how.",
    h1: "Rooms first, equipment second",
    p1: "Speaker and screen positions come from the seating plan and the ceiling layout, agreed with the interior designer before anything is ordered. Flush and invisible options are used where a visible speaker would compromise the room.",
    h2: "One interface across the home",
    p2: "Music, television and cinema sit behind the same interface as the lighting and the climate, so a guest can turn on music in the kitchen without being taught. Zones follow the lighting zones, which is what lets a single scene set light, blinds and sound together.",
    h3: "Cinema and media rooms",
    p3: "A dedicated cinema is designed as its own project: sightlines, acoustics, calibration and seating, coordinated with the interior. We will say early when a room cannot deliver what is being asked of it without changing the room.",
    delivers: ["Smart Entertainment and Media Integration", "Audio and Video Distribution", "Private Home Cinema Solution"],
    specs: [{ k: "Control", v: "IP and IR" }, { k: "Interfaces", v: "Keypad, panel, remote, app" }, { k: "Audio", v: "Multi-room, zoned" }, { k: "Speakers", v: "Flush, in-wall, invisible" }, { k: "Cinema", v: "Designed separately" }, { k: "Handover", v: "Calibration report" }],
    faqs: [
      { q: "Can I keep the streaming services I already use?", a: "Yes. Streaming sits as a source within the system, so changing service later means changing a source rather than the infrastructure." },
      { q: "Do I control music from the wall or from my phone?", a: "You can choose to control from both. The plate handles on, off, level and source, because that is what people use standing up. Choosing an album is from a smart device." },
      { q: "Are invisible speakers worth it?", a: "In rooms where a visible speaker would compromise the ceiling, yes. In a cinema or a listening room, no, and we will tell you so rather than sell them into a room that deserves better." },
    ],
  },
  {
    id: "security", label: "Security", icon: "security", eyebrow: "03 · Security & Access Control",
    title: "Access, Surveillance And Peace Of Mind",
    lead: "Security has to work on its own terms and still behave as part of the home. We keep the specialist systems intact and integrate at the point where the house responds.",
    h1: "Specialist systems, integrated behaviour",
    p1: "Intrusion detection, cameras and access control are specified for their own job. The integration layer reads their state and responds: setting the alarm returns the climate to setback, closes the blinds and turns the lights off.",
    h2: "Access and entry",
    p2: "Gates, main entrance and staff entry share one call and access plan, with intercom answered from a plate, a panel or a phone. Access rights are held per person and can be bounded by schedule, which is what makes household staff and visiting contractors manageable.",
    h3: "Recorded locally, kept privately",
    p3: "Camera coverage is recorded on site by default, with retention set by the client, and remote viewing runs back to the property rather than through a third-party service. Presence and occupancy are used to drive the home, not logged.",
    delivers: ["Security Solutions including CCTV systems, sensors and alarms", "Smart Access Control Solutions for doors and gates"],
    specs: [{ k: "Control", v: "IP" }, { k: "Recording", v: "On premise, client retention" }, { k: "Access", v: "Per-person, schedulable" }, { k: "Integration", v: "State read and respond" }, { k: "Handover", v: "As-built configuration" }],
    faqs: [
      { q: "Is footage stored in the cloud?", a: "No, unless you ask for it. Recording is on site by default, with retention you set, and remote viewing connects back to the property." },
      { q: "What does the home do when the alarm is set?", a: "Lights off, blinds to their set position, climate to setback, entertainment off. Setting the alarm is the single action that puts the home into its away state." },
      { q: "Can this work alongside a tower's existing security?", a: "Yes. In apartments and towers we integrate with the building's systems where the management company allows it, and keep the apartment's own systems independent where it does not." },
    ],
  },
  {
    id: "communications", label: "Communications", icon: "phone", eyebrow: "04 · Communication Systems",
    title: "One Line To Every Room",
    lead: "Intercom, paging and telephony sit on the same backbone as everything else, so a call at the gate reaches the room a person is actually in.",
    h1: "Intercom answered from wherever you are",
    p1: "The main entrance, gate and staff entry share one call routing plan, answered from a wall plate, a panel or a phone, with video where the door justifies it. A call follows the person, not a fixed handset.",
    h2: "Paging across the home",
    p2: "A message to the kitchen, the gym or the garden goes out over the same speakers used for music, without a stand-alone paging system to install and maintain separately.",
    h3: "Built on the network, not beside it",
    p3: "Voice and call traffic run on the same structured network as everything else, segmented from guest and control traffic, so adding a handset or a panel is a configuration change rather than new cabling.",
    delivers: ["Intercom Solutions for room-to-room communication", "PBX Communication Solutions for internal communication"],
    specs: [{ k: "Control", v: "IP" }, { k: "Intercom", v: "Plate, panel and mobile" }, { k: "Access control", v: "Per-person, schedulable" }, { k: "PBX", v: "Internal and external lines" }, { k: "Interfaces", v: "Panel, handset, app" }, { k: "Video", v: "At gate and main entrances" }, { k: "Paging", v: "Shared with audio zones" }, { k: "Coordination", v: "Security, networking" }, { k: "Handover", v: "As-built configuration" }],
    faqs: [
      { q: "Does every room need its own handset?", a: "No. Calls follow the person across the plates and panels already in the home, and a phone app covers the rest. A dedicated handset is only added where a room asks for one." },
      { q: "Is this separate from the security system?", a: "It shares the same entry events and call plan, but each system is specified for its own job, the same way lighting and climate stay separate systems that behave together." },
      { q: "Can paging interrupt music that is already playing?", a: "Yes, briefly and at a level you set. It uses the audio zones already in the room rather than a separate speaker." },
    ],
  },
  {
    id: "lighting", label: "Lighting", icon: "lighting", eyebrow: "05 · Lighting & Energy Management",
    title: "Light And Climate, Working Together",
    lead: "Lights, climate and shades are the systems a room uses every day, and the ones judged most on whether they work without anyone asking twice.",
    h1: "Scenes, not only switches",
    p1: "Circuits, scenes and keypad positions are resolved alongside the lighting design and the interior layout, so the control scheme follows the room rather than the containment. One press sets light level, colour temperature and curtain position together.",
    h2: "Zoned for how rooms are used",
    p2: "Climate zones follow how the home is actually lived in, each with its own setpoint and schedule. Curtains close ahead of the afternoon sun so cooling has less to remove, and rooms that are unoccupied return to a setback rather than running for nobody.",
    h3: "Held in the system",
    p3: "Scenes and schedules are held in the control system rather than in a phone or a cloud service, so the house behaves the same for a guest as it does for the owner, and continues to behave that way when the internet does not.",
    delivers: ["Smart Lighting Solutions", "Climate Control & Energy Management Solutions", "Curtain control"],
    specs: [{ k: "Control", v: "KNX and IP" }, { k: "Interfaces", v: "Keypads, panels, app and remotes" }, { k: "Zoning", v: "Per room, scheduled" }, { k: "Curtains", v: "Motorised, scene-linked" }, { k: "Coordination", v: "Lighting designer, MEP" }, { k: "Handover", v: "As-built configuration" }],
    faqs: [
      { q: "Will I need an app to turn the lights on?", a: "No. The wall plate is the primary interface and always will be, because that is what a person uses standing in a doorway. The app exists for when you are away from the house or want to change something the plate does not cover." },
      { q: "Can different rooms run on different schedules?", a: "Every zone has its own schedule and setback. Guest suites typically sit at setback and lift on occupancy, which avoids cooling rooms that are used a few times a year." },
      { q: "What happens if the network goes down?", a: "Lighting and climate keep working. Keypads and control devices communicate directly, so losing the router removes remote access and nothing else." },
    ],
  },
  {
    id: "connectivity", label: "Connectivity", icon: "network", eyebrow: "06 · Connectivity & Networking",
    title: "The Layer Everything Else Depends On",
    lead: "Every other discipline in the home rides on the network. It is the least visible part of the specification and the first thing blamed when something misbehaves.",
    h1: "Designed for coverage, not for a box count",
    p1: "Access point positions are set from the plan and the construction: villa walls, marble, glass and steel all shape coverage. The design targets consistent throughput in the rooms people actually use, rather than a headline speed at the rack.",
    h2: "Wired where it matters",
    p2: "Anything fixed is wired: televisions, panels, cameras, access points and control equipment. Wireless is reserved for the devices that move. That single decision removes most of the problems that get reported as network faults.",
    h3: "Segmented, monitored and maintainable",
    p3: "Control, entertainment, security and guest traffic are kept separate, so a guest device cannot reach the systems that run the home. Equipment sits in a ventilated, labelled rack that a technician can work on without guesswork.",
    delivers: ["Wi-Fi Solutions for seamless connectivity", "Network Solutions for efficient and reliable home internet"],
    specs: [{ k: "Cabling", v: "Structured (Wi-Fi, data)" }, { k: "DB dressing", v: "Neat, labelled distribution boards" }, { k: "AV panel dressing", v: "Neat, labelled AV panels" }, { k: "Wi-Fi", v: "Coverage-designed access points" }, { k: "Segmentation", v: "Control, AV, security, guest" }, { k: "Rack", v: "Ventilated and labelled" }, { k: "Monitoring", v: "Remote support access" }, { k: "Handover", v: "As-built network map" }],
    faqs: [
      { q: "Why does a home need this much network design?", a: "Because everything else depends on it. Lighting panels, cameras, televisions and control interfaces all share it, and a network designed for one laptop will not carry a house." },
      { q: "Can you work with the network the developer installed?", a: "Often, yes. We survey what is there first, then say honestly whether it can carry the systems being specified or whether it needs to be replaced." },
      { q: "Do you monitor the system remotely?", a: "With your permission, yes. Remote access lets us diagnose and often resolve an issue without a visit, which is usually the difference between an afternoon and a week." },
    ],
  },
];

export const PROJECTS = [
  // Ordered for display: C128 leads because it has real photography
  // (the towers are renders), and only one of the two near-identical
  // Volante renders makes the homepage's first three.
  // "year" (used as the display location) is a placeholder pending the
  // actual area — update once confirmed.
  { id: "c128", name: "C128", type: "Private residence", year: "Dubai", cat: "Private residence", summary: "A private residence in Dubai, with a landscaped entrance and a modern architectural façade integrated with intelligent building-control systems throughout.", cats: "Details on request", bus: "Details on request", img: "/projects/c128-hero.png" },
  { id: "palm-villa", name: "Luxury Villa At The Palm", type: "Private residence", year: "Palm Jumeirah", cat: "Private residence", summary: "An ultra-luxury waterfront residence on Palm Jumeirah, with private beach, pool and modern interiors built around top-of-the-line smart technology.", cats: "Lutron · Crestron · Cisco Meraki · Axis", bus: "Details on request", img: "/projects/palm-villa-hero.png" },
  { id: "volante-1", name: "Volante 1", type: "Residential tower", year: "Business Bay", cat: "Residential tower", summary: "One of Dubai's most exclusive residential towers on the banks of Business Bay, with half-floor two-bedroom and full-floor four-bedroom units built as standard with full KNX control.", cats: "KNX · CCTV · Audio · Intercom · Wi-Fi", bus: "Details on request", img: "/projects/volante-1-hero.png" },
  { id: "volante-2", name: "Volante 2", type: "Residential tower", year: "Business Bay", cat: "Residential tower", summary: "Volante's second tower, overlooking Burj Khalifa with waterfront living, blending luxurious finishes with the sophistication of intelligent home automation.", cats: "KNX · Home Automation", bus: "Details on request", img: "/projects/volante-2-hero.png" },
];

export const TIMELINE = [
  { year: "2006", title: "The Moment The Idea For Ultimate Solutions Began", body: "Speaking at a home automation conference at the Burj Al Arab, our founder, Jana Malhas, found himself covering the technology, not just the customer's perspective he had been invited to share. It showed him the market focused on the system, not the person using it. The idea was simple: technology should be designed around people. That realization led him to establish Ultimate Solutions." },
  { year: "2005–2007", title: "Ultimate Solutions Was Born — Entering Dubai's Luxury Residential Market", body: "As Dubai's luxury developments reshaped the residential landscape, demand for home automation grew. Recognising the opportunity, Ultimate Solutions was born to bring these emerging technologies into luxury homes." },
  { year: "2008–2010", title: "Building Our High-End Niche Through Selective Projects And Global Brands", body: "The 2008 financial crisis shifted Dubai's property market toward selectivity and long-term relationships. We focused on select clients in Emirates Hills, gained KNX and Crestron certifications, and began working with high-end entertainment brands such as Dynaudio and Meridian." },
  { year: "2010–2014", title: "Expanding From Home Automation To Energy-Efficient Building Systems", body: "As Dubai introduced stricter green-building standards, automation evolved from convenience toward energy management — lighting, HVAC and occupancy control. We evolved alongside it, from smart-home programming into integrated building and residential control." },
  { year: "2013", title: "International Recognition — Best Crestron Home In The Middle East", body: "Ultimate Solutions won Best Crestron Home in the Middle East, a milestone that raised expectations for design quality, sustainability and user experience across the industry." },
  { year: "2014–2017", title: "A Major Milestone — Our First Exclusive Luxury Tower", body: "We were awarded our first exclusive residential tower, Volante 1, in Business Bay. Its scale led us to build our own electrical team and gain Dubai Police certification for CCTV, expanding our capabilities into security. We won Mobotix's Best Newcomer Award and drew coverage from international publications." },
  { year: "2017", title: "Embracing The Future — From Smart Homes To Intelligent Living", body: "As the UAE launched its national AI strategy, “smart home” evolved from remote control to a home that understands and responds to how people live. Ultimate Solutions adopted the mission: technology should adapt to the individual, not the other way around." },
  { year: "2018–2019", title: "Scaling Our Expertise, Volante 2", body: "As Dubai's luxury market matured and client expectations rose, the advantage shifted from what technology was installed to how well it worked together. We were awarded Volante 2, the successor to Volante 1." },
  { year: "2020–2021", title: "Launching Our Maintenance Division — Covid-19", body: "As the home became workplace, school and gym through the pandemic, demand grew for reliable automation and aftercare. We opened our maintenance department in 2022 to strengthen long-term system support." },
  { year: "2022", title: "Expo 2020 Legacy, Growing Awareness Of Automation", body: "Expo 2020 drove a wave of construction and technology activity, with smart buildings shifting toward sustainability, wellness and intelligent infrastructure — broadening awareness of automation beyond the traditional smart home." },
  { year: "2022–2024", title: "A New Era Of Growth, Expanding Our Luxury Residential Portfolio", body: "Dubai's luxury real estate resurgence hit record transaction volumes by 2024. We were awarded a three-plot private residential villa alongside a leading developer, and used the three-year engagement to formalise our processes, policies and documentation." },
  { year: "2023–2025", title: "Resilience Through Uncertainty, Continuing To Deliver", body: "Amid regional geopolitical uncertainty, we maintained progress on both Volante 2 and the luxury villa, reinforcing our commitment to deliver even through challenging circumstances." },
];

export const AWARDS = [
  { year: "2008", title: "KNX Award", status: "Nominated" },
  { year: "2013", title: "Best Crestron Home In The Middle East", status: "Won" },
  { year: "2016", title: "Mobotix Best Newcomer", status: "Won" },
  { year: "2026", title: "KNX Smart Home Award", status: "Nominated" },
];

export const PRESS = [
  { title: "Volante 2 Tower", outlet: "KNX Association — Project Showcase", date: "", url: "https://www.knx.org/projects/volante-2-tower" },
  { title: "Volante Towers", outlet: "Invixium — Case Study", date: " — 2021", url: "https://www.invixium.com/wp-content/uploads/2021/05/Volante-Towers-Case-Study.pdf" },
  { title: "Interview: Jana Malhas, Ultimate Solutions, On Serving Dubai's High-End CI Clientele", outlet: "HiddenWires Magazine", date: " — 20 Jun 2018", url: "https://www.hiddenwires.co.uk/features/article/interview-jana-malhas-ultimate-solutions-on-serving-dubai-s-high-end-ci-clientele" },
  { title: "Case Study: Volante Luxury Residence — Moving On Up With AV Over IP", outlet: "Atlona / Hall Technologies", date: " — 2018", url: "https://ts.atlona.com/resources/case-studies/volante/" },
  { title: "Exclusive: AV Over IP Powers Luxury 'Volante' Apartment Tower In Dubai", outlet: "HiddenWires Magazine", date: " — 23 May 2018", url: "https://www.hiddenwires.co.uk/case-studies/article/exclusive-av-over-ip-powers-luxury-volante-apartment-tower-in-dubai" },
  { title: "ABB Deploys Key Automation System At Dubai Tower", outlet: "Gulf Daily News", date: " — 25 Oct 2017", url: "https://www.gdnonline.com/Details/280584/ABB-deploys-key-automation-system-at-Dubai-tower" },
];

export const ABOUT_FAQS = [
  { q: "At what stage should we bring you in?", a: "As early as the technology is being thought about, and ideally while the architectural and interior design is still being resolved. We can join later and often do, but after first fix the options narrow to what the existing containment allows." },
  { q: "Do you work with our architect and interior designer?", a: "Always. We work as part of the project team rather than alongside it, because placement, finishes and interfaces are design decisions as much as technical ones." },
  { q: "What does aftercare actually cover?", a: "Ongoing support and maintenance, remote diagnosis where possible, and system upgrades and enhancements as your needs change. Our relationship does not end at handover." },
  { q: "Do you only work on KNX systems?", a: "No. KNX is central to how we build control, but a complete home also involves entertainment, networking, security and specialist equipment. We select from a considered range of manufacturers to suit the project." },
  { q: "Will the system be easy for guests and staff to use?", a: "That is the test we design against. Sophisticated technology should never require a sophisticated user, and anything that cannot be operated by someone walking into the room has not been finished." },
];

// name -> logo under /brands. `dark` marks white-on-dark artwork (LogoWall
// inverts it). Entries without a logo render as a wordmark.
export const BRAND_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "automation", label: "Automation" },
  { value: "av", label: "Audio Visual" },
];

// Grouped and ordered as the client's list: Automation, then Audio Visual,
// so a selected category lights up as one block on the wall.
export const BRANDS = [
  { name: "Crestron", cat: "automation", logo: "/brands/crestron.png" },
  { name: "Lutron", cat: "automation", logo: "/brands/lutron.png" },
  { name: "KNX Partner", cat: "automation", logo: "/brands/knx.png" },
  { name: "Black Nova", cat: "automation", logo: "/brands/black-nova.png", dark: true },
  { name: "Control4", cat: "automation", logo: "/brands/control4.png" },
  { name: "Savant", cat: "automation", logo: "/brands/savant.png" },
  { name: "Eelectron", cat: "automation", logo: "/brands/eelectron.png", dark: true },
  { name: "1Home", cat: "automation", logo: "/brands/1home.png", dark: true },
  { name: "Cool Automation", cat: "automation", logo: "/brands/cool-automation.png" },
  { name: "ABB", cat: "automation", logo: "/brands/abb.png" },

  { name: "AudioControl", cat: "av", logo: "/brands/audiocontrol.png", dark: true },
  { name: "JBL Professional", cat: "av", logo: "/brands/jbl-professional.png" },
  { name: "Sonos", cat: "av", logo: "/brands/sonos.png" },
  { name: "Sonance", cat: "av", logo: "/brands/sonance.png" },
  { name: "Autonomic", cat: "av", logo: "/brands/autonomic.png" },
  { name: "Ubiquiti UniFi", cat: "av", logo: "/brands/ubiquiti.png" },
  { name: "K-Array", cat: "av", logo: "/brands/k-array.png", dark: true },
  // Belden's artwork is a very pale lilac, near-invisible on white, so it
  // is inverted like the white-on-dark marks.
  { name: "Belden", cat: "av", logo: "/brands/belden.png", dark: true },
  { name: "Axis Communications", cat: "av", logo: "/brands/axis.png" },
  { name: "2N", cat: "av", logo: "/brands/2n.png", dark: true },
  { name: "Bowers & Wilkins", cat: "av", logo: "/brands/bowers-wilkins.png" },
  { name: "Hikvision", cat: "av", logo: "/brands/hikvision.png" },
  { name: "Akuvox", cat: "av", logo: "/brands/akuvox.png" },
  { name: "Sony", cat: "av", logo: "/brands/sony.png" },
];

export const CLIENTS = [
  ["Arabian Construction Co.", "acc.png"], ["Al Tayer", "al-tayer.png"], ["WalkThru Contracting", "walkthru-contracting.png"],
  ["Khansaheb", "khansaheb.jpg"], ["Chalhoub Group", "chalhoub-group.png"], ["Lissoni & Partners", "lissoni-partners.svg"],
  ["MAF Dalkia", "maf-dalkia.png"], ["Streit Group", "streit-group.png"],
  ["Build Corp Interiors", "build-corp-interiors.svg"], ["Strata Global", "strata-global.jpg"], ["Unesia Interior", "unesia-interior.png"],
  ["DAT Architects + Engineers", "dat.png"], ["TAK Construction", "tak-construction.png"], ["TAG", "tag.jpg"],
  ["Zen Interiors", "zen-interiors.svg"], ["Ashtaar Interiors", "ashtaar-interiors.png"], ["Saporiti Italia", "saporiti-italia.svg"],
  ["TakaHisa", "takahisa.png"],
].map(([name, f]) => ({ name, logo: "/clients/" + f }));

export const PARTNERS = [
  { name: "Control", scope: "KNX and IP control platforms", tier: "Accredited" },
  { name: "Lighting", scope: "Dimming, drivers and architectural fittings", tier: "Accredited" },
  { name: "Audio-Visual", scope: "Multi-room audio, cinema and displays", tier: "Accredited" },
  { name: "Networking", scope: "Structured cabling and wireless", tier: "Accredited" },
  { name: "Security", scope: "Intrusion, surveillance and access", tier: "Accredited" },
  { name: "Shading", scope: "Blind and curtain drives", tier: "Accredited" },
  { name: "Climate", scope: "HVAC control interfaces", tier: "Accredited" },
  { name: "Interfaces", scope: "Keypads, plates and touch panels", tier: "Accredited" },
];

export const DOWNLOADS = [
  { name: "Capability Overview", desc: "Company introduction, disciplines and selected work, for architects and developers.", meta: "On request", action: "Request" },
  { name: "Specification Support", desc: "Discipline-by-discipline scope notes to sit alongside an M&E or ID specification.", meta: "On request", action: "Request" },
  { name: "Coordination Requirements", desc: "First-fix requirements: containment, back-box positions, rack space and power.", meta: "On request", action: "Request" },
  { name: "Sample Handover Documentation", desc: "A redacted example of the as-built documentation issued at completion.", meta: "On request", action: "Request" },
  { name: "Trade Licence And Insurance", desc: "Licence, registration and certificates of insurance for main contractor onboarding.", meta: "On request", action: "Request" },
  { name: "Technical Documentation", desc: "CAD and BIM information for design partners, where available for the discipline.", meta: "On request", action: "Request" },
];

// One photo per discipline, shared by the homepage tiles and the Products
// page so the two can never disagree. Communications and Connectivity
// come from the project galleries; Control and Entertainment were supplied
// by the client; Security and Lighting are still stock until residential
// photography is supplied. Lighting and Connectivity
// swapped photos at the client's request.
export const DISCIPLINE_PHOTOS = {
  control: { src: "/disciplines/control-tablet.jpg", position: "52% 55%" },
  entertainment: { src: "/disciplines/entertainment-cinema.jpg", position: "88% 55%" },
  security: { src: "/disciplines/security.jpg" },
  communications: { src: "/projects/volante-2/intercom.png", from: "Volante 2", position: "50% 40%" },
  lighting: { src: "/disciplines/connectivity.png" },
  connectivity: { src: "/projects/c128/staircase.png", from: "C128", position: "40% 65%" },
};

export const QUOTES = [
  { text: "Ultimate Solutions and the team epitomize a true spirit of partnership in every regard. From the process of defining user requirements to implementation to ongoing servicing of product solution they have never left our side.", name: "F.D.", role: "Client" },
  { text: "As a luxury residential real estate developer, our customers always expect the latest and the best of everything. We trust Ultimate Solutions to provide us with the best advice and quality work in all our developments.", name: "R.M.", role: "Residential developer" },
  { text: "Ultimate Solutions consistently nailed their projects with their qualified team and dedication. Solutions and systems they provide truly stand out", name: "L.A.", role: "Client" },
  { text: "Working with Ultimate Solutions has always felt like a true partnership. Their team takes the time to understand the project, provides the right technical guidance, and remains fully committed from the initial design through to completion and ongoing support.", name: "A.M.", role: "Client" },
  { text: "In our projects, there is very little room for compromise when it comes to quality, performance and finish. Ultimate Solutions understands this completely. Their technical knowledge, attention to detail and commitment to delivering the right solution make them a trusted partner across our developments.", name: "S.R.", role: "Client" },
  { text: "Our relationship with Ultimate Solutions has grown over the years into a genuine partnership. They are responsive, knowledgeable and always willing to go the extra mile to find the right solution. It is reassuring to have a team we can rely on throughout every stage of a project.", name: "D.K", role: "Client" },
  { text: "Delivering a luxury residence requires much more than installing technology; it requires precision, discretion and an understanding of how every system should work within the architecture. Ultimate Solutions has consistently demonstrated all three, making them a valued and trusted partner on our projects.", name: "T.M.", role: "Client" },
];

export const PRIVACY = [
  { icon: "shield-check", title: "Overview", body: "We respect your privacy and are committed to protecting your personal information." },
  { icon: "file-text", title: "Information We Collect", body: "As a home automation system integrator, we may collect information necessary to provide, install, configure, maintain, and support your automation systems. This may include your name, contact details, property information, system configuration, and access credentials where required." },
  { icon: "sliders-horizontal", title: "How We Use Your Information", body: "We use this information only to deliver and improve our services, provide technical support, and communicate with you regarding your system. We do not sell or share your personal information with third parties except where necessary to provide the requested services, comply with legal requirements, or work with authorized technology/service providers." },
  { icon: "shield-check", title: "Security", body: "We take reasonable measures to protect your information and system access. However, no electronic system can be guaranteed to be completely secure." },
  { icon: "file-check", title: "Your Acknowledgement And Updates", body: "By engaging our services, you acknowledge and agree to this Privacy Policy. We may update this policy from time to time, and the latest version will apply to our services." },
  { icon: "mail", title: "Questions Or Requests", body: "For any privacy-related questions or requests, please contact us directly." },
];

export const NAV = [
  { id: "home", href: "/", label: "Home" },
  { id: "products", href: "/products", label: "Products" },
  { id: "projects", href: "/projects", label: "Projects" },
  { id: "about", href: "/about", label: "About" },
  { id: "certs", href: "/certifications", label: "Certifications" },
  { id: "contact", href: "/contact", label: "Contact" },
];

export const CONTACT_ROWS = [
  { icon: "mail", k: "Email", v: "info@ultimatesolutions.net", href: "mailto:info@ultimatesolutions.net" },
  { icon: "map-pin", k: "Based in", v: "Churchill Towers, Business Bay, Office 116, Dubai", href: "https://www.google.com/maps/search/?api=1&query=Churchill+Towers%2C+Business+Bay%2C+Dubai", external: true },
  { icon: "network", k: "Working across", v: "Dubai and the wider UAE" },
  { icon: "clock", k: "Response", v: "Within one working day" },
];

// TODO: replace with the real profile URLs before these go live.
export const SOCIAL_LINKS = [
  { label: "Instagram", icon: "instagram", href: "" },
  { label: "Facebook", icon: "facebook", href: "" },
  { label: "LinkedIn", icon: "linkedin", href: "" },
];

// Project case-study detail (background/scope/specs), keyed by project id.
const VOLANTE_DETAIL = {
  background: "On the banks of the luxurious Business Bay district of Dubai, stands Volante Tower, one of Dubai's most exclusive residential developments. Targeting the rich empty nesters who want to enjoy a luxury relaxing lifestyle. The tower is comprised of a combination of half floor spacious two bedroom units of 5,000 sqft and whole floor four bedroom units of 10,000 sqft.",
  secondTitle: "Every Apartment A Villa Of Its Own",
  secondBody: "In each tower, every luxurious apartment is considered a villa on its own enjoying the best of smart systems as a standard with full KNX solution for light, climate and curtain control, IP CCTV, ANPR, audio distribution, Intercom, discrete wifi and home control solutions such as Crestron and savant systems.",
  delivers: ["Full KNX light, climate and curtain control", "IP CCTV and ANPR", "Audio distribution", "Intercom", "Discrete Wi-Fi", "Crestron and Savant home control"],
  specs: [
    { k: "Units", v: "Half-floor 2BR, full-floor 4BR" },
    { k: "Unit size", v: "5,000 / 10,000 sqft" },
    { k: "Control", v: "KNX" },
    { k: "Security", v: "IP CCTV, ANPR, Intercom" },
    { k: "Audio", v: "Distributed" },
    { k: "Network", v: "Discrete Wi-Fi" },
    { k: "Home control", v: "Crestron, Savant" },
  ],
};
export const PROJECT_DETAILS = { "volante-1": VOLANTE_DETAIL, "volante-2": VOLANTE_DETAIL };
// Fallback detail/gallery for any project without its own PROJECT_DETAILS
// entry (currently: palm-villa). Kept deliberately type-neutral — no
// "apartment", "tower" or "building" language — since it's shared by
// villas and towers alike and shouldn't assume either.
export const GENERIC_DETAIL = {
  background: "This home was designed so every system — lighting, climate, entertainment and security — could be operated by someone with no prior introduction to it, including guests and staff.",
  secondTitle: "One Interface, Every System",
  secondBody: "Lighting, climate, entertainment and security are held in one control system rather than run as separate installations, so the home behaves consistently for the owner, guests and staff alike.",
  delivers: ["Lighting control, per room", "Climate control and zoning", "Entertainment and multi-room audio", "Structured networking", "Security and access", "Single interface across all systems"],
  specs: [
    { k: "Lighting", v: "Delivered" },
    { k: "Climate", v: "Delivered" },
    { k: "Entertainment", v: "Delivered" },
    { k: "Networking", v: "Delivered" },
    { k: "Full scope", v: "On request" },
  ],
};

export const GENERIC_GALLERY = [
  { slotId: "cs-g1", placeholder: "Interior at dusk, panoramic view beyond", title: "Living Space", desc: "Interior at dusk, panoramic view beyond." },
  { slotId: "cs-g2", placeholder: "Keypad or touch panel detail", title: "Interface", desc: "Keypad and touch panel detail." },
  { slotId: "cs-g3", placeholder: "Labelled equipment rack", title: "Equipment", desc: "Labelled equipment rack." },
  { slotId: "cs-g4", placeholder: "Exterior at dusk", title: "Exterior", desc: "Exterior at dusk." },
  { slotId: "cs-g5", placeholder: "Lounge with an integrated lighting scene", title: "Lounge", desc: "Lounge with an integrated lighting scene." },
];

export const PROJECT_GALLERIES = {
  "c128": [
    { slotId: "c128-living", img: "/projects/c128/living-room.png", title: "Living Room", desc: "Waterfront living space with sea views and an integrated display." },
    { slotId: "c128-bar", img: "/projects/c128/bar.png", title: "Bar", desc: "Sculptural marble bar with backlit display shelving." },
    { slotId: "c128-staircase", img: "/projects/c128/staircase.png", title: "Staircase", desc: "Integrated step lighting, controlled alongside the rest of the home." },
    { slotId: "c128-control", img: "/projects/c128/control-panel.png", title: "Control Panel", desc: "Whole-property control from one interface, including garages, cameras and intercom." },
  ],
  "volante-1": [
    { slotId: "v1-living", img: "/projects/volante-1/living-room.png", title: "Living Room", desc: "Lighting scenes and shading set from a single keypad." },
    { slotId: "v1-kitchen", img: "/projects/volante-1/kitchen.png", title: "Kitchen", desc: "Task and ambient lighting on independent KNX circuits." },
    { slotId: "v1-bedroom", img: "/projects/volante-1/bedroom.png", title: "Bedroom", desc: "Bedside control of lights, blinds and climate." },
    { slotId: "v1-bathroom", img: "/projects/volante-1/bathroom.png", title: "Bathroom", desc: "Dimmed scenes and underfloor heating control." },
    { slotId: "v1-panels", img: "/projects/volante-1/control-panels.png", title: "Control Panels", desc: "KNX keypads, finished to match the interior." },
    { slotId: "v1-tablet", img: "/projects/volante-1/tablet-control.png", title: "Tablet Control", desc: "Whole-apartment control from one interface." },
  ],
  "volante-2": [
    { slotId: "v2-living", img: "/projects/volante-2/living-room.png", title: "Living Room", desc: "Burj Khalifa views with lighting and shading scenes on KNX." },
    { slotId: "v2-dressing", img: "/projects/volante-2/dressing-room.png", title: "Dressing Room", desc: "Presence-driven lighting with dimmed evening scenes." },
    { slotId: "v2-bathroom", img: "/projects/volante-2/bathroom.png", title: "Bathroom", desc: "Scene lighting and climate control per room." },
    { slotId: "v2-panel", img: "/projects/volante-2/control-panel.png", title: "Control Panel", desc: "KNX keypad, finished to match the interior." },
    { slotId: "v2-intercom", img: "/projects/volante-2/intercom.png", title: "Intercom", desc: "Akuvox video intercom integrated with apartment control." },
  ],
};

export function getProject(slug) {
  return PROJECTS.find((p) => p.id === slug) || null;
}

export function getProjectDetail(slug) {
  return PROJECT_DETAILS[slug] || GENERIC_DETAIL;
}

export function getGallery(slug) {
  return (PROJECT_GALLERIES[slug] || GENERIC_GALLERY).map((g) => ({ hasImg: !!g.img, ...g }));
}

export function getCategory(id) {
  return CATS.find((c) => c.id === id) || CATS[0];
}
