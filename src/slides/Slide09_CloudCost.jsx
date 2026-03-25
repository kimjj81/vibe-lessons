import SlideWrapper from '../components/SlideWrapper';
import GradientText from '../components/GradientText';
import { useLocale } from '../i18n/LocaleContext';

export default function Slide09_CloudCost() {
  const { locale } = useLocale();
  const copy = {
    ko: {
      title: '클라우드 비용 매트릭스',
      subtitle: 'MVP 단계에서 비용을 최소화하는 서비스 선택',
      tiers: [
        {
          tier: 'Free Tier',
          color: '#22c55e',
          services: [
            { name: 'Vercel', usage: '100GB 대역폭/월', best: '프론트엔드 배포' },
            { name: 'Supabase', usage: '500MB DB, 2GB 저장', best: 'PostgreSQL + Auth' },
            { name: 'Cloudflare', usage: '무제한 요청', best: 'CDN + DNS' },
            { name: 'GitHub Actions', usage: '2,000분/월', best: 'CI/CD' },
          ],
        },
        {
          tier: 'Paid (소규모)',
          color: '#f59e0b',
          services: [
            { name: 'Vercel Pro', usage: '$20/월', best: '팀 협업 + 분석' },
            { name: 'Supabase Pro', usage: '$25/월', best: '8GB DB + 더 많은 API' },
            { name: 'Railway', usage: '$5~20/월', best: '풀스택 앱 배포' },
            { name: 'AWS (소규모)', usage: '$10~50/월', best: '엔터프라이즈 확장' },
          ],
        },
      ],
      tips: [
        { emoji: '💰', title: 'MVP 예산', desc: '월 $0~25으로 시작 가능' },
        { emoji: '📈', title: '스케일업', desc: '트래픽 증가 시 단계적 업그레이드' },
        { emoji: '🔒', title: '락인 방지', desc: '오픈소스 기반 선택 권장' },
      ],
    },
    en: {
      title: 'Cloud cost matrix',
      subtitle: 'How to keep spend low while the MVP is still proving itself',
      tiers: [
        {
          tier: 'Free tier',
          color: '#22c55e',
          services: [
            { name: 'Vercel', usage: '100GB bandwidth / mo', best: 'Frontend hosting' },
            { name: 'Supabase', usage: '500MB DB, 2GB storage', best: 'PostgreSQL + Auth' },
            { name: 'Cloudflare', usage: 'Unlimited requests', best: 'CDN + DNS' },
            { name: 'GitHub Actions', usage: '2,000 min / mo', best: 'CI/CD' },
          ],
        },
        {
          tier: 'Paid (small scale)',
          color: '#f59e0b',
          services: [
            { name: 'Vercel Pro', usage: '$20 / mo', best: 'Team workflow + analytics' },
            { name: 'Supabase Pro', usage: '$25 / mo', best: '8GB DB + more APIs' },
            { name: 'Railway', usage: '$5-20 / mo', best: 'Full-stack hosting' },
            { name: 'AWS (small)', usage: '$10-50 / mo', best: 'Enterprise expansion path' },
          ],
        },
      ],
      tips: [
        { emoji: '💰', title: 'MVP budget', desc: 'You can start around $0-25 / month' },
        { emoji: '📈', title: 'Scale-up', desc: 'Upgrade only as traffic proves demand' },
        { emoji: '🔒', title: 'Avoid lock-in', desc: 'Open-source leaning choices age better' },
      ],
    },
  };
  const t = copy[locale];

  return (
    <SlideWrapper slideNumber={9}>
      <div style={{ width: '100%', maxWidth: '1000px', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px' }}>
          <GradientText>{t.title}</GradientText>
        </h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '40px', fontSize: '1.1rem' }}>
          {t.subtitle}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {t.tiers.map((tier) => (
            <div key={tier.tier} className="card" style={{ borderColor: `${tier.color}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: tier.color, boxShadow: `0 0 8px ${tier.color}` }} />
                <h3 style={{ fontWeight: 700, color: tier.color, fontSize: '1.1rem' }}>{tier.tier}</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tier.services.map((svc) => (
                  <div key={svc.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', background: `${tier.color}11`, borderRadius: '8px' }}>
                    <div style={{ flex: '0 0 100px' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9' }}>{svc.name}</div>
                      <div style={{ fontSize: '0.75rem', color: tier.color, marginTop: '2px', fontFamily: 'Space Grotesk' }}>{svc.usage}</div>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: '0.82rem', flex: 1 }}>{svc.best}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {t.tips.map((tip) => (
            <div key={tip.title} className="card" style={{ padding: '12px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{tip.emoji}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9', marginBottom: '4px' }}>{tip.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{tip.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
