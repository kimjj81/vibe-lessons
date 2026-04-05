import { useEffect } from 'react';
import { applySeoToDocument } from '../seo/head';

export default function SeoHead({ seo }) {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    applySeoToDocument(seo);
  }, [seo]);

  return null;
}
