import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from "../category.reducer";

import {
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "../category.action";

describe("Categories Reducer tests", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };
    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart()),
    ).toEqual(expectedState);
  });

  test("fetchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        items: [
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ],
      },
    ];
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(mockData),
      ),
    ).toEqual(expectedState);
  });

  test("fetchCategoryFailure", () => {
    const mockError = new Error("Error");
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesFailure(mockError),
      ),
    ).toEqual(expectedState);
  });
});
