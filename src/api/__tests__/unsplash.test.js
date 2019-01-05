// tests use what they can get form __mocks__ so in this case 'axios' delivers mocked axios

import mockAxios from "axios";
import { searchPhotos } from "../unsplash";

describe("unsplash", () => {
  it("should perform axios GET and return images", async () => {
    // this overwrites my axios default mock implementation from __mocks__
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: ["cute.jpg"],
        },
      })
    );

    // this is request with mocked axios function
    const images = await searchPhotos("kittens");

    // assertions part
    expect(images).toEqual(["cute.jpg"]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          client_id:
            "48e50ab44c8fe716923d0b81f2ee7070d560627c61bff6ec1685f55ddba27c76",
          per_page: 1,
          query: "kittens",
        },
      }
    );
  });
});
