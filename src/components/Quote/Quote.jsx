import { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const num = Math.floor(Math.random() * data.length);
        setQuote(data[num]);
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        console.log(err);
      }
    };
    getAPI();
  }, []);

  return (
    <div className="flex w-56 flex-col text-sm">
      {hasError ? (
        <span>Something went wrong...</span>
      ) : isLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <span className="font-serif italic">{quote.text}</span>
          <span>
            -{' '}
            {quote.author === 'type.fit'
              ? 'Dale Carnegie'
              : quote.author.includes(', type.fit')
              ? quote.author.split(', ', 1)
              : quote.author}
          </span>
        </>
      )}
    </div>
  );
}

export default Quote;
