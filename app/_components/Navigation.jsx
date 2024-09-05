import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <div className="z-10">
      <ul className="flex items-center gap-16">
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link href="/account" className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  referrerPolicy="no-referrer"
                  src={session.user.image}
                  alt={session.user.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span>Guest Area</span>
            </Link>
          ) : (
            <Link href="/account">Guest Area</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
