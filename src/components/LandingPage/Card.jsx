/* eslint-disable react/prop-types */
import {
    Image,
    Card,
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CardComponent = ({ story, card, linkContainer, textContentContainer, imageStyle, cardContent, cardHeader, cardMeta, cardDescription }) => {
    return (
        <Card className={card}>
            <Link to={`/article/${story.id}/${story.header}`} className={linkContainer}>
                <Image src={story.img} className={imageStyle} />
                <div className={textContentContainer}>
                    <CardContent className={cardContent}>
                        <CardHeader className={cardHeader}>{story.header}</CardHeader>
                        <CardMeta className={cardMeta}>
                            {story.date} | {story.gameName}
                        </CardMeta>
                        <CardDescription className={cardDescription}>
                            {story.shortDesc}
                        </CardDescription>
                    </CardContent>
                </div>
            </Link>
        </Card>
    )
}

export default CardComponent
