import { HomePage } from "@/pages";
import { UserProdiver } from "@/context";
// import "@/utilities/socket.client.utility";

function App() {
  return (
    <div>
      <UserProdiver>
        <HomePage />
      </UserProdiver>
    </div>
  );
}

export default App;
