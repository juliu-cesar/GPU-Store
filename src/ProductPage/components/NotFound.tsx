import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container_404 align_center">
      <img
        src="../img/icons/svg/404-not-found.svg"
        alt="Pagina não encontrada"
        style={{ maxWidth: "700px" }}
      />
      <Link className="align_center" href={"/"}>
        Voltar à pagina inicial
      </Link>
    </div>
  );
}
