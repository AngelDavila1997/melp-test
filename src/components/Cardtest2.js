import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
import './Card.css';

const useStyles = makeStyles(({ spacing, palette }) => ({
  card: {
    //display: 'inline-block',
    padding: spacing(2),
    borderRadius: 16,
    margin: "12px",
    transition: 'all 0.5s',

    "&:hover": {
      transform: "scale(1.03)",
    }
  },
  rating: {
    verticalAlign: 'text-top',
  },
  content: {
    padding: spacing(0, 2, 0, 0),
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginBottom: 0,
    marginRight: spacing(1.5),
    display: 'inline-block',
  },
  body: {
    fontSize: 14,
    color: palette.grey[500],
    display: 'inline-block',
  },
  divider: {
    margin: spacing(1, 0),
  },
  textFooter: {
    fontSize: 14,
  },
  icon: {
    fontSize: '1.2rem',
    verticalAlign: 'bottom',
  },
}));

const ReviewCard2 = ({name, rating, id, site, email, phone, street, city, state}) => {
  const styles = useStyles();
  const gutterStyles = usePushingGutterStyles({ space: 1.5 });
  const labelStyles = useLabelIconStyles({ linked: true });
  const flexStyles = useRowFlexStyles();
  return (
    <Card className={styles.card} elevation={3}>
      <CardContent className={styles.content}>
        <Box mb={1}>
          <h3 className={styles.heading} className="restaurant">{name} </h3>
          <Rating
            name={"rating"}
            value={rating}
            className={styles.rating}
            size={'small'}
            readOnly
          />
        </Box>
        <Box  className={styles.body}>
          <h1 className="text">Address</h1>
          <p>{street + ", " + city + ", " + state}</p>
        </Box>
        <Box className={styles.body}>
          <h1 className="text">Contact Information</h1>
          <ul className="a">
            <li>{email}</li>
            <li>{phone}</li>
          </ul>
        </Box>
        <Divider className={styles.divider} light />
        <div className={flexStyles.parent}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href={site} target="blank" className="rlink">Know more about us!</a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard2;