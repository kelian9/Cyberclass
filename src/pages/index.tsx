import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/ui/Header/Header';

export default () => (
  <div>
    <Head title="Cyberclass" />
    {/* <Header /> */}
    <div className="hero">
      <h1 className="title">Welcome to create-next-app-cli (Create Next.js App building tools)</h1>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
    `}</style>
  </div>
);
