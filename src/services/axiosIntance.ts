import axios from "axios";

const apiBaseUrl = "http://192.168.31.86:8000";
const apiEndpoint = {
  querySimilarityQuestion: "/search",
  calcSimilarityTwoSentence: "/calc",
  getPlotClusterSentence: "/cluster",
};

async function querySimilarityQuestion(question: string, num: number) {
  try {
    const { data } = await axios.get<string>(
      apiBaseUrl + apiEndpoint.querySimilarityQuestion,
      {
        params: {
          question,
          num: num,
        },
      }
    );

    return JSON.parse(data);
  } catch (error) {
    handleError(error);
  }
}

interface CalcResponse {
  score: number;
}

async function calcSimilarityTwoSentence(values: {
  ques_1: string;
  ques_2: string;
}) {
  try {
    const { data } = await axios.post<CalcResponse>(
      apiBaseUrl + apiEndpoint.calcSimilarityTwoSentence,
      {
        ...values,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
}

async function getPlotClusterSentence(corpus: string[], n_clusters: number) {
  try {
    const { data } = await axios.post<string>(
      apiBaseUrl + apiEndpoint.getPlotClusterSentence,
      {
        corpus,
        n_clusters,
      }
    );
    return JSON.parse(data);
  } catch (error) {
    handleError(error);
  }
}

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.log("error message: ", error.message);
    return error.message;
  } else {
    console.log("unexpected error: ", error);
    return "An unexpected error occurred";
  }
};

export {
  querySimilarityQuestion,
  getPlotClusterSentence,
  calcSimilarityTwoSentence,
};
