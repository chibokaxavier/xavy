"use client";
import { useEffect, useRef, useState } from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  status?: string;
};

type WorkSection = {
  id: string;
  label: string;
  title: string;
  highlight: string;
  intro: string;
  projects: Project[];
};

const personalWorks: Project[] = [
  {
    title: "Kriapay",
    category: "Fintech",
    description:
      "Kriapay lets individuals and businesses send money across Africa for less. One multi-currency wallet holds, sends and receives funds, swaps currencies like Naira, Cedis, Leones and Rands instantly at competitive rates, and keeps fraud out with strict KYC. Kriacard, coming soon, will let users pay globally in their local currency.",
    stack: ["Next.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "MongoDB", "Express"],
    image: "/work/kriapay.webp",
    live: "https://kriapay.framer.website/",
  },
  {
    title: "SportyCam Football League",
    category: "Sports & Events",
    description:
      "SportyCam films, photographs and creates social content for sports clubs in Lagos. For its inaugural football league I built the competition hub: a live kick-off countdown, tiered ticketing with free referral tickets, club registration and invitations, a vendor village application flow, sponsorship packages, fixtures and live match updates.",
    stack: ["React", "Tailwind CSS"],
    image: "/work/sportycam.webp",
    live: "https://sportycam.com/competitions/sfl",
  },
  {
    title: "Autoparts Haven",
    category: "E-commerce",
    description:
      "An online store for genuine OEM auto parts. Drivers filter the catalog by make, model and year to find parts that fit, browse 20 categories from brakes to transmissions, and grab best sellers, new arrivals and countdown deals before checking out. Behind the storefront, it doubles as the shop's inventory management system.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/autoparts-haven.webp",
    live: "https://autoparts-haven.vercel.app/",
  },
  {
    title: "Arone Energy",
    category: "Energy",
    description:
      "Arone Energy keeps Nigerian homes, shops and clinics powered through outages with LUMINAR, its range of solar-ready lithium power systems built in Nigeria, from compact home units to 40kWh business packs. I redesigned the company website to sharpen its user experience and navigation, making the product range easier to explore and order.",
    stack: ["HTML", "jQuery", "Tailwind CSS"],
    image: "/work/arone-energy.webp",
    live: "https://www.aroneenergy.com/",
  },
  {
    title: "Locate REMS",
    category: "PropTech",
    status: "Still under development",
    description:
      "A real estate management system (REMS) that brings a property business's data, client contacts, team tasks, payments and listings into one secure dashboard, so agents and managers can run their entire portfolio from a single place.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/locate-rems.webp",
    live: "https://locate-rems.vercel.app/",
  },
  {
    title: "Delidish",
    category: "Food Delivery",
    description:
      "Delidish is a sleek and modern eCommerce food ordering app that allows users to browse a wide variety of cuisines, place orders effortlessly, and have meals delivered straight to their doorsteps. Designed for convenience, it offers real-time order tracking, secure payment options and personalized user profiles.",
    stack: ["Next.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "MongoDB", "Express"],
    image: "/work/delidish.webp",
    live: "https://delidish.vercel.app",
  },
  {
    title: "Smartvest",
    category: "Investing",
    description:
      "A modern, intuitive landing page designed to build trust, showcase opportunities, and guide you to smarter financial moves.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/smartvest.webp",
    live: "https://smartvest.vercel.app",
  },
  {
    title: "Tooniverse",
    category: "Gaming",
    description:
      "Dive into a sleek landing page, animated world built for gamers. Smooth transitions, bold visuals, and instant access to the hottest titles — all in one epic hub.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/tooniverse.webp",
    live: "https://tooniverse.vercel.app",
  },
  {
    title: "Metaverse",
    category: "Landing Page",
    description:
      "Metaversus, an immersive landing page for a metaverse platform: bold typography, scroll-triggered animations, an interactive world explorer and a fully responsive layout that turns a marketing page into an experience.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/metaverse.webp",
    live: "https://metaverse-blond-phi.vercel.app",
  },
  {
    title: "Travel-Hive",
    category: "Travel",
    description:
      "A modern travel hub with smooth animations and seamless booking. Discover new destinations, curated experiences, and the journey of a lifetime — all in one place.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/travel-hive.webp",
    live: "https://travelhive-nu.vercel.app",
  },
  {
    title: "Techtrail",
    category: "EdTech",
    description:
      "TechTrail is a modern Learning Management System (LMS) designed for seamless, interactive learning. From video lessons to quizzes and certifications, it empowers individuals and teams to upskill efficiently. Start your learning journey with TechTrail today!",
    stack: ["Next.js", "Node.js", "Redux Toolkit", "Tailwind CSS", "MongoDB", "Express"],
    image: "/work/techtrail.webp",
    live: "https://techtraill.vercel.app",
  },
];

const openSourceWorks: Project[] = [
  {
    title: "Trustless Work",
    category: "Web3 Escrow",
    description:
      "Escrow-as-a-service built on Stellar's Soroban smart contracts. Marketplaces, freelance platforms and crowdfunding apps plug in non-custodial stablecoin escrows through an API and React library, with milestones, approvals, configurable roles and dispute resolution. The dApp is where teams deploy, fund and manage those escrows.",
    stack: ["Next.js", "Tailwind CSS", "Stellar"],
    image: "/work/trustless-work.webp",
    live: "https://dapp.trustlesswork.com/",
  },
  {
    title: "Boundless",
    category: "Hackathons & Grants",
    description:
      "The home for builders on Stellar. Developers, designers and founders discover hackathons, bounties and grants, join teams and get paid for their work, while organizers launch campaigns, track milestones and lock funding in escrow before work begins. Promising ideas can also be crowdfunded by the community.",
    stack: ["Next.js", "Tailwind CSS", "Stellar"],
    image: "/work/boundless.webp",
    live: "https://www.boundlessfi.xyz/",
  },
  {
    title: "Stellar Security Portal",
    category: "Web3 Security",
    description:
      "A public good for Soroban smart contract security. It brings audit reports, hundreds of catalogued vulnerabilities, protocols and auditors into one searchable hub, with severity analytics, downloadable PDF reports and contributor roles for Stellar Community Fund members, helping teams ship safer contracts.",
    stack: ["React", "Material UI", "Three.js"],
    image: "/work/stellar-security-portal.webp",
    live: "https://stellarsecurityportal.com/",
  },
  {
    title: "Stellar Kit",
    category: "Developer Tools",
    description:
      "Developer tooling that takes the command line out of Soroban development. Build, deploy and simulate Stellar smart contracts straight from VS Code, with no Stellar CLI required, then track every deployment, verification status and contract interaction from a personal developer dashboard.",
    stack: ["Next.js", "Tailwind CSS", "Soroban"],
    image: "/work/stellar-kit.webp",
    live: "https://stellarkit.xyz/",
  },
  {
    title: "Xelma",
    category: "Prediction Market",
    description:
      "A trustless, dual-mode prediction market on Stellar. Users connect a Freighter wallet and call price moves either directionally (up or down) or within precise ranges for bigger multipliers, with settlement on-chain. Newcomers practice risk-free with 1,000 virtual XLM on testnet, then climb the leaderboard.",
    stack: ["React", "Tailwind CSS", "Stellar"],
    image: "/work/xelma.webp",
    live: "https://xelma-frontend.vercel.app/",
  },
  {
    title: "ProofBridge",
    category: "Cross-Chain Bridge",
    description:
      "A cross-chain bridge without a honeypot. Traders settle peer-to-peer between Stellar and Ethereum: each side locks funds in its own escrow, both co-sign the trade, and each chain verifies a zero-knowledge proof of the other side's deposit before releasing anything. No shared pool ever holds user funds.",
    stack: ["Next.js", "Tailwind CSS", "ZK Proofs"],
    image: "/work/proofbridge.webp",
    live: "https://www.pfbridge.xyz/",
  },
  {
    title: "CheesePay",
    category: "Stablecoin Payments",
    description:
      "Hold dollars, spend local. CheesePay lets people keep their money in USDC or USDT, shielded from currency devaluation, and pay any bank account in Nigeria, Kenya, Rwanda, Ghana or Ethiopia in local currency within seconds. Wallets fund from networks like Stellar, Base and Polygon and are secured by device keys and biometrics, with no app to install.",
    stack: ["Next.js", "Tailwind CSS", "USDC"],
    image: "/work/cheesepay.webp",
    live: "https://www.cheesepay.xyz/",
  },
  {
    title: "Peer Protocol",
    category: "DeFi Lending",
    description:
      "A decentralized peer-to-peer lending protocol on Starknet. Lenders and borrowers meet in a transparent marketplace, agree terms through a dynamic proposal system and lock them into immutable on-chain deals, backed by a gradual liquidation process. Earn interest or unlock credit, with no middleman.",
    stack: ["Next.js", "Tailwind CSS", "Starknet"],
    image: "/work/peer-protocol.webp",
    live: "https://peer-on-strk.vercel.app/",
  },
  {
    title: "Stellar Creators",
    category: "Creator Marketplace",
    description:
      "A marketplace for creative talent beyond code. Designers, writers, marketers and creators across 15+ disciplines showcase their portfolios and compete for bounties, while brands browse talent, post paid briefs with budgets and deadlines, and hire directly.",
    stack: ["Next.js", "Tailwind CSS"],
    image: "/work/stellar-creators.webp",
    live: "https://v0-stellar-creator-portfolio-1b.vercel.app/",
  },
];

const sections: WorkSection[] = [
  {
    id: "personal",
    label: "Personal Works",
    title: "Personal",
    highlight: "Works",
    intro:
      "Products and websites I've built, from fintech and sports to e-commerce, energy and edtech.",
    projects: personalWorks,
  },
  {
    id: "open-source",
    label: "Open Source",
    title: "Open Source",
    highlight: "Contributions",
    intro:
      "Live products across the Stellar, Starknet and Ethereum ecosystems where I'm a heavy open-source contributor, shipping code alongside teams building payments, DeFi, security and developer tooling.",
    projects: openSourceWorks,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

const ProjectCard = ({ project, num }: { project: Project; num: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  // Only offer "Read more" when the description is actually cut off (mobile only).
  useEffect(() => {
    const el = descRef.current;
    if (!el) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-[#232329] p-3 transition-colors duration-300 hover:border-accent/40 sm:p-4"
    >
      <div className="flex gap-3 md:flex-col md:gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="relative block aspect-[16/10] w-28 shrink-0 self-start overflow-hidden rounded-lg bg-white/5 sm:w-40 md:w-full"
        >
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.title} website`}
            fill
            sizes="(min-width: 1200px) 340px, (min-width: 768px) 45vw, (min-width: 640px) 160px, 112px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </a>
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-[11px] uppercase tracking-[0.12em] text-accent">
            {num} · {project.category}
          </span>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-accent md:text-xl">
              {project.title}
            </h3>
            {project.status && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[10px] font-medium leading-none text-amber-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <p
          ref={descRef}
          className={`text-sm leading-relaxed text-white/60 md:line-clamp-none ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>
        {(clamped || expanded) && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mt-1 text-xs font-medium text-accent md:hidden"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-3">
        <ul className="flex flex-wrap gap-x-2 text-xs leading-relaxed text-white/40">
          {project.stack.map((tech, index) => (
            <li key={tech} className="whitespace-nowrap">
              {tech}
              {index < project.stack.length - 1 && (
                <span aria-hidden="true" className="ml-2 text-white/20">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the ${project.title} live site`}
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-accent-hover"
        >
          Live <BsArrowUpRight />
        </a>
      </div>
    </motion.article>
  );
};

const ProjectSection = ({ id, title, highlight, intro, projects }: WorkSection) => (
  <section id={id} className="scroll-mt-6">
    <div className="mb-5 flex flex-col gap-2 xl:mb-8">
      <h2 className="text-[28px] font-bold leading-tight xl:text-[42px]">
        {title} <span className="text-accent">{highlight}</span>
      </h2>
      <p className="max-w-[720px] text-sm text-white/60 xl:text-base">{intro}</p>
    </div>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} num={pad(index + 1)} />
      ))}
    </div>
  </section>
);

const Work = () => {
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] pb-16 pt-2 xl:pt-6"
    >
      <div className="container mx-auto">
        <nav aria-label="Work sections" className="mb-8 flex flex-wrap gap-2 xl:mb-12">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(section.id);
              }}
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {section.label}
              <span className="text-xs text-accent">{pad(section.projects.length)}</span>
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-14 xl:gap-20">
          {sections.map((section) => (
            <ProjectSection key={section.id} {...section} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
