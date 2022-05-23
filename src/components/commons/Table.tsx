import { useContext, useEffect, useState } from "react";

import * as Commons from "@/components/Commons";
import { BandContext, SocketContext } from "@/context";
import type { IHandleChangeDataProps } from "@/global/myGlobalTypes";

function Table(): React.ReactElement {
  const { bandData } = useContext(BandContext);
  const { bandController } = useContext(SocketContext);

  const [bands, setBands] = useState(bandData.listBands);

  useEffect(() => {
    setBands([...bandData.listBands]);
  }, [bandData.listBands]);

  function handleChange({ ev, id }: IHandleChangeDataProps) {
    setBands((prev) => {
      return prev.map((band) => (band.id === id ? { ...band, name: ev.target.value } : band));
    });
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="text-center px-6 py-3">
              Band name
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Votes
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Count
            </th>
            <th scope="col" className="text-center px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bands?.map(({ id, name, votes }) => (
            <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div className="flex gap-2 justify-center items-center">
                  <Commons.Button
                    type="button"
                    text="✓"
                    color="green"
                    onClick={() => bandController.changeNameBand({ id, name })}
                  />
                  <label>
                    <Commons.Input
                      type="text"
                      name={name}
                      value={name}
                      placeholder="Name band"
                      onChange={(ev) => handleChange({ ev, id })}
                    />
                  </label>
                </div>
              </th>
              <td className="text-center px-6 py-4">
                <span className="font-semibold">{votes}</span>
              </td>
              <td className="px-6 py-4">
                <Commons.Button type="button" text="+1" color="blue" onClick={() => bandController.countBand({ id })} />
              </td>
              <td className="px-6 py-4 text-right">
                <Commons.Button
                  type="button"
                  text="Delete"
                  color="red"
                  onClick={() => bandController.removeBand({ id })}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
