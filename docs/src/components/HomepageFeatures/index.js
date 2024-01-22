import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Datamine notifications bot was designed to be easy to use and
        makes datamining discord easier!.
      </>
    ),
  },
  {
    title: 'Always be up-to-date with discord leaks!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Datamine notifications will do the job for you! it will automaticly notify 
        you whenever an update has been posted by dataminers and send it to the correct <code>channel</code>.
      </>
    ),
  },
  {
    title: 'The future of discord datamining',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Datamine notifications is the future of discord datamining as it provides 
        an easy to use system, and the bot also contains 4+ repository&apos;s with different bots/users posting
        updates
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
