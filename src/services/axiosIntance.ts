import axios from "axios";

async function querySimilarityQuestion(question: string, num: number) {
  try {
    const { data } = await axios.get<string>(
      "http://192.168.31.86:8000/search",
      {
        params: {
          question,
          num: num,
        },
      }
    );

    return JSON.parse(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

async function getPlotClusterSentence(corpus: string[], n_clusters: number) {
  try {
    const { data } = await axios.post<string>(
      "http://192.168.31.86:8000/cluster",
      {
        corpus,
        n_clusters,
      }
    );
    return JSON.parse(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export { querySimilarityQuestion, getPlotClusterSentence };
