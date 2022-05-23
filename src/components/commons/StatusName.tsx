type TStatusNameProps = { isActive: boolean };

function StatusName({ isActive }: TStatusNameProps): React.ReactElement {
  return <span className={isActive ? "text-green-400" : "text-red-400"}>{isActive ? "Online" : "Desconnect"}</span>;
}

export default StatusName;
