import { auth, signIn, signOut } from "@/auth";

function SignIn() {
  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-600">You are not logged in</p>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
        className="flex flex-col items-center"
      >
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200 ease-in-out"
        >
          Sign in with GitHub
        </button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
        className="flex flex-col items-center"
      >
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ease-in-out"
        >
          Sign in with Google
        </button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("facebook");
        }}
        className="flex flex-col items-center"
      >
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Sign in with Facebook
        </button>
      </form>
    </div>
  );
}

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="flex flex-col items-center space-y-4"
    >
      <p className="text-lg text-gray-600">{children}</p>
      <button
        type="submit"
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200 ease-in-out"
      >
        Sign out
      </button>
    </form>
  );
}

export default async function Page() {
  let session = await auth();
  let user = session?.user?.email;

  return (
    <section className="max-w-md mx-auto my-10">
      <h1 className="text-2xl font-bold text-center mb-6">Home</h1>
      <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
    </section>
  );
}
