import { useLocation, useNavigate } from 'react-router-dom';

export const PathText = ({ text }: { text: string }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const parts = text.split('/');
  for (let i = 0; i < parts.length - 1; i++) {
    parts[i] = `${parts[i]}  /  `;
  }
  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const item = e.currentTarget.textContent;
    if (!item.includes('/')) return;
    const [url, _] = item.split('/');
    const idx = parts.findIndex((items) => items.includes(url));
    const paths = pathname
      .trim()
      .split('/')
      .filter((it) => it);
    const path = '/' + paths.slice(0, idx + 1).join('/') + '/';
    navigate(path);
  };
  return parts.map((item) => (
    <span
      onClick={onClick}
      style={{
        color: item.includes('/') ? 'grey' : 'black',
        cursor: 'pointer',
      }}
      key={item}
    >
      {item}
    </span>
  ));
};
