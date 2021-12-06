export const postGameStats = (gameStats, url) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gameStats),
  };
  return fetch(url, requestOptions);
};

export const getStats = async url => {
  const stats = await fetch(url);
  const data = await stats.json();
  return data;
};

export const hello = 'hello';
