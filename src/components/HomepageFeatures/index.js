import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '信息分享',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        信息不对等是造成很多人付出高昂成本的重要原因，我们希望信息可以更快的被分享被验证和在时效内被更多人了解到.
      </>
    ),
  },
  {
    title: '案例分享',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        成功案例是激励，失败案例是勉励。不是每个案例都一定适用于自己，最重要的是从案例里学习到坚持和坚毅。
      </>
    ),
  },
  {
    title: '求职招聘',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        希望能分享更多的求职信息、特别是海外求职和招聘，让真正有能力的人不会被社会大流淹没。
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
