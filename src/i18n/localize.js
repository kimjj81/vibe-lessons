export function pickLocalized(copy, locale) {
  if (!copy || typeof copy !== 'object') return copy;
  if ('ko' in copy || 'en' in copy) {
    return copy[locale] ?? copy.ko ?? copy.en ?? '';
  }
  return copy;
}
