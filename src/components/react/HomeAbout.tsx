import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const FEATURE_KEYS = [
	'home.aboutFeature1',
	'home.aboutFeature2',
	'home.aboutFeature3',
	'home.aboutFeature4',
	'home.aboutFeature5',
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	const guides = [
		{ href: '/tarkov-cheats/', labelKey: 'home.aboutPillar' },
		{ href: '/tarkov-esp/', labelKey: 'home.aboutEsp' },
		{ href: '/tarkov-aimbot/', labelKey: 'home.aboutAimbot' },
		{ href: '/updates/', labelKey: 'home.aboutUndetected' },
	] as const;

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutIntro')}</p>
			</header>

			<div className="home-about__grid">
				<div className="home-about__panel">
					<header className="home-about__panel-head">
						<h3>{t('home.aboutFeaturesTitle')}</h3>
					</header>
					<ul className="home-about__features">
						{FEATURE_KEYS.map((key) => (
							<li key={key}>
								<span className="home-about__check" aria-hidden="true" />
								<span>{t(key)}</span>
							</li>
						))}
					</ul>
				</div>

				<nav className="home-about__panel" aria-label={t('home.aboutGuidesTitle')}>
					<header className="home-about__panel-head">
						<h3>{t('home.aboutGuidesTitle')}</h3>
						<p>{t('home.aboutGuidesLede')}</p>
					</header>
					<ul className="home-about__links">
						{guides.map((guide) => (
							<li key={guide.href}>
								<a href={guide.href}>
									<span>{t(guide.labelKey)}</span>
									<span className="home-about__link-arrow" aria-hidden="true" />
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="home-about__cta">
				<a className="home-about__btn home-about__btn--primary" href="/pricing/">
					{t('home.aboutCtaStore')}
				</a>
				<a className="home-about__btn home-about__btn--ghost" href="/updates/">
					{t('home.aboutCtaStatus')}
				</a>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
