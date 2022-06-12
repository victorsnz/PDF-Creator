import React from 'react';
import { Page, Document, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Table from './Table';
import PageHeader from './PageHeader';
import Logo from './Logo';
import ImgJL from './/ImgJL';

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
            fontSize: 20,
            color: '#145DA0', //Midnight Blue 
            textAlign: 'center',
            margin: 5,
        },
        subTitle:{
            fontSize: 18,
            color: '#145DA0', //Midnight Blue
            textAlign: 'left',
            margin: 5,
        },
        text:{
            fontSize: 12,
            textAlign: "justify",
            margin: 10,
            color: 'black',
        },
        pageNumber:{
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        }
    });

    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page title={"Test PDF - Page 1"}   
                      author={"Victor"}
                      size={"A4"} 
                      style={styles.page}
                >
                    <PageHeader />
                    <View style={styles.header}>
                    <Logo />
                    <Text style={styles.title}>ESTO ES UN TÍTULO</Text>
                    </View>
                    <Text style={styles.subTitle}>Esto es un Subtitulo</Text>
                    <Table />
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, enim nostrum, adipisci dolor officia iure hic laboriosam atque fuga perferendis est fugit ullam repellat eaque. Ex eaque tempora assumenda eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex vitae veritatis error necessitatibus consectetur dolore, dicta reiciendis officia sit molestiae quisquam quos exercitationem minus ab tempore cumque, enim facilis!</Text>
                    <Text style={styles.pageNumber} 
                          render={({ pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} 
                          fixed
                    />
                </Page>
                <Page title={"Test PDF - Page 2"}   
                      author={"Victor"}
                      size={"A4"} 
                      style={styles.page}
                >
                    <PageHeader />
                    <Text style={styles.subTitle}>Esto es un Subtitulo</Text>
                    <ImgJL />
                    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, enim nostrum, adipisci dolor officia iure hic laboriosam atque fuga perferendis est fugit ullam repellat eaque. Ex eaque tempora assumenda eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex vitae veritatis error necessitatibus consectetur dolore, dicta reiciendis officia sit molestiae quisquam quos exercitationem minus ab tempore cumque, enim facilis!</Text>
                    <Text style={styles.pageNumber} 
                          render={({ pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} 
                          fixed
                    />
                </Page>
            </Document>
        </PDFViewer>
    );
}