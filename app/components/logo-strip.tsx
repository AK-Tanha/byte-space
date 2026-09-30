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
        <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:flex sm:flex-nowrap sm:justify-between sm:gap-6">
          {logos.map((Logo, index) => (
            <li
              key={index}
              className={
                // Five logos: on mobile the last one spans both columns so the
                // row doesn't end with an off-centre orphan.
                index === logos.length - 1
                  ? "col-span-2 flex justify-center sm:col-span-1 sm:block sm:flex-1"
                  : "flex justify-center sm:block sm:flex-1"
              }
            >
              <Logo className="h-auto w-full max-w-[168px] text-[#82868e] transition-opacity hover:opacity-70 sm:max-w-[170px]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
