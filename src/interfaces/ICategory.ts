export interface ICategoryParams {
  isCategories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  isAddCategory: boolean;
  setIsAddCategory: React.Dispatch<React.SetStateAction<boolean>>;
  isName: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
