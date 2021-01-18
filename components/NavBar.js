import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar flex flex-row justify-between m-5 mr-16 ml-14 mt-8">
      <div className="leftSide  ">
        <div className="title xs:pl-14">
          <Link href="/">
            <p className="cursor-pointer md:text-4xl xs:text-5xl xs:mx-auto   font-sans	font-family:-apple-system font-medium ">
              Metrosolutions
            </p>
          </Link>
        </div>
      </div>

      <div className="rightSide flex flex-row space-x-12 xs:text-transparent sm:text-black">
        <div className="home  ">
          <Link href="/inicio">
            <p className="cursor-pointer font-light ">Inicio</p>
          </Link>
        </div>
        <div className="services">
          <Link href="/servicios">
            <p className="cursor-pointer font-light ">Servicios</p>
          </Link>
        </div>

        <div className="clients">
          <Link href="/clientes">
            <p className="cursor-pointer font-light">Clientes</p>
          </Link>
        </div>

        <div className="contacto">
          <Link href="/contacto">
            <p className="cursor-pointer font-light">Contacto</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
