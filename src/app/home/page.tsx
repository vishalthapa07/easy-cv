import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MainContainer from "../components/main-container";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div>
      <MainContainer session={session} />
    </div>
  );
};

export default HomePage;
