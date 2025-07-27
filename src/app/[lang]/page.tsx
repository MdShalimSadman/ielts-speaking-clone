"use client";

import { useTranslations, useLocale  } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useQuery } from "@tanstack/react-query";
import { getIeltsCourse } from "@/services/api/ieltsCourse.api";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ielts-course",locale],
    queryFn: () => getIeltsCourse(locale),
  });

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
