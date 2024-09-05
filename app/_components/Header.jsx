import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="w-full border-b border-primary-900/30 px-8 py-5">
      <nav className="z-10 mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
