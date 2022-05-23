type TDescriptionTitleProps = { text: string };

function DescriptionTitle({ text }: TDescriptionTitleProps): React.ReactElement {
  return <h3 className="text-center text-xl font-semibold my-2">{text}</h3>;
}

export default DescriptionTitle;
