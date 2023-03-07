import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Params() {
  const [param, setParam] = useState<string | string[] | undefined>("");
  const router = useRouter();

  useEffect(() => {
    setParam(router.query.params);
  }, [router.query]);
  return (
    <>
      <h1>Parâmetro recebido: {param}</h1>
    </>
  );
}
