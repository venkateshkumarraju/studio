const skills = [
  "WEB DESIGN",
  "APP DESIGN",
  "DEVELOPMENT",
  "WEB FLOW",
  "BRANDING",
];

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-8 text-2xl font-semibold tracking-wider">
    <span>{text}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  </div>
);

export function MarqueeSection() {
  const extendedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="w-full bg-[#1C1C1C] text-white py-10 -rotate-2 transform my-16">
      <div className="marquee">
        <div className="marquee-content space-x-8">
          {extendedSkills.map((skill, index) => (
            <MarqueeItem key={index} text={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
