import React from 'react';
import { Page, Document, Text, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Table from './Table';

export default function MyDocument() {

    // Create styles
    const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        color: "black",
        flexDirection: "column",
        margin: 10,
    },
    title:{
        color: 'green', 
        textAlign: 'center',
        margin: 5,
    },
    viewer: {
        width: window.screen.width,
        height: window.screen.height
      },
    });

    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page title={"Test PDF"}   
                      author={"Victor"}
                      size={"A4"} 
                      style={styles.page}
                >
                    <Text style={styles.title}>THIS IS A TEST</Text>
                    <Table />
                </Page>
            </Document>
        </PDFViewer>
    );
}