export const Link = ({ href, children, ...rest }) => {
  return (
    <a
      rel="noopener noreferer"
      target="_blank"
      href=""
      {...rest}
    >{children}
    </a>
  );
};
