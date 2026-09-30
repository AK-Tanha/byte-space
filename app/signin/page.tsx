import { AuthShell } from "@/app/components/auth-shell";
import {
  AuthDivider,
  AuthField,
  AuthFooter,
  AuthSocial,
  AuthSubmit,
} from "@/app/components/auth-form";

export const metadata = {
  title: "Sign In — ByteSpace",
};

export default function SignInPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <form className="flex flex-col gap-7">
        {/* Figma: 453 wide, 135 tall (24px label + 8px gap + 2 heading lines). */}
        <div className="w-full max-w-[453px]">
          <p className="text-[18px] leading-[1.6] text-brand">Sign In</p>
          <h1 className="mt-2 w-full max-w-[453px] text-[34px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[44px]">
            Welcome Back
          </h1>
        </div>

        <AuthField
          label="Email"
          name="email"
          type="email"
          placeholder="designer@example.com"
          autoComplete="email"
        />
        <AuthField
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          autoComplete="current-password"
        />

        <AuthSubmit label="Sign In" />

        <AuthDivider />

        <AuthSocial />
      </form>

      <div className="mt-12">
        <AuthFooter
          question="New user?"
          action="Create an account"
          href="/join"
        />
      </div>
    </AuthShell>
  );
}
