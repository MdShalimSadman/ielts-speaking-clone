"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useQuery } from "@tanstack/react-query";
import { getIeltsCourse } from "@/services/api/ieltsCourse.api";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ielts-course"],
    queryFn: () => getIeltsCourse(),
  });

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
