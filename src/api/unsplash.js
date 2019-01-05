import axios from "axios";

export const searchPhotos = async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id:
        "48e50ab44c8fe716923d0b81f2ee7070d560627c61bff6ec1685f55ddba27c76",
      query: term,
      per_page: 1,
    },
  });
  return response.data.results;
};
