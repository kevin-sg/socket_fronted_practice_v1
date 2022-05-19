interface ListMessage {
  from: string;
  message: string;
}

interface ListGroupProps {
  items: ListMessage[];
}

function ListGroup({ items }: ListGroupProps): React.ReactElement {
  return (
    <ul className="max-w-fit  mx-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white overflow-hidden">
      {items?.map((item, index) => (
        <li key={index} className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          <div className="flex gap-2 justify-evenly items-left flex-col">
            <p className="text-left text-sm text-green-400 font-semibold">
              From: <span className="text-white/80">{item.from}</span>
            </p>
            <p className="text-left text-sm text-yellow-400 font-base">
              Message: <span className="text-white/80">{item.message}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
