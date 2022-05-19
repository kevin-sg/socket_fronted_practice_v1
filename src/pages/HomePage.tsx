import { useContext } from "react";

import { UserContext } from "@/context";
import { AvatarStatus, Form, ListGroup } from "@/components";

function HomePage(): React.ReactElement {
  const { userData } = useContext(UserContext);

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-center text-4xl font-bold my-5">Socket.io</h1>

      <div className="max-w-md mx-auto flex justify-end">
        <AvatarStatus isActive={userData.isActive} />
      </div>

      <div className="max-w-md mx-auto my-2">
        <Form />
      </div>

      <div className="max-w-sm mx-auto mt-2 pt-4">
        {userData.listMessage.length ? <ListGroup items={userData.listMessage} /> : <></>}
        {!userData.listMessage.length && <p className="text-center text-2xl font-semibold">Send message 💬</p>}
      </div>
    </div>
  );
}

export default HomePage;
