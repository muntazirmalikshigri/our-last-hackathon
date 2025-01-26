import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Header} from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoanCategories } from "@/components/LoanCategories";
import { LoanCalculator } from "@/components/LoanCalculator";



export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
  <>
    <Header />
    <main>
    </main>
    <main>
        <LoanCategories />
        <LoanCalculator />
        {/* <LoginForm /> */}
    </main>
    <Footer />
  </>
  );
}
