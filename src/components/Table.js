import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'; 
import DummyData from '../DummyData.json'

export default function Table() {
    
    const data = DummyData.data;

    // Create styles
    const styles = StyleSheet.create({
        tableContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            fontSize: 9,
            borderRight: "1px solid grey",
            borderLeft: "1px solid grey",
            
          },
        tableHeader: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#145DA0", //Midnight Blue
          color: "white",
          padding: 5,
        },
        row: {
          flexDirection: "row",
          alignItems: "center",
          borderBottom: "1px solid grey",
          padding: 1,
        },

        superheroe: {
          width: "20%",
        },
        alterego: {
          width: "20%",
        },
        primera: {
          width: "20%",
        },
        personajes: {
          width: "30%",
        },
        publicado: {
          width: "10%",
        },
      });
      
      
      const TableRow = () => {
        const rows = data.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.superheroe}>{item.superhero}</Text>
            <Text style={styles.alterego}>{item.alter_ego}</Text>
            <Text style={styles.primera}>{item.first_appearance}</Text>
            <Text style={styles.personajes}>{item.characters}</Text>
            <Text style={styles.publicado}>{item.publisher}</Text>
          </View>
        ));
        return rows;
      }

      const TableHeader = () => {
        const header = (
          <View style={styles.tableHeader}>
            <Text style={styles.superheroe}>Superheroe</Text>
            <Text style={styles.alterego}>Alter Ego</Text>
            <Text style={styles.primera}>Primera Aparición</Text>
            <Text style={styles.personajes}>Personajes</Text>
            <Text style={styles.publicado}>Publicado por</Text>
          </View>
        );
        return header;
      }

      const ItemsTable = () => (
        <View style={styles.tableContainer}>
          {TableHeader()}
          {TableRow()}
        </View>
      );

  return (
    <>
      {ItemsTable()}
    </>
  )
}
