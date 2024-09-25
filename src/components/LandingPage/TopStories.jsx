import styles from './TopStories.module.css'
import {
  Grid,
  GridColumn,
  GridRow,
} from 'semantic-ui-react';
import { topStoryData } from './Data';

import CardComponent from './Card';

//imports for semantic
import 'semantic-ui-css/components/image.min.css';
import 'semantic-ui-css/components/image.css';
import 'semantic-ui-css/components/card.min.css';
import 'semantic-ui-css/components/card.css';
import 'semantic-ui-css/components/grid.css';
import 'semantic-ui-css/components/grid.min.css';

const TopStories = () => {

  return (
    <>
      <div className={styles.topStoriesContainer}>
        <h1>TOP STORIES</h1>
        <Grid columns={2}>

          <GridColumn width={9}>
            <CardComponent
              textContentContainer={styles.mainTextContentContainer}
              imageStyle={styles.imageStyle}
              linkContainer={styles.linkContainer}
              card={styles.mainCardContainer}
              story={topStoryData[0]}
              cardContent={styles.mainContentContainer}
              cardHeader={styles.mainHeader}
              cardMeta={styles.mainMeta}
              cardDescription={styles.mainShortDesc}
            />
          </GridColumn>


          <GridColumn width={6}>
            <Grid columns={2} >
              <GridRow>
                <CardComponent
                  textContentContainer={styles.smallTextContentContainer}
                  imageStyle={styles.imageStyle}
                  linkContainer={styles.linkContainer}
                  card={styles.smallCardContainer}
                  story={topStoryData[1]}
                  cardContent={styles.smallContentContainer}
                  cardHeader={styles.smallHeader}
                  cardMeta={styles.smallMeta}
                  cardDescription={styles.smallShortDesc}
                />
                <CardComponent
                  textContentContainer={styles.smallTextContentContainer}
                  imageStyle={styles.imageStyle}
                  linkContainer={styles.linkContainer}
                  card={styles.smallCardContainer}
                  story={topStoryData[2]}
                  cardContent={styles.smallContentContainer}
                  cardHeader={styles.smallHeader}
                  cardMeta={styles.smallMeta}
                  cardDescription={styles.smallShortDesc}
                />   
              </GridRow>

              <GridRow>
                <CardComponent
                  textContentContainer={styles.smallTextContentContainer}
                  imageStyle={styles.imageStyle}
                  linkContainer={styles.linkContainer}
                  card={styles.smallCardContainer}
                  story={topStoryData[3]}
                  cardContent={styles.smallContentContainer}
                  cardHeader={styles.smallHeader}
                  cardMeta={styles.smallMeta}
                  cardDescription={styles.smallShortDesc}
                />
                <CardComponent
                  textContentContainer={styles.smallTextContentContainer}
                  imageStyle={styles.imageStyle}
                  linkContainer={styles.linkContainer}
                  card={styles.smallCardContainer}
                  story={topStoryData[4]}
                  cardContent={styles.smallContentContainer}
                  cardHeader={styles.smallHeader}
                  cardMeta={styles.smallMeta}
                  cardDescription={styles.smallShortDesc}
                />

              </GridRow>
            </Grid>
          </GridColumn>
        </Grid>
        <hr className={styles.divider}/>
      </div>
    

    </>
  )
}

export default TopStories
