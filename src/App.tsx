import axios from "axios";
import { useState } from "react";

type dataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [datas, setDatas] = useState<dataType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  try {
    // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    setError(null);
    setDatas(null);
    // loading 상태를 true 로 바꿉니다.
    setLoading(true);
    const response = await axios.get("/data/mockData");
    setDatas(response.data); // 데이터는 response.data 안에 들어있습니다.
    console.log(response.data);
  } catch (e: any) {
    setError(e);
  }
  setLoading(false);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!datas) return null;

  return <div>{datas[0].title}</div>;
}

export default App;
