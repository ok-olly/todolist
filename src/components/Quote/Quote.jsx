import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const num = Math.floor(Math.random() * data.length - 1);
        setQuote(data[num]);
      } catch (err) {
        console.log(err);
      }
    };
    getAPI();
  }, []);

  return (
    <div>
      {quote && (
        <>
          <span>{quote.text}</span>
          <span>
            {quote.author.includes(', type.fit')
              ? quote.author.split(', ', 1)
              : quote.author}
          </span>
        </>
      )}
    </div>
  );
}

export default Quote;
