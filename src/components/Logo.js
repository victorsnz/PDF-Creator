import React from 'react'
import { Image, StyleSheet } from '@react-pdf/renderer';
import reactLogo from '../assets/logo-react.png';
export default function Logo() {
    
    const styles = StyleSheet.create({
        logo: {
            width: "60px",
          },
    });

  return (
    <Image style={styles.logo} src={reactLogo}/>
  )
}
