import { ApertureLogo } from "./logos/aperture";
import { CompassLogo } from "./logos/compass";
import { RingsLogo } from "./logos/rings";
import { SunLogo } from "./logos/sun";
import { WaveLogo } from "./logos/wave";

const logos = [WaveLogo, SunLogo, CompassLogo, ApertureLogo, RingsLogo];

export function LogoStrip() {
  return (
    <section
      aria-label="Companies that trust ByteSpace"
      className="bg-[#f5f5f6] py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:flex-nowrap sm:justify-between sm:gap-6">
          {logos.map((Logo, index) => (
            <li
              key={index}
              className="w-[150px] shrink-0 text-[#82868e] transition-opacity hover:opacity-70 sm:w-auto sm:max-w-[170px] sm:flex-1"
            >
              <Logo className="h-auto w-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
