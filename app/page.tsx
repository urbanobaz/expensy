import Image from "next/image"

export default function IndexPage() {
  return (
    <section className="container grid items-center px-4 sm:px-10">
      <div className=" max-w-full">
        <h1 className="px-4 py-6 text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Sign in with Google to keep track of{" "}
          <br className="hidden sm:inline" />
          your income and expenses intuitively.
        </h1>
      </div>
      <div className="hidden w-full justify-center sm:flex">
        <Image
          src={"/expensy.png"}
          alt={"Image showcase for Expensy"}
          width="1000"
          height="700"
          className="rounded-md"
        />
      </div>
      <div className="flex w-full justify-center sm:hidden">
        <Image
          src={"/expensy-tall.png"}
          alt={"Image showcase for Expensy for small screens"}
          width="1000"
          height="700"
          className="rounded-md"
        />
      </div>
    </section>
  )
}
