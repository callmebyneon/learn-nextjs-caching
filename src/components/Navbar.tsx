import Link from "next/link";

const NavLink = (props: any) => {
  const { children, ...restProps } = props;
  return (
    <>
      <Link
        {...restProps}
        className="inline-block px-3 py-2 text-sm text-teal-500 bg-white hover:underline transition rounded-md"
      >
        {children}
      </Link>
    </>
  );
};

export default function NavBar() {
  return (
    <>
      <section className="mr-auto">
        <nav className="flex gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/a">Page A</NavLink>
          <NavLink href="/b">Page B</NavLink>
        </nav>
      </section>
    </>
  );
}
