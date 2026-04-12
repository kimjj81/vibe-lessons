import SemverPdfScene from './SemverPdfScene';

export const semverFreeformSlides = Array.from({ length: 13 }, (_, index) => function SemverFreeformSlide() {
  return <SemverPdfScene scene={index + 1} />;
});
