import usePersist from "../Persist";
import Memo from "./Memo";
import AddForm from "./AddForm"

const MemoPage = () => {
  const [mode, setMode] = usePersist("model", "default");
  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pb-0">
          <AddForm />
      </div>
      <Memo />
    </div>
  );
};

export default MemoPage;
