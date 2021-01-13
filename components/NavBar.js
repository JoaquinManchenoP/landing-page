import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar flex flex-row justify-between m-5 mr-16 ml-16 mt-8">
      <div className="leftSide ">
        <div className="title">
          <Link href="/">
            <p className="cursor-pointer text-2xl font-sans	font-family:-apple-system font-medium">
              Metrosolutions
            </p>
          </Link>
        </div>
      </div>

      <div className="rightSide flex flex-row space-x-12 ">
        <div className="home">
          <Link href="/inicio">
            <p className="cursor-pointer font-light">Inicio</p>
          </Link>
        </div>
        <div className="services">
          <Link href="/servicios">
            <p className="cursor-pointer font-light">Servicios</p>
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
