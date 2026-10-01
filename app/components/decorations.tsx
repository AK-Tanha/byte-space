import Image from "next/image";

const U = (px: number) => `${px / 14.4}cqw`;

const frames = [
  // left column
  { src: "/hero/Frame-left-1.png", width: 267, height: 387, left: 0, top: 222 },
  {
    src: "/hero/Frame-left-2.png",
    width: 177,
    height: 176,
    left: 184,
    top: 478,
  },
  {
    src: "/hero/Frame-left-3.png",
    width: 344,
    height: 343,
    left: 15,
    top: 682,
  },
  // right column
  {
    src: "/hero/Frame right-1.png",
    width: 213,
    height: 372,
    left: 1228,
    top: 221,
  },
  {
    src: "/hero/frame-right-2.png",
    width: 190,
    height: 189,
    left: 1105,
    top: 464,
  },
  {
    src: "/hero/Frame-right -3.png",
    width: 317,
    height: 332,
    left: 1125,
    top: 673,
  },
];

export function HeroFrames() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {frames.map((frame) => (
        <Image
          key={frame.src}
          src={frame.src}
          alt=""
          width={frame.width}
          height={frame.height}
          className="absolute h-auto w-auto"
          style={{
            left: U(frame.left),
            top: U(frame.top),
            width: U(frame.width),
          }}
        />
      ))}
    </div>
  );
}
