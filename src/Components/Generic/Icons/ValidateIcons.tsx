export const Ok = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#169B00" />
      <path
        d="M6 12L9.60038 15.9604C10.0629 16.4692 10.889 16.3702 11.2182 15.7666L16 7"
        stroke="#F6F6F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const Error = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FF0000" />
      <circle cx="12" cy="18" r="1" fill="#F6F6F6" />
      <rect x="11" y="4" width="2" height="11" rx="1" fill="#F6F6F6" />
    </svg>
  );
};
