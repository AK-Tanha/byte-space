import Image from "next/image";
import Link from "next/link";

export function AuthField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-[15px] text-neutral-700">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-3 h-12 w-full rounded-xl border border-neutral-200 px-4 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand"
      />
    </label>
  );
}

export function AuthSubmit({ label }: { label: string }) {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        className="rounded-full bg-lime px-8 py-3 text-[17px] leading-6 text-neutral-900 transition-opacity hover:opacity-90"
      >
        {label}
      </button>
    </div>
  );
}

export function AuthDivider({ label = "or" }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 text-[15px] text-neutral-400">
      <span className="h-px flex-1 bg-neutral-200" />
      {label}
      <span className="h-px flex-1 bg-neutral-200" />
    </div>
  );
}

export function AuthSocial() {
  return (
    <div className="flex justify-center gap-5">
      <button
        type="button"
        aria-label="Continue with Facebook"
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white"
      >
        <Image src="/auth/fb-logo.png" alt="" width={34} height={34} />
      </button>
      <button
        type="button"
        aria-label="Continue with Google"
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white"
      >
        <Image src="/auth/google-logo.png" alt="" width={40} height={40} />
      </button>
    </div>
  );
}

export function AuthFooter({
  question,
  action,
  href,
}: {
  question: string;
  action: string;
  href: string;
}) {
  return (
    <p className="text-center text-[15px] text-neutral-500">
      {question}{" "}
      <Link href={href} className="text-brand hover:underline">
        {action}
      </Link>
    </p>
  );
}
