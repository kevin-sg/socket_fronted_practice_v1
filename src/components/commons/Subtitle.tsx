type TSubtitleProps = { text: string; link: string };

function Subtitle({ text, link }: TSubtitleProps): React.ReactElement {
  return (
    <h2 className="text-center text-xl font-bold uppercase">
      <span className="text-xl">
        <a target="_blank" rel="noopener" href={link} className="underline">
          {text}
        </a>
      </span>
    </h2>
  );
}

export default Subtitle;
