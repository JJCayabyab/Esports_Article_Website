/* eslint-disable react/prop-types */
import Navbar from "../LandingPage/Navbar"
import { useParams } from "react-router-dom";

import {
  topStoryData,
  latestStoryData,
  valorantData,
  leagueData,
  dota2Data,
  cs2Data,
  mlbbData
} from "../LandingPage/Data";
import styles from './FullArticle.module.css'
import CardComponent from "../LandingPage/Card";
import { Grid, GridColumn } from "semantic-ui-react";
import Footer from "../LandingPage/Footer";

//to ensure that \n works as a br tag in the full description
const formatText = (text) => {
  return text.split('\n').map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));
};

//to display related articles
const RelatedArticlesComponent = ({ relatedArticles }) => {
  if (relatedArticles.length === 0) {
    return <p>No related articles found</p>;
  }
  return (
    <>
      {relatedArticles.map((relatedArticle, index) => (
        <div key={index}>
          <CardComponent
            textContentContainer={styles.smallTextContentContainer}
            imageStyle={styles.imageStyle}
            linkContainer={styles.linkContainer}
            card={styles.smallCardContainer}
            story={relatedArticle}
            cardContent={styles.smallContentContainer}
            cardHeader={styles.smallHeader}
            cardMeta={styles.smallMeta}
            cardDescription={styles.smallShortDesc}
          />
          <br />
          <hr className={styles.relatedLine} />
          <br />
        </div>
      ))}
    </>
  );
};

/// Shuffle function to randomize the order of related articles
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const FullArticle = () => {

  const { id, header } = useParams(); // Get the ID and header from the URL
  console.log("ID:", id);
  console.log("Header:", header);

  // Combine all data
  const allArticles = [...topStoryData, ...latestStoryData, ...valorantData, ...leagueData, ...dota2Data, ...cs2Data, ...mlbbData];


  // Find the specific story by ID
  const article = allArticles.find((article) => article.id === id);

  //if no articles are found
  if (!article) {
    return <h2>Article not found</h2>;
  }

  // Find related articles with the same game name, excluding the current article
  const relatedArticles = allArticles.filter(
    (item) => item.gameName === article.gameName && item.id !== article.id
  );

  // Shuffle the filtered related articles
  const shuffledArticles = shuffleArray(relatedArticles);

  // Select up to 3 random articles
  const finalRelatedArticles = shuffledArticles.slice(0, 3);

  console.log(relatedArticles);
  return (
    <>
      <Navbar />
      <div className={styles.fullArticleContainer}>
        <div className={styles.headlineContainer}>
          <h3>{article.gameName}</h3>
          <h1>{article.header}</h1>
          <h4> {article.author} | {article.date} </h4>
        </div>
        <img src={article.img} className={styles.articleImage} />

        <Grid columns={2}>
          <GridColumn width={11} className={styles.grid}>
            <p>{formatText(article.fullDesc)}</p>
          </GridColumn>
          <GridColumn width={4} className={styles.relatedContainer} >
            <p id={styles.relatedText}>RELATED CONTENT</p>

            <RelatedArticlesComponent relatedArticles={finalRelatedArticles} />
          </GridColumn>
        </Grid>

      </div>
      <Footer />


    </>
  )
}

export default FullArticle
