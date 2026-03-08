export const PathText = ({ text }: { text: string }) => {
  const parts = text.split('/');
  const lastPart = parts.pop();
  const start = parts.join('/') + (parts.length ? '/' : '');

  return (
    <span style={{ color: 'gray' }}>
      {start}
      <span style={{ color: 'black' }}>{lastPart}</span>
    </span>
  );
};
