import NotFoundComponent from '@/components/pages/not-found';
import { BaseLayout } from '@/components/shared/base-layout';
import { routing } from '@/i18n/routing';

export default async function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundComponent />
    </BaseLayout>
  );
}
