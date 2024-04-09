import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllItems,
  getErrorState,
  getItems,
  getLoadingState,
} from "./homeReducer";

const Home = () => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  const items = useSelector(getAllItems);
  const loading = useSelector(getLoadingState);
  const error = useSelector(getErrorState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  if (loading) {
    return <h1 className="text-amber-500 ">Loading...</h1>;
  }

  return (
    <div className="">
      <p className="text-amber-500 text-[0.7rem]">Find your stride</p>
      <div className="mt-3 flex flex-col gap-3 relative">
        <h1 className="text-2xl">Discover your items.</h1>
        <div className="flex gap-8 flex-wrap">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
