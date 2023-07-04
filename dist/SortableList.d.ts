/// <reference types="react" />
import "./SortableList.css";
type SortableListProps = {
    data: any;
    onClickItem: (index: number) => void;
    renderItem: (item: any, index: number) => JSX.Element;
    updateData?: (newPlayList: any) => void;
};
declare function SortableList({ data, onClickItem, renderItem, updateData, }: SortableListProps): import("react/jsx-runtime").JSX.Element;
export default SortableList;
