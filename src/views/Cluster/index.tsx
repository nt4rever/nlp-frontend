import Plot from "react-plotly.js";
import styles from "./index.module.scss";
import contact from "./../../assets/images/contact-1-1-1.png";
import { useState } from "react";
import { getPlotClusterSentence } from "../../services/axiosIntance";

const Cluster = () => {
  const [plotData, setPlotData] = useState(null);
  const [corpus, setCorpus] = useState<string[]>([]);
  const [cluster, setCluster] = useState<number>(2);

  const handlePlotCluster = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (corpus.length > 2) {
      const data = await getPlotClusterSentence(corpus, cluster);
      setPlotData(data);
    }
  };

  const clusterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCluster(Number(e.target.value));
  };

  const corpusOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const arr = text.split(/[\r\n]+/).filter((e) => e);
    setCorpus(arr);
  };
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>
          <h3>Clustering sentence embeddings</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles["form"]}>
          <div className={styles["image"]}>
            <img src={contact} alt="contact" />
          </div>
          <div className={styles["input"]}>
            <div className={styles["text-area"]}>
              <textarea
                name="message"
                cols={40}
                rows={10}
                aria-required="true"
                aria-invalid="false"
                placeholder="Sentences"
                onChange={corpusOnChange}
              ></textarea>
            </div>
            <div className={styles["input-cluster"]}>
              <input
                type="number"
                min={2}
                max={10}
                placeholder="Number cluster"
                onChange={clusterOnChange}
              />
            </div>
            <div className={styles["button"]}>
              <a
                href="#"
                className="btn btn-primary"
                onClick={handlePlotCluster}
              >
                Visualize
              </a>
            </div>
          </div>
        </div>
      </div>
      {plotData && (
        <div className={styles["plot"]}>
          <Plot data={plotData["data"]} layout={plotData["layout"]} />
        </div>
      )}
    </>
  );
};

export default Cluster;
