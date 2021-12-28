import axios, { AxiosError } from "axios";
import { CounterDTO } from "./api.model";
import { API_URL, fetchCount } from "./counterAPI";

test("API DTO should be mapped to number if API return data successfully", async () => {
  const serverData: CounterDTO = {
    amount: 10,
  };

  const getStub = jest.spyOn(axios, "get").mockResolvedValueOnce({
    data: serverData,
  });

  const result = await fetchCount();

  expect(getStub).toHaveBeenCalledWith(API_URL);
  expect(result).toBe(10);
});

test("API error should return a rejected promise in case of the request fails", async () => {
  const ERROR_MESSAGE = "test error";
  const error: Partial<AxiosError> = {
    message: ERROR_MESSAGE,
    code: "403",
  };
  const getStub = jest.spyOn(axios, "get").mockRejectedValueOnce(error);
  try {
    await fetchCount();
  } catch (error) {
    expect(getStub).toHaveBeenCalledWith(API_URL);
    expect((error as AxiosError).message).toBe(ERROR_MESSAGE);
  }
});
