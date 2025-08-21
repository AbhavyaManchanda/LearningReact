import { useState, useEffect } from 'react';
import "./scroll.css";

export default function ScrollIndicator(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData({ url }) {
    try {
      setLoading(true);
      const response = await fetch(url);

      const result = await response.json();

      // setData(result);

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      // console.error('Fetch error:', error);
    }
  }
  useEffect(() => {
    if (url) fetchData(url);
  }, [url]);

  // useEffect(() => {
  //   console.log("Data updated:", data);
  // }, [data]);

  function handleScrollPercent() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.scrollTop,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercent);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}