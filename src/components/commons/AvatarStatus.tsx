type TAvatarStatusProps = { isActive: boolean };

function AvatarStatus({ isActive = false }: TAvatarStatusProps): React.ReactElement {
  return (
    <div className="relative w-10 h-10">
      <svg
        className="absolute w-10 h-10 text-gray-400 -left-1 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
      </svg>
      {isActive ? (
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      ) : (
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      )}
    </div>
  );
}

export default AvatarStatus;
