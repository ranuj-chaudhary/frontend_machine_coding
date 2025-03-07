import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import './ScrollIndiator.css';

const ScrollIndiator = () => {
  const [products, loading, error] = useProducts(
    'https://dummyjson.com/products/?limit=0&skip=0'
  );
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    function handleProgressPercent(e) {
      const scrollTopBody = document.documentElement.scrollTop;

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledPercent = Math.floor(
        (scrollTopBody / (scrollHeight - clientHeight)) * 100
      );
      setProgressPercent(scrolledPercent);
    }
    window.addEventListener('scroll', handleProgressPercent);

    return () => {
      window.removeEventListener('scroll', handleProgressPercent);
    };
  }, [progressPercent]);

  return (
    <>
      <header className="scroll-progress__header">
        <h1>CustomScroll Indication</h1>
        <p>Percent Scroll: {progressPercent}</p>
        <div className="scroll__progress-wrapper">
          <div
            className="scroll__progress"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </header>
      <section>
        {products && products.length > 0
          ? products.map((product) => (
              <div key={product.id} className="products__scroll">
                <p>{product.title}</p>
              </div>
            ))
          : null}
        {loading ? <p>Loading Products...</p> : null}
        {error && error.length > 0 ? <p>{error}</p> : null}
      </section>
    </>
  );
};

export default ScrollIndiator;
