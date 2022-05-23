type TitleProps = { text: string };

function Title({ text }: TitleProps) {
  return <h1 className="text-center text-4xl font-bold uppercase">{text}</h1>;
}

export default Title;
