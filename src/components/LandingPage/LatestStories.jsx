import styles from './LatestStories.module.css'

import {
  Grid,
  GridColumn,

} from 'semantic-ui-react'

import { latestStoryData } from './Data';
import CardComponent from './Card';



//imports for semantic
import 'semantic-ui-css/components/image.min.css';
import 'semantic-ui-css/components/image.css';
import 'semantic-ui-css/components/card.min.css';
import 'semantic-ui-css/components/card.css';
import 'semantic-ui-css/components/grid.css';
import 'semantic-ui-css/components/grid.min.css';
import 'semantic-ui-css/components/container.min.css';

const LatestStories = () => {
  return (
    <div className={styles.latestStoriesContainer}>
      <h1>LATEST</h1>

      <Grid columns={4} >
        {latestStoryData.map((story) => {
          return (
            <GridColumn style={{ width: '22.6%' }} key={story.id}>
              <CardComponent
                textContentContainer={styles.smallTextContentContainer}
                imageStyle={styles.imageStyle}
                linkContainer={styles.linkContainer}
                card={styles.smallCardContainer}
                story={story}
                cardContent={styles.mainContentContainer}
                cardHeader={styles.smallHeader}
                cardMeta={styles.smallMeta}
                cardDescription={styles.smallShortDesc}
              />
            </GridColumn>
          )
        })}

      </Grid>
    </div>

  )
}

export default LatestStories
