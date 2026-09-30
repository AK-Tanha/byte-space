import { AuthShell } from "@/app/components/auth-shell";
import {
  AuthField,
  AuthFooter,
  AuthSubmit,
} from "@/app/components/auth-form";

export const metadata = {
  title: "Create an Account — ByteSpace",
};

export default function JoinPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <form className="flex flex-col gap-7">
        {/* Figma: 453 wide, 135 tall (24px label + 8px gap + 2 heading lines). */}
        <div className="w-full max-w-[453px]">
          <p className="text-[18px] leading-[1.6] text-brand">Create an Account</p>
          <h1 className="mt-2 w-full max-w-[453px] text-[34px] leading-[1.2] font-semibold tracking-[-0.01em] text-black sm:text-[44px]">
            Welcome to
            <br />
            ByteSpace
          </h1>
        </div>

        <AuthField
          label="Full Name"
          name="name"
          placeholder="Jamie Davis"
          autoComplete="name"
        />
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
          autoComplete="new-password"
        />

        <AuthSubmit label="Continue" />
      </form>

      <div className="mt-12">
        <AuthFooter
          question="Already have an account?"
          action="Login"
          href="/signin"
        />
      </div>
    </AuthShell>
  );
}
