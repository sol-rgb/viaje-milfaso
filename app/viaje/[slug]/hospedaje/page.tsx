import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import Hospedaje from "@/components/Hospedaje";
import { VIAJES } from "@/data/viajes";

export function generateStaticParams() {
  return VIAJES.filter((t) => !t.oculto).map((t) => ({ slug: t.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = VIAJES.find((v) => v.slug === slug);
  if (!t) notFound();

  return (
    <Shell>
      <Hospedaje t={t} />
    </Shell>
  );
}
