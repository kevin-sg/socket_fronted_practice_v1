import * as Layout from "@/components/Layout";
import * as Commons from "@/components/Commons";
import { useInitialBand } from "@/hooks";

function HomePage(): React.ReactElement {
  const { isConnected } = useInitialBand();

  return (
    <Layout.Container>
      <div className="my-4">
        <Commons.Title text="Bands Names" />
        <div className="w-auto mx-auto flex gap-2 justify-center items-center">
          <Commons.Subtitle text="Socket.io" link="https://www.npmjs.com/package/socket.io" />
          {"-"}
          <Commons.Subtitle text="Chart.js" link="https://www.npmjs.com/package/chart.js?activeTab=readme" />
        </div>
      </div>

      <div className="w-full mx-auto flex gap-2 justify-center items-center mb-5">
        <Commons.AvatarStatus isActive={isConnected} />
        <Commons.StatusName isActive={isConnected} />
      </div>

      {isConnected && <Commons.BandChart />}

      <div className="w-full mx-auto flex gap-10 justify-center items-start my-2 flex-wrap">
        <div className="w-full max-w-xs flex gap-2 flex-col">
          <Commons.DescriptionTitle text="Add Band" />
          <Commons.Form />
        </div>
        {isConnected && (
          <div className="flex gap-2 flex-col">
            <Commons.DescriptionTitle text="Current Band" />
            <Commons.Table />
          </div>
        )}
      </div>
    </Layout.Container>
  );
}

export default HomePage;
