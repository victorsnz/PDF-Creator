import React from 'react';
import { Page, Document, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Table from './Table';
import Logo from './Logo';

export default function MyDocument() {

    // Create styles
    const styles = StyleSheet.create({
        viewer: {
            width: window.screen.width,
            height: window.screen.height
         },
        page: {
            backgroundColor: 'white',
            color: "black",
            flexDirection: "column",
            padding: 20
        },
        title:{
            color: 'green', 
            textAlign: 'center',
            margin: 5,
        },
        headerSection: {
            flexDirection: "row",
            alignItems: "center",
        },
        text:{
            fontSize: 11,
            textAlign: "justify",
            margin: 10,
            color: 'black',
        }
    });

    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page title={"Test PDF"}   
                      author={"Victor"}
                      size={"A4"} 
                      style={styles.page}
                >
                    <View style={styles.headerSection}>
                    <Logo />
                    <Text style={styles.title}>THIS IS A TEST USING REACT-PDF</Text>
                    </View>
                    <Table />
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, enim nostrum, adipisci dolor officia iure hic laboriosam atque fuga perferendis est fugit ullam repellat eaque. Ex eaque tempora assumenda eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex vitae veritatis error necessitatibus consectetur dolore, dicta reiciendis officia sit molestiae quisquam quos exercitationem minus ab tempore cumque, enim facilis!</Text>
                </Page>
            </Document>
        </PDFViewer>
    );
}