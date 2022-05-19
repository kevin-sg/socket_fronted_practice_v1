import { HomePage } from "@/pages";
import { UserProdiver } from "@/context";

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
