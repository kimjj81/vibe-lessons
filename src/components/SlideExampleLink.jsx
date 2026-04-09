import { useCourseDeck } from '../courses/CourseDeckContext';
import { getCourseDetailBySlug } from '../course-details/registry';
import { useLocale } from '../i18n/LocaleContext';
import { pickLocalized } from '../i18n/localize';
import { toGitHubExampleAssetHref } from '../utils/exampleLinks';

export default function SlideExampleLink({ compact = false }) {
  const deck = useCourseDeck();
  const { locale } = useLocale();
  const detail = deck?.course ? getCourseDetailBySlug(deck.course.slug) : null;
  const exampleHref = toGitHubExampleAssetHref(pickLocalized(detail?.practiceAssets?.[0]?.href, locale));

  if (!exampleHref) return null;

  return (
    <a
      className={compact ? 'slide-example-link slide-example-link-compact' : 'slide-example-link'}
      href={exampleHref}
      rel="noopener noreferrer"
      target="_blank"
    >
      {locale === 'ko' ? '예제 보기' : 'Open example'}
    </a>
  );
}
