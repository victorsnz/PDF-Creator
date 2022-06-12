import React from 'react'

import { Image, StyleSheet } from '@react-pdf/renderer';
import JusticeLeague from '../assets/JusticeLeague.jpg';

export default function ImgJL() {

    const styles = StyleSheet.create({
        image: {
            // width: "100px",
            marginVertical: 15,
            marginHorizontal: 100,
          },
    });

  return (
    <Image style={styles.image} src={JusticeLeague}/>
  )
}
