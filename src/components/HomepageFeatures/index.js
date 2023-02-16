import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        More details on how to build the solution <a href="https://github.com/sayajin-labs/kakarot#build" target="_blank">here</a> 
      </>
    ),
  },
  {
    title: 'Deploy',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        More details on how to deploy Kakarot <a href="https://github.com/sayajin-labs/kakarot#deploy" target="_blank">here</a>
      </>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
      More details on how to contribute <a href="https://github.com/sayajin-labs/kakarot/blob/main/docs/CONTRIBUTING.md" target="_blank">here</a>
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
        <h3>{title}</h3>
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
