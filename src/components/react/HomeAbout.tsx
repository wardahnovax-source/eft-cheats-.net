import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const featureKeys = [
	'home.aboutFeature1',
	'home.aboutFeature2',
	'home.aboutFeature3',
	'home.aboutFeature4',
	'home.aboutFeature5',
] as const;

const guideLinks = [
	{ href: '/tarkov-cheats/', labelKey: 'home.aboutPillar' },
	{ href: '/tarkov-esp/', labelKey: 'home.aboutEsp' },
	{ href: '/tarkov-aimbot/', labelKey: 'home.aboutAimbot' },
	{ href: '/updates/', labelKey: 'home.aboutUndetected' },
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutLede')}</p>
			</header>

			<div className="home-about__grid">
				<div className="home-about__panel">
					<h3>{t('home.aboutFeaturesTitle')}</h3>
					<ul className="home-about__list">
						{featureKeys.map((key) => (
							<li key={key}>{t(key)}</li>
						))}
					</ul>
				</div>

				<div className="home-about__panel">
					<h3>{t('home.aboutNextTitle')}</h3>
					<p className="home-about__panel-lede">{t('home.aboutNextLede')}</p>
					<div className="home-about__actions">
						<a className="home-about__action" href="/pricing/">
							<span className="home-about__action-label">{t('home.aboutLinkStore')}</span>
							<span className="home-about__action-hint">{t('home.aboutLinkStoreHint')}</span>
						</a>
						<a className="home-about__action" href="/updates/">
							<span className="home-about__action-label">{t('home.aboutLinkStatus')}</span>
							<span className="home-about__action-hint">{t('home.aboutLinkStatusHint')}</span>
						</a>
					</div>
				</div>
			</div>

			<div className="home-about__guides">
				<div className="home-about__guides-head">
					<h3>{t('home.aboutGuidesTitle')}</h3>
					<p>{t('home.aboutGuidesLede')}</p>
				</div>
				<nav className="home-about__guide-links" aria-label={t('home.aboutGuidesTitle')}>
					{guideLinks.map((link) => (
						<a key={link.href} href={link.href}>
							{t(link.labelKey)}
							<span className="home-about__guide-arrow" aria-hidden="true" />
						</a>
					))}
				</nav>
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
