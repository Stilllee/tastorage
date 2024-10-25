export interface RecipeData {
  id: number;
  title: string;
  servings: number;
  ingredient: string[];
  directions: string;
}

export interface AdminContextType {
  isAdmin: boolean;
  login: (token: string) => void;
  logout: () => void;
}
