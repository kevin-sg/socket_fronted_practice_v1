import { HomePage } from "@/pages";
import { SocketProvider, UserProdiver } from "@/context";

function App() {
  return (
    <div>
      <SocketProvider>
        <UserProdiver>
          <HomePage />
        </UserProdiver>
      </SocketProvider>
    </div>
  );
}

export default App;
