import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Facile da usare', 
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
AKILImob has a highly intuitive and easy-to-understand interface, 
which allows users to navigate it effortlessly.
      </>
    ),
  },
  {
    title: 'Nowadays is a must',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In today's digital landscape, an online management site is crucial for businesses,
         enabling streamlined operations, efficient collaboration, centralized data management,
         and remote access to enhance productivity and competitiveness.
      </>
    ),
  },
 /* {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
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
