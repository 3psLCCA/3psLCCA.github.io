import type {ReactNode} from 'react';
import {useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type {ReleaseData} from '../../plugins/latest-release-plugin';
import {usePlatform, type DetectedPlatform} from '../utils/usePlatform';

import {
  ThemeProvider,
  createTheme,
  alpha,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const BRAND = {
  blue: '#5457c6',
  orange: '#ff5a2a',
  green: '#6fac00',
};

function formatSize(bytes: number): string {
  return `${Math.round(bytes / 1024 / 1024)} MB`;
}

function useDownloads() {
  const release = usePluginData('latest-release-plugin') as ReleaseData;
  return {
    tag: release.tag,
    downloads: [
      {
        key: 'windows' as const,
        label: 'Windows',
        detail: `.exe installer · ~${formatSize(release.assets.windows.size)}`,
        href: release.assets.windows.url,
        icon: '/img/platforms/windows.svg',
      },
      {
        key: 'linux' as const,
        label: 'Linux',
        detail: `.sh installer · ~${formatSize(release.assets.linux.size)}`,
        href: release.assets.linux.url,
        icon: '/img/platforms/linux.svg',
      },
      {
        key: 'other' as const,
        label: 'Conda (all platforms)',
        detail: `.conda package · ~${formatSize(release.assets.conda.size)}`,
        href: release.assets.conda.url,
        icon: '/img/platforms/anaconda.svg',
      },
    ],
  };
}

const INSTALL_INSTRUCTIONS: Record<DetectedPlatform, ReactNode> = {
  windows: (
    <>
      Run the downloaded <code>.exe</code> installer and follow the setup
      wizard prompts.
    </>
  ),
  linux: (
    <>
      Make the downloaded <code>.sh</code> script executable (
      <code>chmod +x</code>) and run it from a terminal.
    </>
  ),
  other: (
    <>
      With Miniconda installed, install the downloaded <code>.conda</code>{' '}
      package locally - <Todo>exact install command</Todo>
    </>
  ),
  android: (
    <>
      3psLCCA doesn't have an Android build yet - a web app for use on any device,
      including Android, is coming soon.
    </>
  ),
};

const SYS_REQUIREMENTS: Record<DetectedPlatform, ReactNode[]> = {
  windows: [<>Windows 10 or later (64-bit)</>],
  linux: [<>Linux (64-bit)</>],
  // macOS falls into this bucket too - the Conda package is the only option there.
  other: [
    <>Windows, Linux, or macOS (64-bit)</>,
    <>Requires Python 3.10–3.12 and Miniconda</>,
  ],
  android: [<>Not yet supported - web app coming soon</>],
};

function Todo({children}: {children?: ReactNode}) {
  return (
    <Chip
      component="span"
      size="small"
      variant="outlined"
      color="warning"
      label={`[TODO${children ? ` - ${children}` : ''}]`}
      sx={{
        fontFamily: 'var(--ifm-font-family-monospace)',
        fontWeight: 600,
        height: 'auto',
        '& .MuiChip-label': {whiteSpace: 'normal', py: 0.25},
      }}
    />
  );
}

function Eyebrow({children}: {children: ReactNode}) {
  return (
    <Typography
      variant="overline"
      sx={{color: 'primary.main', fontWeight: 700, letterSpacing: '0.08em'}}>
      {children}
    </Typography>
  );
}

function Section({
  id,
  eyebrow,
  title,
  surface,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  surface?: boolean;
  children: ReactNode;
}) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: {xs: 5, md: 7},
        borderTop: '1px solid var(--ifm-toc-border-color)',
        bgcolor: surface ? 'var(--ifm-background-surface-color)' : 'transparent',
      }}>
      <Container maxWidth="lg">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Typography
          variant="h3"
          component="h2"
          sx={{fontWeight: 700, letterSpacing: '-0.01em', mb: 3}}>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {tag} = useDownloads();
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
        py: {xs: 6, md: 9},
        px: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: [
            `radial-gradient(circle at 30% 20%, ${alpha(BRAND.blue, 0.22)}, transparent 55%)`,
            `radial-gradient(circle at 75% 15%, ${alpha(BRAND.orange, 0.18)}, transparent 50%)`,
            `radial-gradient(circle at 50% 90%, ${alpha(BRAND.green, 0.16)}, transparent 50%)`,
          ].join(','),
        },
      }}>
      <Container maxWidth="md" sx={{position: 'relative'}}>
        <Chip
          component="a"
          href="#download"
          clickable
          variant="outlined"
          label={`${tag} available for download`}
          icon={
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                bgcolor: BRAND.green,
                ml: '10px',
              }}
            />
          }
          sx={{mb: 3, fontWeight: 600, textDecoration: 'none'}}
        />
        <Box
          component="img"
          src="/img/logo.png"
          alt="3psLCCA logo"
          className="spin-logo"
          sx={{width: 84, height: 84, display: 'block', mx: 'auto', mb: 2}}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{fontWeight: 800, letterSpacing: '-0.02em', mb: 1.5}}>
          {siteConfig.title}
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" sx={{mb: 1}}>
          {siteConfig.tagline}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{maxWidth: 560, mx: 'auto', mb: 4}}>
          Free desktop software for steel &amp; PSC girder short-span
          bridges, built around the 3psLCCA framework.
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          sx={{justifyContent: 'center', flexWrap: 'wrap'}}>
          <Button
            component={Link}
            to="#download"
            variant="contained"
            size="large"
            disableElevation>
            Download {tag}
          </Button>
          <Button
            component={Link}
            to="/docs/intro"
            variant="outlined"
            size="large">
            GETTING STARTED
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

type FeatureCardProps = {
  accent: keyof typeof BRAND;
  label: string;
  title: string;
  children: ReactNode;
};

function FeatureCard({accent, label, title, children}: FeatureCardProps) {
  const color = BRAND[accent];
  return (
    <Grid size={{xs: 12, sm: 6, md: 3}}>
      <Card
        variant="outlined"
        sx={{
          height: '100%',
          transition: 'box-shadow 0.15s ease, border-color 0.15s ease',
          '&:hover': {borderColor: color, boxShadow: 3},
        }}>
        <CardContent>
          <Chip
            label={label}
            size="small"
            sx={{
              bgcolor: alpha(color, 0.14),
              color,
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          />
          <Typography variant="subtitle1" sx={{fontWeight: 700, mb: 1}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function AboutSection() {
  return (
    <Section eyebrow="Overview" title="About the Software">
      <Typography sx={{maxWidth: 860, mb: 4, fontSize: '1.05rem'}}>
        <strong>3psLCCA</strong> is a desktop application for evaluating the
        full economic life cycle of bridge infrastructure - construction,
        maintenance, traffic disruption, carbon impact, and end-of-life
        recycling - combined into a single monetary metric via the{' '}
        <strong>3psLCCA</strong> (Three Pillars of Sustainability LCC)
        framework.
      </Typography>
      <Grid container spacing={3}>
        <FeatureCard accent="blue" label="Goal" title="One metric, three pillars">
          Rank bridge design alternatives on total life cycle cost -
          economic, environmental, and social impact expressed in the same
          currency.
        </FeatureCard>
        <FeatureCard accent="orange" label="Audience" title="Built for engineers">
          Bridge engineers, infrastructure planners, and researchers
          comparing design options beyond upfront construction cost.
        </FeatureCard>
        <FeatureCard accent="green" label="Problem" title="Fragmented tooling">
          General LCA tools skip cost and social impact; bridge tools like
          BridgeLCC or GreenBridge each cover only one pillar. 3psLCCA
          unifies all three.
        </FeatureCard>
        <FeatureCard accent="blue" label="Difference" title="Reports built in">
          Every result is comparable in one currency, with PDF report
          generation included - no separate tooling required.
        </FeatureCard>
      </Grid>
    </Section>
  );
}

function DownloadSection() {
  const {downloads} = useDownloads();
  const detected = usePlatform();
  const [selected, setSelected] = useState<DetectedPlatform | null>(null);
  const active = selected ?? detected;

  return (
    <Section id="download" eyebrow="Get Started" title="Getting and Using It" surface>
      <Grid container spacing={3}>
        {downloads.map((d) => (
          <Grid size={{xs: 12, sm: 6, md: 3}} key={d.label}>
            <Card
              variant="outlined"
              sx={{
                position: 'relative',
                height: '100%',
                textAlign: 'center',
                overflow: 'visible',
                borderColor: active === d.key ? 'primary.main' : undefined,
                borderWidth: active === d.key ? 2 : 1,
                '&:hover': {boxShadow: 4},
              }}>
              {detected === d.key && (
                <Chip
                  label="Recommended"
                  color="primary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 700,
                    fontSize: '0.68rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                />
              )}
              <CardContent
                onClick={() => setSelected(d.key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelected(d.key);
                  }
                }}
                sx={{pt: 3.5, cursor: 'pointer', outline: 'none'}}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    mx: 'auto',
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f5f5f5',
                    borderRadius: '50%',
                  }}>
                  <Box component="img" src={d.icon} alt="" sx={{width: 28, height: 28}} />
                </Box>
                <Typography sx={{fontWeight: 700, fontSize: '1.1rem'}}>
                  {d.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                  {d.detail}
                </Typography>
                {active === d.key && (
                  <Button
                    component={Link}
                    to={d.href}
                    variant="contained"
                    disableElevation
                    fullWidth
                    onClick={(e) => e.stopPropagation()}>
                    Download
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid size={{xs: 12, sm: 6, md: 3}}>
          <Card variant="outlined" sx={{position: 'relative', height: '100%', textAlign: 'center', overflow: 'visible'}}>
            <Chip
              label="Coming soon"
              color="warning"
              size="small"
              sx={{
                position: 'absolute',
                top: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            />
            <CardContent sx={{pt: 3.5}}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  mx: 'auto',
                  mb: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#f5f5f5',
                  borderRadius: '50%',
                }}>
                <Box component="img" src="/img/platforms/web.svg" alt="" sx={{width: 28, height: 28}} />
              </Box>
              <Typography sx={{fontWeight: 700, fontSize: '1.1rem'}}>Web App</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mb: 2}}>
                Across any platform
              </Typography>
              <Button variant="contained" disableElevation fullWidth disabled>
                Open
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{mt: 4}}>
        <Typography
          variant="subtitle2"
          sx={{textTransform: 'uppercase', letterSpacing: '0.04em', color: 'text.secondary', mb: 1}}>
          Installing
        </Typography>
        <Typography color="text.secondary">
          {INSTALL_INSTRUCTIONS[active]}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{mt: 1, pt: 4, borderTop: '1px solid var(--ifm-toc-border-color)'}}>
        <Grid size={{xs: 12, md: 6}}>
          <Typography
            variant="subtitle2"
            sx={{textTransform: 'uppercase', letterSpacing: '0.04em', color: 'text.secondary', mb: 1}}>
            System requirements
          </Typography>
          <List dense sx={{listStyleType: 'disc', pl: 2, '& .MuiListItem-root': {display: 'list-item', px: 0}}}>
            {SYS_REQUIREMENTS[active].map((req, i) => (
              <ListItem key={i}>{req}</ListItem>
            ))}
          </List>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Typography
            variant="subtitle2"
            sx={{textTransform: 'uppercase', letterSpacing: '0.04em', color: 'text.secondary', mb: 1}}>
            Guides
          </Typography>
          <List dense sx={{listStyleType: 'disc', pl: 2, '& .MuiListItem-root': {display: 'list-item', px: 0}}}>
            <ListItem>
              <Link to="/docs/getting-started">Quick Start guide →</Link>
            </ListItem>
            <ListItem>
              <Link to="/docs/user-guide">Full user manual →</Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Section>
  );
}

function InfoRow({question, children}: {question: string; children: ReactNode}) {
  return (
    <Grid container spacing={{xs: 0.5, sm: 3}} sx={{py: 2}}>
      <Grid size={{xs: 12, sm: 4}}>
        <Typography sx={{fontWeight: 600}}>{question}</Typography>
      </Grid>
      <Grid size={{xs: 12, sm: 8}}>
        <Typography color="text.secondary">{children}</Typography>
      </Grid>
    </Grid>
  );
}

function InfoList({children}: {children: ReactNode}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <Box sx={{maxWidth: 860}}>
      {items.map((item, i) => (
        <Box key={i}>
          {i > 0 && <Divider />}
          {item}
        </Box>
      ))}
    </Box>
  );
}

function LicenseSection() {
  return (
    <Section eyebrow="Legal" title="License and Cost">
      <InfoList>
        <InfoRow question="Free to use?">
          <Todo>confirm final licensing terms</Todo>
        </InfoRow>
        <InfoRow question="Open-source license">
          <Todo>
            a <code>LICENSE</code> file is referenced in the project metadata
            but not yet published in the GUI repository
          </Todo>
        </InfoRow>
        <InfoRow question="Commercial use">
          <Todo>depends on the license above</Todo>
        </InfoRow>
      </InfoList>
    </Section>
  );
}

function CommunitySection() {
  return (
    <Section eyebrow="Support" title="Community and Help" surface>
      <InfoList>
        <InfoRow question="Report a bug or ask a question">
          <Link to="https://github.com/3psLCCA/3psLCCA-gui/issues">GitHub Issues</Link>
        </InfoRow>
        <InfoRow question="Chat room / forum / mailing list">
          <Todo>none set up yet</Todo>
        </InfoRow>
        <InfoRow question="Talk to other users and creators">
          Currently through GitHub Issues; a dedicated community channel is <Todo />
        </InfoRow>
      </InfoList>
    </Section>
  );
}

function ContributingSection() {
  return (
    <Section eyebrow="Open Source" title="Contributing and Code">
      <InfoList>
        <InfoRow question="Source code">
          <Link to="https://github.com/3psLCCA/3psLCCA-gui">3psLCCA-gui</Link> (GUI) and{' '}
          <Link to="https://github.com/3psLCCA/3psLCCA-core">3psLCCA-core</Link> (calculation
          engine), hosted under the <Link to="https://github.com/3psLCCA">3psLCCA</Link> GitHub
          organization.
        </InfoRow>
        <InfoRow question="Submitting fixes or features">
          Fork the relevant repository, make your changes on a branch, and open a pull request.
        </InfoRow>
        <InfoRow question="Contribution guidelines">
          <Todo>
            no <code>CONTRIBUTING.md</code> published yet
          </Todo>
        </InfoRow>
      </InfoList>
    </Section>
  );
}

// Plain-HTML fallback for when JavaScript is disabled. The MUI homepage
// above injects its CSS via JS, so without it that markup would render
// unstyled; this uses only Infima's site-wide stylesheet (already loaded
// via a <link>, not JS) and is toggled on by the <noscript> block in Home().
function NoJsFallback() {
  const release = usePluginData('latest-release-plugin') as ReleaseData;
  const releaseUrl = `https://github.com/3psLCCA/3psLCCA-gui/releases/tag/${release.tag}`;

  return (
    <div className="no-js-fallback">
      <header className="hero hero--primary" style={{textAlign: 'center', padding: '3rem 1.5rem'}}>
        <div className="container">
          <img
            src="/img/logo.png"
            alt="3psLCCA logo"
            width={84}
            height={84}
            className="spin-logo"
            style={{display: 'block', margin: '0 auto 1rem'}}
          />
          <h1 className="hero__title">3psLCCA</h1>
          <p className="hero__subtitle">
            Integrated economic, environmental &amp; social life cycle cost
            assessment for bridges
          </p>
          <p>
            Free desktop software for steel &amp; PSC girder short-span
            bridges, built around the 3psLCCA framework.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a className="button button--primary button--lg" href={releaseUrl}>
              Download {release.tag} from GitHub
            </a>
            <a className="button button--secondary button--lg" href="/docs/intro">
              Read the Docs
            </a>
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <section className="margin-bottom--lg">
          <h2>About the Software</h2>
          <p>
            <strong>3psLCCA</strong> is a desktop application for evaluating
            the full economic life cycle of bridge infrastructure -
            construction, maintenance, traffic disruption, carbon impact, and
            end-of-life recycling - combined into a single monetary metric
            via the <strong>3psLCCA</strong> (Three Pillars of Sustainability
            LCC) framework. It's built for bridge engineers, infrastructure
            planners, and researchers who need to compare design
            alternatives on total life cycle cost, not just upfront
            construction cost.
          </p>
        </section>

        <section className="margin-bottom--lg">
          <h2>Getting and Using It</h2>
          <p>
            Download the latest release ({release.tag}) directly from{' '}
            <a href={releaseUrl}>GitHub Releases</a> - Windows and Linux
            installers, plus a Conda package for all platforms. A web app is coming soon.
          </p>
          <ul>
            <li>
              Windows - run the downloaded <code>.exe</code> installer and
              follow the setup wizard prompts
            </li>
            <li>
              Linux - make the downloaded <code>.sh</code> script executable
              (<code>chmod +x</code>) and run it from a terminal
            </li>
            <li>
              Conda (all platforms) - with Miniconda installed, install the
              downloaded <code>.conda</code> package locally [TODO - exact
              install command]
            </li>
            <li>Windows or Linux (64-bit)</li>
            <li>Conda package requires Python 3.10–3.12 and Miniconda</li>
            <li>
              <a href="/docs/getting-started">Quick Start guide</a>
            </li>
            <li>
              <a href="/docs/user-guide">Full user manual</a>
            </li>
          </ul>
        </section>

        <section className="margin-bottom--lg">
          <h2>License and Cost</h2>
          <ul>
            <li>Free to use: [TODO - confirm final licensing terms]</li>
            <li>
              Open-source license: [TODO - a <code>LICENSE</code> file is
              referenced in the project metadata but not yet published in
              the GUI repository]
            </li>
            <li>Commercial use: [TODO - depends on the license above]</li>
          </ul>
        </section>

        <section className="margin-bottom--lg">
          <h2>Community and Help</h2>
          <ul>
            <li>
              Report a bug or ask a question:{' '}
              <a href="https://github.com/3psLCCA/3psLCCA-gui/issues">
                GitHub Issues
              </a>
            </li>
            <li>Chat room / forum / mailing list: [TODO - none set up yet]</li>
          </ul>
        </section>

        <section>
          <h2>Contributing and Code</h2>
          <ul>
            <li>
              Source code:{' '}
              <a href="https://github.com/3psLCCA/3psLCCA-gui">3psLCCA-gui</a>{' '}
              (GUI) and{' '}
              <a href="https://github.com/3psLCCA/3psLCCA-core">3psLCCA-core</a>{' '}
              (calculation engine), hosted under the{' '}
              <a href="https://github.com/3psLCCA">3psLCCA</a> GitHub
              organization.
            </li>
            <li>
              Submitting fixes: fork the relevant repository, make your
              changes on a branch, and open a pull request.
            </li>
            <li>
              Contribution guidelines: [TODO - no <code>CONTRIBUTING.md</code>{' '}
              published yet]
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

function HomeContent() {
  // Must run inside <Layout>, which is what mounts Docusaurus's
  // ColorModeProvider - calling this above/outside Layout throws.
  const {colorMode} = useColorMode();

  const theme = createTheme({
    palette: {
      mode: colorMode,
      primary: {main: BRAND.blue},
      warning: {main: '#9a6700'},
      background:
        colorMode === 'dark'
          ? {default: '#1b1b1d', paper: '#242526'}
          : {default: '#ffffff', paper: '#ffffff'},
    },
    typography: {
      fontFamily: 'var(--ifm-font-family-base)',
    },
  });

  return (
    <div className="js-required">
      <ThemeProvider theme={theme}>
        <HomepageHeader />
        <main>
          <AboutSection />
          <DownloadSection />
          <LicenseSection />
          <CommunitySection />
          <ContributingSection />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="3psLCCA - integrated economic, environmental & social life cycle cost assessment for bridges.">
      <noscript>
        <style>{`.js-required { display: none !important; } .no-js-fallback { display: block !important; }`}</style>
      </noscript>
      <HomeContent />
      <NoJsFallback />
    </Layout>
  );
}
