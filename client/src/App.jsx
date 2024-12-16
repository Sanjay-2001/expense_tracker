import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  SignUpPage,
  TransactionPage,
} from "./pages";
import Header from "./components/ui/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/mutations/transaction.mutation";

function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);
  return (
    <>
      {data?.authUser && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
