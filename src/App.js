import SortableList from "./lib/SortableList";
import { data } from "./TestItem/testData";
import TestItem from "./TestItem/TestItem";
function App() {
  const onDropItem = (newList) => {
    console.log("new list", newList);
  };

  const onClickItem = (index) => {
    alert(index);
  };
  return (
    <SortableList
      data={data}
      renderItem={(item, index) => <TestItem data={item} index={index} />}
      onDropItem={onDropItem}
      onClickItem={onClickItem}
    />
  );
}

export default App;
