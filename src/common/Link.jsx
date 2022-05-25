export const Link = ({ to, children, ...rest }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={to}
      {...rest}
    >{children}
    </a>
  );
};
