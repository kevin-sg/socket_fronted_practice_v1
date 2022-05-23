type TContainerProps = { children: React.ReactNode };

function Container({ children }: TContainerProps): React.ReactElement {
  return <div className="container mx-auto px-5">{children}</div>;
}

export default Container;
