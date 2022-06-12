import React from 'react'

import { Text, StyleSheet } from '@react-pdf/renderer';

export default function PageHeader() {
    const styles = StyleSheet.create({
        header: {
            fontSize: 10,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },
    });
  return (
    <Text style={styles.header}>Created using React-PDF</Text>
  )
}
